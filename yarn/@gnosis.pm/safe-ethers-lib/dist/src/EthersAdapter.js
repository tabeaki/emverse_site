"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _EthersAdapter_ethers, _EthersAdapter_signer, _EthersAdapter_provider;
Object.defineProperty(exports, "__esModule", { value: true });
const bignumber_1 = require("@ethersproject/bignumber");
const safe_core_sdk_utils_1 = require("@gnosis.pm/safe-core-sdk-utils");
const contractInstancesEthers_1 = require("./contracts/contractInstancesEthers");
const utils_1 = require("./utils");
class EthersAdapter {
    constructor({ ethers, signer }) {
        _EthersAdapter_ethers.set(this, void 0);
        _EthersAdapter_signer.set(this, void 0);
        _EthersAdapter_provider.set(this, void 0);
        if (!ethers) {
            throw new Error('ethers property missing from options');
        }
        if (!signer.provider) {
            throw new Error('Signer must be connected to a provider');
        }
        __classPrivateFieldSet(this, _EthersAdapter_signer, signer, "f");
        __classPrivateFieldSet(this, _EthersAdapter_provider, signer.provider, "f");
        __classPrivateFieldSet(this, _EthersAdapter_ethers, ethers, "f");
    }
    getProvider() {
        return __classPrivateFieldGet(this, _EthersAdapter_provider, "f");
    }
    getSigner() {
        return __classPrivateFieldGet(this, _EthersAdapter_signer, "f");
    }
    isAddress(address) {
        return __classPrivateFieldGet(this, _EthersAdapter_ethers, "f").utils.isAddress(address);
    }
    async getEip3770Address(fullAddress) {
        const chainId = await this.getChainId();
        return (0, safe_core_sdk_utils_1.validateEip3770Address)(fullAddress, chainId);
    }
    async getBalance(address, blockTag) {
        return bignumber_1.BigNumber.from(await __classPrivateFieldGet(this, _EthersAdapter_provider, "f").getBalance(address, blockTag));
    }
    async getNonce(address, blockTag) {
        return __classPrivateFieldGet(this, _EthersAdapter_provider, "f").getTransactionCount(address, blockTag);
    }
    async getChainId() {
        return (await __classPrivateFieldGet(this, _EthersAdapter_provider, "f").getNetwork()).chainId;
    }
    getChecksummedAddress(address) {
        return __classPrivateFieldGet(this, _EthersAdapter_ethers, "f").utils.getAddress(address);
    }
    getSafeContract({ safeVersion, chainId, singletonDeployment, customContractAddress }) {
        const contractAddress = customContractAddress
            ? customContractAddress
            : singletonDeployment === null || singletonDeployment === void 0 ? void 0 : singletonDeployment.networkAddresses[chainId];
        if (!contractAddress) {
            throw new Error('Invalid SafeProxy contract address');
        }
        return (0, contractInstancesEthers_1.getSafeContractInstance)(safeVersion, contractAddress, __classPrivateFieldGet(this, _EthersAdapter_signer, "f"));
    }
    getMultiSendContract({ safeVersion, chainId, singletonDeployment, customContractAddress }) {
        const contractAddress = customContractAddress
            ? customContractAddress
            : singletonDeployment === null || singletonDeployment === void 0 ? void 0 : singletonDeployment.networkAddresses[chainId];
        if (!contractAddress) {
            throw new Error('Invalid MultiSend contract address');
        }
        return (0, contractInstancesEthers_1.getMultiSendContractInstance)(safeVersion, contractAddress, __classPrivateFieldGet(this, _EthersAdapter_signer, "f"));
    }
    getMultiSendCallOnlyContract({ safeVersion, chainId, singletonDeployment, customContractAddress }) {
        const contractAddress = customContractAddress
            ? customContractAddress
            : singletonDeployment === null || singletonDeployment === void 0 ? void 0 : singletonDeployment.networkAddresses[chainId];
        if (!contractAddress) {
            throw new Error('Invalid MultiSendCallOnly contract address');
        }
        return (0, contractInstancesEthers_1.getMultiSendCallOnlyContractInstance)(safeVersion, contractAddress, __classPrivateFieldGet(this, _EthersAdapter_signer, "f"));
    }
    getSafeProxyFactoryContract({ safeVersion, chainId, singletonDeployment, customContractAddress }) {
        const contractAddress = customContractAddress
            ? customContractAddress
            : singletonDeployment === null || singletonDeployment === void 0 ? void 0 : singletonDeployment.networkAddresses[chainId];
        if (!contractAddress) {
            throw new Error('Invalid SafeProxyFactory contract address');
        }
        return (0, contractInstancesEthers_1.getSafeProxyFactoryContractInstance)(safeVersion, contractAddress, __classPrivateFieldGet(this, _EthersAdapter_signer, "f"));
    }
    async getContractCode(address, blockTag) {
        return __classPrivateFieldGet(this, _EthersAdapter_provider, "f").getCode(address, blockTag);
    }
    async isContractDeployed(address, blockTag) {
        const contractCode = await __classPrivateFieldGet(this, _EthersAdapter_provider, "f").getCode(address, blockTag);
        return contractCode !== '0x';
    }
    async getStorageAt(address, position) {
        const content = await __classPrivateFieldGet(this, _EthersAdapter_provider, "f").getStorageAt(address, position);
        const decodedContent = this.decodeParameters(['address'], content);
        return decodedContent[0];
    }
    async getTransaction(transactionHash) {
        return __classPrivateFieldGet(this, _EthersAdapter_provider, "f").getTransaction(transactionHash);
    }
    async getSignerAddress() {
        return __classPrivateFieldGet(this, _EthersAdapter_signer, "f").getAddress();
    }
    signMessage(message) {
        const messageArray = __classPrivateFieldGet(this, _EthersAdapter_ethers, "f").utils.arrayify(message);
        return __classPrivateFieldGet(this, _EthersAdapter_signer, "f").signMessage(messageArray);
    }
    async signTypedData(safeTransactionEIP712Args) {
        if ((0, utils_1.isTypedDataSigner)(__classPrivateFieldGet(this, _EthersAdapter_signer, "f"))) {
            const typedData = (0, safe_core_sdk_utils_1.generateTypedData)(safeTransactionEIP712Args);
            const signature = await __classPrivateFieldGet(this, _EthersAdapter_signer, "f")._signTypedData(typedData.domain, { SafeTx: typedData.types.SafeTx }, typedData.message);
            return signature;
        }
        throw new Error('The current signer does not implement EIP-712 to sign typed data');
    }
    async estimateGas(transaction) {
        return (await __classPrivateFieldGet(this, _EthersAdapter_provider, "f").estimateGas(transaction)).toNumber();
    }
    call(transaction, blockTag) {
        return __classPrivateFieldGet(this, _EthersAdapter_provider, "f").call(transaction, blockTag);
    }
    encodeParameters(types, values) {
        return new (__classPrivateFieldGet(this, _EthersAdapter_ethers, "f").utils.AbiCoder)().encode(types, values);
    }
    decodeParameters(types, values) {
        return new (__classPrivateFieldGet(this, _EthersAdapter_ethers, "f").utils.AbiCoder)().decode(types, values);
    }
}
_EthersAdapter_ethers = new WeakMap(), _EthersAdapter_signer = new WeakMap(), _EthersAdapter_provider = new WeakMap();
exports.default = EthersAdapter;
//# sourceMappingURL=EthersAdapter.js.map