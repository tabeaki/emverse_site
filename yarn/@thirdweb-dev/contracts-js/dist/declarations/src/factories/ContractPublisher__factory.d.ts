import type { ContractPublisher, ContractPublisherInterface } from "../ContractPublisher";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, ContractFactory, Overrides } from "ethers";
declare type ContractPublisherConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ContractPublisher__factory extends ContractFactory {
    constructor(...args: ContractPublisherConstructorParams);
    deploy(_trustedForwarder: string, _prevPublisher: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractPublisher>;
    getDeployTransaction(_trustedForwarder: string, _prevPublisher: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ContractPublisher;
    connect(signer: Signer): ContractPublisher__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b5060405162002fd538038062002fd583398101604081905262000034916200025d565b6001600160a01b0382166080526200005760006200005162000084565b620000a0565b600280546001600160a01b0390921661010002610100600160a81b0319909216919091179055506200029c565b60006200009b620000b060201b62001a421760201c565b905090565b620000ac8282620000e9565b5050565b6080516000906001600160a01b0316331415620000d4575060131936013560601c90565b6200009b6200012c60201b62001a8c1760201c565b6200010082826200013060201b62001a901760201c565b60008281526001602090815260409091206200012791839062001b2f620001d2821b17901c565b505050565b3390565b6000828152602081815260408083206001600160a01b038516845290915290205460ff16620000ac576000828152602081815260408083206001600160a01b03851684529091529020805460ff191660011790556200018e62000084565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000620001e9836001600160a01b038416620001f2565b90505b92915050565b60008181526001830160205260408120546200023b57508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155620001ec565b506000620001ec565b6001600160a01b03811681146200025a57600080fd5b50565b600080604083850312156200027157600080fd5b82516200027e8162000244565b6020840151909250620002918162000244565b809150509250929050565b608051612d16620002bf6000396000818161025b0152611a460152612d166000f3fe608060405234801561001057600080fd5b50600436106101625760003560e01c8063819e992f116100c8578063af8db6901161008c578063ca15c87311610066578063ca15c873146103a3578063d50299e6146103b6578063d547741f146103c957600080fd5b8063af8db69014610370578063b187bd2614610383578063bedb86fb1461039057600080fd5b8063819e992f146102de5780639010d07c146102fe57806391d1485414610311578063a217fddf14610348578063ac9650d81461035057600080fd5b80634f7816751161012a5780636e578e54116101045780636e578e541461028b5780637ec047fa1461029e57806380251dac146102be57600080fd5b80634f781675146101fb57806353865f7f1461021b578063572b6c051461024b57600080fd5b806301ffc9a71461016757806306eb56cc1461018f578063248a9ca3146101a45780632f2ff15d146101d557806336568abe146101e8575b600080fd5b61017a610175366004612247565b6103dc565b60405190151581526020015b60405180910390f35b6101a261019d36600461234b565b610407565b005b6101c76101b236600461239b565b60009081526020819052604090206001015490565b604051908152602001610186565b6101a26101e33660046123b4565b610610565b6101a26101f63660046123b4565b610642565b61020e6102093660046123e4565b6106de565b604051610186919061245d565b6002546102339061010090046001600160a01b031681565b6040516001600160a01b039091168152602001610186565b61017a6102593660046123e4565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0390811691161490565b6101a261029936600461234b565b61080c565b6102b16102ac36600461234b565b610983565b60405161018691906124d2565b6102d16102cc36600461234b565b610bc2565b60405161018691906124e5565b6102f16102ec366004612547565b610f28565b6040516101869190612584565b61023361030c3660046125d9565b61118f565b61017a61031f3660046123b4565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b6101c7600081565b61036361035e3660046125fb565b6111a7565b6040516101869190612670565b6102d161037e3660046123e4565b61129c565b60025461017a9060ff1681565b6101a261039e3660046126c5565b611607565b6101c76103b136600461239b565b61169b565b6101a26103c43660046126e7565b6116b2565b6101a26103d73660046123b4565b611a1a565b60006001600160e01b03198216635a05180f60e01b1480610401575061040182611b44565b92915050565b81806001600160a01b031661041a611b79565b6001600160a01b0316146104695760405162461bcd60e51b81526020600482015260116024820152703ab730b8383937bb32b21031b0b63632b960791b60448201526064015b60405180910390fd5b60025460ff1615806104835750610483600061031f611b79565b6104c15760405162461bcd60e51b815260206004820152600f60248201526e1c9959da5cdd1c9e481c185d5cd959608a1b6044820152606401610460565b81516020808401919091206001600160a01b03851660009081526003909252604082209091906104f19083611b83565b9050806105405760405162461bcd60e51b815260206004820152601460248201527f676976656e20636f6e7472616374496420444e450000000000000000000000006044820152606401610460565b6001600160a01b038516600090815260036020908152604080832085845260020190915281208181559060018201816105798282612171565b60018201600090556002820160006105919190612171565b506000600382015560040180546001600160a01b031916905550506040516105ba90859061279f565b6040518091039020856001600160a01b03166105d4611b79565b6001600160a01b03167f4c934c8014c81bef7c9b5296daec96b8a63f02365b7dd6eb15ff0f231728a8d560405160405180910390a45050505050565b6000828152602081905260409020600101546106338161062e611b79565b611b8f565b61063d8383611c0d565b505050565b61064a611b79565b6001600160a01b0316816001600160a01b0316146106d05760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c6600000000000000000000000000000000006064820152608401610460565b6106da8282611c2f565b5050565b6001600160a01b0381166000908152600460205260409020805460609190610705906127bb565b80601f0160208091040260200160405190810160405280929190818152602001828054610731906127bb565b801561077e5780601f106107535761010080835404028352916020019161077e565b820191906000526020600020905b81548152906001019060200180831161076157829003601f168201915b5050505050905080516000141561080757600254604051634f78167560e01b81526001600160a01b03848116600483015261010090920490911690634f78167590602401600060405180830381865afa1580156107df573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610401919081019061283b565b919050565b81806001600160a01b031661081f611b79565b6001600160a01b0316146108695760405162461bcd60e51b81526020600482015260116024820152703ab730b8383937bb32b21031b0b63632b960791b6044820152606401610460565b6001600160a01b0383166000908152600460205260408120805461088c906127bb565b80601f01602080910402602001604051908101604052809291908181526020018280546108b8906127bb565b80156109055780601f106108da57610100808354040283529160200191610905565b820191906000526020600020905b8154815290600101906020018083116108e857829003601f168201915b5050506001600160a01b038716600090815260046020908152604090912087519495506109399490935090870191506121ae565b50836001600160a01b03167f7b1bbf534a8f0628737a62822ff67b774319e0c7ad7130a5be78386e49068f028285604051610975929190612870565b60405180910390a250505050565b6040805160a0810182526060808252600060208301819052928201819052810182905260808101919091526001600160a01b0383166000908152600360209081526040808320855186840120845260020190915290819020815160a081019092526001018054829082906109f6906127bb565b80601f0160208091040260200160405190810160405280929190818152602001828054610a22906127bb565b8015610a6f5780601f10610a4457610100808354040283529160200191610a6f565b820191906000526020600020905b815481529060010190602001808311610a5257829003601f168201915b5050505050815260200160018201548152602001600282018054610a92906127bb565b80601f0160208091040260200160405190810160405280929190818152602001828054610abe906127bb565b8015610b0b5780601f10610ae057610100808354040283529160200191610b0b565b820191906000526020600020905b815481529060010190602001808311610aee57829003601f168201915b505050918352505060038201546020808301919091526004909201546001600160a01b031660409091015281015190915061040157600254604051633f6023fd60e11b81526101009091046001600160a01b031690637ec047fa90610b76908690869060040161289e565b600060405180830381865afa158015610b93573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610bbb919081019061297a565b9392505050565b600254604051632009476b60e21b81526060916000916101009091046001600160a01b0316906380251dac90610bfe908790879060040161289e565b600060405180830381865afa158015610c1b573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610c4391908101906129d3565b805184516020808701919091206001600160a01b038816600090815260038352604080822083835260020190935291822054939450919290610c858285612a9a565b90508067ffffffffffffffff811115610ca057610ca0612286565b604051908082528060200260200182016040528015610cfa57816020015b6040805160a08101825260608082526000602080840182905293830182905290820181905260808201528252600019909201910181610cbe5790505b50955060005b84811015610d5157858181518110610d1a57610d1a612ab2565b6020026020010151878281518110610d3457610d34612ab2565b6020908102919091010152610d4a600182612a9a565b9050610d00565b5060005b82811015610f1c576001600160a01b0389166000908152600360209081526040808320878452600201825280832084845260060190915290819020815160a08101909252805482908290610da8906127bb565b80601f0160208091040260200160405190810160405280929190818152602001828054610dd4906127bb565b8015610e215780601f10610df657610100808354040283529160200191610e21565b820191906000526020600020905b815481529060010190602001808311610e0457829003601f168201915b5050505050815260200160018201548152602001600282018054610e44906127bb565b80601f0160208091040260200160405190810160405280929190818152602001828054610e70906127bb565b8015610ebd5780601f10610e9257610100808354040283529160200191610ebd565b820191906000526020600020905b815481529060010190602001808311610ea057829003601f168201915b5050509183525050600382015460208201526004909101546001600160a01b031660409091015287610eef8784612a9a565b81518110610eff57610eff612ab2565b6020908102919091010152610f15600182612a9a565b9050610d55565b50505050505092915050565b60025460405163819e992f60e01b81526060916000916101009091046001600160a01b03169063819e992f90610f6290869060040161245d565b600060405180830381865afa158015610f7f573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610fa79190810190612ac8565b90506000815190506000600585604051610fc1919061279f565b9081526040519081900360200190205490506000610fdf8284612a9a565b90508067ffffffffffffffff811115610ffa57610ffa612286565b60405190808252806020026020018201604052801561102d57816020015b60608152602001906001900390816110185790505b50945060005b838110156110845784818151811061104d5761104d612ab2565b602002602001015186828151811061106757611067612ab2565b602090810291909101015261107d600182612a9a565b9050611033565b5060005b82811015611185576005876040516110a0919061279f565b9081526020016040518091039020600101600082815260200190815260200160002080546110cd906127bb565b80601f01602080910402602001604051908101604052809291908181526020018280546110f9906127bb565b80156111465780601f1061111b57610100808354040283529160200191611146565b820191906000526020600020905b81548152906001019060200180831161112957829003601f168201915b50505050508685836111589190612a9a565b8151811061116857611168612ab2565b602090810291909101015261117e600182612a9a565b9050611088565b5050505050919050565b6000828152600160205260408120610bbb9083611c51565b60608167ffffffffffffffff8111156111c2576111c2612286565b6040519080825280602002602001820160405280156111f557816020015b60608152602001906001900390816111e05790505b50905060005b82811015611295576112653085858481811061121957611219612ab2565b905060200281019061122b9190612b6c565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611c5d92505050565b82828151811061127757611277612ab2565b6020026020010181905250808061128d90612bba565b9150506111fb565b5092915050565b600254604051630af8db6960e41b81526001600160a01b0383811660048301526060926000926101009091049091169063af8db69090602401600060405180830381865afa1580156112f2573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261131a91908101906129d3565b6001600160a01b03841660009081526003602052604081209192509061133f90611c82565b825190915060006113508383612a9a565b90508067ffffffffffffffff81111561136b5761136b612286565b6040519080825280602002602001820160405280156113c557816020015b6040805160a081018252606080825260006020808401829052938301829052908201819052608082015282526000199092019101816113895790505b50945060005b8281101561141c578481815181106113e5576113e5612ab2565b60200260200101518682815181106113ff576113ff612ab2565b6020908102919091010152611415600182612a9a565b90506113cb565b5060005b83811015611185576001600160a01b038716600090815260036020526040812061144a9083611c51565b6001600160a01b038916600090815260036020908152604080832084845260020190915290819020815160a081019092526001018054929350909182908290611492906127bb565b80601f01602080910402602001604051908101604052809291908181526020018280546114be906127bb565b801561150b5780601f106114e05761010080835404028352916020019161150b565b820191906000526020600020905b8154815290600101906020018083116114ee57829003601f168201915b505050505081526020016001820154815260200160028201805461152e906127bb565b80601f016020809104026020016040519081016040528092919081815260200182805461155a906127bb565b80156115a75780601f1061157c576101008083540402835291602001916115a7565b820191906000526020600020905b81548152906001019060200180831161158a57829003601f168201915b5050509183525050600382015460208201526004909101546001600160a01b0316604090910152876115d98685612a9a565b815181106115e9576115e9612ab2565b602090810291909101015250611600600182612a9a565b9050611420565b611614600061031f611b79565b6116545760405162461bcd60e51b81526020600482015260116024820152703ab730b8383937bb32b21031b0b63632b960791b6044820152606401610460565b6002805460ff19168215159081179091556040519081527f0e2fb031ee032dc02d8011dc50b816eb450cf856abd8261680dac74f72165bd29060200160405180910390a150565b600081815260016020526040812061040190611c82565b85806001600160a01b03166116c5611b79565b6001600160a01b03161461170f5760405162461bcd60e51b81526020600482015260116024820152703ab730b8383937bb32b21031b0b63632b960791b6044820152606401610460565b60025460ff1615806117295750611729600061031f611b79565b6117675760405162461bcd60e51b815260206004820152600f60248201526e1c9959da5cdd1c9e481c185d5cd959608a1b6044820152606401610460565b6040805160a08101825287815242602080830191909152818301889052606082018690526001600160a01b0380861660808401528951828b0120908b16600090815260039092529290209091906117be9082611c8c565b506001600160a01b038916600090815260036020908152604080832084845260020182529091208351805185936001909301926117ff9284929101906121ae565b5060208281015160018301556040830151805161182292600285019201906121ae565b506060820151600382810191909155608090920151600490910180546001600160a01b0319166001600160a01b039283161790558a16600090815260209182526040808220848352600201909252908120805491600191906118848385612a9a565b90915550506001600160a01b038a166000908152600360209081526040808320858452600201825280832084845260060182529091208451805186936118ce9284929101906121ae565b506020828101516001830155604083015180516118f192600285019201906121ae565b5060608201516003820155608090910151600490910180546001600160a01b0319166001600160a01b03909216919091179055604051600090600590611938908a9061279f565b908152604051908190036020018120549150899060059061195a908b9061279f565b90815260200160405180910390206001016000838152602001908152602001600020908051906020019061198f9291906121ae565b5061199b816001612a9a565b6005896040516119ab919061279f565b908152604051908190036020019020556001600160a01b038b166119cd611b79565b6001600160a01b03167f4c0484c23e4ea73b4cb562e1868ba93ccba2c9151ac4148fa1b91d9cb17b458186604051611a0591906124d2565b60405180910390a35050505050505050505050565b600082815260208190526040902060010154611a388161062e611b79565b61063d8383611c2f565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316331415611a82575060131936013560601c90565b503390565b905090565b3390565b6000828152602081815260408083206001600160a01b038516845290915290205460ff166106da576000828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055611aeb611b79565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000610bbb836001600160a01b038416611c94565b60006001600160e01b03198216637965db0b60e01b148061040157506301ffc9a760e01b6001600160e01b0319831614610401565b6000611a87611a42565b6000610bbb8383611ce3565b6000828152602081815260408083206001600160a01b038516845290915290205460ff166106da57611bcb816001600160a01b03166014611dd6565b611bd6836020611dd6565b604051602001611be7929190612bd5565b60408051601f198184030181529082905262461bcd60e51b82526104609160040161245d565b611c178282611a90565b600082815260016020526040902061063d9082611b2f565b611c398282611f7f565b600082815260016020526040902061063d908261201c565b6000610bbb8383612031565b6060610bbb8383604051806060016040528060278152602001612cba6027913961205b565b6000610401825490565b6000610bbb83835b6000818152600183016020526040812054611cdb57508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610401565b506000610401565b60008181526001830160205260408120548015611dcc576000611d07600183612c56565b8554909150600090611d1b90600190612c56565b9050818114611d80576000866000018281548110611d3b57611d3b612ab2565b9060005260206000200154905080876000018481548110611d5e57611d5e612ab2565b6000918252602080832090910192909255918252600188019052604090208390555b8554869080611d9157611d91612c6d565b600190038181906000526020600020016000905590558560010160008681526020019081526020016000206000905560019350505050610401565b6000915050610401565b60606000611de5836002612c83565b611df0906002612a9a565b67ffffffffffffffff811115611e0857611e08612286565b6040519080825280601f01601f191660200182016040528015611e32576020820181803683370190505b509050600360fc1b81600081518110611e4d57611e4d612ab2565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110611e7c57611e7c612ab2565b60200101906001600160f81b031916908160001a9053506000611ea0846002612c83565b611eab906001612a9a565b90505b6001811115611f30577f303132333435363738396162636465660000000000000000000000000000000085600f1660108110611eec57611eec612ab2565b1a60f81b828281518110611f0257611f02612ab2565b60200101906001600160f81b031916908160001a90535060049490941c93611f2981612ca2565b9050611eae565b508315610bbb5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610460565b6000828152602081815260408083206001600160a01b038516845290915290205460ff16156106da576000828152602081815260408083206001600160a01b03851684529091529020805460ff19169055611fd8611b79565b6001600160a01b0316816001600160a01b0316837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45050565b6000610bbb836001600160a01b038416611ce3565b600082600001828154811061204857612048612ab2565b9060005260206000200154905092915050565b60606001600160a01b0384163b6120c35760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608401610460565b600080856001600160a01b0316856040516120de919061279f565b600060405180830381855af49150503d8060008114612119576040519150601f19603f3d011682016040523d82523d6000602084013e61211e565b606091505b509150915061212e828286612138565b9695505050505050565b60608315612147575081610bbb565b8251156121575782518084602001fd5b8160405162461bcd60e51b8152600401610460919061245d565b50805461217d906127bb565b6000825580601f1061218d575050565b601f0160209004906000526020600020908101906121ab9190612232565b50565b8280546121ba906127bb565b90600052602060002090601f0160209004810192826121dc5760008555612222565b82601f106121f557805160ff1916838001178555612222565b82800160010185558215612222579182015b82811115612222578251825591602001919060010190612207565b5061222e929150612232565b5090565b5b8082111561222e5760008155600101612233565b60006020828403121561225957600080fd5b81356001600160e01b031981168114610bbb57600080fd5b6001600160a01b03811681146121ab57600080fd5b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff811182821017156122c5576122c5612286565b604052919050565b600067ffffffffffffffff8211156122e7576122e7612286565b50601f01601f191660200190565b600082601f83011261230657600080fd5b8135612319612314826122cd565b61229c565b81815284602083860101111561232e57600080fd5b816020850160208301376000918101602001919091529392505050565b6000806040838503121561235e57600080fd5b823561236981612271565b9150602083013567ffffffffffffffff81111561238557600080fd5b612391858286016122f5565b9150509250929050565b6000602082840312156123ad57600080fd5b5035919050565b600080604083850312156123c757600080fd5b8235915060208301356123d981612271565b809150509250929050565b6000602082840312156123f657600080fd5b8135610bbb81612271565b60005b8381101561241c578181015183820152602001612404565b8381111561242b576000848401525b50505050565b60008151808452612449816020860160208601612401565b601f01601f19169290920160200192915050565b602081526000610bbb6020830184612431565b6000815160a0845261248560a0850182612431565b905060208301516020850152604083015184820360408601526124a88282612431565b915050606083015160608501526001600160a01b0360808401511660808501528091505092915050565b602081526000610bbb6020830184612470565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101561253a57603f19888603018452612528858351612470565b9450928501929085019060010161250c565b5092979650505050505050565b60006020828403121561255957600080fd5b813567ffffffffffffffff81111561257057600080fd5b61257c848285016122f5565b949350505050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101561253a57603f198886030184526125c7858351612431565b945092850192908501906001016125ab565b600080604083850312156125ec57600080fd5b50508035926020909101359150565b6000806020838503121561260e57600080fd5b823567ffffffffffffffff8082111561262657600080fd5b818501915085601f83011261263a57600080fd5b81358181111561264957600080fd5b8660208260051b850101111561265e57600080fd5b60209290920196919550909350505050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101561253a57603f198886030184526126b3858351612431565b94509285019290850190600101612697565b6000602082840312156126d757600080fd5b81358015158114610bbb57600080fd5b60008060008060008060c0878903121561270057600080fd5b863561270b81612271565b9550602087013567ffffffffffffffff8082111561272857600080fd5b6127348a838b016122f5565b9650604089013591508082111561274a57600080fd5b6127568a838b016122f5565b9550606089013591508082111561276c57600080fd5b5061277989828a016122f5565b9350506080870135915060a087013561279181612271565b809150509295509295509295565b600082516127b1818460208701612401565b9190910192915050565b600181811c908216806127cf57607f821691505b602082108114156127f057634e487b7160e01b600052602260045260246000fd5b50919050565b600082601f83011261280757600080fd5b8151612815612314826122cd565b81815284602083860101111561282a57600080fd5b61257c826020830160208701612401565b60006020828403121561284d57600080fd5b815167ffffffffffffffff81111561286457600080fd5b61257c848285016127f6565b6040815260006128836040830185612431565b82810360208401526128958185612431565b95945050505050565b6001600160a01b038316815260406020820152600061257c6040830184612431565b805161080781612271565b600060a082840312156128dd57600080fd5b60405160a0810167ffffffffffffffff828210818311171561290157612901612286565b81604052829350845191508082111561291957600080fd5b612925868387016127f6565b835260208501516020840152604085015191508082111561294557600080fd5b50612952858286016127f6565b6040830152506060830151606082015261296e608084016128c0565b60808201525092915050565b60006020828403121561298c57600080fd5b815167ffffffffffffffff8111156129a357600080fd5b61257c848285016128cb565b600067ffffffffffffffff8211156129c9576129c9612286565b5060051b60200190565b600060208083850312156129e657600080fd5b825167ffffffffffffffff808211156129fe57600080fd5b818501915085601f830112612a1257600080fd5b8151612a20612314826129af565b81815260059190911b83018401908481019088831115612a3f57600080fd5b8585015b83811015612a7757805185811115612a5b5760008081fd5b612a698b89838a01016128cb565b845250918601918601612a43565b5098975050505050505050565b634e487b7160e01b600052601160045260246000fd5b60008219821115612aad57612aad612a84565b500190565b634e487b7160e01b600052603260045260246000fd5b60006020808385031215612adb57600080fd5b825167ffffffffffffffff80821115612af357600080fd5b818501915085601f830112612b0757600080fd5b8151612b15612314826129af565b81815260059190911b83018401908481019088831115612b3457600080fd5b8585015b83811015612a7757805185811115612b505760008081fd5b612b5e8b89838a01016127f6565b845250918601918601612b38565b6000808335601e19843603018112612b8357600080fd5b83018035915067ffffffffffffffff821115612b9e57600080fd5b602001915036819003821315612bb357600080fd5b9250929050565b6000600019821415612bce57612bce612a84565b5060010190565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351612c0d816017850160208801612401565b7f206973206d697373696e6720726f6c65200000000000000000000000000000006017918401918201528351612c4a816028840160208801612401565b01602801949350505050565b600082821015612c6857612c68612a84565b500390565b634e487b7160e01b600052603160045260246000fd5b6000816000190483118215151615612c9d57612c9d612a84565b500290565b600081612cb157612cb1612a84565b50600019019056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212205419c38516169e02ab49ff4ad97e40422e52366a0aae0a4a69abe1679ca9fda664736f6c634300080c0033";
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
    static createInterface(): ContractPublisherInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ContractPublisher;
}
export {};
//# sourceMappingURL=ContractPublisher__factory.d.ts.map