import type { TWFee, TWFeeInterface } from "../TWFee";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, ContractFactory, Overrides } from "ethers";
declare type TWFeeConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TWFee__factory extends ContractFactory {
    constructor(...args: TWFeeConstructorParams);
    deploy(_trustedForwarder: string, _factory: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TWFee>;
    getDeployTransaction(_trustedForwarder: string, _factory: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TWFee;
    connect(signer: Signer): TWFee__factory;
    static readonly bytecode = "0x60c06040523480156200001157600080fd5b5060405162001a6938038062001a698339810160408190526200003491620002a0565b6001600160a01b03808316608052811660a0526200005d600062000057620000c3565b620000df565b6200008c7f4ff1b29862215be122f4c8c8cc8572cede47eb1fdef6a4089fe228921d02432162000057620000c3565b620000bb7fb4cd4a1d3ca8894bcf03d193b5333b5567916dea2b3ce79ec3dfda4cf2470d1c62000057620000c3565b5050620002d8565b6000620000da620000ef60201b62000acd1760201c565b905090565b620000eb828262000128565b5050565b6080516000906001600160a01b031633141562000113575060131936013560601c90565b620000da6200016b60201b62000b171760201c565b6200013f82826200016f60201b62000b1b1760201c565b60008281526001602090815260409091206200016691839062000bba62000211821b17901c565b505050565b3390565b6000828152602081815260408083206001600160a01b038516845290915290205460ff16620000eb576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055620001cd620000c3565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b600062000228836001600160a01b03841662000231565b90505b92915050565b60008181526001830160205260408120546200027a575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556200022b565b5060006200022b565b80516001600160a01b03811681146200029b57600080fd5b919050565b60008060408385031215620002b457600080fd5b620002bf8362000283565b9150620002cf6020840162000283565b90509250929050565b60805160a05161175d6200030c60003960008181610332015261062b0152600081816101ed0152610ad1015261175d6000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c806391d14854116100ad578063c45a015511610071578063c45a01551461032d578063ca15c87314610354578063d547741f14610367578063d55be8c61461037a578063de7e3fa41461038257600080fd5b806391d14854146102a8578063934d520a146102df5780639b433d3a146102f2578063a217fddf14610305578063ac9650d81461030d57600080fd5b8063572b6c05116100f4578063572b6c05146101dd57806357efce361461021d578063818f83491461023057806385b49ad0146102635780639010d07c1461029557600080fd5b806301ffc9a714610131578063248a9ca3146101595780632b3ea9501461018a5780632f2ff15d146101b557806336568abe146101ca575b600080fd5b61014461013f3660046111e8565b6103da565b60405190151581526020015b60405180910390f35b61017c610167366004611212565b60009081526020819052604090206001015490565b604051908152602001610150565b60045461019d906001600160a01b031681565b6040516001600160a01b039091168152602001610150565b6101c86101c3366004611243565b610405565b005b6101c86101d8366004611243565b610437565b6101446101eb366004611273565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0390811691161490565b6101c861022b366004611273565b6104d8565b61024361023e366004611290565b610516565b604080516001600160801b03938416815292909116602083015201610150565b6102766102713660046112be565b610605565b604080516001600160a01b039093168352602083019190915201610150565b61019d6102a33660046112ea565b6107b2565b6101446102b6366004611243565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b6101c86102ed366004611321565b6107d1565b6101c861030036600461136c565b610888565b61017c600081565b61032061031b3660046113ab565b610999565b604051610150919061147c565b61019d7f000000000000000000000000000000000000000000000000000000000000000081565b61017c610362366004611212565b610a8e565b6101c8610375366004611243565b610aa5565b61017c606481565b6103bd6103903660046112ea565b6003602090815260009283526040808420909152908252902080546001909101546001600160a01b031682565b604080519283526001600160a01b03909116602083015201610150565b60006001600160e01b03198216635a05180f60e01b14806103ff57506103ff82610bcf565b92915050565b60008281526020819052604090206001015461042881610423610c04565b610c0e565b6104328383610c8c565b505050565b61043f610c04565b6001600160a01b0316816001600160a01b0316146104ca5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c66000000000000000000000000000000000060648201526084015b60405180910390fd5b6104d48282610cae565b5050565b60006104e681610423610c04565b506004805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6001600160a01b03811660009081526002602090815260408083208151808301909252546001600160801b038082168352600160801b909104169181018290528291421161056f57805160208201519093509150610578565b60009250600091505b6001600160801b03831615801561059657506001600160801b038216155b156105fd57506001600160a01b0384166000908152600260209081526040918290208251808401909352546001600160801b038082168452600160801b9091041690820181905242116105f4578051602082015190935091506105fd565b60009250600091505b509250929050565b60405163b9caf9d960e01b81526001600160a01b038381166004830152600091829182917f00000000000000000000000000000000000000000000000000000000000000009091169063b9caf9d990602401602060405180830381865afa158015610674573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061069891906114de565b60045490915060009081906001600160a01b03161561072f576004805460405163818f834960e01b81526001600160a01b0386811693820193909352898316602482015291169063818f8349906044016040805180830381865afa925050508015610720575060408051601f3d908101601f1916820190925261071d918101906114fb565b60015b6107295761072f565b90925090505b6001600160801b03821615801561074d57506001600160801b038116155b156107605761075c8388610516565b5091505b506001600160801b0316600090815260036020908152604080832096835295815290859020855180870190965280548087526001909101546001600160a01b0316959091018590529395939450505050565b60008281526001602052604081206107ca9083610cd0565b9392505050565b7fb4cd4a1d3ca8894bcf03d193b5333b5567916dea2b3ce79ec3dfda4cf2470d1c6107fe81610423610c04565b6040805180820182526001600160801b0385811680835285821660208085018281526001600160a01b038b16600081815260028452889020965191518616600160801b029190951617909455845191825292810192909252917ff406c17c43e8510021f8e9d634aca0c743b8343139c1e9b0ff49314654be0049910160405180910390a250505050565b7f4ff1b29862215be122f4c8c8cc8572cede47eb1fdef6a4089fe228921d0243216108b581610423610c04565b60648411156108f65760405162461bcd60e51b815260206004820152600d60248201526c3332b2903a37b7903434b3b41760991b60448201526064016104c1565b6040805180820182528581526001600160a01b03858116602080840182815260008b81526003835286812089825283528690208551815590516001909101805473ffffffffffffffffffffffffffffffffffffffff1916919094161790925583519081529081018790529091849188917fa65b5a8bef4b203b2d60b65273c1bbc861636c8b012f265f43406696466e6f89910160405180910390a3505050505050565b60608167ffffffffffffffff8111156109b4576109b461152a565b6040519080825280602002602001820160405280156109e757816020015b60608152602001906001900390816109d25790505b50905060005b82811015610a8757610a5730858584818110610a0b57610a0b611540565b9050602002810190610a1d9190611556565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610cdc92505050565b828281518110610a6957610a69611540565b60200260200101819052508080610a7f906115ba565b9150506109ed565b5092915050565b60008181526001602052604081206103ff90610d01565b600082815260208190526040902060010154610ac381610423610c04565b6104328383610cae565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316331415610b0d575060131936013560601c90565b503390565b905090565b3390565b6000828152602081815260408083206001600160a01b038516845290915290205460ff166104d4576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055610b76610c04565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60006107ca836001600160a01b038416610d0b565b60006001600160e01b03198216637965db0b60e01b14806103ff57506301ffc9a760e01b6001600160e01b03198316146103ff565b6000610b12610acd565b6000828152602081815260408083206001600160a01b038516845290915290205460ff166104d457610c4a816001600160a01b03166014610d5a565b610c55836020610d5a565b604051602001610c669291906115d5565b60408051601f198184030181529082905262461bcd60e51b82526104c191600401611656565b610c968282610b1b565b60008281526001602052604090206104329082610bba565b610cb88282610f03565b60008281526001602052604090206104329082610fa0565b60006107ca8383610fb5565b60606107ca838360405180606001604052806027815260200161170160279139610fdf565b60006103ff825490565b6000818152600183016020526040812054610d52575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556103ff565b5060006103ff565b60606000610d69836002611669565b610d74906002611688565b67ffffffffffffffff811115610d8c57610d8c61152a565b6040519080825280601f01601f191660200182016040528015610db6576020820181803683370190505b509050600360fc1b81600081518110610dd157610dd1611540565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110610e0057610e00611540565b60200101906001600160f81b031916908160001a9053506000610e24846002611669565b610e2f906001611688565b90505b6001811115610eb4577f303132333435363738396162636465660000000000000000000000000000000085600f1660108110610e7057610e70611540565b1a60f81b828281518110610e8657610e86611540565b60200101906001600160f81b031916908160001a90535060049490941c93610ead816116a0565b9050610e32565b5083156107ca5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016104c1565b6000828152602081815260408083206001600160a01b038516845290915290205460ff16156104d4576000828152602081815260408083206001600160a01b03851684529091529020805460ff19169055610f5c610c04565b6001600160a01b0316816001600160a01b0316837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45050565b60006107ca836001600160a01b0384166110bc565b6000826000018281548110610fcc57610fcc611540565b9060005260206000200154905092915050565b60606001600160a01b0384163b6110475760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084016104c1565b600080856001600160a01b03168560405161106291906116b7565b600060405180830381855af49150503d806000811461109d576040519150601f19603f3d011682016040523d82523d6000602084013e6110a2565b606091505b50915091506110b28282866111af565b9695505050505050565b600081815260018301602052604081205480156111a55760006110e06001836116d3565b85549091506000906110f4906001906116d3565b905081811461115957600086600001828154811061111457611114611540565b906000526020600020015490508087600001848154811061113757611137611540565b6000918252602080832090910192909255918252600188019052604090208390555b855486908061116a5761116a6116ea565b6001900381819060005260206000200160009055905585600101600086815260200190815260200160002060009055600193505050506103ff565b60009150506103ff565b606083156111be5750816107ca565b8251156111ce5782518084602001fd5b8160405162461bcd60e51b81526004016104c19190611656565b6000602082840312156111fa57600080fd5b81356001600160e01b0319811681146107ca57600080fd5b60006020828403121561122457600080fd5b5035919050565b6001600160a01b038116811461124057600080fd5b50565b6000806040838503121561125657600080fd5b8235915060208301356112688161122b565b809150509250929050565b60006020828403121561128557600080fd5b81356107ca8161122b565b600080604083850312156112a357600080fd5b82356112ae8161122b565b915060208301356112688161122b565b600080604083850312156112d157600080fd5b82356112dc8161122b565b946020939093013593505050565b600080604083850312156112fd57600080fd5b50508035926020909101359150565b6001600160801b038116811461124057600080fd5b60008060006060848603121561133657600080fd5b83356113418161122b565b925060208401356113518161130c565b915060408401356113618161130c565b809150509250925092565b6000806000806080858703121561138257600080fd5b8435935060208501359250604085013561139b8161122b565b9396929550929360600135925050565b600080602083850312156113be57600080fd5b823567ffffffffffffffff808211156113d657600080fd5b818501915085601f8301126113ea57600080fd5b8135818111156113f957600080fd5b8660208260051b850101111561140e57600080fd5b60209290920196919550909350505050565b60005b8381101561143b578181015183820152602001611423565b8381111561144a576000848401525b50505050565b60008151808452611468816020860160208601611420565b601f01601f19169290920160200192915050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b828110156114d157603f198886030184526114bf858351611450565b945092850192908501906001016114a3565b5092979650505050505050565b6000602082840312156114f057600080fd5b81516107ca8161122b565b6000806040838503121561150e57600080fd5b82516115198161130c565b60208401519092506112688161130c565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b6000808335601e1984360301811261156d57600080fd5b83018035915067ffffffffffffffff82111561158857600080fd5b60200191503681900382131561159d57600080fd5b9250929050565b634e487b7160e01b600052601160045260246000fd5b60006000198214156115ce576115ce6115a4565b5060010190565b7f416363657373436f6e74726f6c3a206163636f756e742000000000000000000081526000835161160d816017850160208801611420565b7f206973206d697373696e6720726f6c6520000000000000000000000000000000601791840191820152835161164a816028840160208801611420565b01602801949350505050565b6020815260006107ca6020830184611450565b6000816000190483118215151615611683576116836115a4565b500290565b6000821982111561169b5761169b6115a4565b500190565b6000816116af576116af6115a4565b506000190190565b600082516116c9818460208701611420565b9190910192915050565b6000828210156116e5576116e56115a4565b500390565b634e487b7160e01b600052603160045260246000fdfe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212208a3e95981375fd54485fd32952241044f10ebb63acd05eba8f731f580e2a56a164736f6c634300080c0033";
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
    static createInterface(): TWFeeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TWFee;
}
export {};
//# sourceMappingURL=TWFee__factory.d.ts.map