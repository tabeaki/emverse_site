export { proxy, ref, snapshot, subscribe } from '@zag-js/store';

declare type Dict<T = any> = Record<string, T>;
declare type MaybeArray<T> = T | T[];
declare type VoidFunction = () => void;
declare type IfEquals<X, Y, A, B> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? A : B;
declare type WritableKey<T> = {
    [P in keyof T]: IfEquals<{
        [Q in P]: T[P];
    }, {
        -readonly [Q in P]: T[P];
    }, P, never>;
}[keyof T];
declare type Writable<T> = Pick<T, WritableKey<T>>;
declare type Computed<T> = Omit<T, WritableKey<T>>;
declare namespace StateMachine {
    type Context<V, C> = V & Readonly<C>;
    type TComputedContext<T> = {
        [K in keyof Computed<T>]: (ctx: Omit<T, K>) => T[K];
    };
    type UserContext<TContext> = Partial<Writable<TContext>>;
    type ContextListener<TContext extends Dict> = (context: TContext) => void;
    type EventObject = {
        type: string;
    };
    type Event<TEvent extends EventObject = EventObject> = TEvent["type"] | TEvent;
    interface AnyEventObject extends EventObject {
        [key: string]: any;
    }
    type Send<TEvent extends EventObject = AnyEventObject> = (event: Event<TEvent>) => void;
    type EventListener<TEvent extends EventObject = AnyEventObject> = (event: TEvent) => void;
    type ExtractEvent<TEvent extends EventObject, K> = K extends TEvent["type"] ? Extract<TEvent, {
        type: K;
    }> : EventObject;
    type Expression<TContext extends Dict, TEvent extends EventObject, TReturn> = (context: TContext, event: TEvent) => TReturn;
    type Meta<TContext extends Dict, TState extends StateSchema, TEvent extends EventObject> = {
        state: State<TContext, TState>;
        guards: Dict;
        send: Send<TEvent>;
        self: Self<TContext, TState, TEvent>;
        getState: () => State<TContext, TState, TEvent>;
        getAction: (key: string) => ExpressionWithMeta<TContext, TState, TEvent, void>;
        getGuard: (key: string) => GuardExpression<TContext, TState, TEvent>;
    };
    type ExpressionWithMeta<TContext extends Dict, TState extends StateSchema, TEvent extends EventObject, TReturn> = (context: TContext, event: TEvent, meta: Meta<TContext, TState, TEvent>) => TReturn;
    type Action<TContext extends Dict, TState extends StateSchema, TEvent extends EventObject> = string | ExpressionWithMeta<TContext, TState, TEvent, void>;
    type Actions<TContext extends Dict, TState extends StateSchema, TEvent extends EventObject> = ChooseHelper<TContext, TState, TEvent> | MaybeArray<Action<TContext, TState, TEvent>>;
    type PureActions<TContext extends Dict, TState extends StateSchema, TEvent extends EventObject> = MaybeArray<Action<TContext, TState, TEvent>>;
    type ActionMap<TContext extends Dict, TState extends StateSchema, TEvent extends EventObject> = {
        [action: string]: ExpressionWithMeta<TContext, TState, TEvent, void>;
    };
    type Activity<TContext extends Dict, TState extends StateSchema, TEvent extends EventObject> = string | ExpressionWithMeta<TContext, TState, TEvent, VoidFunction | void | undefined>;
    type Activities<TContext extends Dict, TState extends StateSchema, TEvent extends EventObject> = MaybeArray<Activity<TContext, TState, TEvent>>;
    type ActivityMap<TContext extends Dict, TState extends StateSchema, TEvent extends EventObject> = {
        [activity: string]: ExpressionWithMeta<TContext, TState, TEvent, VoidFunction | void | undefined>;
    };
    type TransitionDefinition<TContext extends Dict, TState extends StateSchema, TEvent extends EventObject> = {
        target?: TState["value"];
        actions?: Actions<TContext, TState, TEvent>;
        guard?: Guard<TContext, TState, TEvent>;
        internal?: boolean;
    };
    type DelayExpression<TContext extends Dict, TEvent extends EventObject> = Expression<TContext, TEvent, number>;
    type Delay<TContext extends Dict, TEvent extends EventObject> = string | number | DelayExpression<TContext, TEvent>;
    type DelayMap<TContext extends Dict, TEvent extends EventObject> = {
        [delay: string]: number | DelayExpression<TContext, TEvent>;
    };
    type DelayedTransition<TContext extends Dict, TState extends StateSchema, TEvent extends EventObject> = TransitionDefinition<TContext, TState, TEvent> & {
        /**
         * The time to delay the event, in milliseconds.
         */
        delay?: Delay<TContext, TEvent>;
    };
    type DelayedTransitions<TContext extends Dict, TState extends StateSchema, TEvent extends EventObject> = Record<string | number, TState["value"] | MaybeArray<TransitionDefinition<TContext, TState, TEvent>>> | Array<DelayedTransition<TContext, TState, TEvent>>;
    /**
     * a transition can be a string (e.g "off") or a full definition object
     * { target: "off", actions: [...], guard: "isEmpty" }
     */
    type Transition<TContext extends Dict, TState extends StateSchema, TEvent extends EventObject> = TState["value"] | TransitionDefinition<TContext, TState, TEvent>;
    /**
     * Transition can be a string (representing the `target`), an object or an array of possible
     * transitions with `guard` to determine the selected transition
     */
    type Transitions<TContext extends Dict, TState extends StateSchema, TEvent extends EventObject> = Transition<TContext, TState, TEvent> | Array<TransitionDefinition<TContext, TState, TEvent>>;
    type TransitionDefinitionMap<TContext extends Dict, TState extends StateSchema, TEvent extends EventObject> = {
        [K in TEvent["type"]]?: TState["value"] | MaybeArray<TransitionDefinition<TContext, TState, ExtractEvent<TEvent, K>>>;
    };
    interface StateNode<TContext extends Dict, TState extends StateSchema, TEvent extends EventObject> {
        /**
         * The type of this state node.
         */
        type?: "final";
        /**
         * The tags for the state node.
         */
        tags?: MaybeArray<TState["tags"] extends string ? TState["tags"] : string>;
        /**
         * The activities to be started upon entering the state node,
         * and stopped upon exiting the state node.
         */
        activities?: Activities<TContext, TState, TEvent>;
        /**
         * The mapping of event types to their potential transition(s).
         */
        on?: TransitionDefinitionMap<TContext, TState, TEvent>;
        /**
         * The action(s) to be executed upon entering the state node.
         */
        entry?: Actions<TContext, TState, TEvent>;
        /**
         * The action(s) to be executed upon exiting the state node.
         */
        exit?: Actions<TContext, TState, TEvent>;
        /**
         * The meta data associated with this state node.
         */
        meta?: string | Dict;
        /**
         * The mapping (or array) of delays (in `ms`) to their potential transition(s) to run after
         * the specified delay. Uses `setTimeout` under the hood.
         */
        after?: DelayedTransitions<TContext, TState, TEvent>;
        /**
         * The mapping (or array) of intervals (in `ms`) to their potential actions(s) to run at interval.
         *  Uses `setInterval` under the hood.
         */
        every?: Record<string | number, Actions<TContext, TState, TEvent>> | Array<{
            delay?: number | string | Expression<TContext, TEvent, number>;
            actions: Actions<TContext, TState, TEvent>;
            guard?: Guard<TContext, TState, TEvent>;
        }>;
    }
    type GuardMeta<TContext extends Dict, TState extends StateSchema, TEvent extends EventObject> = {
        state: Pick<State<TContext, TState, TEvent>, "matches">;
    };
    type GuardExpression<TContext extends Dict, TState extends StateSchema, TEvent extends EventObject, TReturn = boolean> = (context: TContext, event: TEvent, guardMeta: GuardMeta<TContext, TState, TEvent>) => TReturn;
    type GuardHelper<TContext extends Dict, TState extends StateSchema, TEvent extends EventObject> = {
        predicate: (guards: Dict) => GuardExpression<TContext, TState, TEvent>;
    };
    type ChooseHelper<TContext extends Dict, TState extends StateSchema, TEvent extends EventObject> = {
        predicate: (guards: Dict) => GuardExpression<TContext, TState, TEvent, PureActions<TContext, TState, TEvent> | undefined>;
    };
    type Guard<TContext extends Dict, TState extends StateSchema, TEvent extends EventObject> = string | GuardExpression<TContext, TState, TEvent> | GuardHelper<TContext, TState, TEvent>;
    type GuardMap<TContext extends Dict, TState extends StateSchema, TEvent extends EventObject> = {
        [guard: string]: GuardExpression<TContext, TState, TEvent>;
    };
    type StateSchema = {
        value: string;
        tags?: string;
    };
    type StateInitObject<TContext, TState extends StateSchema> = {
        context: TContext;
        value: TState["value"];
    };
    type StateInit<TContext, TState extends StateSchema> = TState["value"] | StateInitObject<TContext, TState>;
    type StateListener<TContext extends Dict, TState extends StateSchema, TEvent extends EventObject = EventObject> = (state: State<TContext, TState, TEvent>) => void;
    interface StateInfo<TContext extends Dict, TState extends StateSchema, TEvent extends EventObject> {
        reenter: boolean;
        changed: boolean;
        transition: TransitionDefinition<TContext, TState, TEvent> | undefined;
        stateNode: StateNode<TContext, TState, TEvent> | undefined;
        target: TState["value"];
    }
    interface MachineConfig<TContext extends Dict, TState extends StateSchema, TEvent extends EventObject> {
        /**
         * Function called whenever the state receives an event through its send method
         */
        onEvent?: Actions<TContext, TState, TEvent>;
        /**
         * Function called synchronously after the machine has been instantiated,
         * before it is started.
         */
        created?: Actions<TContext, TState, TEvent>;
        /**
         * The actions to run when the machine has started. This is usually
         * called in the `beforeMount`, `onMount` or `useLayoutEffect` lifecycle methods.
         */
        entry?: Actions<TContext, TState, TEvent>;
        /**
         * The actions to run when the machine has stopped. This is usually
         * called in the `onUnmount` or `useLayoutEffect` cleanup lifecycle methods.
         */
        exit?: Actions<TContext, TState, TEvent>;
        /**
         * The root level activities to run when the machine is started
         */
        activities?: Activities<TContext, TState, TEvent>;
        /**
         * The unique identifier for the invoked machine.
         */
        id?: string;
        /**
         * The extended state used to store `data` for your machine
         */
        context?: Writable<TContext>;
        /**
         * A generic way to react to context value changes
         */
        watch?: {
            [K in keyof TContext]?: PureActions<TContext, TState, TEvent>;
        };
        /**
         * The computed properties based on the state
         */
        computed?: Partial<TComputedContext<TContext>>;
        /**
         * The initial state to start with
         */
        initial?: TState["value"];
        /**
         * The mapping of state node keys to their state node configurations (recursive).
         */
        states?: Partial<Record<TState["value"], StateNode<TContext, TState, TEvent>>>;
        /**
         * Mapping events to transitions
         */
        on?: TransitionDefinitionMap<TContext, TState, TEvent>;
    }
    interface State<TContext extends Dict, TState extends StateSchema = StateSchema, TEvent extends EventObject = EventObject> {
        value: TState["value"] | null;
        previousValue: TState["value"] | null;
        event: TEvent;
        previousEvent: TEvent;
        context: TContext;
        done: boolean;
        can(event: string): boolean;
        matches(...value: TState["value"][]): boolean;
        hasTag(value: TState["tags"]): boolean;
        nextEvents: string[];
        changed: boolean;
        tags: TState["tags"][];
    }
    interface MachineOptions<TContext extends Dict, TState extends StateSchema, TEvent extends EventObject> {
        debug?: boolean;
        guards?: GuardMap<TContext, TState, TEvent>;
        actions?: ActionMap<TContext, TState, TEvent>;
        delays?: DelayMap<TContext, TEvent>;
        activities?: ActivityMap<TContext, TState, TEvent>;
        sync?: boolean;
        /**
         * Notify `useSnapshot` to execute state update synchronously within `valtio`.
         * Useful if this component has an input element.
         *
         * @see Valtio https://github.com/pmndrs/valtio#update-synchronously
         */
        hookSync?: boolean;
    }
    type HookOptions<TContext extends Dict, TState extends StateSchema, TEvent extends EventObject> = {
        actions?: ActionMap<TContext, TState, TEvent>;
        state?: StateInit<TContext, TState>;
        context?: UserContext<TContext>;
    };
    type Self<TContext extends Dict, TState extends StateSchema, TEvent extends EventObject> = {
        id: string;
        send: (event: Event<TEvent>) => void;
        sendParent: (evt: AnyEventObject) => void;
        sendChild: (evt: Event<TEvent>, to: string | ((ctx: TContext) => string)) => void;
        stop: VoidFunction;
        stopChild: (id: string) => void;
        spawn<T>(src: T | (() => T), id?: string): T;
        state: State<TContext, TState, TEvent>;
    };
}
declare enum MachineStatus {
    NotStarted = "Not Started",
    Running = "Running",
    Stopped = "Stopped"
}
declare enum MachineType {
    Machine = "machine",
    Actor = "machine.actor"
}

