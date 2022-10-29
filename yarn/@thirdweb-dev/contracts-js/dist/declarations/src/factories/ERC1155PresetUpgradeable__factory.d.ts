import type { ERC1155PresetUpgradeable, ERC1155PresetUpgradeableInterface } from "../ERC1155PresetUpgradeable";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, ContractFactory, Overrides } from "ethers";
declare type ERC1155PresetUpgradeableConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ERC1155PresetUpgradeable__factory extends ContractFactory {
    constructor(...args: ERC1155PresetUpgradeableConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ERC1155PresetUpgradeable>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ERC1155PresetUpgradeable;
    connect(signer: Signer): ERC1155PresetUpgradeable__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50612dd1806100206000396000f3fe608060405234801561001057600080fd5b50600436106101b85760003560e01c8063731133e9116100f9578063bd85b03911610097578063e985e9c511610071578063e985e9c514610415578063f23a6e6114610452578063f242432a14610471578063f5298aca1461048457600080fd5b8063bd85b039146103ce578063ca15c873146103ef578063d547741f1461040257600080fd5b806391d14854116100d357806391d148541461035b578063a217fddf14610394578063a22cb4651461039c578063bc197c81146103af57600080fd5b8063731133e9146103155780638456cb59146103285780639010d07c1461033057600080fd5b80632eb2c2d6116101665780633f4ba83a116101405780633f4ba83a146102ce5780634e1273f4146102d65780635c975abb146102f65780636b20c4541461030257600080fd5b80632eb2c2d6146102955780632f2ff15d146102a857806336568abe146102bb57600080fd5b8063150b7a0211610197578063150b7a02146102265780631f7fdffa1461025d578063248a9ca31461027257600080fd5b8062fdd58e146101bd57806301ffc9a7146101e35780630e89341c14610206575b600080fd5b6101d06101cb36600461239a565b610497565b6040519081526020015b60405180910390f35b6101f66101f13660046123dd565b610534565b60405190151581526020016101da565b6102196102143660046123fa565b61053f565b6040516101da919061246b565b610244610234366004612535565b630a85bd0160e11b949350505050565b6040516001600160e01b031990911681526020016101da565b61027061026b366004612632565b6105d4565b005b6101d06102803660046123fa565b600090815260fb602052604090206001015490565b6102706102a33660046126bf565b610654565b6102706102b6366004612769565b6106f6565b6102706102c9366004612769565b610721565b6102706107ad565b6102e96102e4366004612795565b610825565b6040516101da919061289b565b6101c35460ff166101f6565b6102706103103660046128ae565b61094f565b610270610323366004612922565b6109d4565b610270610a4e565b61034361033e36600461296b565b610ac4565b6040516001600160a01b0390911681526020016101da565b6101f6610369366004612769565b600091825260fb602090815260408084206001600160a01b0393909316845291905290205460ff1690565b6101d0600081565b6102706103aa36600461298d565b610ae4565b6102446103bd3660046126bf565b63bc197c8160e01b95945050505050565b6101d06103dc3660046123fa565b6000908152610227602052604090205490565b6101d06103fd3660046123fa565b610aef565b610270610410366004612769565b610b07565b6101f66104233660046129c9565b6001600160a01b0391821660009081526101606020908152604080832093909416825291909152205460ff1690565b6102446104603660046129f3565b63f23a6e6160e01b95945050505050565b61027061047f3660046129f3565b610b2d565b610270610492366004612a58565b610bb4565b60006001600160a01b0383166105085760405162461bcd60e51b815260206004820152602b60248201527f455243313135353a2062616c616e636520717565727920666f7220746865207a60448201526a65726f206164647265737360a81b60648201526084015b60405180910390fd5b50600081815261015f602090815260408083206001600160a01b03861684529091529020545b92915050565b600061052e82610c39565b6060610161805461054f90612a8b565b80601f016020809104026020016040519081016040528092919081815260200182805461057b90612a8b565b80156105c85780601f1061059d576101008083540402835291602001916105c8565b820191906000526020600020905b8154815290600101906020018083116105ab57829003601f168201915b50505050509050919050565b6105fe7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a633610369565b6106425760405162461bcd60e51b81526020600482015260156024820152746d7573742068617665206d696e74657220726f6c6560581b60448201526064016104ff565b61064e84848484610c79565b50505050565b6001600160a01b03851633148061067057506106708533610423565b6106e25760405162461bcd60e51b815260206004820152603260248201527f455243313135353a207472616e736665722063616c6c6572206973206e6f742060448201527f6f776e6572206e6f7220617070726f766564000000000000000000000000000060648201526084016104ff565b6106ef8585858585610e50565b5050505050565b600082815260fb602052604090206001015461071281336110c1565b61071c8383611141565b505050565b6001600160a01b038116331461079f5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c66000000000000000000000000000000000060648201526084016104ff565b6107a98282611164565b5050565b6107d77f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a33610369565b61081b5760405162461bcd60e51b81526020600482015260156024820152746d75737420686176652070617573657220726f6c6560581b60448201526064016104ff565b610823611187565b565b6060815183511461088a5760405162461bcd60e51b815260206004820152602960248201527f455243313135353a206163636f756e747320616e6420696473206c656e677468604482015268040dad2e6dac2e8c6d60bb1b60648201526084016104ff565b6000835167ffffffffffffffff8111156108a6576108a661247e565b6040519080825280602002602001820160405280156108cf578160200160208202803683370190505b50905060005b84518110156109475761091a8582815181106108f3576108f3612ac6565b602002602001015185838151811061090d5761090d612ac6565b6020026020010151610497565b82828151811061092c5761092c612ac6565b602090810291909101015261094081612af2565b90506108d5565b509392505050565b6001600160a01b03831633148061096b575061096b8333610423565b6109c95760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2063616c6c6572206973206e6f74206f776e6572206e6f7260448201526808185c1c1c9bdd995960ba1b60648201526084016104ff565b61071c838383611225565b6109fe7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a633610369565b610a425760405162461bcd60e51b81526020600482015260156024820152746d7573742068617665206d696e74657220726f6c6560581b60448201526064016104ff565b61064e84848484611471565b610a787f65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a33610369565b610abc5760405162461bcd60e51b81526020600482015260156024820152746d75737420686176652070617573657220726f6c6560581b60448201526064016104ff565b610823611584565b600082815261012d60205260408120610add908361160e565b9392505050565b6107a933838361161a565b600081815261012d6020526040812061052e906116fc565b600082815260fb6020526040902060010154610b2381336110c1565b61071c8383611164565b6001600160a01b038516331480610b495750610b498533610423565b610ba75760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2063616c6c6572206973206e6f74206f776e6572206e6f7260448201526808185c1c1c9bdd995960ba1b60648201526084016104ff565b6106ef8585858585611706565b6001600160a01b038316331480610bd05750610bd08333610423565b610c2e5760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2063616c6c6572206973206e6f74206f776e6572206e6f7260448201526808185c1c1c9bdd995960ba1b60648201526084016104ff565b61071c8383836118aa565b60006001600160e01b03198216636cdb3d1360e11b1480610c6a57506001600160e01b031982166303a24d0760e21b145b8061052e575061052e82611a29565b6001600160a01b038416610cd95760405162461bcd60e51b815260206004820152602160248201527f455243313135353a206d696e7420746f20746865207a65726f206164647265736044820152607360f81b60648201526084016104ff565b8151835114610d3b5760405162461bcd60e51b815260206004820152602860248201527f455243313135353a2069647320616e6420616d6f756e7473206c656e677468206044820152670dad2e6dac2e8c6d60c31b60648201526084016104ff565b33610d4b81600087878787611a4e565b60005b8451811015610de857838181518110610d6957610d69612ac6565b602002602001015161015f6000878481518110610d8857610d88612ac6565b602002602001015181526020019081526020016000206000886001600160a01b03166001600160a01b031681526020019081526020016000206000828254610dd09190612b0d565b90915550819050610de081612af2565b915050610d4e565b50846001600160a01b031660006001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051610e39929190612b25565b60405180910390a46106ef81600087878787611b6a565b8151835114610eb25760405162461bcd60e51b815260206004820152602860248201527f455243313135353a2069647320616e6420616d6f756e7473206c656e677468206044820152670dad2e6dac2e8c6d60c31b60648201526084016104ff565b6001600160a01b038416610f165760405162461bcd60e51b815260206004820152602560248201527f455243313135353a207472616e7366657220746f20746865207a65726f206164604482015264647265737360d81b60648201526084016104ff565b33610f25818787878787611a4e565b60005b8451811015611053576000858281518110610f4557610f45612ac6565b602002602001015190506000858381518110610f6357610f63612ac6565b602090810291909101810151600084815261015f835260408082206001600160a01b038e168352909352919091205490915081811015610ff85760405162461bcd60e51b815260206004820152602a60248201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60448201526939103a3930b739b332b960b11b60648201526084016104ff565b600083815261015f602090815260408083206001600160a01b038e8116855292528083208585039055908b16825281208054849290611038908490612b0d565b925050819055505050508061104c90612af2565b9050610f28565b50846001600160a01b0316866001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb87876040516110a3929190612b25565b60405180910390a46110b9818787878787611b6a565b505050505050565b600082815260fb602090815260408083206001600160a01b038516845290915290205460ff166107a9576110ff816001600160a01b03166014611d10565b61110a836020611d10565b60405160200161111b929190612b53565b60408051601f198184030181529082905262461bcd60e51b82526104ff9160040161246b565b61114b8282611eb9565b600082815261012d6020526040902061071c9082611f5b565b61116e8282611f70565b600082815261012d6020526040902061071c9082611ff3565b6101c35460ff166111da5760405162461bcd60e51b815260206004820152601460248201527f5061757361626c653a206e6f742070617573656400000000000000000000000060448201526064016104ff565b6101c3805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b6001600160a01b0383166112875760405162461bcd60e51b815260206004820152602360248201527f455243313135353a206275726e2066726f6d20746865207a65726f206164647260448201526265737360e81b60648201526084016104ff565b80518251146112e95760405162461bcd60e51b815260206004820152602860248201527f455243313135353a2069647320616e6420616d6f756e7473206c656e677468206044820152670dad2e6dac2e8c6d60c31b60648201526084016104ff565b600033905061130c81856000868660405180602001604052806000815250611a4e565b60005b835181101561141257600084828151811061132c5761132c612ac6565b60200260200101519050600084838151811061134a5761134a612ac6565b602090810291909101810151600084815261015f835260408082206001600160a01b038c1683529093529190912054909150818110156113d85760405162461bcd60e51b8152602060048201526024808201527f455243313135353a206275726e20616d6f756e7420657863656564732062616c604482015263616e636560e01b60648201526084016104ff565b600092835261015f602090815260408085206001600160a01b038b168652909152909220910390558061140a81612af2565b91505061130f565b5060006001600160a01b0316846001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8686604051611463929190612b25565b60405180910390a450505050565b6001600160a01b0384166114d15760405162461bcd60e51b815260206004820152602160248201527f455243313135353a206d696e7420746f20746865207a65726f206164647265736044820152607360f81b60648201526084016104ff565b336114f1816000876114e288612008565b6114eb88612008565b87611a4e565b600084815261015f602090815260408083206001600160a01b038916845290915281208054859290611524908490612b0d565b909155505060408051858152602081018590526001600160a01b0380881692600092918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a46106ef81600087878787612053565b6101c35460ff16156115d85760405162461bcd60e51b815260206004820152601060248201527f5061757361626c653a207061757365640000000000000000000000000000000060448201526064016104ff565b6101c3805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586112083390565b6000610add838361214f565b816001600160a01b0316836001600160a01b0316141561168e5760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2073657474696e6720617070726f76616c20737461747573604482015268103337b91039b2b63360b91b60648201526084016104ff565b6001600160a01b0383811660008181526101606020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b600061052e825490565b6001600160a01b03841661176a5760405162461bcd60e51b815260206004820152602560248201527f455243313135353a207472616e7366657220746f20746865207a65726f206164604482015264647265737360d81b60648201526084016104ff565b3361177a8187876114e288612008565b600084815261015f602090815260408083206001600160a01b038a168452909152902054838110156118015760405162461bcd60e51b815260206004820152602a60248201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60448201526939103a3930b739b332b960b11b60648201526084016104ff565b600085815261015f602090815260408083206001600160a01b038b8116855292528083208785039055908816825281208054869290611841908490612b0d565b909155505060408051868152602081018690526001600160a01b03808916928a821692918616917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a46118a1828888888888612053565b50505050505050565b6001600160a01b03831661190c5760405162461bcd60e51b815260206004820152602360248201527f455243313135353a206275726e2066726f6d20746865207a65726f206164647260448201526265737360e81b60648201526084016104ff565b3361193b8185600061191d87612008565b61192687612008565b60405180602001604052806000815250611a4e565b600083815261015f602090815260408083206001600160a01b0388168452909152902054828110156119bb5760405162461bcd60e51b8152602060048201526024808201527f455243313135353a206275726e20616d6f756e7420657863656564732062616c604482015263616e636560e01b60648201526084016104ff565b600084815261015f602090815260408083206001600160a01b03898116808652918452828520888703905582518981529384018890529092908616917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b60006001600160e01b03198216635a05180f60e01b148061052e575061052e82612179565b611a5c86868686868661219e565b6001600160a01b038516611ae45760005b8351811015611ae257828181518110611a8857611a88612ac6565b60200260200101516102276000868481518110611aa757611aa7612ac6565b602002602001015181526020019081526020016000206000828254611acc9190612b0d565b90915550611adb905081612af2565b9050611a6d565b505b6001600160a01b0384166110b95760005b83518110156118a157828181518110611b1057611b10612ac6565b60200260200101516102276000868481518110611b2f57611b2f612ac6565b602002602001015181526020019081526020016000206000828254611b549190612bd4565b90915550611b63905081612af2565b9050611af5565b6001600160a01b0384163b156110b95760405163bc197c8160e01b81526001600160a01b0385169063bc197c8190611bae9089908990889088908890600401612beb565b6020604051808303816000875af1925050508015611be9575060408051601f3d908101601f19168201909252611be691810190612c49565b60015b611c9f57611bf5612c66565b806308c379a01415611c2f5750611c0a612c82565b80611c155750611c31565b8060405162461bcd60e51b81526004016104ff919061246b565b505b60405162461bcd60e51b815260206004820152603460248201527f455243313135353a207472616e7366657220746f206e6f6e204552433131353560448201527f526563656976657220696d706c656d656e74657200000000000000000000000060648201526084016104ff565b6001600160e01b0319811663bc197c8160e01b146118a15760405162461bcd60e51b815260206004820152602860248201527f455243313135353a204552433131353552656365697665722072656a656374656044820152676420746f6b656e7360c01b60648201526084016104ff565b60606000611d1f836002612d0c565b611d2a906002612b0d565b67ffffffffffffffff811115611d4257611d4261247e565b6040519080825280601f01601f191660200182016040528015611d6c576020820181803683370190505b509050600360fc1b81600081518110611d8757611d87612ac6565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110611db657611db6612ac6565b60200101906001600160f81b031916908160001a9053506000611dda846002612d0c565b611de5906001612b0d565b90505b6001811115611e6a577f303132333435363738396162636465660000000000000000000000000000000085600f1660108110611e2657611e26612ac6565b1a60f81b828281518110611e3c57611e3c612ac6565b60200101906001600160f81b031916908160001a90535060049490941c93611e6381612d2b565b9050611de8565b508315610add5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016104ff565b600082815260fb602090815260408083206001600160a01b038516845290915290205460ff166107a957600082815260fb602090815260408083206001600160a01b03851684529091529020805460ff19166001179055611f173390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000610add836001600160a01b038416612207565b600082815260fb602090815260408083206001600160a01b038516845290915290205460ff16156107a957600082815260fb602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b6000610add836001600160a01b038416612256565b6040805160018082528183019092526060916000919060208083019080368337019050509050828160008151811061204257612042612ac6565b602090810291909101015292915050565b6001600160a01b0384163b156110b95760405163f23a6e6160e01b81526001600160a01b0385169063f23a6e61906120979089908990889088908890600401612d42565b6020604051808303816000875af19250505080156120d2575060408051601f3d908101601f191682019092526120cf91810190612c49565b60015b6120de57611bf5612c66565b6001600160e01b0319811663f23a6e6160e01b146118a15760405162461bcd60e51b815260206004820152602860248201527f455243313135353a204552433131353552656365697665722072656a656374656044820152676420746f6b656e7360c01b60648201526084016104ff565b600082600001828154811061216657612166612ac6565b9060005260206000200154905092915050565b60006001600160e01b03198216637965db0b60e01b148061052e575061052e82612349565b6101c35460ff16156110b95760405162461bcd60e51b815260206004820152602c60248201527f455243313135355061757361626c653a20746f6b656e207472616e736665722060448201526b1dda1a5b19481c185d5cd95960a21b60648201526084016104ff565b600081815260018301602052604081205461224e5750815460018181018455600084815260208082209093018490558454848252828601909352604090209190915561052e565b50600061052e565b6000818152600183016020526040812054801561233f57600061227a600183612bd4565b855490915060009061228e90600190612bd4565b90508181146122f35760008660000182815481106122ae576122ae612ac6565b90600052602060002001549050808760000184815481106122d1576122d1612ac6565b6000918252602080832090910192909255918252600188019052604090208390555b855486908061230457612304612d85565b60019003818190600052602060002001600090559055856001016000868152602001908152602001600020600090556001935050505061052e565b600091505061052e565b60006001600160e01b03198216630271189760e51b148061052e57506301ffc9a760e01b6001600160e01b031983161461052e565b80356001600160a01b038116811461239557600080fd5b919050565b600080604083850312156123ad57600080fd5b6123b68361237e565b946020939093013593505050565b6001600160e01b0319811681146123da57600080fd5b50565b6000602082840312156123ef57600080fd5b8135610add816123c4565b60006020828403121561240c57600080fd5b5035919050565b60005b8381101561242e578181015183820152602001612416565b8381111561064e5750506000910152565b60008151808452612457816020860160208601612413565b601f01601f19169290920160200192915050565b602081526000610add602083018461243f565b634e487b7160e01b600052604160045260246000fd5b601f8201601f1916810167ffffffffffffffff811182821017156124ba576124ba61247e565b6040525050565b600082601f8301126124d257600080fd5b813567ffffffffffffffff8111156124ec576124ec61247e565b604051612503601f8301601f191660200182612494565b81815284602083860101111561251857600080fd5b816020850160208301376000918101602001919091529392505050565b6000806000806080858703121561254b57600080fd5b6125548561237e565b93506125626020860161237e565b925060408501359150606085013567ffffffffffffffff81111561258557600080fd5b612591878288016124c1565b91505092959194509250565b600067ffffffffffffffff8211156125b7576125b761247e565b5060051b60200190565b600082601f8301126125d257600080fd5b813560206125df8261259d565b6040516125ec8282612494565b83815260059390931b850182019282810191508684111561260c57600080fd5b8286015b848110156126275780358352918301918301612610565b509695505050505050565b6000806000806080858703121561264857600080fd5b6126518561237e565b9350602085013567ffffffffffffffff8082111561266e57600080fd5b61267a888389016125c1565b9450604087013591508082111561269057600080fd5b61269c888389016125c1565b935060608701359150808211156126b257600080fd5b50612591878288016124c1565b600080600080600060a086880312156126d757600080fd5b6126e08661237e565b94506126ee6020870161237e565b9350604086013567ffffffffffffffff8082111561270b57600080fd5b61271789838a016125c1565b9450606088013591508082111561272d57600080fd5b61273989838a016125c1565b9350608088013591508082111561274f57600080fd5b5061275c888289016124c1565b9150509295509295909350565b6000806040838503121561277c57600080fd5b8235915061278c6020840161237e565b90509250929050565b600080604083850312156127a857600080fd5b823567ffffffffffffffff808211156127c057600080fd5b818501915085601f8301126127d457600080fd5b813560206127e18261259d565b6040516127ee8282612494565b83815260059390931b850182019282810191508984111561280e57600080fd5b948201945b83861015612833576128248661237e565b82529482019490820190612813565b9650508601359250508082111561284957600080fd5b50612856858286016125c1565b9150509250929050565b600081518084526020808501945080840160005b8381101561289057815187529582019590820190600101612874565b509495945050505050565b602081526000610add6020830184612860565b6000806000606084860312156128c357600080fd5b6128cc8461237e565b9250602084013567ffffffffffffffff808211156128e957600080fd5b6128f5878388016125c1565b9350604086013591508082111561290b57600080fd5b50612918868287016125c1565b9150509250925092565b6000806000806080858703121561293857600080fd5b6129418561237e565b93506020850135925060408501359150606085013567ffffffffffffffff81111561258557600080fd5b6000806040838503121561297e57600080fd5b50508035926020909101359150565b600080604083850312156129a057600080fd5b6129a98361237e565b9150602083013580151581146129be57600080fd5b809150509250929050565b600080604083850312156129dc57600080fd5b6129e58361237e565b915061278c6020840161237e565b600080600080600060a08688031215612a0b57600080fd5b612a148661237e565b9450612a226020870161237e565b93506040860135925060608601359150608086013567ffffffffffffffff811115612a4c57600080fd5b61275c888289016124c1565b600080600060608486031215612a6d57600080fd5b612a768461237e565b95602085013595506040909401359392505050565b600181811c90821680612a9f57607f821691505b60208210811415612ac057634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000600019821415612b0657612b06612adc565b5060010190565b60008219821115612b2057612b20612adc565b500190565b604081526000612b386040830185612860565b8281036020840152612b4a8185612860565b95945050505050565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351612b8b816017850160208801612413565b7f206973206d697373696e6720726f6c65200000000000000000000000000000006017918401918201528351612bc8816028840160208801612413565b01602801949350505050565b600082821015612be657612be6612adc565b500390565b60006001600160a01b03808816835280871660208401525060a06040830152612c1760a0830186612860565b8281036060840152612c298186612860565b90508281036080840152612c3d818561243f565b98975050505050505050565b600060208284031215612c5b57600080fd5b8151610add816123c4565b600060033d1115612c7f5760046000803e5060005160e01c5b90565b600060443d1015612c905790565b6040516003193d81016004833e81513d67ffffffffffffffff8160248401118184111715612cc057505050505090565b8285019150815181811115612cd85750505050505090565b843d8701016020828501011115612cf25750505050505090565b612d0160208286010187612494565b509095945050505050565b6000816000190483118215151615612d2657612d26612adc565b500290565b600081612d3a57612d3a612adc565b506000190190565b60006001600160a01b03808816835280871660208401525084604083015283606083015260a06080830152612d7a60a083018461243f565b979650505050505050565b634e487b7160e01b600052603160045260246000fdfea2646970667358221220993ccb1cf3f8dd5da77c06a1f5c68ef96645c17803d1ec01fdc8ed650f830f3c64736f6c634300080c0033";
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
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
    static createInterface(): ERC1155PresetUpgradeableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC1155PresetUpgradeable;
}
export {};
//# sourceMappingURL=ERC1155PresetUpgradeable__factory.d.ts.map