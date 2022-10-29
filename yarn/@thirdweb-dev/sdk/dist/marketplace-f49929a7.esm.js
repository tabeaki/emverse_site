import { _ as _defineProperty, D as DEFAULT_QUERY_ALL_COUNT } from './QueryParams-7ff2dcd2.esm.js';
import { cm as ContractWrapper, ag as ContractMetadata, cp as MarketplaceContractSchema, ah as ContractRoles, af as ContractEncoder, aQ as GasCostEstimator, aN as MarketplaceDirect, aO as MarketplaceAuction, aR as ContractEvents, aT as ContractPlatformFee, aS as ContractInterceptor, bf as ListingNotFoundError, aZ as ListingType, br as getRoleHash, cq as mapOffer, cr as isNativeToken, bV as NATIVE_TOKENS } from './paper-xyz-7df7d34a.esm.js';
import { constants, BigNumber } from 'ethers';
import invariant from 'tiny-invariant';
import 'bn.js';
import 'zod';
import '@thirdweb-dev/contracts-js/dist/abis/IERC165.json';
import '@thirdweb-dev/contracts-js/dist/abis/IERC721.json';
import '@thirdweb-dev/contracts-js/dist/abis/IERC1155.json';
import 'eventemitter3';
import 'cross-fetch';
import '@thirdweb-dev/contracts-js/dist/abis/Forwarder.json';
import '@thirdweb-dev/contracts-js/dist/abis/IBurnableERC20.json';
import '@thirdweb-dev/contracts-js/dist/abis/IDropSinglePhase.json';
import '@thirdweb-dev/contracts-js/dist/abis/IERC20.json';
import '@thirdweb-dev/contracts-js/dist/abis/IMintableERC20.json';
import '@thirdweb-dev/contracts-js/dist/abis/IMulticall.json';
import '@thirdweb-dev/contracts-js/dist/abis/ISignatureMintERC20.json';
import '@thirdweb-dev/contracts-js/dist/abis/IBurnableERC721.json';
import '@thirdweb-dev/contracts-js/dist/abis/IClaimableERC721.json';
import '@thirdweb-dev/contracts-js/dist/abis/IDelayedReveal.json';
import '@thirdweb-dev/contracts-js/dist/abis/IERC721Enumerable.json';
import '@thirdweb-dev/contracts-js/dist/abis/IERC721Supply.json';
import '@thirdweb-dev/contracts-js/dist/abis/ILazyMint.json';
import '@thirdweb-dev/contracts-js/dist/abis/IMintableERC721.json';
import '@thirdweb-dev/contracts-js/dist/abis/SignatureMintERC721.json';
import '@thirdweb-dev/contracts-js/dist/abis/DelayedReveal.json';
import '@thirdweb-dev/contracts-js/dist/abis/DropSinglePhase1155.json';
import '@thirdweb-dev/contracts-js/dist/abis/IBurnableERC1155.json';
import '@thirdweb-dev/contracts-js/dist/abis/IClaimableERC1155.json';
import '@thirdweb-dev/contracts-js/dist/abis/IERC1155Enumerable.json';
import '@thirdweb-dev/contracts-js/dist/abis/IMintableERC1155.json';
import '@thirdweb-dev/contracts-js/dist/abis/ISignatureMintERC1155.json';
import 'bs58';
import 'cbor-x';
import '@thirdweb-dev/contracts-js/dist/abis/IERC20Metadata.json';
import 'merkletreejs';
import 'fast-deep-equal';
import 'uuid';
import '@thirdweb-dev/contracts-js/dist/abis/IERC721Metadata.json';
import '@thirdweb-dev/contracts-js/dist/abis/IERC1155Metadata.json';
import '@thirdweb-dev/contracts-js/dist/abis/IDelayedRevealDeprecated.json';
import '@thirdweb-dev/contracts-js/dist/abis/TWFactory.json';
import '@thirdweb-dev/contracts-js/dist/abis/TWRegistry.json';
import '@thirdweb-dev/contracts-js/dist/abis/ContractPublisher.json';
import '@thirdweb-dev/contracts-js/dist/abis/IThirdwebContract.json';
import '@thirdweb-dev/storage';
import '@thirdweb-dev/contracts-js/dist/abis/IAppURI.json';
import '@thirdweb-dev/contracts-js/dist/abis/IContractMetadata.json';
import '@thirdweb-dev/contracts-js/dist/abis/IPermissions.json';
import '@thirdweb-dev/contracts-js/dist/abis/IPermissionsEnumerable.json';
import '@thirdweb-dev/contracts-js/dist/abis/IPlatformFee.json';
import '@thirdweb-dev/contracts-js/dist/abis/IPrimarySale.json';
import '@thirdweb-dev/contracts-js/dist/abis/IRoyalty.json';
import '@thirdweb-dev/contracts-js/dist/abis/Ownable.json';

