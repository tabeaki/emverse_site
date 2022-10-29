import type { ForwarderChainlessDomain, ForwarderChainlessDomainInterface } from "../ForwarderChainlessDomain";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, ContractFactory, Overrides } from "ethers";
declare type ForwarderChainlessDomainConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ForwarderChainlessDomain__factory extends ContractFactory {
    constructor(...args: ForwarderChainlessDomainConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ForwarderChainlessDomain>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ForwarderChainlessDomain;
    connect(signer: Signer): ForwarderChainlessDomain__factory;
    static readonly bytecode = "0x61012060405234801561001157600080fd5b50604080518082018252600f81526e23a9a73b19102337b93bb0b93232b960891b602080830191825283518085019094526005845264302e302e3160d81b908401528151902060c08190527fae209a0b48f21c054280f2455d32cf309387644879d9acbd8ffc19916381188560e08190529192917f91ab3d17e3a50a9d89e63fd30b92be7f5336b03b287bb946787a83a9d62a27666100ef81848460408051602081018590529081018390526060810182905230608082015260009060a0016040516020818303038152906040528051906020012090509392505050565b6080523060a052610100525061010492505050565b60805160a05160c05160e05161010051610b3f61014860003960006104d301526000610522015260006104fd01526000610481015260006104aa0152610b3f6000f3fe6080604052600436106100345760003560e01c8063019fe885146100395780632d0335ab1461006e57806344d46c8e146100b2575b600080fd5b34801561004557600080fd5b506100596100543660046108d7565b6100d3565b60405190151581526020015b60405180910390f35b34801561007a57600080fd5b506100a4610089366004610976565b6001600160a01b031660009081526020819052604090205490565b604051908152602001610065565b6100c56100c03660046108d7565b610258565b6040516100659291906109d6565b6000806101ed84848080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506101e792507f8531492456b937fd5f74434f9d37a0a2d84164116ae1fd825f21b73aebc452339150610143905060208a018a610976565b61015360408b0160208c01610976565b60408b013560608c013560808d013561016f60a08f018f610a12565b60405161017d929190610a59565b6040805191829003822060208301989098526001600160a01b0396871690820152949093166060850152608084019190915260a083015260c082015260e08101919091524661010082015261012001604051602081830303815290604052805190602001206103fc565b90610450565b905060808501356000806102046020890189610976565b6001600160a01b03166001600160a01b031681526020019081526020016000205414801561024f575061023a6020860186610976565b6001600160a01b0316816001600160a01b0316145b95945050505050565b600060606102678585856100d3565b6102de5760405162461bcd60e51b815260206004820152603260248201527f4d696e696d616c466f727761726465723a207369676e617475726520646f657360448201527f206e6f74206d617463682072657175657374000000000000000000000000000060648201526084015b60405180910390fd5b6102ed60808601356001610a69565b6000806102fd6020890189610976565b6001600160a01b03166001600160a01b03168152602001908152602001600020819055506000808660200160208101906103379190610976565b6001600160a01b03166060880135604089013561035760a08b018b610a12565b61036460208d018d610976565b60405160200161037693929190610a8f565b60408051601f198184030181529082905261039091610ab5565b600060405180830381858888f193505050503d80600081146103ce576040519150601f19603f3d011682016040523d82523d6000602084013e6103d3565b606091505b5090925090506103e8603f6060890135610ad1565b5a116103f057fe5b90969095509350505050565b600061044a610409610474565b8360405161190160f01b6020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b92915050565b600080600061045f858561056a565b9150915061046c816105da565b509392505050565b6000306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614156104cc57507f000000000000000000000000000000000000000000000000000000000000000090565b50604080517f00000000000000000000000000000000000000000000000000000000000000006020808301919091527f0000000000000000000000000000000000000000000000000000000000000000828401527f00000000000000000000000000000000000000000000000000000000000000006060830152306080808401919091528351808403909101815260a0909201909252805191012090565b6000808251604114156105a15760208301516040840151606085015160001a61059587828585610798565b945094505050506105d3565b8251604014156105cb57602083015160408401516105c0868383610885565b9350935050506105d3565b506000905060025b9250929050565b60008160048111156105ee576105ee610af3565b14156105f75750565b600181600481111561060b5761060b610af3565b14156106595760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e6174757265000000000000000060448201526064016102d5565b600281600481111561066d5761066d610af3565b14156106bb5760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e6774680060448201526064016102d5565b60038160048111156106cf576106cf610af3565b14156107285760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b60648201526084016102d5565b600481600481111561073c5761073c610af3565b14156107955760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b60648201526084016102d5565b50565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08311156107cf575060009050600361087c565b8460ff16601b141580156107e757508460ff16601c14155b156107f8575060009050600461087c565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa15801561084c573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166108755760006001925092505061087c565b9150600090505b94509492505050565b6000807f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8316816108bb60ff86901c601b610a69565b90506108c987828885610798565b935093505050935093915050565b6000806000604084860312156108ec57600080fd5b833567ffffffffffffffff8082111561090457600080fd5b9085019060e0828803121561091857600080fd5b9093506020850135908082111561092e57600080fd5b818601915086601f83011261094257600080fd5b81358181111561095157600080fd5b87602082850101111561096357600080fd5b6020830194508093505050509250925092565b60006020828403121561098857600080fd5b81356001600160a01b038116811461099f57600080fd5b9392505050565b60005b838110156109c15781810151838201526020016109a9565b838111156109d0576000848401525b50505050565b821515815260406020820152600082518060408401526109fd8160608501602087016109a6565b601f01601f1916919091016060019392505050565b6000808335601e19843603018112610a2957600080fd5b83018035915067ffffffffffffffff821115610a4457600080fd5b6020019150368190038213156105d357600080fd5b8183823760009101908152919050565b60008219821115610a8a57634e487b7160e01b600052601160045260246000fd5b500190565b8284823760609190911b6bffffffffffffffffffffffff19169101908152601401919050565b60008251610ac78184602087016109a6565b9190910192915050565b600082610aee57634e487b7160e01b600052601260045260246000fd5b500490565b634e487b7160e01b600052602160045260246000fdfea2646970667358221220b957cde2b42fb9103cdc6ebe8003bda0502df994df0097cfa8e845002e2e60d164736f6c634300080c0033";
    static readonly abi: ({
        inputs: never[];
        stateMutability: string;
        type: string;
        name?: undefined;
        outputs?: undefined;
    } | {
        inputs: ({
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        } | {
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        })[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): ForwarderChainlessDomainInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ForwarderChainlessDomain;
}
export {};
//# sourceMappingURL=ForwarderChainlessDomain__factory.d.ts.map