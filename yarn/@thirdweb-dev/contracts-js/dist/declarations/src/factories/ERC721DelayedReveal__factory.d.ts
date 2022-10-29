import type { ERC721DelayedReveal, ERC721DelayedRevealInterface } from "../ERC721DelayedReveal";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, ContractFactory, BigNumberish, Overrides } from "ethers";
declare type ERC721DelayedRevealConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ERC721DelayedReveal__factory extends ContractFactory {
    constructor(...args: ERC721DelayedRevealConstructorParams);
    deploy(_name: string, _symbol: string, _royaltyRecipient: string, _royaltyBps: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ERC721DelayedReveal>;
    getDeployTransaction(_name: string, _symbol: string, _royaltyRecipient: string, _royaltyBps: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ERC721DelayedReveal;
    connect(signer: Signer): ERC721DelayedReveal__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b50604051620033413803806200334183398101604081905262000034916200030d565b8383838383838160029080519060200190620000529291906200019a565b508051620000689060039060208401906200019a565b505060008055506200007a336200009d565b6200008f826001600160801b038316620000ef565b5050505050505050620003f6565b600980546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d7690600090a35050565b612710811115620001385760405162461bcd60e51b815260206004820152600f60248201526e45786365656473206d61782062707360881b604482015260640160405180910390fd5b600a80546001600160a01b0384166001600160b01b03199091168117600160a01b61ffff851602179091556040518281527f90d7ec04bcb8978719414f82e52e4cb651db41d0e6f8cea6118c2191e6183adb9060200160405180910390a25050565b828054620001a890620003b9565b90600052602060002090601f016020900481019282620001cc576000855562000217565b82601f10620001e757805160ff191683800117855562000217565b8280016001018555821562000217579182015b8281111562000217578251825591602001919060010190620001fa565b506200022592915062000229565b5090565b5b808211156200022557600081556001016200022a565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200026857600080fd5b81516001600160401b038082111562000285576200028562000240565b604051601f8301601f19908116603f01168101908282118183101715620002b057620002b062000240565b81604052838152602092508683858801011115620002cd57600080fd5b600091505b83821015620002f15785820183015181830184015290820190620002d2565b83821115620003035760008385830101525b9695505050505050565b600080600080608085870312156200032457600080fd5b84516001600160401b03808211156200033c57600080fd5b6200034a8883890162000256565b955060208701519150808211156200036157600080fd5b50620003708782880162000256565b604087015190945090506001600160a01b03811681146200039057600080fd5b60608601519092506001600160801b0381168114620003ae57600080fd5b939692955090935050565b600181811c90821680620003ce57607f821691505b60208210811415620003f057634e487b7160e01b600052602260045260246000fd5b50919050565b612f3b80620004066000396000f3fe60806040526004361061021a5760003560e01c806370a0823111610123578063ac9650d8116100ab578063ce8056421161006f578063ce80564214610670578063d37c353b14610690578063e7150322146106b0578063e8a3d485146106d0578063e985e9c5146106e557600080fd5b8063ac9650d8146105c3578063acd083f8146105f0578063b24f2d3914610605578063b88d4fde14610630578063c87b56dd1461065057600080fd5b80639bcf7a15116100f25780639bcf7a15146105305780639fc4d68f14610550578063a05112fc14610570578063a22cb46514610590578063aad3ec96146105b057600080fd5b806370a08231146104bd5780638da5cb5b146104dd578063938e3d7b146104fb57806395d89b411461051b57600080fd5b80632f92023a116101a6578063492e224b11610175578063492e224b146104065780634cc157df14610426578063600dd5ea146104685780636352211e1461048857806363b45e2d146104a857600080fd5b80632f92023a146103925780633b1475a7146103b157806342842e0e146103c657806342966c68146103e657600080fd5b806313af4035116101ed57806313af4035146102d057806318160ddd146102f057806323b872dd146103135780632419f51b146103335780632a55205a1461035357600080fd5b806301ffc9a71461021f57806306fdde0314610254578063081812fc14610276578063095ea7b3146102ae575b600080fd5b34801561022b57600080fd5b5061023f61023a366004612585565b61072e565b60405190151581526020015b60405180910390f35b34801561026057600080fd5b5061026961079b565b60405161024b91906125fa565b34801561028257600080fd5b5061029661029136600461260d565b61082d565b6040516001600160a01b03909116815260200161024b565b3480156102ba57600080fd5b506102ce6102c9366004612642565b610871565b005b3480156102dc57600080fd5b506102ce6102eb36600461266c565b6108f8565b3480156102fc57600080fd5b50600154600054035b60405190815260200161024b565b34801561031f57600080fd5b506102ce61032e366004612687565b61094e565b34801561033f57600080fd5b5061030561034e36600461260d565b610959565b34801561035f57600080fd5b5061037361036e3660046126c3565b6109c7565b604080516001600160a01b03909316835260208301919091520161024b565b34801561039e57600080fd5b506102ce6103ad366004612642565b5050565b3480156103bd57600080fd5b50600e54610305565b3480156103d257600080fd5b506102ce6103e1366004612687565b610a04565b3480156103f257600080fd5b506102ce61040136600461260d565b610a1f565b34801561041257600080fd5b5061023f61042136600461260d565b610a2a565b34801561043257600080fd5b5061044661044136600461260d565b610a50565b604080516001600160a01b03909316835261ffff90911660208301520161024b565b34801561047457600080fd5b506102ce610483366004612642565b610abb565b34801561049457600080fd5b506102966104a336600461260d565b610b0a565b3480156104b457600080fd5b50600c54610305565b3480156104c957600080fd5b506103056104d836600461266c565b610b1c565b3480156104e957600080fd5b506009546001600160a01b0316610296565b34801561050757600080fd5b506102ce610516366004612792565b610b6b565b34801561052757600080fd5b50610269610bb9565b34801561053c57600080fd5b506102ce61054b3660046127db565b610bc8565b34801561055c57600080fd5b5061026961056b366004612849565b610c18565b34801561057c57600080fd5b5061026961058b36600461260d565b610da5565b34801561059c57600080fd5b506102ce6105ab366004612895565b610e3f565b6102ce6105be366004612642565b610ed5565b3480156105cf57600080fd5b506105e36105de3660046128d1565b610fa0565b60405161024b9190612946565b3480156105fc57600080fd5b50600054610305565b34801561061157600080fd5b50600a546001600160a01b03811690600160a01b900461ffff16610446565b34801561063c57600080fd5b506102ce61064b3660046129c8565b611095565b34801561065c57600080fd5b5061026961066b36600461260d565b6110df565b34801561067c57600080fd5b5061026961068b366004612849565b61114e565b34801561069c57600080fd5b506103056106ab366004612a30565b611212565b3480156106bc57600080fd5b506102696106cb366004612aaa565b6112aa565b3480156106dc57600080fd5b5061026961131f565b3480156106f157600080fd5b5061023f610700366004612b06565b6001600160a01b03918216600090815260076020908152604080832093909416825291909152205460ff1690565b60006301ffc9a760e01b6001600160e01b03198316148061075f57506380ac58cd60e01b6001600160e01b03198316145b8061077a5750635b5e139f60e01b6001600160e01b03198316145b8061079557506001600160e01b0319821663152a902d60e11b145b92915050565b6060600280546107aa90612b39565b80601f01602080910402602001604051908101604052809291908181526020018280546107d690612b39565b80156108235780601f106107f857610100808354040283529160200191610823565b820191906000526020600020905b81548152906001019060200180831161080657829003601f168201915b5050505050905090565b60006108388261132c565b610855576040516333d1c03960e21b815260040160405180910390fd5b506000908152600660205260409020546001600160a01b031690565b600061087c82610b0a565b9050806001600160a01b0316836001600160a01b031614156108b15760405163250fdee360e21b815260040160405180910390fd5b336001600160a01b038216146108e8576108cb8133610700565b6108e8576040516367d9dca160e11b815260040160405180910390fd5b6108f3838383611357565b505050565b6109006113b3565b6109425760405162461bcd60e51b815260206004820152600e60248201526d139bdd08185d5d1a1bdc9a5e995960921b60448201526064015b60405180910390fd5b61094b816113e0565b50565b6108f3838383611432565b6000610964600c5490565b82106109a25760405162461bcd60e51b815260206004820152600d60248201526c092dcecc2d8d2c840d2dcc8caf609b1b6044820152606401610939565b600c82815481106109b5576109b5612b74565b90600052602060002001549050919050565b6000806000806109d686610a50565b90945084925061ffff1690506127106109ef8287612ba0565b6109f99190612bd5565b925050509250929050565b6108f383838360405180602001604052806000815250611095565b61094b816001611621565b6000818152600f602052604081208054829190610a4690612b39565b9050119050919050565b6000818152600b60209081526040808320815180830190925280546001600160a01b031680835260019091015492820192909252829115610a975780516020820151610ab1565b600a546001600160a01b03811690600160a01b900461ffff165b9250925050915091565b610ac36113b3565b610b005760405162461bcd60e51b815260206004820152600e60248201526d139bdd08185d5d1a1bdc9a5e995960921b6044820152606401610939565b6103ad82826117fc565b6000610b15826118b1565b5192915050565b60006001600160a01b038216610b45576040516323d3ad8160e21b815260040160405180910390fd5b506001600160a01b031660009081526005602052604090205467ffffffffffffffff1690565b610b736113b3565b610bb05760405162461bcd60e51b815260206004820152600e60248201526d139bdd08185d5d1a1bdc9a5e995960921b6044820152606401610939565b61094b816119cd565b6060600380546107aa90612b39565b610bd06113b3565b610c0d5760405162461bcd60e51b815260206004820152600e60248201526d139bdd08185d5d1a1bdc9a5e995960921b6044820152606401610939565b6108f3838383611aaf565b6000838152600f6020526040812080546060929190610c3690612b39565b80601f0160208091040260200160405190810160405280929190818152602001828054610c6290612b39565b8015610caf5780601f10610c8457610100808354040283529160200191610caf565b820191906000526020600020905b815481529060010190602001808311610c9257829003601f168201915b50505050509050805160001415610d085760405162461bcd60e51b815260206004820152601160248201527f4e6f7468696e6720746f2072657665616c0000000000000000000000000000006044820152606401610939565b60008082806020019051810190610d1f9190612be9565b91509150610d2e8287876112aa565b93508084878746604051602001610d489493929190612c6a565b6040516020818303038152906040528051906020012014610d9b5760405162461bcd60e51b815260206004820152600d60248201526c496e636f7272656374206b657960981b6044820152606401610939565b5050509392505050565b600f6020526000908152604090208054610dbe90612b39565b80601f0160208091040260200160405190810160405280929190818152602001828054610dea90612b39565b8015610e375780601f10610e0c57610100808354040283529160200191610e37565b820191906000526020600020905b815481529060010190602001808311610e1a57829003601f168201915b505050505081565b6001600160a01b038216331415610e695760405163b06307db60e01b815260040160405180910390fd5b3360008181526007602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b600054600e54610ee58383612c93565b1115610f335760405162461bcd60e51b815260206004820152601e60248201527f4e6f7420656e6f756768206c617a79206d696e74656420746f6b656e732e00006044820152606401610939565b610f4d838360405180602001604052806000815250611b78565b80836001600160a01b0316336001600160a01b03167fff097c7d8b1957a4ff09ef1361b5fb54dcede3941ba836d0beb9d10bec725de685604051610f9391815260200190565b60405180910390a4505050565b60608167ffffffffffffffff811115610fbb57610fbb6126e5565b604051908082528060200260200182016040528015610fee57816020015b6060815260200190600190039081610fd95790505b50905060005b8281101561108e5761105e3085858481811061101257611012612b74565b90506020028101906110249190612cab565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611d3d92505050565b82828151811061107057611070612b74565b6020026020010181905250808061108690612cf2565b915050610ff4565b5092915050565b6110a0848484611432565b6001600160a01b0383163b156110d9576110bc84848484611d69565b6110d9576040516368d2bf6b60e11b815260040160405180910390fd5b50505050565b606060006110ec83611e52565b50905060006110fa84611f65565b905061110582610a2a565b15611133578060405160200161111b9190612d0d565b60405160208183030381529060405292505050919050565b8061113d856120c6565b60405160200161111b929190612d32565b60606111586113b3565b6111955760405162461bcd60e51b815260206004820152600e60248201526d139bdd08185d5d1a1bdc9a5e995960921b6044820152606401610939565b60006111a085610959565b90506111ad818585610c18565b91506111c881604051806020016040528060008152506121dc565b6111d281836121fb565b847f6df1d8db2a036436ffe0b2d1833f2c5f1e624818dfce2578c0faa4b83ef9998d8360405161120291906125fa565b60405180910390a2509392505050565b600081156112935760008061122984860186612d61565b91509150815160001415801561123e57508015155b156112905761129088600e546112549190612c93565b86868080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506121dc92505050565b50505b6112a0868686868661221a565b9695505050505050565b8251604080518083016020019091528181529060005b818110156113165760008585836040516020016112df93929190612da6565b60408051601f1981840301815291905280516020918201208884018201511885840182015261130f915082612c93565b90506112c0565b50509392505050565b60088054610dbe90612b39565b6000805482108015610795575050600090815260046020526040902054600160e01b900460ff161590565b60008281526006602052604080822080546001600160a01b0319166001600160a01b0387811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b60006113c76009546001600160a01b031690565b6001600160a01b0316336001600160a01b031614905090565b600980546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d7690600090a35050565b600061143d826118b1565b9050836001600160a01b031681600001516001600160a01b0316146114745760405162a1148160e81b815260040160405180910390fd5b6000336001600160a01b038616148061149257506114928533610700565b806114ad5750336114a28461082d565b6001600160a01b0316145b9050806114cd57604051632ce44b5f60e11b815260040160405180910390fd5b6001600160a01b0384166114f457604051633a954ecd60e21b815260040160405180910390fd5b61150060008487611357565b6001600160a01b038581166000908152600560209081526040808320805467ffffffffffffffff1980821667ffffffffffffffff92831660001901831617909255898616808652838620805493841693831660019081018416949094179055898652600490945282852080546001600160e01b031916909417600160a01b429092169190910217835587018084529220805491939091166115d65760005482146115d6578054602086015167ffffffffffffffff16600160a01b026001600160e01b03199091166001600160a01b038a16171781555b50505082846001600160a01b0316866001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050505050565b600061162c836118b1565b80519091508215611692576000336001600160a01b038316148061165557506116558233610700565b806116705750336116658661082d565b6001600160a01b0316145b90508061169057604051632ce44b5f60e11b815260040160405180910390fd5b505b61169e60008583611357565b6001600160a01b038082166000818152600560209081526040808320805470010000000000000000000000000000000060001967ffffffffffffffff80841691909101811667ffffffffffffffff19841681178390048216600190810183169093027fffffffffffffffff0000000000000000ffffffffffffffff0000000000000000909416179290921783558b86526004909452828520805460ff60e01b1942909316600160a01b026001600160e01b03199091169097179690961716600160e01b1785559189018084529220805491949091166117b25760005482146117b2578054602087015167ffffffffffffffff16600160a01b026001600160e01b03199091166001600160a01b038716171781555b5050604051869250600091506001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a4505060018054810190555050565b6127108111156118405760405162461bcd60e51b815260206004820152600f60248201526e45786365656473206d61782062707360881b6044820152606401610939565b600a80546001600160a01b03841675ffffffffffffffffffffffffffffffffffffffffffff199091168117600160a01b61ffff851602179091556040518281527f90d7ec04bcb8978719414f82e52e4cb651db41d0e6f8cea6118c2191e6183adb9060200160405180910390a25050565b6040805160608101825260008082526020820181905291810191909152816000548110156119b457600081815260046020908152604091829020825160608101845290546001600160a01b0381168252600160a01b810467ffffffffffffffff1692820192909252600160e01b90910460ff161515918101829052906119b25780516001600160a01b031615611948579392505050565b5060001901600081815260046020908152604091829020825160608101845290546001600160a01b038116808352600160a01b820467ffffffffffffffff1693830193909352600160e01b900460ff16151592810192909252156119ad579392505050565b611948565b505b604051636f96cda160e11b815260040160405180910390fd5b6000600880546119dc90612b39565b80601f0160208091040260200160405190810160405280929190818152602001828054611a0890612b39565b8015611a555780601f10611a2a57610100808354040283529160200191611a55565b820191906000526020600020905b815481529060010190602001808311611a3857829003601f168201915b50508551939450611a71936008935060208701925090506124d6565b507fc9c7c3fe08b88b4df9d4d47ef47d2c43d55c025a0ba88ca442580ed9e7348a168183604051611aa3929190612db8565b60405180910390a15050565b612710811115611af35760405162461bcd60e51b815260206004820152600f60248201526e45786365656473206d61782062707360881b6044820152606401610939565b6040805180820182526001600160a01b0384811680835260208084018681526000898152600b8352869020945185546001600160a01b031916941693909317845591516001909301929092559151838152909185917f7365cf4122f072a3365c20d54eff9b38d73c096c28e1892ec8f5b0e403a0f12d910160405180910390a3505050565b6000546001600160a01b038416611ba157604051622e076360e81b815260040160405180910390fd5b82611bbf5760405163b562e8dd60e01b815260040160405180910390fd5b6001600160a01b038416600081815260056020908152604080832080546fffffffffffffffffffffffffffffffff19811667ffffffffffffffff8083168b0181169182176801000000000000000067ffffffffffffffff1990941690921783900481168b01811690920217909155858452600490925290912080546001600160e01b0319168317600160a01b42909316929092029190911790558190818501903b15611ce8575b60405182906001600160a01b038816906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a4611cb16000878480600101955087611d69565b611cce576040516368d2bf6b60e11b815260040160405180910390fd5b808210611c66578260005414611ce357600080fd5b611d2d565b5b6040516001830192906001600160a01b038816906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a4808210611ce9575b5060009081556110d99085838684565b6060611d628383604051806060016040528060278152602001612edf6027913961235d565b9392505050565b604051630a85bd0160e11b81526000906001600160a01b0385169063150b7a0290611d9e903390899088908890600401612de6565b6020604051808303816000875af1925050508015611dd9575060408051601f3d908101601f19168201909252611dd691810190612e18565b60015b611e34573d808015611e07576040519150601f19603f3d011682016040523d82523d6000602084013e611e0c565b606091505b508051611e2c576040516368d2bf6b60e11b815260040160405180910390fd5b805181602001fd5b6001600160e01b031916630a85bd0160e11b1490505b949350505050565b6000806000611e60600c5490565b90506000600c805480602002602001604051908101604052809291908181526020018280548015611eb057602002820191906000526020600020905b815481526020019060010190808311611e9c575b5050505050905060005b82811015611f1c57818181518110611ed457611ed4612b74565b6020026020010151861015611f0a57809350818181518110611ef857611ef8612b74565b60200260200101519450505050915091565b611f15600182612c93565b9050611eba565b5060405162461bcd60e51b815260206004820152600f60248201527f496e76616c696420746f6b656e496400000000000000000000000000000000006044820152606401610939565b60606000611f72600c5490565b90506000600c805480602002602001604051908101604052809291908181526020018280548015611fc257602002820191906000526020600020905b815481526020019060010190808311611fae575b5050505050905060005b82811015611f1c57818181518110611fe657611fe6612b74565b60200260200101518510156120b457600d600083838151811061200b5761200b612b74565b60200260200101518152602001908152602001600020805461202c90612b39565b80601f016020809104026020016040519081016040528092919081815260200182805461205890612b39565b80156120a55780601f1061207a576101008083540402835291602001916120a5565b820191906000526020600020905b81548152906001019060200180831161208857829003601f168201915b50505050509350505050919050565b6120bf600182612c93565b9050611fcc565b6060816120ea5750506040805180820190915260018152600360fc1b602082015290565b8160005b811561211457806120fe81612cf2565b915061210d9050600a83612bd5565b91506120ee565b60008167ffffffffffffffff81111561212f5761212f6126e5565b6040519080825280601f01601f191660200182016040528015612159576020820181803683370190505b5090505b8415611e4a5761216e600183612e35565b915061217b600a86612e4c565b612186906030612c93565b60f81b81838151811061219b5761219b612b74565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506121d5600a86612bd5565b945061215d565b6000828152600f6020908152604090912082516108f3928401906124d6565b6000828152600d6020908152604090912082516108f3928401906124d6565b60006122246113b3565b6122615760405162461bcd60e51b815260206004820152600e60248201526d139bdd08185d5d1a1bdc9a5e995960921b6044820152606401610939565b856122ae5760405162461bcd60e51b815260206004820152601060248201527f4d696e74696e67203020746f6b656e73000000000000000000000000000000006044820152606401610939565b6000600e5490506122f6818888888080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061243092505050565b600e919091559150807f2a0365091ef1a40953c670dce28177e37520648a6fdc91506bffac0ab045570d600161232c8a84612c93565b6123369190612e35565b8888888860405161234b959493929190612e89565b60405180910390a25095945050505050565b60606001600160a01b0384163b6123c55760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608401610939565b600080856001600160a01b0316856040516123e09190612ec2565b600060405180830381855af49150503d806000811461241b576040519150601f19603f3d011682016040523d82523d6000602084013e612420565b606091505b50915091506112a082828661249d565b60008061243d8486612c93565b600c8054600181019091557fdf6966c971051c3d54ec59162606531493a51404a002842f56009d7e5cf4a8c7018190556000818152600d6020908152604090912085519294508493506124949290918601906124d6565b50935093915050565b606083156124ac575081611d62565b8251156124bc5782518084602001fd5b8160405162461bcd60e51b815260040161093991906125fa565b8280546124e290612b39565b90600052602060002090601f016020900481019282612504576000855561254a565b82601f1061251d57805160ff191683800117855561254a565b8280016001018555821561254a579182015b8281111561254a57825182559160200191906001019061252f565b5061255692915061255a565b5090565b5b80821115612556576000815560010161255b565b6001600160e01b03198116811461094b57600080fd5b60006020828403121561259757600080fd5b8135611d628161256f565b60005b838110156125bd5781810151838201526020016125a5565b838111156110d95750506000910152565b600081518084526125e68160208601602086016125a2565b601f01601f19169290920160200192915050565b602081526000611d6260208301846125ce565b60006020828403121561261f57600080fd5b5035919050565b80356001600160a01b038116811461263d57600080fd5b919050565b6000806040838503121561265557600080fd5b61265e83612626565b946020939093013593505050565b60006020828403121561267e57600080fd5b611d6282612626565b60008060006060848603121561269c57600080fd5b6126a584612626565b92506126b360208501612626565b9150604084013590509250925092565b600080604083850312156126d657600080fd5b50508035926020909101359150565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715612724576127246126e5565b604052919050565b600067ffffffffffffffff821115612746576127466126e5565b50601f01601f191660200190565b60006127676127628461272c565b6126fb565b905082815283838301111561277b57600080fd5b828260208301376000602084830101529392505050565b6000602082840312156127a457600080fd5b813567ffffffffffffffff8111156127bb57600080fd5b8201601f810184136127cc57600080fd5b611e4a84823560208401612754565b6000806000606084860312156127f057600080fd5b833592506126b360208501612626565b60008083601f84011261281257600080fd5b50813567ffffffffffffffff81111561282a57600080fd5b60208301915083602082850101111561284257600080fd5b9250929050565b60008060006040848603121561285e57600080fd5b83359250602084013567ffffffffffffffff81111561287c57600080fd5b61288886828701612800565b9497909650939450505050565b600080604083850312156128a857600080fd5b6128b183612626565b9150602083013580151581146128c657600080fd5b809150509250929050565b600080602083850312156128e457600080fd5b823567ffffffffffffffff808211156128fc57600080fd5b818501915085601f83011261291057600080fd5b81358181111561291f57600080fd5b8660208260051b850101111561293457600080fd5b60209290920196919550909350505050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101561299b57603f198886030184526129898583516125ce565b9450928501929085019060010161296d565b5092979650505050505050565b600082601f8301126129b957600080fd5b611d6283833560208501612754565b600080600080608085870312156129de57600080fd5b6129e785612626565b93506129f560208601612626565b925060408501359150606085013567ffffffffffffffff811115612a1857600080fd5b612a24878288016129a8565b91505092959194509250565b600080600080600060608688031215612a4857600080fd5b85359450602086013567ffffffffffffffff80821115612a6757600080fd5b612a7389838a01612800565b90965094506040880135915080821115612a8c57600080fd5b50612a9988828901612800565b969995985093965092949392505050565b600080600060408486031215612abf57600080fd5b833567ffffffffffffffff80821115612ad757600080fd5b612ae3878388016129a8565b94506020860135915080821115612af957600080fd5b5061288886828701612800565b60008060408385031215612b1957600080fd5b612b2283612626565b9150612b3060208401612626565b90509250929050565b600181811c90821680612b4d57607f821691505b60208210811415612b6e57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615612bba57612bba612b8a565b500290565b634e487b7160e01b600052601260045260246000fd5b600082612be457612be4612bbf565b500490565b60008060408385031215612bfc57600080fd5b825167ffffffffffffffff811115612c1357600080fd5b8301601f81018513612c2457600080fd5b8051612c326127628261272c565b818152866020838501011115612c4757600080fd5b612c588260208301602086016125a2565b60209590950151949694955050505050565b60008551612c7c818460208a016125a2565b820184868237909301918252506020019392505050565b60008219821115612ca657612ca6612b8a565b500190565b6000808335601e19843603018112612cc257600080fd5b83018035915067ffffffffffffffff821115612cdd57600080fd5b60200191503681900382131561284257600080fd5b6000600019821415612d0657612d06612b8a565b5060010190565b60008251612d1f8184602087016125a2565b600360fc1b920191825250600101919050565b60008351612d448184602088016125a2565b835190830190612d588183602088016125a2565b01949350505050565b60008060408385031215612d7457600080fd5b823567ffffffffffffffff811115612d8b57600080fd5b612d97858286016129a8565b95602094909401359450505050565b82848237909101908152602001919050565b604081526000612dcb60408301856125ce565b8281036020840152612ddd81856125ce565b95945050505050565b60006001600160a01b038087168352808616602084015250836040830152608060608301526112a060808301846125ce565b600060208284031215612e2a57600080fd5b8151611d628161256f565b600082821015612e4757612e47612b8a565b500390565b600082612e5b57612e5b612bbf565b500690565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b858152606060208201526000612ea3606083018688612e60565b8281036040840152612eb6818587612e60565b98975050505050505050565b60008251612ed48184602087016125a2565b919091019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212201c6b0609f9a30cb199edf28526092de870884e7880547781976110b73b5e786464736f6c634300080c0033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        name?: undefined;
        anonymous?: undefined;
        outputs?: undefined;
    } | {
        inputs: never[];
        name: string;
        type: string;
        stateMutability?: undefined;
        anonymous?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): ERC721DelayedRevealInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC721DelayedReveal;
}
export {};
//# sourceMappingURL=ERC721DelayedReveal__factory.d.ts.map