/**
 * Create your own whitelabel marketplace that enables users to buy and sell any digital assets.
 *
 * @example
 *
 * ```javascript
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk";
 *
 * const sdk = new ThirdwebSDK("{{chainName}}");
 * const contract = sdk.getContract("{{contract_address}}", "marketplace");
 * ```
 *
 * @public
 */

class Marketplace {
  /**
   * @internal
   */

  /**
   * Direct listings
   * @remarks Create and manage direct listings in your marketplace.
   * @example
   * ```javascript
   * // Data of the listing you want to create
   * const listing = {
   *   // address of the NFT contract the asset you want to list is on
   *   assetContractAddress: "0x...",
   *   // token ID of the asset you want to list
   *   tokenId: "0",
   *  // when should the listing open up for offers
   *   startTimestamp: new Date(),
   *   // how long the listing will be open for
   *   listingDurationInSeconds: 86400,
   *   // how many of the asset you want to list
   *   quantity: 1,
   *   // address of the currency contract that will be used to pay for the listing
   *   currencyContractAddress: NATIVE_TOKEN_ADDRESS,
   *   // how much the asset will be sold for
   *   buyoutPricePerToken: "1.5",
   * }
   *
   * const tx = await contract.direct.createListing(listing);
   * const receipt = tx.receipt; // the transaction receipt
   * const listingId = tx.id; // the id of the newly created listing
   *
   * // And on the buyers side:
   * // Quantity of the asset you want to buy
   * const quantityDesired = 1;
   * await contract.direct.buyoutListing(listingId, quantityDesired);
   * ```
   */

  /**
   * Auctions
   * @remarks Create and manage auctions in your marketplace.
   * @example
   * ```javascript
   * // Data of the auction you want to create
   * const auction = {
   *   // address of the contract the asset you want to list is on
   *   assetContractAddress: "0x...",
   *   // token ID of the asset you want to list
   *   tokenId: "0",
   *  // when should the listing open up for offers
   *   startTimestamp: new Date(),
   *   // how long the listing will be open for
   *   listingDurationInSeconds: 86400,
   *   // how many of the asset you want to list
   *   quantity: 1,
   *   // address of the currency contract that will be used to pay for the listing
   *   currencyContractAddress: NATIVE_TOKEN_ADDRESS,
   *   // how much people would have to bid to instantly buy the asset
   *   buyoutPricePerToken: "10",
   *   // the minimum bid that will be accepted for the token
   *   reservePricePerToken: "1.5",
   * }
   *
   * const tx = await contract.auction.createListing(auction);
   * const receipt = tx.receipt; // the transaction receipt
   * const listingId = tx.id; // the id of the newly created listing
   *
   * // And on the buyers side:
   * // The price you are willing to bid for a single token of the listing
   * const pricePerToken = 2.6;
   * await contract.auction.makeBid(listingId, pricePerToken);
   * ```
   */
  get chainId() {
    return this._chainId;
  }

  constructor(network, address, storage) {
    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    let abi = arguments.length > 4 ? arguments[4] : undefined;
    let chainId = arguments.length > 5 ? arguments[5] : undefined;
    let contractWrapper = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : new ContractWrapper(network, address, abi, options);

    _defineProperty(this, "abi", void 0);

    _defineProperty(this, "contractWrapper", void 0);

    _defineProperty(this, "storage", void 0);

    _defineProperty(this, "encoder", void 0);

    _defineProperty(this, "events", void 0);

    _defineProperty(this, "estimator", void 0);

    _defineProperty(this, "platformFees", void 0);

    _defineProperty(this, "metadata", void 0);

    _defineProperty(this, "roles", void 0);

    _defineProperty(this, "interceptor", void 0);

    _defineProperty(this, "direct", void 0);

    _defineProperty(this, "auction", void 0);

    _defineProperty(this, "_chainId", void 0);

    _defineProperty(this, "getAll", this.getAllListings);

    this._chainId = chainId;
    this.abi = abi;
    this.contractWrapper = contractWrapper;
    this.storage = storage;
    this.metadata = new ContractMetadata(this.contractWrapper, MarketplaceContractSchema, this.storage);
    this.roles = new ContractRoles(this.contractWrapper, Marketplace.contractRoles);
    this.encoder = new ContractEncoder(this.contractWrapper);
    this.estimator = new GasCostEstimator(this.contractWrapper);
    this.direct = new MarketplaceDirect(this.contractWrapper, this.storage);
    this.auction = new MarketplaceAuction(this.contractWrapper, this.storage);
    this.events = new ContractEvents(this.contractWrapper);
    this.platformFees = new ContractPlatformFee(this.contractWrapper);
    this.interceptor = new ContractInterceptor(this.contractWrapper);
  }