declare function or<TContext extends Dict, TState extends StateMachine.StateSchema, TEvent extends StateMachine.EventObject>(...conditions: Array<StateMachine.Guard<TContext, TState, TEvent>>): StateMachine.GuardHelper<TContext, TState, TEvent>;
declare function and<TContext extends Dict, TState extends StateMachine.StateSchema, TEvent extends StateMachine.EventObject>(...conditions: Array<StateMachine.Guard<TContext, TState, TEvent>>): StateMachine.GuardHelper<TContext, TState, TEvent>;
declare function not<TContext extends Dict, TState extends StateMachine.StateSchema, TEvent extends StateMachine.EventObject>(condition: StateMachine.Guard<TContext, TState, TEvent>): StateMachine.GuardHelper<TContext, TState, TEvent>;
declare function stateIn<TContext extends Dict, TState extends StateMachine.StateSchema, TEvent extends StateMachine.EventObject>(...values: TState["value"][]): StateMachine.GuardExpression<TContext, TState, TEvent>;
declare const guards: {
    or: typeof or;
    and: typeof and;
    not: typeof not;
    stateIn: typeof stateIn;
};
declare function choose<TContext extends Dict, TState extends StateMachine.StateSchema, TEvent extends StateMachine.EventObject = StateMachine.AnyEventObject>(actions: Array<{
    guard?: StateMachine.Guard<TContext, TState, TEvent>;
    actions: StateMachine.PureActions<TContext, TState, TEvent>;
}>): StateMachine.ChooseHelper<TContext, TState, TEvent>;

