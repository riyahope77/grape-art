/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as web3 from '@solana/web3.js';
import * as beet from '@metaplex-foundation/beet';
import * as beetSolana from '@metaplex-foundation/beet-solana';

/**
 * Arguments used to create {@link PurchaseReceipt}
 * @category Accounts
 * @category generated
 */
export type PurchaseReceiptArgs = {
  bookkeeper: web3.PublicKey;
  buyer: web3.PublicKey;
  seller: web3.PublicKey;
  auctionHouse: web3.PublicKey;
  metadata: web3.PublicKey;
  tokenSize: beet.bignum;
  price: beet.bignum;
  bump: number;
  createdAt: beet.bignum;
};

const purchaseReceiptDiscriminator = [79, 127, 222, 137, 154, 131, 150, 134];
/**
 * Holds the data for the {@link PurchaseReceipt} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class PurchaseReceipt implements PurchaseReceiptArgs {
  private constructor(
    readonly bookkeeper: web3.PublicKey,
    readonly buyer: web3.PublicKey,
    readonly seller: web3.PublicKey,
    readonly auctionHouse: web3.PublicKey,
    readonly metadata: web3.PublicKey,
    readonly tokenSize: beet.bignum,
    readonly price: beet.bignum,
    readonly bump: number,
    readonly createdAt: beet.bignum,
  ) {}

  /**
   * Creates a {@link PurchaseReceipt} instance from the provided args.
   */
  static fromArgs(args: PurchaseReceiptArgs) {
    return new PurchaseReceipt(
      args.bookkeeper,
      args.buyer,
      args.seller,
      args.auctionHouse,
      args.metadata,
      args.tokenSize,
      args.price,
      args.bump,
      args.createdAt,
    );
  }

  /**
   * Deserializes the {@link PurchaseReceipt} from the data of the provided {@link web3.AccountInfo}.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static fromAccountInfo(
    accountInfo: web3.AccountInfo<Buffer>,
    offset = 0,
  ): [PurchaseReceipt, number] {
    return PurchaseReceipt.deserialize(accountInfo.data, offset);
  }

  /**
   * Retrieves the account info from the provided address and deserializes
   * the {@link PurchaseReceipt} from its data.
   *
   * @throws Error if no account info is found at the address or if deserialization fails
   */
  static async fromAccountAddress(
    connection: web3.Connection,
    address: web3.PublicKey,
  ): Promise<PurchaseReceipt> {
    const accountInfo = await connection.getAccountInfo(address);
    if (accountInfo == null) {
      throw new Error(`Unable to find PurchaseReceipt account at ${address}`);
    }
    return PurchaseReceipt.fromAccountInfo(accountInfo, 0)[0];
  }

  /**
   * Deserializes the {@link PurchaseReceipt} from the provided data Buffer.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static deserialize(buf: Buffer, offset = 0): [PurchaseReceipt, number] {
    return purchaseReceiptBeet.deserialize(buf, offset);
  }

  /**
   * Serializes the {@link PurchaseReceipt} into a Buffer.
   * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
   */
  serialize(): [Buffer, number] {
    return purchaseReceiptBeet.serialize({
      accountDiscriminator: purchaseReceiptDiscriminator,
      ...this,
    });
  }

  /**
   * Returns the byteSize of a {@link Buffer} holding the serialized data of
   * {@link PurchaseReceipt}
   */
  static get byteSize() {
    return purchaseReceiptBeet.byteSize;
  }

  /**
   * Fetches the minimum balance needed to exempt an account holding
   * {@link PurchaseReceipt} data from rent
   *
   * @param connection used to retrieve the rent exemption information
   */
  static async getMinimumBalanceForRentExemption(
    connection: web3.Connection,
    commitment?: web3.Commitment,
  ): Promise<number> {
    return connection.getMinimumBalanceForRentExemption(PurchaseReceipt.byteSize, commitment);
  }

  /**
   * Determines if the provided {@link Buffer} has the correct byte size to
   * hold {@link PurchaseReceipt} data.
   */
  static hasCorrectByteSize(buf: Buffer, offset = 0) {
    return buf.byteLength - offset === PurchaseReceipt.byteSize;
  }

  /**
   * Returns a readable version of {@link PurchaseReceipt} properties
   * and can be used to convert to JSON and/or logging
   */
  pretty() {
    return {
      bookkeeper: this.bookkeeper.toBase58(),
      buyer: this.buyer.toBase58(),
      seller: this.seller.toBase58(),
      auctionHouse: this.auctionHouse.toBase58(),
      metadata: this.metadata.toBase58(),
      tokenSize: this.tokenSize,
      price: this.price,
      bump: this.bump,
      createdAt: this.createdAt,
    };
  }
}

/**
 * @category Accounts
 * @category generated
 */
export const purchaseReceiptBeet = new beet.BeetStruct<
  PurchaseReceipt,
  PurchaseReceiptArgs & {
    accountDiscriminator: number[] /* size: 8 */;
  }
>(
  [
    ['accountDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['bookkeeper', beetSolana.publicKey],
    ['buyer', beetSolana.publicKey],
    ['seller', beetSolana.publicKey],
    ['auctionHouse', beetSolana.publicKey],
    ['metadata', beetSolana.publicKey],
    ['tokenSize', beet.u64],
    ['price', beet.u64],
    ['bump', beet.u8],
    ['createdAt', beet.i64],
  ],
  PurchaseReceipt.fromArgs,
  'PurchaseReceipt',
);