  onNetworkUpdated(network) {
    this.contractWrapper.updateSignerOrProvider(network);
  }

  getAddress() {
    return this.contractWrapper.readContract.address;
  }
  /** ******************************
   * READ FUNCTIONS
   *******************************/

  /**
   * Convenience function to get either a direct or auction listing
   *
   * @param listingId - the listing id
   * @returns either a direct or auction listing
   *
   * @remarks Get a listing by its listing id
   * @example
   * ```javascript
   * const listingId = 0;
   * const listing = await contract.getListing(listingId);
   * ```
   */


  async getListing(listingId) {
    const listing = await this.contractWrapper.readContract.listings(listingId);

    if (listing.assetContract === constants.AddressZero) {
      throw new ListingNotFoundError(this.getAddress(), listingId.toString());
    }

    switch (listing.listingType) {
      case ListingType.Auction:
        {
          return await this.auction.mapListing(listing);
        }

      case ListingType.Direct:
        {
          return await this.direct.mapListing(listing);
        }

      default:
        {
          throw new Error(`Unknown listing type: ${listing.listingType}`);
        }
    }
  }
  /**
   * Get all active listings
   *
   * @remarks Fetch all the active listings from this marketplace contract. An active listing means it can be bought or bid on.
   * @example
   * ```javascript
   * const listings = await contract.getActiveListings();
   * const priceOfFirstActiveListing = listings[0].price;
   * ```
   * @param filter - optional filter parameters
   */


  async getActiveListings(filter) {
    const rawListings = await this.getAllListingsNoFilter(true);
    const filtered = this.applyFilter(rawListings, filter);
    const now = BigNumber.from(Math.floor(Date.now() / 1000));
    return filtered.filter(l => {
      return l.type === ListingType.Auction && BigNumber.from(l.endTimeInEpochSeconds).gt(now) && BigNumber.from(l.startTimeInEpochSeconds).lte(now) || l.type === ListingType.Direct && l.quantity > 0;
    });
  }
  /**
   * Get all the listings
   *
   * @remarks Fetch all the listings from this marketplace contract, including sold ones.
   * @example
   * ```javascript
   * const listings = await contract.getAllListings();
   * const priceOfFirstListing = listings[0].price;
   * ```
   *
   * @param filter - optional filter parameters
   */


  async getAllListings(filter) {
    const rawListings = await this.getAllListingsNoFilter(false);
    return this.applyFilter(rawListings, filter);
  }
  /**
   * @internal
   */


  /**
   * Get the total number of Listings
   * @returns the total number listings on the marketplace
   * @public
   */
  async getTotalCount() {
    return await this.contractWrapper.readContract.totalListings();
  }
  /**
   * Get whether listing is restricted only to addresses with the Lister role
   */


  async isRestrictedToListerRoleOnly() {
    const anyoneCanList = await this.contractWrapper.readContract.hasRole(getRoleHash("lister"), constants.AddressZero);
    return !anyoneCanList;
  }
  /**
   * Get the buffer in basis points between offers
   */


  async getBidBufferBps() {
    return this.contractWrapper.readContract.bidBufferBps();
  }
  /**
   * get the buffer time in seconds between offers
   */


  async getTimeBufferInSeconds() {
    return this.contractWrapper.readContract.timeBuffer();
  }
  /**
   * Get all the offers for a listing
   *
   * @remarks Fetch all the offers for a specified direct or auction listing.
   * @example
   * ```javascript
   * const offers = await marketplaceContract.getOffers(listingId);
   * const firstOffer = offers[0];
   * ```
   *
   * @param listingId - the id of the listing to fetch offers for
   */


