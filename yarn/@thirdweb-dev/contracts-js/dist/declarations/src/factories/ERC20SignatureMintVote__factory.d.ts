import type { ERC20SignatureMintVote, ERC20SignatureMintVoteInterface } from "../ERC20SignatureMintVote";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, ContractFactory, Overrides } from "ethers";
declare type ERC20SignatureMintVoteConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ERC20SignatureMintVote__factory extends ContractFactory {
    constructor(...args: ERC20SignatureMintVoteConstructorParams);
    deploy(_name: string, _symbol: string, _primarySaleRecipient: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ERC20SignatureMintVote>;
    getDeployTransaction(_name: string, _symbol: string, _primarySaleRecipient: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ERC20SignatureMintVote;
    connect(signer: Signer): ERC20SignatureMintVote__factory;
    static readonly bytecode = "0x6101c06040527f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c960e0523480156200003657600080fd5b5060405162003ce238038062003ce28339810160408190526200005991620004d5565b6040518060400160405280601281526020017105369676e61747572654d696e7445524332360741b815250604051806040016040528060018152602001603160f81b8152508484818181818160059080519060200190620000bc92919062000362565b508051620000d290600690602084019062000362565b50504660a052503060c052620000e7620001a6565b60805250620000f89050336200022c565b50508151602080840191909120825191830191909120610160829052610180819052466101205260008051602062003cc28339815191526200017f8184846040805160208101859052908101839052606081018290524660808201523060a082015260009060c0016040516020818303038152906040528051906020012090509392505050565b6101005230610140526101a052506200019d9250839150506200027e565b5050506200059f565b600060008051602062003cc2833981519152620001c2620002c8565b80516020918201206040805192830193909352918101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b600180546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d7690600090a35050565b600b80546001600160a01b0319166001600160a01b0383169081179091556040517f299d17e95023f496e0ffc4909cff1a61f74bb5eb18de6f900f4155bfa1b3b33390600090a250565b606060058054620002d99062000562565b80601f0160208091040260200160405190810160405280929190818152602001828054620003079062000562565b8015620003585780601f106200032c5761010080835404028352916020019162000358565b820191906000526020600020905b8154815290600101906020018083116200033a57829003601f168201915b5050505050905090565b828054620003709062000562565b90600052602060002090601f016020900481019282620003945760008555620003df565b82601f10620003af57805160ff1916838001178555620003df565b82800160010185558215620003df579182015b82811115620003df578251825591602001919060010190620003c2565b50620003ed929150620003f1565b5090565b5b80821115620003ed5760008155600101620003f2565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200043057600080fd5b81516001600160401b03808211156200044d576200044d62000408565b604051601f8301601f19908116603f0116810190828211818310171562000478576200047862000408565b816040528381526020925086838588010111156200049557600080fd5b600091505b83821015620004b957858201830151818301840152908201906200049a565b83821115620004cb5760008385830101525b9695505050505050565b600080600060608486031215620004eb57600080fd5b83516001600160401b03808211156200050357600080fd5b62000511878388016200041e565b945060208601519150808211156200052857600080fd5b5062000537868287016200041e565b604086015190935090506001600160a01b03811681146200055757600080fd5b809150509250925092565b600181811c908216806200057757607f821691505b602082108114156200059957634e487b7160e01b600052602260045260246000fd5b50919050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516136a76200061b6000396000612aec01526000612b3b01526000612b1601526000612a6f01526000612a9901526000612ac3015260006110f5015260006108000152600061082a0152600061085401526136a76000f3fe6080604052600436106101ee5760003560e01c806370a082311161010d578063a457c2d7116100a0578063c3cda5201161006f578063c3cda520146105e8578063d505accf14610608578063dd62ed3e14610628578063e8a3d4851461066e578063f1127ed81461068357600080fd5b8063a457c2d71461053c578063a9059cbb1461055c578063ac9650d81461057c578063c1b606e2146105a957600080fd5b80638f0fefbb116100dc5780638f0fefbb146104d4578063938e3d7b146104e757806395d89b41146105075780639ab24eb01461051c57600080fd5b806370a08231146104405780637ecebe00146104765780638da5cb5b146104965780638e539e8c146104b457600080fd5b80633950935111610185578063587cde1e11610154578063587cde1e146103925780635c19a95c146103cb5780636f4f2837146103eb5780636fcfff451461040b57600080fd5b806339509351146103125780633a46b1a81461033257806342966c6814610352578063449a52f81461037257600080fd5b806318160ddd116101c157806318160ddd146102a257806323b872dd146102c1578063313ce567146102e15780633644e515146102fd57600080fd5b806306fdde03146101f3578063079fe40e1461021e578063095ea7b31461025057806313af403514610280575b600080fd5b3480156101ff57600080fd5b506102086106cd565b6040516102159190612f93565b60405180910390f35b34801561022a57600080fd5b50600b546001600160a01b03165b6040516001600160a01b039091168152602001610215565b34801561025c57600080fd5b5061027061026b366004612fc2565b61075f565b6040519015158152602001610215565b34801561028c57600080fd5b506102a061029b366004612fec565b610777565b005b3480156102ae57600080fd5b506004545b604051908152602001610215565b3480156102cd57600080fd5b506102706102dc366004613007565b6107cd565b3480156102ed57600080fd5b5060405160128152602001610215565b34801561030957600080fd5b506102b36107f3565b34801561031e57600080fd5b5061027061032d366004612fc2565b610883565b34801561033e57600080fd5b506102b361034d366004612fc2565b6108c2565b34801561035e57600080fd5b506102a061036d366004613043565b610935565b34801561037e57600080fd5b506102a061038d366004612fc2565b610997565b34801561039e57600080fd5b506102386103ad366004612fec565b6001600160a01b039081166000908152600860205260409020541690565b3480156103d757600080fd5b506102a06103e6366004612fec565b610a3d565b3480156103f757600080fd5b506102a0610406366004612fec565b610a47565b34801561041757600080fd5b5061042b610426366004612fec565b610a95565b60405163ffffffff9091168152602001610215565b34801561044c57600080fd5b506102b361045b366004612fec565b6001600160a01b031660009081526002602052604090205490565b34801561048257600080fd5b506102b3610491366004612fec565b610abd565b3480156104a257600080fd5b506001546001600160a01b0316610238565b3480156104c057600080fd5b506102b36104cf366004613043565b610adb565b6102386104e236600461305c565b610b37565b3480156104f357600080fd5b506102a06105023660046130ff565b610c57565b34801561051357600080fd5b50610208610ca5565b34801561052857600080fd5b506102b3610537366004612fec565b610cb4565b34801561054857600080fd5b50610270610557366004612fc2565b610d3b565b34801561056857600080fd5b50610270610577366004612fc2565b610dd8565b34801561058857600080fd5b5061059c6105973660046131b0565b610de6565b6040516102159190613225565b3480156105b557600080fd5b506105c96105c436600461305c565b610edb565b6040805192151583526001600160a01b03909116602083015201610215565b3480156105f457600080fd5b506102a0610603366004613298565b610f1e565b34801561061457600080fd5b506102a06106233660046132f0565b6110a1565b34801561063457600080fd5b506102b361064336600461335a565b6001600160a01b03918216600090815260036020908152604080832093909416825291909152205490565b34801561067a57600080fd5b50610208611207565b34801561068f57600080fd5b506106a361069e36600461338d565b611295565b60408051825163ffffffff1681526020928301516001600160e01b03169281019290925201610215565b6060600580546106dc906133cd565b80601f0160208091040260200160405190810160405280929190818152602001828054610708906133cd565b80156107555780601f1061072a57610100808354040283529160200191610755565b820191906000526020600020905b81548152906001019060200180831161073857829003601f168201915b5050505050905090565b60003361076d818585611319565b5060019392505050565b61077f61143d565b6107c15760405162461bcd60e51b815260206004820152600e60248201526d139bdd08185d5d1a1bdc9a5e995960921b60448201526064015b60405180910390fd5b6107ca8161146a565b50565b6000336107db8582856114bc565b6107e685858561154e565b60019150505b9392505050565b6000306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614801561084c57507f000000000000000000000000000000000000000000000000000000000000000046145b1561087657507f000000000000000000000000000000000000000000000000000000000000000090565b61087e611722565b905090565b3360008181526003602090815260408083206001600160a01b038716845290915281205490919061076d90829086906108bd908790613418565b611319565b60004382106109135760405162461bcd60e51b815260206004820152601f60248201527f4552433230566f7465733a20626c6f636b206e6f7420796574206d696e65640060448201526064016107b8565b6001600160a01b03831660009081526009602052604090206107ec90836117b7565b8061093f3361045b565b101561098d5760405162461bcd60e51b815260206004820152601260248201527f6e6f7420656e6f7567682062616c616e6365000000000000000000000000000060448201526064016107b8565b6107ca3382611874565b61099f61143d565b6109eb5760405162461bcd60e51b815260206004820152601760248201527f4e6f7420617574686f72697a656420746f206d696e742e00000000000000000060448201526064016107b8565b80610a2f5760405162461bcd60e51b815260206004820152601460248201527326b4b73a34b733903d32b937903a37b5b2b7399760611b60448201526064016107b8565b610a39828261188c565b5050565b6107ca3382611923565b610a4f61143d565b610a8c5760405162461bcd60e51b815260206004820152600e60248201526d139bdd08185d5d1a1bdc9a5e995960921b60448201526064016107b8565b6107ca8161199d565b6001600160a01b038116600090815260096020526040812054610ab7906119e7565b92915050565b6001600160a01b038116600090815260076020526040812054610ab7565b6000438210610b2c5760405162461bcd60e51b815260206004820152601f60248201527f4552433230566f7465733a20626c6f636b206e6f7420796574206d696e65640060448201526064016107b8565b610ab7600a836117b7565b600080846040013511610b835760405162461bcd60e51b815260206004820152601460248201527326b4b73a34b733903d32b937903a37b5b2b7399760611b60448201526064016107b8565b610b8e848484611a50565b9050600080610ba06020870187612fec565b6001600160a01b031614610bc057610bbb6020860186612fec565b610bc2565b335b9050610bf6610bd76040870160208801612fec565b6040870135610bec60a0890160808a01612fec565b8860600135611b62565b610c0481866040013561188c565b806001600160a01b0316826001600160a01b03167fc4d88b1adde72eb5acf63f3e219ef5b223262233acf507c3b171277c91973c6787604051610c479190613447565b60405180910390a3509392505050565b610c5f61143d565b610c9c5760405162461bcd60e51b815260206004820152600e60248201526d139bdd08185d5d1a1bdc9a5e995960921b60448201526064016107b8565b6107ca81611c8b565b6060600680546106dc906133cd565b6001600160a01b0381166000908152600960205260408120548015610d28576001600160a01b0383166000908152600960205260409020610cf66001836134dd565b81548110610d0657610d066134f4565b60009182526020909120015464010000000090046001600160e01b0316610d2b565b60005b6001600160e01b03169392505050565b3360008181526003602090815260408083206001600160a01b038716845290915281205490919083811015610dc05760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016107b8565b610dcd8286868403611319565b506001949350505050565b60003361076d81858561154e565b60608167ffffffffffffffff811115610e0157610e016130e9565b604051908082528060200260200182016040528015610e3457816020015b6060815260200190600190039081610e1f5790505b50905060005b82811015610ed457610ea430858584818110610e5857610e586134f4565b9050602002810190610e6a919061350a565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611d6c92505050565b828281518110610eb657610eb66134f4565b60200260200101819052508080610ecc90613551565b915050610e3a565b5092915050565b600080610ee9858585611d91565b60e08601356000908152600c602052604090205490915060ff16158015610f145750610f1481611df5565b9150935093915050565b83421115610f6e5760405162461bcd60e51b815260206004820152601d60248201527f4552433230566f7465733a207369676e6174757265206578706972656400000060448201526064016107b8565b604080517fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf60208201526001600160a01b03881691810191909152606081018690526080810185905260009060a0016040516020818303038152906040528051906020012090506000611023610fe26107f3565b8360405161190160f01b6020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b9050600061103382878787611e24565b905061103e81611e4c565b881461108c5760405162461bcd60e51b815260206004820152601960248201527f4552433230566f7465733a20696e76616c6964206e6f6e63650000000000000060448201526064016107b8565b611096818a611923565b505050505050505050565b834211156110f15760405162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e6500000060448201526064016107b8565b60007f00000000000000000000000000000000000000000000000000000000000000008888886111208c611e4c565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e001604051602081830303815290604052805190602001209050600061117d610fe26107f3565b9050600061118d82878787611e24565b9050896001600160a01b0316816001600160a01b0316146111f05760405162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e6174757265000060448201526064016107b8565b6111fb8a8a8a611319565b50505050505050505050565b60008054611214906133cd565b80601f0160208091040260200160405190810160405280929190818152602001828054611240906133cd565b801561128d5780601f106112625761010080835404028352916020019161128d565b820191906000526020600020905b81548152906001019060200180831161127057829003601f168201915b505050505081565b60408051808201909152600080825260208201526001600160a01b0383166000908152600960205260409020805463ffffffff84169081106112d9576112d96134f4565b60009182526020918290206040805180820190915291015463ffffffff8116825264010000000090046001600160e01b0316918101919091529392505050565b6001600160a01b03831661137b5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016107b8565b6001600160a01b0382166113dc5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016107b8565b6001600160a01b0383811660008181526003602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b60006114516001546001600160a01b031690565b6001600160a01b0316336001600160a01b031614905090565b600180546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d7690600090a35050565b6001600160a01b038381166000908152600360209081526040808320938616835292905220546000198114611548578181101561153b5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016107b8565b6115488484848403611319565b50505050565b6001600160a01b0383166115b25760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016107b8565b6001600160a01b0382166116145760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016107b8565b6001600160a01b0383166000908152600260205260409020548181101561168c5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016107b8565b6001600160a01b038085166000908152600260205260408082208585039055918516815290812080548492906116c3908490613418565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161170f91815260200190565b60405180910390a3611548848484611e79565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f61174d6106cd565b80516020918201206040805192830193909352918101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b8154600090815b8181101561181b5760006117d28284611eab565b9050848682815481106117e7576117e76134f4565b60009182526020909120015463ffffffff16111561180757809250611815565b611812816001613418565b91505b506117be565b811561185f578461182d6001846134dd565b8154811061183d5761183d6134f4565b60009182526020909120015464010000000090046001600160e01b0316611862565b60005b6001600160e01b031695945050505050565b61187e8282611ec6565b611548600a61201b83612027565b61189682826121a0565b6004546001600160e01b0310156119155760405162461bcd60e51b815260206004820152603060248201527f4552433230566f7465733a20746f74616c20737570706c79207269736b73206f60448201527f766572666c6f77696e6720766f7465730000000000000000000000000000000060648201526084016107b8565b611548600a61228783612027565b6001600160a01b03828116600081815260086020818152604080842080546002845282862054949093528787166001600160a01b03198416811790915590519190951694919391928592917f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f9190a4611548828483612293565b600b80546001600160a01b0319166001600160a01b0383169081179091556040517f299d17e95023f496e0ffc4909cff1a61f74bb5eb18de6f900f4155bfa1b3b33390600090a250565b600063ffffffff821115611a4c5760405162461bcd60e51b815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203360448201526532206269747360d01b60648201526084016107b8565b5090565b600080611a5e858585610edb565b9250905080611aaf5760405162461bcd60e51b815260206004820152600f60248201527f496e76616c69642072657175657374000000000000000000000000000000000060448201526064016107b8565b42611ac060c0870160a0880161356c565b6001600160801b031611158015611aef5750611ae260e0860160c0870161356c565b6001600160801b03164211155b611b3b5760405162461bcd60e51b815260206004820152600f60248201527f526571756573742065787069726564000000000000000000000000000000000060448201526064016107b8565b5060e0909301356000908152600c60205260409020805460ff191660011790555090919050565b80611b6c57611548565b6000670de0b6b3a7640000611b818386613587565b611b8b91906135a6565b905060008111611bdd5760405162461bcd60e51b815260206004820152601060248201527f7175616e7469747920746f6f206c6f770000000000000000000000000000000060448201526064016107b8565b6001600160a01b03831673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1415611c5157803414611c515760405162461bcd60e51b815260206004820152601660248201527f4d7573742073656e6420746f74616c2070726963652e0000000000000000000060448201526064016107b8565b60006001600160a01b03861615611c685785611c75565b600b546001600160a01b03165b9050611c83843383856123d0565b505050505050565b6000808054611c99906133cd565b80601f0160208091040260200160405190810160405280929190818152602001828054611cc5906133cd565b8015611d125780601f10611ce757610100808354040283529160200191611d12565b820191906000526020600020905b815481529060010190602001808311611cf557829003601f168201915b50508551939450611d2e93600093506020870192509050612eab565b507fc9c7c3fe08b88b4df9d4d47ef47d2c43d55c025a0ba88ca442580ed9e7348a168183604051611d609291906135c8565b60405180910390a15050565b60606107ec838360405180606001604052806027815260200161364b6027913961241a565b6000611ded83838080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611de79250611ddb91508890506124f7565b805190602001206125eb565b906125f8565b949350505050565b6000611e096001546001600160a01b031690565b6001600160a01b0316826001600160a01b0316149050919050565b6000806000611e358787878761261c565b91509150611e4281612709565b5095945050505050565b6001600160a01b03811660009081526007602052604090208054600181018255905b50919050565b505050565b6001600160a01b03838116600090815260086020526040808220548584168352912054611e7492918216911683612293565b6000611eba60028484186135a6565b6107ec90848416613418565b6001600160a01b038216611f265760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016107b8565b6001600160a01b03821660009081526002602052604090205481811015611f9a5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016107b8565b6001600160a01b0383166000908152600260205260408120838303905560048054849290611fc99084906134dd565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3611e7483600084611e79565b60006107ec82846134dd565b82546000908190801561207257856120406001836134dd565b81548110612050576120506134f4565b60009182526020909120015464010000000090046001600160e01b0316612075565b60005b6001600160e01b0316925061208e83858763ffffffff16565b91506000811180156120cc575043866120a86001846134dd565b815481106120b8576120b86134f4565b60009182526020909120015463ffffffff16145b1561212c576120da826128c4565b866120e66001846134dd565b815481106120f6576120f66134f4565b9060005260206000200160000160046101000a8154816001600160e01b0302191690836001600160e01b03160217905550612197565b856040518060400160405280612141436119e7565b63ffffffff168152602001612155856128c4565b6001600160e01b0390811690915282546001810184556000938452602093849020835194909301519091166401000000000263ffffffff909316929092179101555b50935093915050565b6001600160a01b0382166121f65760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016107b8565b80600460008282546122089190613418565b90915550506001600160a01b03821660009081526002602052604081208054839290612235908490613418565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3610a3960008383611e79565b60006107ec8284613418565b816001600160a01b0316836001600160a01b0316141580156122b55750600081115b15611e74576001600160a01b03831615612343576001600160a01b038316600090815260096020526040812081906122f09061201b85612027565b91509150846001600160a01b03167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a7248383604051612338929190918252602082015260400190565b60405180910390a250505b6001600160a01b03821615611e74576001600160a01b038216600090815260096020526040812081906123799061228785612027565b91509150836001600160a01b03167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a72483836040516123c1929190918252602082015260400190565b60405180910390a25050505050565b806123da57611548565b6001600160a01b03841673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee141561240e57612409828261292d565b611548565b611548848484846129d0565b60606001600160a01b0384163b6124825760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084016107b8565b600080856001600160a01b03168560405161249d91906135f6565b600060405180830381855af49150503d80600081146124d8576040519150601f19603f3d011682016040523d82523d6000602084013e6124dd565b606091505b50915091506124ed828286612a29565b9695505050505050565b60607fd932100bc68de71f788489cd77585effe7e2226422dc347f9d7f9c20cd7cfd0b6125276020840184612fec565b6125376040850160208601612fec565b6040850135606086013561255160a0880160808901612fec565b61256160c0890160a08a0161356c565b61257160e08a0160c08b0161356c565b6040805160208101999099526001600160a01b03978816908901529486166060880152608087019390935260a086019190915290921660c08401526001600160801b0391821660e0808501919091529116610100830152830135610120820152610140016040516020818303038152906040529050919050565b6000610ab7610fe2612a62565b60008060006126078585612b89565b9150915061261481612709565b509392505050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08311156126535750600090506003612700565b8460ff16601b1415801561266b57508460ff16601c14155b1561267c5750600090506004612700565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa1580156126d0573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166126f957600060019250925050612700565b9150600090505b94509492505050565b600081600481111561271d5761271d613612565b14156127265750565b600181600481111561273a5761273a613612565b14156127885760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e6174757265000000000000000060448201526064016107b8565b600281600481111561279c5761279c613612565b14156127ea5760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e6774680060448201526064016107b8565b60038160048111156127fe576127fe613612565b14156128575760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b60648201526084016107b8565b600481600481111561286b5761286b613612565b14156107ca5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b60648201526084016107b8565b60006001600160e01b03821115611a4c5760405162461bcd60e51b815260206004820152602760248201527f53616665436173743a2076616c756520646f65736e27742066697420696e20326044820152663234206269747360c81b60648201526084016107b8565b6000826001600160a01b03168260405160006040518083038185875af1925050503d806000811461297a576040519150601f19603f3d011682016040523d82523d6000602084013e61297f565b606091505b5050905080611e745760405162461bcd60e51b815260206004820152601c60248201527f6e617469766520746f6b656e207472616e73666572206661696c65640000000060448201526064016107b8565b816001600160a01b0316836001600160a01b031614156129ef57611548565b6001600160a01b038316301415612a14576124096001600160a01b0385168383612bf9565b6115486001600160a01b038516848484612c74565b60608315612a385750816107ec565b825115612a485782518084602001fd5b8160405162461bcd60e51b81526004016107b89190612f93565b6000306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016148015612abb57507f000000000000000000000000000000000000000000000000000000000000000046145b15612ae557507f000000000000000000000000000000000000000000000000000000000000000090565b50604080517f00000000000000000000000000000000000000000000000000000000000000006020808301919091527f0000000000000000000000000000000000000000000000000000000000000000828401527f000000000000000000000000000000000000000000000000000000000000000060608301524660808301523060a0808401919091528351808403909101815260c0909201909252805191012090565b600080825160411415612bc05760208301516040840151606085015160001a612bb48782858561261c565b94509450505050612bf2565b825160401415612bea5760208301516040840151612bdf868383612cac565b935093505050612bf2565b506000905060025b9250929050565b6040516001600160a01b038316602482015260448101829052611e7490849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152612cfe565b6040516001600160a01b03808516602483015283166044820152606481018290526115489085906323b872dd60e01b90608401612c25565b6000807f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff831681612ce260ff86901c601b613418565b9050612cf08782888561261c565b935093505050935093915050565b6000612d53826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316612dd09092919063ffffffff16565b805190915015611e745780806020019051810190612d719190613628565b611e745760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016107b8565b6060611ded8484600085856001600160a01b0385163b612e325760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016107b8565b600080866001600160a01b03168587604051612e4e91906135f6565b60006040518083038185875af1925050503d8060008114612e8b576040519150601f19603f3d011682016040523d82523d6000602084013e612e90565b606091505b5091509150612ea0828286612a29565b979650505050505050565b828054612eb7906133cd565b90600052602060002090601f016020900481019282612ed95760008555612f1f565b82601f10612ef257805160ff1916838001178555612f1f565b82800160010185558215612f1f579182015b82811115612f1f578251825591602001919060010190612f04565b50611a4c9291505b80821115611a4c5760008155600101612f27565b60005b83811015612f56578181015183820152602001612f3e565b838111156115485750506000910152565b60008151808452612f7f816020860160208601612f3b565b601f01601f19169290920160200192915050565b6020815260006107ec6020830184612f67565b80356001600160a01b0381168114612fbd57600080fd5b919050565b60008060408385031215612fd557600080fd5b612fde83612fa6565b946020939093013593505050565b600060208284031215612ffe57600080fd5b6107ec82612fa6565b60008060006060848603121561301c57600080fd5b61302584612fa6565b925061303360208501612fa6565b9150604084013590509250925092565b60006020828403121561305557600080fd5b5035919050565b600080600083850361012081121561307357600080fd5b6101008082121561308357600080fd5b859450840135905067ffffffffffffffff808211156130a157600080fd5b818601915086601f8301126130b557600080fd5b8135818111156130c457600080fd5b8760208285010111156130d657600080fd5b6020830194508093505050509250925092565b634e487b7160e01b600052604160045260246000fd5b60006020828403121561311157600080fd5b813567ffffffffffffffff8082111561312957600080fd5b818401915084601f83011261313d57600080fd5b81358181111561314f5761314f6130e9565b604051601f8201601f19908116603f01168101908382118183101715613177576131776130e9565b8160405282815287602084870101111561319057600080fd5b826020860160208301376000928101602001929092525095945050505050565b600080602083850312156131c357600080fd5b823567ffffffffffffffff808211156131db57600080fd5b818501915085601f8301126131ef57600080fd5b8135818111156131fe57600080fd5b8660208260051b850101111561321357600080fd5b60209290920196919550909350505050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101561327a57603f19888603018452613268858351612f67565b9450928501929085019060010161324c565b5092979650505050505050565b803560ff81168114612fbd57600080fd5b60008060008060008060c087890312156132b157600080fd5b6132ba87612fa6565b955060208701359450604087013593506132d660608801613287565b92506080870135915060a087013590509295509295509295565b600080600080600080600060e0888a03121561330b57600080fd5b61331488612fa6565b965061332260208901612fa6565b9550604088013594506060880135935061333e60808901613287565b925060a0880135915060c0880135905092959891949750929550565b6000806040838503121561336d57600080fd5b61337683612fa6565b915061338460208401612fa6565b90509250929050565b600080604083850312156133a057600080fd5b6133a983612fa6565b9150602083013563ffffffff811681146133c257600080fd5b809150509250929050565b600181811c908216806133e157607f821691505b60208210811415611e6e57634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000821982111561342b5761342b613402565b500190565b80356001600160801b0381168114612fbd57600080fd5b61010081016001600160a01b038061345e85612fa6565b1683528061346e60208601612fa6565b16602084015260408401356040840152606084013560608401528061349560808601612fa6565b166080840152506134a860a08401613430565b6001600160801b0380821660a0850152806134c560c08701613430565b1660c0850152505060e083013560e083015292915050565b6000828210156134ef576134ef613402565b500390565b634e487b7160e01b600052603260045260246000fd5b6000808335601e1984360301811261352157600080fd5b83018035915067ffffffffffffffff82111561353c57600080fd5b602001915036819003821315612bf257600080fd5b600060001982141561356557613565613402565b5060010190565b60006020828403121561357e57600080fd5b6107ec82613430565b60008160001904831182151516156135a1576135a1613402565b500290565b6000826135c357634e487b7160e01b600052601260045260246000fd5b500490565b6040815260006135db6040830185612f67565b82810360208401526135ed8185612f67565b95945050505050565b60008251613608818460208701612f3b565b9190910192915050565b634e487b7160e01b600052602160045260246000fd5b60006020828403121561363a57600080fd5b815180151581146107ec57600080fdfe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a264697066735822122047447de33955c672a3bb3d879d60692b85a5f77bfb7fa454bcaaea6eb96f155664736f6c634300080c00338b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: ({
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        } | {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        })[];
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
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
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
        anonymous?: undefined;
    })[];
    static createInterface(): ERC20SignatureMintVoteInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC20SignatureMintVote;
}
export {};
//# sourceMappingURL=ERC20SignatureMintVote__factory.d.ts.map