declare class Machine<TContext extends Dict, TState extends StateMachine.StateSchema, TEvent extends StateMachine.EventObject = StateMachine.AnyEventObject> {
    status: MachineStatus;
    readonly state: StateMachine.State<TContext, TState, TEvent>;
    initialState: StateMachine.StateInfo<TContext, TState, TEvent> | undefined;
    id: string;
    type: MachineType;
    private activityEvents;
    private delayedEvents;
    private stateListeners;
    private contextListeners;
    private eventListeners;
    private doneListeners;
    private contextWatchers;
    private removeStateListener;
    private removeEventListener;
    private removeContextListener;
    private parent?;
    private children;
    private guardMap;
    private actionMap;
    private delayMap;
    private activityMap;
    private sync;
    options: StateMachine.MachineOptions<TContext, TState, TEvent>;
    config: StateMachine.MachineConfig<TContext, TState, TEvent>;
    constructor(config: StateMachine.MachineConfig<TContext, TState, TEvent>, options?: StateMachine.MachineOptions<TContext, TState, TEvent>);
    private get stateSnapshot();
    getState(): StateMachine.State<TContext, TState, TEvent>;
    private get contextSnapshot();
    start: (init?: StateMachine.StateInit<TContext, TState>) => this;
    private setupContextWatchers;
    stop: () => this | undefined;
    private stopEventListeners;
    private stopContextListeners;
    private stopStateListeners;
    private stopContextWatchers;
    private stopDelayedEvents;
    private stopActivities;
    /**
     * Function to send event to spawned child machine or actor
     */
    sendChild: (evt: StateMachine.Event<StateMachine.AnyEventObject>, to: string | ((ctx: TContext) => string)) => void;
    /**
     * Function to stop a running child machine or actor
     */
    stopChild: (id: string) => void;
    removeChild: (id: string) => void;
    private stopChildren;
    private setParent;
    spawn: <TContext_1 extends Dict<any>, TState_1 extends StateMachine.StateSchema, TEvent_1 extends StateMachine.EventObject = StateMachine.AnyEventObject>(src: MachineSrc<TContext_1, TState_1, TEvent_1>, id?: string) => Machine<TContext_1, TState_1, TEvent_1>;
    private addActivityCleanup;
    private setState;
    /**
     * To used within side effects for React or Vue to update context
     */
    setContext: (context: Partial<Writable<TContext>> | undefined) => void;
    withContext: (context: Partial<Writable<TContext>>) => Machine<TContext, TState, TEvent>;
    setActions: (actions: Partial<StateMachine.MachineOptions<TContext, TState, TEvent>>["actions"]) => void;
    private getStateNode;
    private getNextStateInfo;
    private getActionFromDelayedTransition;
    /**
     * All `after` events leverage `setTimeout` and `clearTimeout`,
     * we invoke the `clearTimeout` on exit and `setTimeout` on entry.
     *
     * To achieve this, we split the `after` defintion into `entry` and `exit`
     *  functions and append them to the state's `entry` and `exit` actions
     */
    private getDelayedEventActions;
    /**
     * A reference to the instance methods of the machine.
     * Useful when spawning child machines and managing the communication between them.
     */
    private get self();
    private get meta();
    private get guardMeta();
    /**
     * Function to executes defined actions. It can accept actions as string
     * (referencing `options.actions`) or actual functions.
     */
    private executeActions;
    /**
     * Function to execute running activities and registers
     * their cleanup function internally (to be called later on when we exit the state)
     */
    private executeActivities;
    /**
     * Normalizes the `every` definition to transition. `every` can be:
     * - An array of possible actions to run (we need to pick the first match based on guard)
     * - An object of intervals and actions
     */
    private createEveryActivities;
    private setEvent;
    private performExitEffects;
    private performEntryEffects;
    private performTransitionEffects;
    /**
     * Performs all the requires side-effects or reactions when
     * we move from state A => state B.
     *
     * The Effect order:
     * Exit actions (current state) => Transition actions  => Go to state => Entry actions (next state)
     */
    private performStateChangeEffects;
    private determineTransition;
    /**
     * Function to send event to parent machine from spawned child
     */
    sendParent: (evt: StateMachine.Event<StateMachine.AnyEventObject>) => void;
    private log;
    /**
     * Function to send an event to current machine
     */
    send: (evt: StateMachine.Event<TEvent>) => void;
    transition: (state: TState["value"] | StateMachine.StateInfo<TContext, TState, TEvent> | null, evt: StateMachine.Event<TEvent>) => StateMachine.StateNode<TContext, TState, TEvent> | undefined;
    subscribe: (listener: StateMachine.StateListener<TContext, TState, TEvent>) => () => void;
    onDone: (listener: StateMachine.StateListener<TContext, TState, TEvent>) => this;
    onTransition: (listener: StateMachine.StateListener<TContext, TState, TEvent>) => this;
    onChange: (listener: StateMachine.ContextListener<TContext>) => this;
    onEvent: (listener: StateMachine.EventListener<TEvent>) => this;
    get [Symbol.toStringTag](): string;
}
declare type MachineSrc<TContext extends Dict, TState extends StateMachine.StateSchema, TEvent extends StateMachine.EventObject = StateMachine.AnyEventObject> = Machine<TContext, TState, TEvent> | (() => Machine<TContext, TState, TEvent>);
declare type AnyMachine = Machine<Dict, StateMachine.StateSchema, StateMachine.AnyEventObject>;
declare const createMachine: <TContext extends Dict<any>, TState extends StateMachine.StateSchema = StateMachine.StateSchema, TEvent extends StateMachine.EventObject = StateMachine.AnyEventObject>(config: StateMachine.MachineConfig<TContext, TState, TEvent>, options?: StateMachine.MachineOptions<TContext, TState, TEvent> | undefined) => Machine<TContext, TState, TEvent>;

interface Props {
    [key: string]: any;
}
declare type TupleTypes<T extends any[]> = T[number];
declare type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
declare function mergeProps<T extends Props>(...args: T[]): UnionToIntersection<TupleTypes<T[]>>;

declare type AnyFunction = (...args: any[]) => any;
declare type ReturnTypeOrValue<T> = T extends AnyFunction ? ReturnType<T> : T;
declare type StateFrom<T> = ReturnTypeOrValue<T> extends infer R ? R extends Machine<infer TContext, infer TState, infer TEvent> ? StateMachine.State<TContext, TState, TEvent> : never : never;
declare type ContextFrom<T> = ReturnTypeOrValue<T> extends infer R ? R extends Machine<infer TContext, any, any> ? TContext : never : never;
declare type EventFrom<T> = ReturnTypeOrValue<T> extends infer R ? R extends Machine<any, any, infer TEvent> ? TEvent : never : never;

export { AnyMachine, ContextFrom, EventFrom, Machine, MachineSrc, StateFrom, StateMachine, choose, createMachine, guards, mergeProps };