  async getOffers(listingId) {
    // get all new offer events from this contract
    const events = await this.events.getEvents("NewOffer"); // get only the events for this listing id

    const listingEvents = events.filter(e => e.data.listingId.eq(listingId)); // derive the offers from the events

    return await Promise.all(listingEvents.map(async e => {
      return await mapOffer(this.contractWrapper.getProvider(), BigNumber.from(listingId), {
        quantityWanted: e.data.quantityWanted,
        pricePerToken: e.data.quantityWanted.gt(0) ? e.data.totalOfferAmount.div(e.data.quantityWanted) : e.data.totalOfferAmount,
        currency: e.data.currency,
        offeror: e.data.offeror
      });
    }));
  }
  /** ******************************
   * WRITE FUNCTIONS
   *******************************/

  /**
   * Purchase NFTs
   * @remarks Buy a Direct or Auction listing on your marketplace.
   * @example
   * ```javascript
   * // The listing ID of the asset you want to buy
   * const listingId = 0;
   * // Quantity of the asset you want to buy
   * const quantityDesired = 1;
   *
   * await contract.buyoutListing(listingId, quantityDesired);
   * ```
   * @param listingId - the listing ID of the listing you want to buy
   * @param quantityDesired - the quantity that you want to buy (for ERC1155 tokens)
   * @param receiver - optional receiver of the bought listing if different from the connected wallet (for direct listings only)
   */


  async buyoutListing(listingId, quantityDesired, receiver) {
    const listing = await this.contractWrapper.readContract.listings(listingId);

    if (listing.listingId.toString() !== listingId.toString()) {
      throw new ListingNotFoundError(this.getAddress(), listingId.toString());
    }

    switch (listing.listingType) {
      case ListingType.Direct:
        {
          invariant(quantityDesired !== undefined, "quantityDesired is required when buying out a direct listing");
          return await this.direct.buyoutListing(listingId, quantityDesired, receiver);
        }

      case ListingType.Auction:
        {
          return await this.auction.buyoutListing(listingId);
        }

      default:
        throw Error(`Unknown listing type: ${listing.listingType}`);
    }
  }
  /**
   * Make an offer for a Direct or Auction Listing
   *
   * @remarks Make an offer on a direct or auction listing
   *
   * @example
   * ```javascript
   * // The listing ID of the asset you want to offer on
   * const listingId = 0;
   * // The price you are willing to offer per token
   * const pricePerToken = 0.5;
   * // The quantity of tokens you want to receive for this offer
   * const quantity = 1;
   *
   * await contract.makeOffer(
   *   listingId,
   *   pricePerToken,
   *   quantity,
   * );
   * ```
   */


  async makeOffer(listingId, pricePerToken, quantity) {
    const listing = await this.contractWrapper.readContract.listings(listingId);

    if (listing.listingId.toString() !== listingId.toString()) {
      throw new ListingNotFoundError(this.getAddress(), listingId.toString());
    }

    const chainId = await this.contractWrapper.getChainID();

    switch (listing.listingType) {
      case ListingType.Direct:
        {
          invariant(quantity, "quantity is required when making an offer on a direct listing");
          return await this.direct.makeOffer(listingId, quantity, isNativeToken(listing.currency) ? NATIVE_TOKENS[chainId].wrapped.address : listing.currency, pricePerToken);
        }

      case ListingType.Auction:
        {
          return await this.auction.makeBid(listingId, pricePerToken);
        }

      default:
        throw Error(`Unknown listing type: ${listing.listingType}`);
    }
  }
  /**
   * Set the Auction bid buffer
   * @remarks A percentage (e.g. 5%) in basis points (5% = 500, 100% = 10000). A new bid is considered to be a winning bid only if its bid amount is at least the bid buffer (e.g. 5%) greater than the previous winning bid. This prevents buyers from making very slightly higher bids to win the auctioned items.
   * @example
   * ```javascript
   * // the bid buffer in basis points
   * const bufferBps = 5_00; // 5%
   * await contract.setBidBufferBps(bufferBps);
   * ```
   * @param bufferBps - the bps value
   */


  async setBidBufferBps(bufferBps) {
    await this.roles.verify(["admin"], await this.contractWrapper.getSignerAddress());
    const timeBuffer = await this.getTimeBufferInSeconds();
    await this.contractWrapper.sendTransaction("setAuctionBuffers", [timeBuffer, BigNumber.from(bufferBps)]);
  }
  /**
   * Set the Auction Time buffer:
   * @remarks Measured in seconds (e.g. 15 minutes or 900 seconds). If a winning bid is made within the buffer of the auction closing (e.g. 15 minutes within the auction closing), the auction's closing time is increased by the buffer to prevent buyers from making last minute winning bids, and to give time to other buyers to make a higher bid if they wish to.
   * @example
   * ```javascript
   * // the time buffer in seconds
   * const bufferInSeconds = 60;
   * await contract.setTimeBufferInSeconds(bufferInSeconds);
   * ```
   * @param bufferInSeconds - the seconds value
   */


  async setTimeBufferInSeconds(bufferInSeconds) {
    await this.roles.verify(["admin"], await this.contractWrapper.getSignerAddress());
    const bidBuffer = await this.getBidBufferBps();
    await this.contractWrapper.sendTransaction("setAuctionBuffers", [BigNumber.from(bufferInSeconds), bidBuffer]);
  }
  /**
   * Restrict listing NFTs only from the specified NFT contract address.
   * It is possible to allow listing from multiple contract addresses.
   * @param contractAddress - the NFT contract address
   */


  async allowListingFromSpecificAssetOnly(contractAddress) {
    const encoded = [];
    const members = await this.roles.get("asset");

    if (members.includes(constants.AddressZero)) {
      encoded.push(this.encoder.encode("revokeRole", [getRoleHash("asset"), constants.AddressZero]));
    }

    encoded.push(this.encoder.encode("grantRole", [getRoleHash("asset"), contractAddress]));
    await this.contractWrapper.multiCall(encoded);
  }
  /**
   * Allow listings from any NFT contract
   */


  async allowListingFromAnyAsset() {
    const encoded = [];
    const members = await this.roles.get("asset");

    for (const addr in members) {
      encoded.push(this.encoder.encode("revokeRole", [getRoleHash("asset"), addr]));
    }

    encoded.push(this.encoder.encode("grantRole", [getRoleHash("asset"), constants.AddressZero]));
    await this.contractWrapper.multiCall(encoded);
  }
  /** ******************************
   * PRIVATE FUNCTIONS
   *******************************/


  async getAllListingsNoFilter(filterInvalidListings) {
    const listings = await Promise.all(Array.from(Array((await this.contractWrapper.readContract.totalListings()).toNumber()).keys()).map(async i => {
      let listing;

      try {
        listing = await this.getListing(i);
      } catch (err) {
        if (err instanceof ListingNotFoundError) {
          return undefined;
        } else {
          console.warn(`Failed to get listing ${i}' - skipping. Try 'marketplace.getListing(${i})' to get the underlying error.`);
          return undefined;
        }
      }

      if (listing.type === ListingType.Auction) {
        return listing;
      }

      if (filterInvalidListings) {
        const {
          valid
        } = await this.direct.isStillValidListing(listing);

        if (!valid) {
          return undefined;
        }
      }

      return listing;
    }));
    return listings.filter(l => l !== undefined);
  }

  applyFilter(listings, filter) {
    let rawListings = [...listings];
    const start = BigNumber.from((filter === null || filter === void 0 ? void 0 : filter.start) || 0).toNumber();
    const count = BigNumber.from((filter === null || filter === void 0 ? void 0 : filter.count) || DEFAULT_QUERY_ALL_COUNT).toNumber();

    if (filter) {
      if (filter.seller) {
        rawListings = rawListings.filter(seller => {
          var _filter$seller;

          return seller.sellerAddress.toString().toLowerCase() === (filter === null || filter === void 0 ? void 0 : (_filter$seller = filter.seller) === null || _filter$seller === void 0 ? void 0 : _filter$seller.toString().toLowerCase());
        });
      }

      if (filter.tokenContract) {
        rawListings = rawListings.filter(tokenContract => {
          var _filter$tokenContract;

          return tokenContract.assetContractAddress.toString().toLowerCase() === (filter === null || filter === void 0 ? void 0 : (_filter$tokenContract = filter.tokenContract) === null || _filter$tokenContract === void 0 ? void 0 : _filter$tokenContract.toString().toLowerCase());
        });
      }

      if (filter.tokenId !== undefined) {
        rawListings = rawListings.filter(tokenContract => {
          var _filter$tokenId;

          return tokenContract.tokenId.toString() === (filter === null || filter === void 0 ? void 0 : (_filter$tokenId = filter.tokenId) === null || _filter$tokenId === void 0 ? void 0 : _filter$tokenId.toString());
        });
      }

      rawListings = rawListings.filter((_, index) => index >= start);
      rawListings = rawListings.slice(0, count);
    }

    return rawListings;
  }
  /**
   * @internal
   */


  async call(functionName) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return this.contractWrapper.call(functionName, ...args);
  }

}

_defineProperty(Marketplace, "contractRoles", ["admin", "lister", "asset"]);

export { Marketplace };
