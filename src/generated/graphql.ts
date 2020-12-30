import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A time string at UTC, such as 10:15:30Z, compliant with the `full-time` format outlined in section 5.6 of the RFC 3339profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Time: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
};

export type CreateDigitalMandateInput = {
  bic: Scalars['String'];
  member: MemberWhereUniqueInput;
};

export type CreatePaperMandateInput = {
  bic: Scalars['String'];
  iban: Scalars['String'];
  member: MemberWhereUniqueInput;
};

export type Bank = {
  __typename?: 'Bank';
  id?: Maybe<Scalars['String']>;
  bic?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type Translatable = {
  en?: Maybe<Scalars['String']>;
  nl?: Maybe<Scalars['String']>;
};

export type ShortTranslatable = Translatable & {
  __typename?: 'ShortTranslatable';
  en?: Maybe<Scalars['String']>;
  nl?: Maybe<Scalars['String']>;
};

export type LongTranslatable = Translatable & {
  __typename?: 'LongTranslatable';
  en?: Maybe<Scalars['String']>;
  nl?: Maybe<Scalars['String']>;
};

export type BoardPeriod = {
  __typename?: 'BoardPeriod';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<ShortTranslatable>;
  startedAt?: Maybe<Scalars['Date']>;
  endedAt?: Maybe<Scalars['Date']>;
  members?: Maybe<MemberList>;
};


export type BoardPeriodmembersArgs = {
  where?: Maybe<MemberWhereInput>;
  orderBy?: Maybe<MemberOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};

export enum MandateStatus {
  CREATED = 'CREATED',
  UNACCEPTED = 'UNACCEPTED',
  ACCEPTED = 'ACCEPTED',
  ERROR = 'ERROR',
  CANCELLED = 'CANCELLED',
  INVALID = 'INVALID',
  REJECTED = 'REJECTED'
}

export type Mandate = {
  id?: Maybe<Scalars['String']>;
  mandateId?: Maybe<Scalars['String']>;
  status?: Maybe<MandateStatus>;
  createdAt?: Maybe<Scalars['DateTime']>;
  acceptedAt?: Maybe<Scalars['DateTime']>;
  bic?: Maybe<Scalars['String']>;
  iban?: Maybe<Scalars['String']>;
  reason?: Maybe<Scalars['String']>;
  isFirstTransaction?: Maybe<Scalars['Boolean']>;
  errorMessage?: Maybe<Scalars['String']>;
  member?: Maybe<Member>;
  instructions?: Maybe<DirectDebitInstructionList>;
};


export type MandateinstructionsArgs = {
  where?: Maybe<DirectDebitInstructionWhereInput>;
  orderBy?: Maybe<DirectDebitInstructionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};

export type Transaction = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Int']>;
  member?: Maybe<Member>;
  instruction?: Maybe<DirectDebitInstruction>;
};

export type DirectDebitInstruction = {
  __typename?: 'DirectDebitInstruction';
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  instructionId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  batch?: Maybe<DirectDebitBatch>;
  transactions?: Maybe<TransactionList>;
  mandate?: Maybe<Mandate>;
  amount?: Maybe<Scalars['Int']>;
};


export type DirectDebitInstructiontransactionsArgs = {
  where?: Maybe<TransactionWhereInput>;
  orderBy?: Maybe<TransactionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};

export enum SequenceType {
  FIRST = 'FIRST',
  RECURRENT = 'RECURRENT',
  FINAL = 'FINAL',
  ONE_OFF = 'ONE_OFF'
}

export type DirectDebitBatch = {
  __typename?: 'DirectDebitBatch';
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  batchId?: Maybe<Scalars['String']>;
  sequenceType?: Maybe<SequenceType>;
  directDebit?: Maybe<DirectDebit>;
  instructions?: Maybe<DirectDebitInstructionList>;
  instructionCount?: Maybe<Scalars['Int']>;
  amount?: Maybe<Scalars['Int']>;
};


export type DirectDebitBatchinstructionsArgs = {
  where?: Maybe<DirectDebitInstructionWhereInput>;
  orderBy?: Maybe<DirectDebitInstructionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};

export type File = {
  __typename?: 'File';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export enum DirectDebitStatus {
  CREATED = 'CREATED',
  GENERATED = 'GENERATED',
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED',
  CANCELLED = 'CANCELLED'
}

export type DirectDebit = {
  __typename?: 'DirectDebit';
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  status?: Maybe<DirectDebitStatus>;
  messageId?: Maybe<Scalars['String']>;
  collectionDate?: Maybe<Scalars['String']>;
  batches?: Maybe<DirectDebitBatchList>;
  warnings?: Maybe<DirectDebitWarningList>;
  file?: Maybe<File>;
  instructionCount?: Maybe<Scalars['Int']>;
  amount?: Maybe<Scalars['Int']>;
};


export type DirectDebitbatchesArgs = {
  where?: Maybe<DirectDebitBatchWhereInput>;
  orderBy?: Maybe<DirectDebitBatchOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type DirectDebitwarningsArgs = {
  where?: Maybe<DirectDebitWarningWhereInput>;
  orderBy?: Maybe<DirectDebitWarningOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};

export type DirectDebitWarning = {
  __typename?: 'DirectDebitWarning';
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  directDebit?: Maybe<DirectDebit>;
  member?: Maybe<Member>;
};

export type MembershipFeeTransaction = Transaction & {
  __typename?: 'MembershipFeeTransaction';
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Int']>;
  member?: Maybe<Member>;
  instruction?: Maybe<DirectDebitInstruction>;
  year?: Maybe<Scalars['Int']>;
  membership?: Maybe<Membership>;
};

export enum MembershipType {
  NORMAL = 'NORMAL',
  HONORARY = 'HONORARY',
  EXTRAORDINARY = 'EXTRAORDINARY'
}

export type Membership = {
  __typename?: 'Membership';
  id?: Maybe<Scalars['String']>;
  type?: Maybe<MembershipType>;
  startedAt?: Maybe<Scalars['Date']>;
  endedAt?: Maybe<Scalars['Date']>;
  member?: Maybe<Member>;
  transactions?: Maybe<MembershipFeeTransactionList>;
};


export type MembershiptransactionsArgs = {
  where?: Maybe<MembershipFeeTransactionWhereInput>;
  orderBy?: Maybe<MembershipFeeTransactionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};

export enum Language {
  NL = 'NL',
  EN = 'EN'
}

export enum Pronouns {
  HE_HIM = 'HE_HIM',
  SHE_HER = 'SHE_HER',
  THEY_THEM = 'THEY_THEM'
}

export enum StudentType {
  UNIVERSITY_UT = 'UNIVERSITY_UT',
  UNIVERSITY_OTHER = 'UNIVERSITY_OTHER',
  HBO_SAXION = 'HBO_SAXION',
  HBO_OTHER = 'HBO_OTHER',
  MBO = 'MBO',
  WORKING = 'WORKING'
}

export type Member = {
  __typename?: 'Member';
  id?: Maybe<Scalars['String']>;
  providers?: Maybe<ProviderList>;
  firstName?: Maybe<Scalars['String']>;
  initials?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  birthdate?: Maybe<Scalars['Date']>;
  language?: Maybe<Language>;
  pronouns?: Maybe<Pronouns>;
  studentType?: Maybe<StudentType>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  image?: Maybe<File>;
  memberships?: Maybe<MembershipList>;
  boardPeriods?: Maybe<BoardPeriodList>;
  committeePeriods?: Maybe<CommitteePeriodList>;
  mandates?: Maybe<MandateList>;
  transactions?: Maybe<TransactionList>;
  warnings?: Maybe<DirectDebitWarningList>;
  latestMembership?: Maybe<Membership>;
  hasMandate?: Maybe<Scalars['Boolean']>;
  hasPendingPaperMandates?: Maybe<Scalars['Boolean']>;
};


export type MemberprovidersArgs = {
  where?: Maybe<ProviderWhereInput>;
  orderBy?: Maybe<ProviderOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type MembermembershipsArgs = {
  where?: Maybe<MembershipWhereInput>;
  orderBy?: Maybe<MembershipOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type MemberboardPeriodsArgs = {
  where?: Maybe<BoardPeriodWhereInput>;
  orderBy?: Maybe<BoardPeriodOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type MembercommitteePeriodsArgs = {
  where?: Maybe<CommitteePeriodWhereInput>;
  orderBy?: Maybe<CommitteePeriodOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type MembermandatesArgs = {
  where?: Maybe<MandateWhereInput>;
  orderBy?: Maybe<MandateOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type MembertransactionsArgs = {
  where?: Maybe<TransactionWhereInput>;
  orderBy?: Maybe<TransactionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type MemberwarningsArgs = {
  where?: Maybe<DirectDebitWarningWhereInput>;
  orderBy?: Maybe<DirectDebitWarningOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};

export type CommitteePeriod = {
  __typename?: 'CommitteePeriod';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<ShortTranslatable>;
  startedAt?: Maybe<Scalars['Date']>;
  endedAt?: Maybe<Scalars['Date']>;
  committee?: Maybe<Committee>;
  members?: Maybe<MemberList>;
};


export type CommitteePeriodmembersArgs = {
  where?: Maybe<MemberWhereInput>;
  orderBy?: Maybe<MemberOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};

export type Committee = {
  __typename?: 'Committee';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<ShortTranslatable>;
  description?: Maybe<LongTranslatable>;
  periods?: Maybe<CommitteePeriodList>;
};


export type CommitteeperiodsArgs = {
  where?: Maybe<CommitteePeriodWhereInput>;
  orderBy?: Maybe<CommitteePeriodOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};

export type DigitalMandate = Mandate & {
  __typename?: 'DigitalMandate';
  id?: Maybe<Scalars['String']>;
  mandateId?: Maybe<Scalars['String']>;
  status?: Maybe<MandateStatus>;
  createdAt?: Maybe<Scalars['DateTime']>;
  acceptedAt?: Maybe<Scalars['DateTime']>;
  bic?: Maybe<Scalars['String']>;
  iban?: Maybe<Scalars['String']>;
  reason?: Maybe<Scalars['String']>;
  isFirstTransaction?: Maybe<Scalars['Boolean']>;
  errorMessage?: Maybe<Scalars['String']>;
  member?: Maybe<Member>;
  instructions?: Maybe<DirectDebitInstructionList>;
  messageId?: Maybe<Scalars['String']>;
  entranceCode?: Maybe<Scalars['String']>;
  transactionId?: Maybe<Scalars['String']>;
};


export type DigitalMandateinstructionsArgs = {
  where?: Maybe<DirectDebitInstructionWhereInput>;
  orderBy?: Maybe<DirectDebitInstructionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};

export type Page = {
  __typename?: 'Page';
  id?: Maybe<Scalars['String']>;
  title?: Maybe<ShortTranslatable>;
  body?: Maybe<LongTranslatable>;
};

export type PaperMandate = Mandate & {
  __typename?: 'PaperMandate';
  id?: Maybe<Scalars['String']>;
  mandateId?: Maybe<Scalars['String']>;
  status?: Maybe<MandateStatus>;
  createdAt?: Maybe<Scalars['DateTime']>;
  acceptedAt?: Maybe<Scalars['DateTime']>;
  bic?: Maybe<Scalars['String']>;
  iban?: Maybe<Scalars['String']>;
  reason?: Maybe<Scalars['String']>;
  isFirstTransaction?: Maybe<Scalars['Boolean']>;
  errorMessage?: Maybe<Scalars['String']>;
  member?: Maybe<Member>;
  instructions?: Maybe<DirectDebitInstructionList>;
  generatedFile?: Maybe<File>;
  uploadedFile?: Maybe<File>;
};


export type PaperMandateinstructionsArgs = {
  where?: Maybe<DirectDebitInstructionWhereInput>;
  orderBy?: Maybe<DirectDebitInstructionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};

export type Setting = {
  __typename?: 'Setting';
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  isPublic?: Maybe<Scalars['Boolean']>;
};

export type CreateDigitalMandateResult = {
  __typename?: 'CreateDigitalMandateResult';
  redirectUrl?: Maybe<Scalars['String']>;
  mandate?: Maybe<DigitalMandate>;
};


export type AccessToken = {
  __typename?: 'AccessToken';
  accessToken?: Maybe<Scalars['String']>;
  expiresIn?: Maybe<Scalars['Int']>;
};

export type Provider = {
  __typename?: 'Provider';
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  isVerified?: Maybe<Scalars['Boolean']>;
  user?: Maybe<Member>;
};

export enum TokenType {
  VERIFY_EMAIL = 'VERIFY_EMAIL',
  RESET_PASSWORD = 'RESET_PASSWORD'
}

export type Token = {
  __typename?: 'Token';
  id?: Maybe<Scalars['String']>;
  type?: Maybe<TokenType>;
  token?: Maybe<Scalars['String']>;
  expiresAt?: Maybe<Scalars['DateTime']>;
  provider?: Maybe<Provider>;
};




export enum OrderByArg {
  ASC = 'ASC',
  DESC = 'DESC'
}

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  not?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
};

export type FloatFilter = {
  equals?: Maybe<Scalars['Float']>;
  not?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['Float']>>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
};

export type StringFilter = {
  equals?: Maybe<Scalars['String']>;
  not?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  not?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
};

export type ListInfo = {
  __typename?: 'ListInfo';
  count: Scalars['Int'];
};

export type BankWhereInput = {
  id?: Maybe<StringFilter>;
  bic?: Maybe<StringFilter>;
  country?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  isActive?: Maybe<Scalars['Boolean']>;
  AND?: Maybe<Array<Maybe<BankWhereInput>>>;
  OR?: Maybe<Array<Maybe<BankWhereInput>>>;
};

export type BankOrderByInput = {
  id?: Maybe<OrderByArg>;
  bic?: Maybe<OrderByArg>;
  country?: Maybe<OrderByArg>;
  name?: Maybe<OrderByArg>;
  isActive?: Maybe<OrderByArg>;
};

export type BankCreateInput = {
  id?: Maybe<Scalars['String']>;
  bic: Scalars['String'];
  country: Scalars['String'];
  name: Scalars['String'];
  isActive: Scalars['Boolean'];
};

export type BankUpdateInput = {
  id?: Maybe<Scalars['String']>;
  bic?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  isActive?: Maybe<Scalars['Boolean']>;
};

export type BankWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  bic?: Maybe<Scalars['String']>;
};

export type BankList = {
  __typename?: 'BankList';
  info?: Maybe<ListInfo>;
  values: Array<Bank>;
};

export type BoardPeriodWhereInput = {
  id?: Maybe<StringFilter>;
  name?: Maybe<ShortTranslatableWhereInput>;
  startedAt?: Maybe<DateTimeFilter>;
  endedAt?: Maybe<DateTimeFilter>;
  members?: Maybe<MemberWhereInput>;
  AND?: Maybe<Array<Maybe<BoardPeriodWhereInput>>>;
  OR?: Maybe<Array<Maybe<BoardPeriodWhereInput>>>;
};

export type BoardPeriodOrderByInput = {
  id?: Maybe<OrderByArg>;
  name?: Maybe<ShortTranslatableOrderByInput>;
  startedAt?: Maybe<OrderByArg>;
  endedAt?: Maybe<OrderByArg>;
};

export type BoardPeriodCreateInput = {
  id?: Maybe<Scalars['String']>;
  name: ShortTranslatableCreateInput;
  startedAt: Scalars['Date'];
  endedAt?: Maybe<Scalars['Date']>;
  members?: Maybe<Array<Maybe<MemberCreateRelationInput>>>;
};

export type BoardPeriodUpdateInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<ShortTranslatableUpdateInput>;
  startedAt?: Maybe<Scalars['Date']>;
  endedAt?: Maybe<Scalars['Date']>;
  members?: Maybe<Array<Maybe<MemberUpdateRelationInput>>>;
};

export type BoardPeriodWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type BoardPeriodList = {
  __typename?: 'BoardPeriodList';
  info?: Maybe<ListInfo>;
  values: Array<BoardPeriod>;
};

export type MandateWhereInput = {
  id?: Maybe<StringFilter>;
  mandateId?: Maybe<StringFilter>;
  status?: Maybe<MandateStatusFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  acceptedAt?: Maybe<DateTimeFilter>;
  bic?: Maybe<StringFilter>;
  iban?: Maybe<StringFilter>;
  reason?: Maybe<StringFilter>;
  isFirstTransaction?: Maybe<Scalars['Boolean']>;
  errorMessage?: Maybe<StringFilter>;
  member?: Maybe<MemberWhereInput>;
  instructions?: Maybe<DirectDebitInstructionWhereInput>;
  AND?: Maybe<Array<Maybe<MandateWhereInput>>>;
  OR?: Maybe<Array<Maybe<MandateWhereInput>>>;
};

export type MandateOrderByInput = {
  id?: Maybe<OrderByArg>;
  mandateId?: Maybe<OrderByArg>;
  status?: Maybe<OrderByArg>;
  createdAt?: Maybe<OrderByArg>;
  acceptedAt?: Maybe<OrderByArg>;
  bic?: Maybe<OrderByArg>;
  iban?: Maybe<OrderByArg>;
  reason?: Maybe<OrderByArg>;
  isFirstTransaction?: Maybe<OrderByArg>;
  errorMessage?: Maybe<OrderByArg>;
  member?: Maybe<MemberOrderByInput>;
};

export type MandateCreateInput = {
  id?: Maybe<Scalars['String']>;
  mandateId: Scalars['String'];
  status?: Maybe<MandateStatus>;
  createdAt?: Maybe<Scalars['DateTime']>;
  acceptedAt?: Maybe<Scalars['DateTime']>;
  bic: Scalars['String'];
  iban?: Maybe<Scalars['String']>;
  reason: Scalars['String'];
  isFirstTransaction?: Maybe<Scalars['Boolean']>;
  errorMessage?: Maybe<Scalars['String']>;
  member: MemberCreateRelationInput;
  instructions?: Maybe<Array<Maybe<DirectDebitInstructionCreateRelationInput>>>;
};

export type MandateUpdateInput = {
  id?: Maybe<Scalars['String']>;
  mandateId?: Maybe<Scalars['String']>;
  status?: Maybe<MandateStatus>;
  createdAt?: Maybe<Scalars['DateTime']>;
  acceptedAt?: Maybe<Scalars['DateTime']>;
  bic?: Maybe<Scalars['String']>;
  iban?: Maybe<Scalars['String']>;
  reason?: Maybe<Scalars['String']>;
  isFirstTransaction?: Maybe<Scalars['Boolean']>;
  errorMessage?: Maybe<Scalars['String']>;
  member?: Maybe<MemberUpdateRelationInput>;
  instructions?: Maybe<Array<Maybe<DirectDebitInstructionUpdateRelationInput>>>;
};

export type MandateWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type MandateList = {
  __typename?: 'MandateList';
  info?: Maybe<ListInfo>;
  values: Array<Mandate>;
};

export type TransactionWhereInput = {
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  description?: Maybe<StringFilter>;
  amount?: Maybe<IntFilter>;
  member?: Maybe<MemberWhereInput>;
  instruction?: Maybe<DirectDebitInstructionWhereInput>;
  AND?: Maybe<Array<Maybe<TransactionWhereInput>>>;
  OR?: Maybe<Array<Maybe<TransactionWhereInput>>>;
};

export type TransactionOrderByInput = {
  id?: Maybe<OrderByArg>;
  createdAt?: Maybe<OrderByArg>;
  updatedAt?: Maybe<OrderByArg>;
  description?: Maybe<OrderByArg>;
  amount?: Maybe<OrderByArg>;
  member?: Maybe<MemberOrderByInput>;
  instruction?: Maybe<DirectDebitInstructionOrderByInput>;
};

export type TransactionCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  amount: Scalars['Float'];
  member: MemberCreateRelationInput;
  instruction?: Maybe<DirectDebitInstructionCreateRelationInput>;
};

export type TransactionUpdateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  member?: Maybe<MemberUpdateRelationInput>;
  instruction?: Maybe<DirectDebitInstructionUpdateRelationInput>;
};

export type TransactionWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type TransactionList = {
  __typename?: 'TransactionList';
  info?: Maybe<ListInfo>;
  values: Array<Transaction>;
};

export type DirectDebitInstructionWhereInput = {
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  instructionId?: Maybe<StringFilter>;
  description?: Maybe<StringFilter>;
  batch?: Maybe<DirectDebitBatchWhereInput>;
  transactions?: Maybe<TransactionWhereInput>;
  mandate?: Maybe<MandateWhereInput>;
  AND?: Maybe<Array<Maybe<DirectDebitInstructionWhereInput>>>;
  OR?: Maybe<Array<Maybe<DirectDebitInstructionWhereInput>>>;
};

export type DirectDebitInstructionOrderByInput = {
  id?: Maybe<OrderByArg>;
  createdAt?: Maybe<OrderByArg>;
  updatedAt?: Maybe<OrderByArg>;
  instructionId?: Maybe<OrderByArg>;
  description?: Maybe<OrderByArg>;
  batch?: Maybe<DirectDebitBatchOrderByInput>;
  mandate?: Maybe<MandateOrderByInput>;
};

export type DirectDebitInstructionCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  instructionId: Scalars['String'];
  description: Scalars['String'];
  batch: DirectDebitBatchCreateRelationInput;
  transactions?: Maybe<Array<Maybe<TransactionCreateRelationInput>>>;
  mandate: MandateCreateRelationInput;
};

export type DirectDebitInstructionUpdateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  instructionId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  batch?: Maybe<DirectDebitBatchUpdateRelationInput>;
  transactions?: Maybe<Array<Maybe<TransactionUpdateRelationInput>>>;
  mandate?: Maybe<MandateUpdateRelationInput>;
};

export type DirectDebitInstructionWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type DirectDebitInstructionList = {
  __typename?: 'DirectDebitInstructionList';
  info?: Maybe<ListInfo>;
  values: Array<DirectDebitInstruction>;
};

export type DirectDebitBatchWhereInput = {
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  batchId?: Maybe<StringFilter>;
  sequenceType?: Maybe<SequenceTypeFilter>;
  directDebit?: Maybe<DirectDebitWhereInput>;
  instructions?: Maybe<DirectDebitInstructionWhereInput>;
  AND?: Maybe<Array<Maybe<DirectDebitBatchWhereInput>>>;
  OR?: Maybe<Array<Maybe<DirectDebitBatchWhereInput>>>;
};

export type DirectDebitBatchOrderByInput = {
  id?: Maybe<OrderByArg>;
  createdAt?: Maybe<OrderByArg>;
  updatedAt?: Maybe<OrderByArg>;
  batchId?: Maybe<OrderByArg>;
  sequenceType?: Maybe<OrderByArg>;
  directDebit?: Maybe<DirectDebitOrderByInput>;
};

export type DirectDebitBatchCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  batchId: Scalars['String'];
  sequenceType: SequenceType;
  directDebit: DirectDebitCreateRelationInput;
  instructions?: Maybe<Array<Maybe<DirectDebitInstructionCreateRelationInput>>>;
};

export type DirectDebitBatchUpdateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  batchId?: Maybe<Scalars['String']>;
  sequenceType?: Maybe<SequenceType>;
  directDebit?: Maybe<DirectDebitUpdateRelationInput>;
  instructions?: Maybe<Array<Maybe<DirectDebitInstructionUpdateRelationInput>>>;
};

export type DirectDebitBatchWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type DirectDebitBatchList = {
  __typename?: 'DirectDebitBatchList';
  info?: Maybe<ListInfo>;
  values: Array<DirectDebitBatch>;
};

export type FileWhereInput = {
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  mimeType?: Maybe<StringFilter>;
  AND?: Maybe<Array<Maybe<FileWhereInput>>>;
  OR?: Maybe<Array<Maybe<FileWhereInput>>>;
};

export type FileOrderByInput = {
  id?: Maybe<OrderByArg>;
  name?: Maybe<OrderByArg>;
  mimeType?: Maybe<OrderByArg>;
};

export type FileCreateInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  mimeType: Scalars['String'];
};

export type FileUpdateInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
};

export type FileWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type FileList = {
  __typename?: 'FileList';
  info?: Maybe<ListInfo>;
  values: Array<File>;
};

export type DirectDebitWhereInput = {
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  status?: Maybe<DirectDebitStatusFilter>;
  messageId?: Maybe<StringFilter>;
  collectionDate?: Maybe<StringFilter>;
  batches?: Maybe<DirectDebitBatchWhereInput>;
  warnings?: Maybe<DirectDebitWarningWhereInput>;
  file?: Maybe<FileWhereInput>;
  AND?: Maybe<Array<Maybe<DirectDebitWhereInput>>>;
  OR?: Maybe<Array<Maybe<DirectDebitWhereInput>>>;
};

export type DirectDebitOrderByInput = {
  id?: Maybe<OrderByArg>;
  createdAt?: Maybe<OrderByArg>;
  updatedAt?: Maybe<OrderByArg>;
  status?: Maybe<OrderByArg>;
  messageId?: Maybe<OrderByArg>;
  collectionDate?: Maybe<OrderByArg>;
  file?: Maybe<FileOrderByInput>;
};

export type DirectDebitCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  status?: Maybe<DirectDebitStatus>;
  messageId: Scalars['String'];
  collectionDate: Scalars['String'];
  batches?: Maybe<Array<Maybe<DirectDebitBatchCreateRelationInput>>>;
  warnings?: Maybe<Array<Maybe<DirectDebitWarningCreateRelationInput>>>;
  file?: Maybe<FileCreateRelationInput>;
};

export type DirectDebitUpdateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  status?: Maybe<DirectDebitStatus>;
  messageId?: Maybe<Scalars['String']>;
  collectionDate?: Maybe<Scalars['String']>;
  batches?: Maybe<Array<Maybe<DirectDebitBatchUpdateRelationInput>>>;
  warnings?: Maybe<Array<Maybe<DirectDebitWarningUpdateRelationInput>>>;
  file?: Maybe<FileUpdateRelationInput>;
};

export type DirectDebitWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type DirectDebitList = {
  __typename?: 'DirectDebitList';
  info?: Maybe<ListInfo>;
  values: Array<DirectDebit>;
};

export type DirectDebitWarningWhereInput = {
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  description?: Maybe<StringFilter>;
  directDebit?: Maybe<DirectDebitWhereInput>;
  member?: Maybe<MemberWhereInput>;
  AND?: Maybe<Array<Maybe<DirectDebitWarningWhereInput>>>;
  OR?: Maybe<Array<Maybe<DirectDebitWarningWhereInput>>>;
};

export type DirectDebitWarningOrderByInput = {
  id?: Maybe<OrderByArg>;
  createdAt?: Maybe<OrderByArg>;
  updatedAt?: Maybe<OrderByArg>;
  description?: Maybe<OrderByArg>;
  directDebit?: Maybe<DirectDebitOrderByInput>;
  member?: Maybe<MemberOrderByInput>;
};

export type DirectDebitWarningCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  directDebit: DirectDebitCreateRelationInput;
  member?: Maybe<MemberCreateRelationInput>;
};

export type DirectDebitWarningUpdateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  directDebit?: Maybe<DirectDebitUpdateRelationInput>;
  member?: Maybe<MemberUpdateRelationInput>;
};

export type DirectDebitWarningWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type DirectDebitWarningList = {
  __typename?: 'DirectDebitWarningList';
  info?: Maybe<ListInfo>;
  values: Array<DirectDebitWarning>;
};

export type MembershipFeeTransactionWhereInput = {
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  description?: Maybe<StringFilter>;
  amount?: Maybe<IntFilter>;
  member?: Maybe<MemberWhereInput>;
  instruction?: Maybe<DirectDebitInstructionWhereInput>;
  year?: Maybe<IntFilter>;
  membership?: Maybe<MembershipWhereInput>;
  AND?: Maybe<Array<Maybe<MembershipFeeTransactionWhereInput>>>;
  OR?: Maybe<Array<Maybe<MembershipFeeTransactionWhereInput>>>;
};

export type MembershipFeeTransactionOrderByInput = {
  id?: Maybe<OrderByArg>;
  createdAt?: Maybe<OrderByArg>;
  updatedAt?: Maybe<OrderByArg>;
  description?: Maybe<OrderByArg>;
  amount?: Maybe<OrderByArg>;
  member?: Maybe<MemberOrderByInput>;
  instruction?: Maybe<DirectDebitInstructionOrderByInput>;
  year?: Maybe<OrderByArg>;
  membership?: Maybe<MembershipOrderByInput>;
};

export type MembershipFeeTransactionCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  amount: Scalars['Float'];
  member: MemberCreateRelationInput;
  instruction?: Maybe<DirectDebitInstructionCreateRelationInput>;
  year: Scalars['Float'];
  membership: MembershipCreateRelationInput;
};

export type MembershipFeeTransactionUpdateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  member?: Maybe<MemberUpdateRelationInput>;
  instruction?: Maybe<DirectDebitInstructionUpdateRelationInput>;
  year?: Maybe<Scalars['Float']>;
  membership?: Maybe<MembershipUpdateRelationInput>;
};

export type MembershipFeeTransactionWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type MembershipFeeTransactionList = {
  __typename?: 'MembershipFeeTransactionList';
  info?: Maybe<ListInfo>;
  values: Array<MembershipFeeTransaction>;
};

export type MembershipWhereInput = {
  id?: Maybe<StringFilter>;
  type?: Maybe<MembershipTypeFilter>;
  startedAt?: Maybe<DateTimeFilter>;
  endedAt?: Maybe<DateTimeFilter>;
  member?: Maybe<MemberWhereInput>;
  transactions?: Maybe<MembershipFeeTransactionWhereInput>;
  AND?: Maybe<Array<Maybe<MembershipWhereInput>>>;
  OR?: Maybe<Array<Maybe<MembershipWhereInput>>>;
};

export type MembershipOrderByInput = {
  id?: Maybe<OrderByArg>;
  type?: Maybe<OrderByArg>;
  startedAt?: Maybe<OrderByArg>;
  endedAt?: Maybe<OrderByArg>;
  member?: Maybe<MemberOrderByInput>;
};

export type MembershipCreateInput = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<MembershipType>;
  startedAt: Scalars['Date'];
  endedAt?: Maybe<Scalars['Date']>;
  member: MemberCreateRelationInput;
  transactions?: Maybe<Array<Maybe<MembershipFeeTransactionCreateRelationInput>>>;
};

export type MembershipUpdateInput = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<MembershipType>;
  startedAt?: Maybe<Scalars['Date']>;
  endedAt?: Maybe<Scalars['Date']>;
  member?: Maybe<MemberUpdateRelationInput>;
  transactions?: Maybe<Array<Maybe<MembershipFeeTransactionUpdateRelationInput>>>;
};

export type MembershipWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type MembershipList = {
  __typename?: 'MembershipList';
  info?: Maybe<ListInfo>;
  values: Array<Membership>;
};

export type MemberWhereInput = {
  id?: Maybe<StringFilter>;
  providers?: Maybe<ProviderWhereInput>;
  firstName?: Maybe<StringFilter>;
  initials?: Maybe<StringFilter>;
  lastName?: Maybe<StringFilter>;
  email?: Maybe<StringFilter>;
  address?: Maybe<StringFilter>;
  postalCode?: Maybe<StringFilter>;
  city?: Maybe<StringFilter>;
  phoneNumber?: Maybe<StringFilter>;
  birthdate?: Maybe<DateTimeFilter>;
  language?: Maybe<LanguageFilter>;
  pronouns?: Maybe<PronounsFilter>;
  studentType?: Maybe<StudentTypeFilter>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  image?: Maybe<FileWhereInput>;
  memberships?: Maybe<MembershipWhereInput>;
  boardPeriods?: Maybe<BoardPeriodWhereInput>;
  committeePeriods?: Maybe<CommitteePeriodWhereInput>;
  mandates?: Maybe<MandateWhereInput>;
  transactions?: Maybe<TransactionWhereInput>;
  warnings?: Maybe<DirectDebitWarningWhereInput>;
  AND?: Maybe<Array<Maybe<MemberWhereInput>>>;
  OR?: Maybe<Array<Maybe<MemberWhereInput>>>;
};

export type MemberOrderByInput = {
  id?: Maybe<OrderByArg>;
  firstName?: Maybe<OrderByArg>;
  initials?: Maybe<OrderByArg>;
  lastName?: Maybe<OrderByArg>;
  email?: Maybe<OrderByArg>;
  address?: Maybe<OrderByArg>;
  postalCode?: Maybe<OrderByArg>;
  city?: Maybe<OrderByArg>;
  phoneNumber?: Maybe<OrderByArg>;
  birthdate?: Maybe<OrderByArg>;
  language?: Maybe<OrderByArg>;
  pronouns?: Maybe<OrderByArg>;
  studentType?: Maybe<OrderByArg>;
  isAdmin?: Maybe<OrderByArg>;
  image?: Maybe<FileOrderByInput>;
};

export type MemberCreateInput = {
  id?: Maybe<Scalars['String']>;
  providers?: Maybe<Array<Maybe<ProviderCreateRelationInput>>>;
  firstName: Scalars['String'];
  initials: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  address: Scalars['String'];
  postalCode: Scalars['String'];
  city: Scalars['String'];
  phoneNumber: Scalars['String'];
  birthdate: Scalars['Date'];
  language?: Maybe<Language>;
  pronouns?: Maybe<Pronouns>;
  studentType: StudentType;
  isAdmin?: Maybe<Scalars['Boolean']>;
  image?: Maybe<FileCreateRelationInput>;
  memberships?: Maybe<Array<Maybe<MembershipCreateRelationInput>>>;
  boardPeriods?: Maybe<Array<Maybe<BoardPeriodCreateRelationInput>>>;
  committeePeriods?: Maybe<Array<Maybe<CommitteePeriodCreateRelationInput>>>;
  mandates?: Maybe<Array<Maybe<MandateCreateRelationInput>>>;
  transactions?: Maybe<Array<Maybe<TransactionCreateRelationInput>>>;
  warnings?: Maybe<Array<Maybe<DirectDebitWarningCreateRelationInput>>>;
};

export type MemberUpdateInput = {
  id?: Maybe<Scalars['String']>;
  providers?: Maybe<Array<Maybe<ProviderUpdateRelationInput>>>;
  firstName?: Maybe<Scalars['String']>;
  initials?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  birthdate?: Maybe<Scalars['Date']>;
  language?: Maybe<Language>;
  pronouns?: Maybe<Pronouns>;
  studentType?: Maybe<StudentType>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  image?: Maybe<FileUpdateRelationInput>;
  memberships?: Maybe<Array<Maybe<MembershipUpdateRelationInput>>>;
  boardPeriods?: Maybe<Array<Maybe<BoardPeriodUpdateRelationInput>>>;
  committeePeriods?: Maybe<Array<Maybe<CommitteePeriodUpdateRelationInput>>>;
  mandates?: Maybe<Array<Maybe<MandateUpdateRelationInput>>>;
  transactions?: Maybe<Array<Maybe<TransactionUpdateRelationInput>>>;
  warnings?: Maybe<Array<Maybe<DirectDebitWarningUpdateRelationInput>>>;
};

export type MemberWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type MemberList = {
  __typename?: 'MemberList';
  info?: Maybe<ListInfo>;
  values: Array<Member>;
};

export type CommitteePeriodWhereInput = {
  id?: Maybe<StringFilter>;
  name?: Maybe<ShortTranslatableWhereInput>;
  startedAt?: Maybe<DateTimeFilter>;
  endedAt?: Maybe<DateTimeFilter>;
  committee?: Maybe<CommitteeWhereInput>;
  members?: Maybe<MemberWhereInput>;
  AND?: Maybe<Array<Maybe<CommitteePeriodWhereInput>>>;
  OR?: Maybe<Array<Maybe<CommitteePeriodWhereInput>>>;
};

export type CommitteePeriodOrderByInput = {
  id?: Maybe<OrderByArg>;
  name?: Maybe<ShortTranslatableOrderByInput>;
  startedAt?: Maybe<OrderByArg>;
  endedAt?: Maybe<OrderByArg>;
  committee?: Maybe<CommitteeOrderByInput>;
};

export type CommitteePeriodCreateInput = {
  id?: Maybe<Scalars['String']>;
  name: ShortTranslatableCreateInput;
  startedAt: Scalars['Date'];
  endedAt?: Maybe<Scalars['Date']>;
  committee: CommitteeCreateRelationInput;
  members?: Maybe<Array<Maybe<MemberCreateRelationInput>>>;
};

export type CommitteePeriodUpdateInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<ShortTranslatableUpdateInput>;
  startedAt?: Maybe<Scalars['Date']>;
  endedAt?: Maybe<Scalars['Date']>;
  committee?: Maybe<CommitteeUpdateRelationInput>;
  members?: Maybe<Array<Maybe<MemberUpdateRelationInput>>>;
};

export type CommitteePeriodWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type CommitteePeriodList = {
  __typename?: 'CommitteePeriodList';
  info?: Maybe<ListInfo>;
  values: Array<CommitteePeriod>;
};

export type CommitteeWhereInput = {
  id?: Maybe<StringFilter>;
  name?: Maybe<ShortTranslatableWhereInput>;
  description?: Maybe<LongTranslatableWhereInput>;
  periods?: Maybe<CommitteePeriodWhereInput>;
  AND?: Maybe<Array<Maybe<CommitteeWhereInput>>>;
  OR?: Maybe<Array<Maybe<CommitteeWhereInput>>>;
};

export type CommitteeOrderByInput = {
  id?: Maybe<OrderByArg>;
  name?: Maybe<ShortTranslatableOrderByInput>;
  description?: Maybe<LongTranslatableOrderByInput>;
};

export type CommitteeCreateInput = {
  id?: Maybe<Scalars['String']>;
  name: ShortTranslatableCreateInput;
  description: LongTranslatableCreateInput;
  periods?: Maybe<Array<Maybe<CommitteePeriodCreateRelationInput>>>;
};

export type CommitteeUpdateInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<ShortTranslatableUpdateInput>;
  description?: Maybe<LongTranslatableUpdateInput>;
  periods?: Maybe<Array<Maybe<CommitteePeriodUpdateRelationInput>>>;
};

export type CommitteeWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type CommitteeList = {
  __typename?: 'CommitteeList';
  info?: Maybe<ListInfo>;
  values: Array<Committee>;
};

export type DigitalMandateWhereInput = {
  id?: Maybe<StringFilter>;
  mandateId?: Maybe<StringFilter>;
  status?: Maybe<MandateStatusFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  acceptedAt?: Maybe<DateTimeFilter>;
  bic?: Maybe<StringFilter>;
  iban?: Maybe<StringFilter>;
  reason?: Maybe<StringFilter>;
  isFirstTransaction?: Maybe<Scalars['Boolean']>;
  errorMessage?: Maybe<StringFilter>;
  member?: Maybe<MemberWhereInput>;
  instructions?: Maybe<DirectDebitInstructionWhereInput>;
  messageId?: Maybe<StringFilter>;
  entranceCode?: Maybe<StringFilter>;
  transactionId?: Maybe<StringFilter>;
  AND?: Maybe<Array<Maybe<DigitalMandateWhereInput>>>;
  OR?: Maybe<Array<Maybe<DigitalMandateWhereInput>>>;
};

export type DigitalMandateOrderByInput = {
  id?: Maybe<OrderByArg>;
  mandateId?: Maybe<OrderByArg>;
  status?: Maybe<OrderByArg>;
  createdAt?: Maybe<OrderByArg>;
  acceptedAt?: Maybe<OrderByArg>;
  bic?: Maybe<OrderByArg>;
  iban?: Maybe<OrderByArg>;
  reason?: Maybe<OrderByArg>;
  isFirstTransaction?: Maybe<OrderByArg>;
  errorMessage?: Maybe<OrderByArg>;
  member?: Maybe<MemberOrderByInput>;
  messageId?: Maybe<OrderByArg>;
  entranceCode?: Maybe<OrderByArg>;
  transactionId?: Maybe<OrderByArg>;
};

export type DigitalMandateCreateInput = {
  id?: Maybe<Scalars['String']>;
  mandateId: Scalars['String'];
  status?: Maybe<MandateStatus>;
  createdAt?: Maybe<Scalars['DateTime']>;
  acceptedAt?: Maybe<Scalars['DateTime']>;
  bic: Scalars['String'];
  iban?: Maybe<Scalars['String']>;
  reason: Scalars['String'];
  isFirstTransaction?: Maybe<Scalars['Boolean']>;
  errorMessage?: Maybe<Scalars['String']>;
  member: MemberCreateRelationInput;
  instructions?: Maybe<Array<Maybe<DirectDebitInstructionCreateRelationInput>>>;
  messageId: Scalars['String'];
  entranceCode: Scalars['String'];
  transactionId?: Maybe<Scalars['String']>;
};

export type DigitalMandateUpdateInput = {
  id?: Maybe<Scalars['String']>;
  mandateId?: Maybe<Scalars['String']>;
  status?: Maybe<MandateStatus>;
  createdAt?: Maybe<Scalars['DateTime']>;
  acceptedAt?: Maybe<Scalars['DateTime']>;
  bic?: Maybe<Scalars['String']>;
  iban?: Maybe<Scalars['String']>;
  reason?: Maybe<Scalars['String']>;
  isFirstTransaction?: Maybe<Scalars['Boolean']>;
  errorMessage?: Maybe<Scalars['String']>;
  member?: Maybe<MemberUpdateRelationInput>;
  instructions?: Maybe<Array<Maybe<DirectDebitInstructionUpdateRelationInput>>>;
  messageId?: Maybe<Scalars['String']>;
  entranceCode?: Maybe<Scalars['String']>;
  transactionId?: Maybe<Scalars['String']>;
};

export type DigitalMandateWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type DigitalMandateList = {
  __typename?: 'DigitalMandateList';
  info?: Maybe<ListInfo>;
  values: Array<DigitalMandate>;
};

export type PageWhereInput = {
  id?: Maybe<StringFilter>;
  title?: Maybe<ShortTranslatableWhereInput>;
  body?: Maybe<LongTranslatableWhereInput>;
  AND?: Maybe<Array<Maybe<PageWhereInput>>>;
  OR?: Maybe<Array<Maybe<PageWhereInput>>>;
};

export type PageOrderByInput = {
  id?: Maybe<OrderByArg>;
  title?: Maybe<ShortTranslatableOrderByInput>;
  body?: Maybe<LongTranslatableOrderByInput>;
};

export type PageCreateInput = {
  id?: Maybe<Scalars['String']>;
  title: ShortTranslatableCreateInput;
  body: LongTranslatableCreateInput;
};

export type PageUpdateInput = {
  id?: Maybe<Scalars['String']>;
  title?: Maybe<ShortTranslatableUpdateInput>;
  body?: Maybe<LongTranslatableUpdateInput>;
};

export type PageWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type PageList = {
  __typename?: 'PageList';
  info?: Maybe<ListInfo>;
  values: Array<Page>;
};

export type PaperMandateWhereInput = {
  id?: Maybe<StringFilter>;
  mandateId?: Maybe<StringFilter>;
  status?: Maybe<MandateStatusFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  acceptedAt?: Maybe<DateTimeFilter>;
  bic?: Maybe<StringFilter>;
  iban?: Maybe<StringFilter>;
  reason?: Maybe<StringFilter>;
  isFirstTransaction?: Maybe<Scalars['Boolean']>;
  errorMessage?: Maybe<StringFilter>;
  member?: Maybe<MemberWhereInput>;
  instructions?: Maybe<DirectDebitInstructionWhereInput>;
  generatedFile?: Maybe<FileWhereInput>;
  uploadedFile?: Maybe<FileWhereInput>;
  AND?: Maybe<Array<Maybe<PaperMandateWhereInput>>>;
  OR?: Maybe<Array<Maybe<PaperMandateWhereInput>>>;
};

export type PaperMandateOrderByInput = {
  id?: Maybe<OrderByArg>;
  mandateId?: Maybe<OrderByArg>;
  status?: Maybe<OrderByArg>;
  createdAt?: Maybe<OrderByArg>;
  acceptedAt?: Maybe<OrderByArg>;
  bic?: Maybe<OrderByArg>;
  iban?: Maybe<OrderByArg>;
  reason?: Maybe<OrderByArg>;
  isFirstTransaction?: Maybe<OrderByArg>;
  errorMessage?: Maybe<OrderByArg>;
  member?: Maybe<MemberOrderByInput>;
  generatedFile?: Maybe<FileOrderByInput>;
  uploadedFile?: Maybe<FileOrderByInput>;
};

export type PaperMandateCreateInput = {
  id?: Maybe<Scalars['String']>;
  mandateId: Scalars['String'];
  status?: Maybe<MandateStatus>;
  createdAt?: Maybe<Scalars['DateTime']>;
  acceptedAt?: Maybe<Scalars['DateTime']>;
  bic: Scalars['String'];
  iban?: Maybe<Scalars['String']>;
  reason: Scalars['String'];
  isFirstTransaction?: Maybe<Scalars['Boolean']>;
  errorMessage?: Maybe<Scalars['String']>;
  member: MemberCreateRelationInput;
  instructions?: Maybe<Array<Maybe<DirectDebitInstructionCreateRelationInput>>>;
  generatedFile?: Maybe<FileCreateRelationInput>;
  uploadedFile?: Maybe<FileCreateRelationInput>;
};

export type PaperMandateUpdateInput = {
  id?: Maybe<Scalars['String']>;
  mandateId?: Maybe<Scalars['String']>;
  status?: Maybe<MandateStatus>;
  createdAt?: Maybe<Scalars['DateTime']>;
  acceptedAt?: Maybe<Scalars['DateTime']>;
  bic?: Maybe<Scalars['String']>;
  iban?: Maybe<Scalars['String']>;
  reason?: Maybe<Scalars['String']>;
  isFirstTransaction?: Maybe<Scalars['Boolean']>;
  errorMessage?: Maybe<Scalars['String']>;
  member?: Maybe<MemberUpdateRelationInput>;
  instructions?: Maybe<Array<Maybe<DirectDebitInstructionUpdateRelationInput>>>;
  generatedFile?: Maybe<FileUpdateRelationInput>;
  uploadedFile?: Maybe<FileUpdateRelationInput>;
};

export type PaperMandateWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type PaperMandateList = {
  __typename?: 'PaperMandateList';
  info?: Maybe<ListInfo>;
  values: Array<PaperMandate>;
};

export type SettingWhereInput = {
  key?: Maybe<StringFilter>;
  value?: Maybe<StringFilter>;
  isPublic?: Maybe<Scalars['Boolean']>;
  AND?: Maybe<Array<Maybe<SettingWhereInput>>>;
  OR?: Maybe<Array<Maybe<SettingWhereInput>>>;
};

export type SettingOrderByInput = {
  key?: Maybe<OrderByArg>;
  value?: Maybe<OrderByArg>;
  isPublic?: Maybe<OrderByArg>;
};

export type SettingCreateInput = {
  key: Scalars['String'];
  value: Scalars['String'];
  isPublic: Scalars['Boolean'];
};

export type SettingUpdateInput = {
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  isPublic?: Maybe<Scalars['Boolean']>;
};

export type SettingWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type SettingList = {
  __typename?: 'SettingList';
  info?: Maybe<ListInfo>;
  values: Array<Setting>;
};

export type ProviderWhereInput = {
  id?: Maybe<StringFilter>;
  type?: Maybe<StringFilter>;
  email?: Maybe<StringFilter>;
  isVerified?: Maybe<Scalars['Boolean']>;
  user?: Maybe<MemberWhereInput>;
  AND?: Maybe<Array<Maybe<ProviderWhereInput>>>;
  OR?: Maybe<Array<Maybe<ProviderWhereInput>>>;
};

export type ProviderOrderByInput = {
  id?: Maybe<OrderByArg>;
  type?: Maybe<OrderByArg>;
  email?: Maybe<OrderByArg>;
  isVerified?: Maybe<OrderByArg>;
  user?: Maybe<MemberOrderByInput>;
};

export type ProviderCreateInput = {
  id?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  email: Scalars['String'];
  isVerified?: Maybe<Scalars['Boolean']>;
  user: MemberCreateRelationInput;
};

export type ProviderUpdateInput = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  isVerified?: Maybe<Scalars['Boolean']>;
  user?: Maybe<MemberUpdateRelationInput>;
};

export type ProviderWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type ProviderList = {
  __typename?: 'ProviderList';
  info?: Maybe<ListInfo>;
  values: Array<Provider>;
};

export type TokenWhereInput = {
  id?: Maybe<StringFilter>;
  type?: Maybe<TokenTypeFilter>;
  token?: Maybe<StringFilter>;
  expiresAt?: Maybe<DateTimeFilter>;
  provider?: Maybe<ProviderWhereInput>;
  AND?: Maybe<Array<Maybe<TokenWhereInput>>>;
  OR?: Maybe<Array<Maybe<TokenWhereInput>>>;
};

export type TokenOrderByInput = {
  id?: Maybe<OrderByArg>;
  type?: Maybe<OrderByArg>;
  token?: Maybe<OrderByArg>;
  expiresAt?: Maybe<OrderByArg>;
  provider?: Maybe<ProviderOrderByInput>;
};

export type TokenCreateInput = {
  id?: Maybe<Scalars['String']>;
  type: TokenType;
  token: Scalars['String'];
  expiresAt: Scalars['DateTime'];
  provider: ProviderCreateRelationInput;
};

export type TokenUpdateInput = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<TokenType>;
  token?: Maybe<Scalars['String']>;
  expiresAt?: Maybe<Scalars['DateTime']>;
  provider?: Maybe<ProviderUpdateRelationInput>;
};

export type TokenWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

export type TokenList = {
  __typename?: 'TokenList';
  info?: Maybe<ListInfo>;
  values: Array<Token>;
};

export type RegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  passwordRepeat: Scalars['String'];
  firstName: Scalars['String'];
  initials: Scalars['String'];
  lastName: Scalars['String'];
  address: Scalars['String'];
  postalCode: Scalars['String'];
  city: Scalars['String'];
  phoneNumber: Scalars['String'];
  birthdate: Scalars['Date'];
  language: Language;
  pronouns: Pronouns;
  studentType: StudentType;
};

export type ShortTranslatableWhereInput = {
  en?: Maybe<StringFilter>;
  nl?: Maybe<StringFilter>;
  AND?: Maybe<Array<Maybe<ShortTranslatableWhereInput>>>;
  OR?: Maybe<Array<Maybe<ShortTranslatableWhereInput>>>;
};

export type ShortTranslatableOrderByInput = {
  en?: Maybe<OrderByArg>;
  nl?: Maybe<OrderByArg>;
};

export type ShortTranslatableCreateInput = {
  en?: Maybe<Scalars['String']>;
  nl?: Maybe<Scalars['String']>;
};

export type MemberCreateRelationInput = {
  create?: Maybe<MemberCreateInput>;
  connect?: Maybe<MemberWhereUniqueInput>;
};

export type ShortTranslatableUpdateInput = {
  en?: Maybe<Scalars['String']>;
  nl?: Maybe<Scalars['String']>;
};

export type MemberUpdateRelationInput = {
  create?: Maybe<MemberCreateInput>;
  connect?: Maybe<MemberWhereUniqueInput>;
  disconnect?: Maybe<MemberWhereUniqueInput>;
};

export type MandateStatusFilter = {
  equals?: Maybe<MandateStatus>;
  not?: Maybe<MandateStatus>;
  in?: Maybe<Array<Maybe<MandateStatus>>>;
  notIn?: Maybe<Array<Maybe<MandateStatus>>>;
};

export type DirectDebitInstructionCreateRelationInput = {
  create?: Maybe<DirectDebitInstructionCreateInput>;
  connect?: Maybe<DirectDebitInstructionWhereUniqueInput>;
};

export type DirectDebitInstructionUpdateRelationInput = {
  create?: Maybe<DirectDebitInstructionCreateInput>;
  connect?: Maybe<DirectDebitInstructionWhereUniqueInput>;
  disconnect?: Maybe<DirectDebitInstructionWhereUniqueInput>;
};

export type DirectDebitBatchCreateRelationInput = {
  create?: Maybe<DirectDebitBatchCreateInput>;
  connect?: Maybe<DirectDebitBatchWhereUniqueInput>;
};

export type TransactionCreateRelationInput = {
  create?: Maybe<TransactionCreateInput>;
  connect?: Maybe<TransactionWhereUniqueInput>;
};

export type MandateCreateRelationInput = {
  create?: Maybe<MandateCreateInput>;
  connect?: Maybe<MandateWhereUniqueInput>;
};

export type DirectDebitBatchUpdateRelationInput = {
  create?: Maybe<DirectDebitBatchCreateInput>;
  connect?: Maybe<DirectDebitBatchWhereUniqueInput>;
  disconnect?: Maybe<DirectDebitBatchWhereUniqueInput>;
};

export type TransactionUpdateRelationInput = {
  create?: Maybe<TransactionCreateInput>;
  connect?: Maybe<TransactionWhereUniqueInput>;
  disconnect?: Maybe<TransactionWhereUniqueInput>;
};

export type MandateUpdateRelationInput = {
  create?: Maybe<MandateCreateInput>;
  connect?: Maybe<MandateWhereUniqueInput>;
  disconnect?: Maybe<MandateWhereUniqueInput>;
};

export type SequenceTypeFilter = {
  equals?: Maybe<SequenceType>;
  not?: Maybe<SequenceType>;
  in?: Maybe<Array<Maybe<SequenceType>>>;
  notIn?: Maybe<Array<Maybe<SequenceType>>>;
};

export type DirectDebitCreateRelationInput = {
  create?: Maybe<DirectDebitCreateInput>;
  connect?: Maybe<DirectDebitWhereUniqueInput>;
};

export type DirectDebitUpdateRelationInput = {
  create?: Maybe<DirectDebitCreateInput>;
  connect?: Maybe<DirectDebitWhereUniqueInput>;
  disconnect?: Maybe<DirectDebitWhereUniqueInput>;
};

export type DirectDebitStatusFilter = {
  equals?: Maybe<DirectDebitStatus>;
  not?: Maybe<DirectDebitStatus>;
  in?: Maybe<Array<Maybe<DirectDebitStatus>>>;
  notIn?: Maybe<Array<Maybe<DirectDebitStatus>>>;
};

export type DirectDebitWarningCreateRelationInput = {
  create?: Maybe<DirectDebitWarningCreateInput>;
  connect?: Maybe<DirectDebitWarningWhereUniqueInput>;
};

export type FileCreateRelationInput = {
  create?: Maybe<FileCreateInput>;
  connect?: Maybe<FileWhereUniqueInput>;
};

export type DirectDebitWarningUpdateRelationInput = {
  create?: Maybe<DirectDebitWarningCreateInput>;
  connect?: Maybe<DirectDebitWarningWhereUniqueInput>;
  disconnect?: Maybe<DirectDebitWarningWhereUniqueInput>;
};

export type FileUpdateRelationInput = {
  create?: Maybe<FileCreateInput>;
  connect?: Maybe<FileWhereUniqueInput>;
  disconnect?: Maybe<FileWhereUniqueInput>;
};

export type MembershipCreateRelationInput = {
  create?: Maybe<MembershipCreateInput>;
  connect?: Maybe<MembershipWhereUniqueInput>;
};

export type MembershipUpdateRelationInput = {
  create?: Maybe<MembershipCreateInput>;
  connect?: Maybe<MembershipWhereUniqueInput>;
  disconnect?: Maybe<MembershipWhereUniqueInput>;
};

export type MembershipTypeFilter = {
  equals?: Maybe<MembershipType>;
  not?: Maybe<MembershipType>;
  in?: Maybe<Array<Maybe<MembershipType>>>;
  notIn?: Maybe<Array<Maybe<MembershipType>>>;
};

export type MembershipFeeTransactionCreateRelationInput = {
  create?: Maybe<MembershipFeeTransactionCreateInput>;
  connect?: Maybe<MembershipFeeTransactionWhereUniqueInput>;
};

export type MembershipFeeTransactionUpdateRelationInput = {
  create?: Maybe<MembershipFeeTransactionCreateInput>;
  connect?: Maybe<MembershipFeeTransactionWhereUniqueInput>;
  disconnect?: Maybe<MembershipFeeTransactionWhereUniqueInput>;
};

export type LanguageFilter = {
  equals?: Maybe<Language>;
  not?: Maybe<Language>;
  in?: Maybe<Array<Maybe<Language>>>;
  notIn?: Maybe<Array<Maybe<Language>>>;
};

export type PronounsFilter = {
  equals?: Maybe<Pronouns>;
  not?: Maybe<Pronouns>;
  in?: Maybe<Array<Maybe<Pronouns>>>;
  notIn?: Maybe<Array<Maybe<Pronouns>>>;
};

export type StudentTypeFilter = {
  equals?: Maybe<StudentType>;
  not?: Maybe<StudentType>;
  in?: Maybe<Array<Maybe<StudentType>>>;
  notIn?: Maybe<Array<Maybe<StudentType>>>;
};

export type ProviderCreateRelationInput = {
  create?: Maybe<ProviderCreateInput>;
  connect?: Maybe<ProviderWhereUniqueInput>;
};

export type BoardPeriodCreateRelationInput = {
  create?: Maybe<BoardPeriodCreateInput>;
  connect?: Maybe<BoardPeriodWhereUniqueInput>;
};

export type CommitteePeriodCreateRelationInput = {
  create?: Maybe<CommitteePeriodCreateInput>;
  connect?: Maybe<CommitteePeriodWhereUniqueInput>;
};

export type ProviderUpdateRelationInput = {
  create?: Maybe<ProviderCreateInput>;
  connect?: Maybe<ProviderWhereUniqueInput>;
  disconnect?: Maybe<ProviderWhereUniqueInput>;
};

export type BoardPeriodUpdateRelationInput = {
  create?: Maybe<BoardPeriodCreateInput>;
  connect?: Maybe<BoardPeriodWhereUniqueInput>;
  disconnect?: Maybe<BoardPeriodWhereUniqueInput>;
};

export type CommitteePeriodUpdateRelationInput = {
  create?: Maybe<CommitteePeriodCreateInput>;
  connect?: Maybe<CommitteePeriodWhereUniqueInput>;
  disconnect?: Maybe<CommitteePeriodWhereUniqueInput>;
};

export type CommitteeCreateRelationInput = {
  create?: Maybe<CommitteeCreateInput>;
  connect?: Maybe<CommitteeWhereUniqueInput>;
};

export type CommitteeUpdateRelationInput = {
  create?: Maybe<CommitteeCreateInput>;
  connect?: Maybe<CommitteeWhereUniqueInput>;
  disconnect?: Maybe<CommitteeWhereUniqueInput>;
};

export type LongTranslatableWhereInput = {
  en?: Maybe<StringFilter>;
  nl?: Maybe<StringFilter>;
  AND?: Maybe<Array<Maybe<LongTranslatableWhereInput>>>;
  OR?: Maybe<Array<Maybe<LongTranslatableWhereInput>>>;
};

export type LongTranslatableOrderByInput = {
  en?: Maybe<OrderByArg>;
  nl?: Maybe<OrderByArg>;
};

export type LongTranslatableCreateInput = {
  en?: Maybe<Scalars['String']>;
  nl?: Maybe<Scalars['String']>;
};

export type LongTranslatableUpdateInput = {
  en?: Maybe<Scalars['String']>;
  nl?: Maybe<Scalars['String']>;
};

export type TokenTypeFilter = {
  equals?: Maybe<TokenType>;
  not?: Maybe<TokenType>;
  in?: Maybe<Array<Maybe<TokenType>>>;
  notIn?: Maybe<Array<Maybe<TokenType>>>;
};

export type Query = {
  __typename?: 'Query';
  bank: Bank;
  banks: BankList;
  boardPeriod: BoardPeriod;
  boardPeriods: BoardPeriodList;
  mandate: Mandate;
  mandates: MandateList;
  transaction: Transaction;
  transactions: TransactionList;
  directDebitInstruction: DirectDebitInstruction;
  directDebitInstructions: DirectDebitInstructionList;
  directDebitBatch: DirectDebitBatch;
  directDebitBatches: DirectDebitBatchList;
  file: File;
  files: FileList;
  directDebit: DirectDebit;
  directDebits: DirectDebitList;
  directDebitWarning: DirectDebitWarning;
  directDebitWarnings: DirectDebitWarningList;
  membershipFeeTransaction: MembershipFeeTransaction;
  membershipFeeTransactions: MembershipFeeTransactionList;
  membership: Membership;
  memberships: MembershipList;
  member: Member;
  members: MemberList;
  committeePeriod: CommitteePeriod;
  committeePeriods: CommitteePeriodList;
  committee: Committee;
  committees: CommitteeList;
  digitalMandate: DigitalMandate;
  digitalMandates: DigitalMandateList;
  page: Page;
  pages: PageList;
  paperMandate: PaperMandate;
  paperMandates: PaperMandateList;
  setting: Setting;
  settings: SettingList;
  provider: Provider;
  providers: ProviderList;
  token: Token;
  tokens: TokenList;
  me?: Maybe<Member>;
};


export type QuerybankArgs = {
  where: BankWhereUniqueInput;
};


export type QuerybanksArgs = {
  where?: Maybe<BankWhereInput>;
  orderBy?: Maybe<BankOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryboardPeriodArgs = {
  where: BoardPeriodWhereUniqueInput;
};


export type QueryboardPeriodsArgs = {
  where?: Maybe<BoardPeriodWhereInput>;
  orderBy?: Maybe<BoardPeriodOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QuerymandateArgs = {
  where: MandateWhereUniqueInput;
};


export type QuerymandatesArgs = {
  where?: Maybe<MandateWhereInput>;
  orderBy?: Maybe<MandateOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QuerytransactionArgs = {
  where: TransactionWhereUniqueInput;
};


export type QuerytransactionsArgs = {
  where?: Maybe<TransactionWhereInput>;
  orderBy?: Maybe<TransactionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QuerydirectDebitInstructionArgs = {
  where: DirectDebitInstructionWhereUniqueInput;
};


export type QuerydirectDebitInstructionsArgs = {
  where?: Maybe<DirectDebitInstructionWhereInput>;
  orderBy?: Maybe<DirectDebitInstructionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QuerydirectDebitBatchArgs = {
  where: DirectDebitBatchWhereUniqueInput;
};


export type QuerydirectDebitBatchesArgs = {
  where?: Maybe<DirectDebitBatchWhereInput>;
  orderBy?: Maybe<DirectDebitBatchOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryfileArgs = {
  where: FileWhereUniqueInput;
};


export type QueryfilesArgs = {
  where?: Maybe<FileWhereInput>;
  orderBy?: Maybe<FileOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QuerydirectDebitArgs = {
  where: DirectDebitWhereUniqueInput;
};


export type QuerydirectDebitsArgs = {
  where?: Maybe<DirectDebitWhereInput>;
  orderBy?: Maybe<DirectDebitOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QuerydirectDebitWarningArgs = {
  where: DirectDebitWarningWhereUniqueInput;
};


export type QuerydirectDebitWarningsArgs = {
  where?: Maybe<DirectDebitWarningWhereInput>;
  orderBy?: Maybe<DirectDebitWarningOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QuerymembershipFeeTransactionArgs = {
  where: MembershipFeeTransactionWhereUniqueInput;
};


export type QuerymembershipFeeTransactionsArgs = {
  where?: Maybe<MembershipFeeTransactionWhereInput>;
  orderBy?: Maybe<MembershipFeeTransactionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QuerymembershipArgs = {
  where: MembershipWhereUniqueInput;
};


export type QuerymembershipsArgs = {
  where?: Maybe<MembershipWhereInput>;
  orderBy?: Maybe<MembershipOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QuerymemberArgs = {
  where: MemberWhereUniqueInput;
};


export type QuerymembersArgs = {
  where?: Maybe<MemberWhereInput>;
  orderBy?: Maybe<MemberOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QuerycommitteePeriodArgs = {
  where: CommitteePeriodWhereUniqueInput;
};


export type QuerycommitteePeriodsArgs = {
  where?: Maybe<CommitteePeriodWhereInput>;
  orderBy?: Maybe<CommitteePeriodOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QuerycommitteeArgs = {
  where: CommitteeWhereUniqueInput;
};


export type QuerycommitteesArgs = {
  where?: Maybe<CommitteeWhereInput>;
  orderBy?: Maybe<CommitteeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QuerydigitalMandateArgs = {
  where: DigitalMandateWhereUniqueInput;
};


export type QuerydigitalMandatesArgs = {
  where?: Maybe<DigitalMandateWhereInput>;
  orderBy?: Maybe<DigitalMandateOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QuerypageArgs = {
  where: PageWhereUniqueInput;
};


export type QuerypagesArgs = {
  where?: Maybe<PageWhereInput>;
  orderBy?: Maybe<PageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QuerypaperMandateArgs = {
  where: PaperMandateWhereUniqueInput;
};


export type QuerypaperMandatesArgs = {
  where?: Maybe<PaperMandateWhereInput>;
  orderBy?: Maybe<PaperMandateOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QuerysettingArgs = {
  where: SettingWhereUniqueInput;
};


export type QuerysettingsArgs = {
  where?: Maybe<SettingWhereInput>;
  orderBy?: Maybe<SettingOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QueryproviderArgs = {
  where: ProviderWhereUniqueInput;
};


export type QueryprovidersArgs = {
  where?: Maybe<ProviderWhereInput>;
  orderBy?: Maybe<ProviderOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type QuerytokenArgs = {
  where: TokenWhereUniqueInput;
};


export type QuerytokensArgs = {
  where?: Maybe<TokenWhereInput>;
  orderBy?: Maybe<TokenOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  invalidateMandate?: Maybe<Mandate>;
  sendMandateReminders?: Maybe<Scalars['Boolean']>;
  createDigitalMandate?: Maybe<CreateDigitalMandateResult>;
  createPaperMandate?: Maybe<PaperMandate>;
  cancelPaperMandate?: Maybe<PaperMandate>;
  acceptPaperMandate?: Maybe<PaperMandate>;
  rejectPaperMandate?: Maybe<PaperMandate>;
  generateMembershipFeeTransactions?: Maybe<Scalars['Int']>;
  sendContactForm?: Maybe<Scalars['Boolean']>;
  generateDirectDebit?: Maybe<DirectDebit>;
  generateDirectDebitFile?: Maybe<DirectDebit>;
  uploadMemberImage?: Maybe<Member>;
  uploadPaperMandate?: Maybe<PaperMandate>;
  createBank: Bank;
  updateBank: Bank;
  deleteBank: Bank;
  deleteBanks: BankList;
  createBoardPeriod: BoardPeriod;
  updateBoardPeriod: BoardPeriod;
  deleteBoardPeriod: BoardPeriod;
  deleteBoardPeriods: BoardPeriodList;
  createMandate: Mandate;
  updateMandate: Mandate;
  deleteMandate: Mandate;
  deleteMandates: MandateList;
  createTransaction: Transaction;
  updateTransaction: Transaction;
  deleteTransaction: Transaction;
  deleteTransactions: TransactionList;
  createDirectDebitInstruction: DirectDebitInstruction;
  updateDirectDebitInstruction: DirectDebitInstruction;
  deleteDirectDebitInstruction: DirectDebitInstruction;
  deleteDirectDebitInstructions: DirectDebitInstructionList;
  createDirectDebitBatch: DirectDebitBatch;
  updateDirectDebitBatch: DirectDebitBatch;
  deleteDirectDebitBatch: DirectDebitBatch;
  deleteDirectDebitBatches: DirectDebitBatchList;
  createFile: File;
  updateFile: File;
  deleteFile: File;
  deleteFiles: FileList;
  createDirectDebit: DirectDebit;
  updateDirectDebit: DirectDebit;
  deleteDirectDebit: DirectDebit;
  deleteDirectDebits: DirectDebitList;
  createDirectDebitWarning: DirectDebitWarning;
  updateDirectDebitWarning: DirectDebitWarning;
  deleteDirectDebitWarning: DirectDebitWarning;
  deleteDirectDebitWarnings: DirectDebitWarningList;
  createMembershipFeeTransaction: MembershipFeeTransaction;
  updateMembershipFeeTransaction: MembershipFeeTransaction;
  deleteMembershipFeeTransaction: MembershipFeeTransaction;
  deleteMembershipFeeTransactions: MembershipFeeTransactionList;
  createMembership: Membership;
  updateMembership: Membership;
  deleteMembership: Membership;
  deleteMemberships: MembershipList;
  createMember: Member;
  updateMember: Member;
  deleteMember: Member;
  deleteMembers: MemberList;
  createCommitteePeriod: CommitteePeriod;
  updateCommitteePeriod: CommitteePeriod;
  deleteCommitteePeriod: CommitteePeriod;
  deleteCommitteePeriods: CommitteePeriodList;
  createCommittee: Committee;
  updateCommittee: Committee;
  deleteCommittee: Committee;
  deleteCommittees: CommitteeList;
  createPage: Page;
  updatePage: Page;
  deletePage: Page;
  deletePages: PageList;
  createSetting: Setting;
  updateSetting: Setting;
  deleteSetting: Setting;
  deleteSettings: SettingList;
  createProvider: Provider;
  updateProvider: Provider;
  deleteProvider: Provider;
  deleteProviders: ProviderList;
  createToken: Token;
  updateToken: Token;
  deleteToken: Token;
  deleteTokens: TokenList;
  register?: Maybe<Scalars['Boolean']>;
  login?: Maybe<AccessToken>;
  changeEmail?: Maybe<Scalars['Boolean']>;
  changePassword?: Maybe<Scalars['Boolean']>;
  requestVerifyEmail?: Maybe<Scalars['Boolean']>;
  requestResetPassword?: Maybe<Scalars['Boolean']>;
  verifyEmail?: Maybe<Scalars['Boolean']>;
  resetPassword?: Maybe<Scalars['Boolean']>;
};


export type MutationinvalidateMandateArgs = {
  mandate: MandateWhereUniqueInput;
};


export type MutationsendMandateRemindersArgs = {
  beforeDate: Scalars['Date'];
};


export type MutationcreateDigitalMandateArgs = {
  data: CreateDigitalMandateInput;
};


export type MutationcreatePaperMandateArgs = {
  data: CreatePaperMandateInput;
};


export type MutationcancelPaperMandateArgs = {
  mandate: PaperMandateWhereUniqueInput;
};


export type MutationacceptPaperMandateArgs = {
  mandate: PaperMandateWhereUniqueInput;
};


export type MutationrejectPaperMandateArgs = {
  mandate: PaperMandateWhereUniqueInput;
  reason: Scalars['String'];
};


export type MutationgenerateMembershipFeeTransactionsArgs = {
  year: Scalars['Int'];
};


export type MutationsendContactFormArgs = {
  name: Scalars['String'];
  email: Scalars['String'];
  subject: Scalars['String'];
  message: Scalars['String'];
  recaptcha?: Maybe<Scalars['String']>;
};


export type MutationgenerateDirectDebitArgs = {
  collectionDate: Scalars['Date'];
};


export type MutationgenerateDirectDebitFileArgs = {
  directDebit: DirectDebitWhereUniqueInput;
};


export type MutationuploadMemberImageArgs = {
  member: MemberWhereUniqueInput;
  file: Scalars['Upload'];
};


export type MutationuploadPaperMandateArgs = {
  paperMandate: PaperMandateWhereUniqueInput;
  file: Scalars['Upload'];
};


export type MutationcreateBankArgs = {
  data: BankCreateInput;
};


export type MutationupdateBankArgs = {
  where: BankWhereUniqueInput;
  data: BankUpdateInput;
};


export type MutationdeleteBankArgs = {
  where: BankWhereUniqueInput;
};


export type MutationdeleteBanksArgs = {
  where?: Maybe<BankWhereInput>;
  orderBy?: Maybe<BankOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type MutationcreateBoardPeriodArgs = {
  data: BoardPeriodCreateInput;
};


export type MutationupdateBoardPeriodArgs = {
  where: BoardPeriodWhereUniqueInput;
  data: BoardPeriodUpdateInput;
};


export type MutationdeleteBoardPeriodArgs = {
  where: BoardPeriodWhereUniqueInput;
};


export type MutationdeleteBoardPeriodsArgs = {
  where?: Maybe<BoardPeriodWhereInput>;
  orderBy?: Maybe<BoardPeriodOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type MutationcreateMandateArgs = {
  data: MandateCreateInput;
};


export type MutationupdateMandateArgs = {
  where: MandateWhereUniqueInput;
  data: MandateUpdateInput;
};


export type MutationdeleteMandateArgs = {
  where: MandateWhereUniqueInput;
};


export type MutationdeleteMandatesArgs = {
  where?: Maybe<MandateWhereInput>;
  orderBy?: Maybe<MandateOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type MutationcreateTransactionArgs = {
  data: TransactionCreateInput;
};


export type MutationupdateTransactionArgs = {
  where: TransactionWhereUniqueInput;
  data: TransactionUpdateInput;
};


export type MutationdeleteTransactionArgs = {
  where: TransactionWhereUniqueInput;
};


export type MutationdeleteTransactionsArgs = {
  where?: Maybe<TransactionWhereInput>;
  orderBy?: Maybe<TransactionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type MutationcreateDirectDebitInstructionArgs = {
  data: DirectDebitInstructionCreateInput;
};


export type MutationupdateDirectDebitInstructionArgs = {
  where: DirectDebitInstructionWhereUniqueInput;
  data: DirectDebitInstructionUpdateInput;
};


export type MutationdeleteDirectDebitInstructionArgs = {
  where: DirectDebitInstructionWhereUniqueInput;
};


export type MutationdeleteDirectDebitInstructionsArgs = {
  where?: Maybe<DirectDebitInstructionWhereInput>;
  orderBy?: Maybe<DirectDebitInstructionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type MutationcreateDirectDebitBatchArgs = {
  data: DirectDebitBatchCreateInput;
};


export type MutationupdateDirectDebitBatchArgs = {
  where: DirectDebitBatchWhereUniqueInput;
  data: DirectDebitBatchUpdateInput;
};


export type MutationdeleteDirectDebitBatchArgs = {
  where: DirectDebitBatchWhereUniqueInput;
};


export type MutationdeleteDirectDebitBatchesArgs = {
  where?: Maybe<DirectDebitBatchWhereInput>;
  orderBy?: Maybe<DirectDebitBatchOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type MutationcreateFileArgs = {
  data: FileCreateInput;
};


export type MutationupdateFileArgs = {
  where: FileWhereUniqueInput;
  data: FileUpdateInput;
};


export type MutationdeleteFileArgs = {
  where: FileWhereUniqueInput;
};


export type MutationdeleteFilesArgs = {
  where?: Maybe<FileWhereInput>;
  orderBy?: Maybe<FileOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type MutationcreateDirectDebitArgs = {
  data: DirectDebitCreateInput;
};


export type MutationupdateDirectDebitArgs = {
  where: DirectDebitWhereUniqueInput;
  data: DirectDebitUpdateInput;
};


export type MutationdeleteDirectDebitArgs = {
  where: DirectDebitWhereUniqueInput;
};


export type MutationdeleteDirectDebitsArgs = {
  where?: Maybe<DirectDebitWhereInput>;
  orderBy?: Maybe<DirectDebitOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type MutationcreateDirectDebitWarningArgs = {
  data: DirectDebitWarningCreateInput;
};


export type MutationupdateDirectDebitWarningArgs = {
  where: DirectDebitWarningWhereUniqueInput;
  data: DirectDebitWarningUpdateInput;
};


export type MutationdeleteDirectDebitWarningArgs = {
  where: DirectDebitWarningWhereUniqueInput;
};


export type MutationdeleteDirectDebitWarningsArgs = {
  where?: Maybe<DirectDebitWarningWhereInput>;
  orderBy?: Maybe<DirectDebitWarningOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type MutationcreateMembershipFeeTransactionArgs = {
  data: MembershipFeeTransactionCreateInput;
};


export type MutationupdateMembershipFeeTransactionArgs = {
  where: MembershipFeeTransactionWhereUniqueInput;
  data: MembershipFeeTransactionUpdateInput;
};


export type MutationdeleteMembershipFeeTransactionArgs = {
  where: MembershipFeeTransactionWhereUniqueInput;
};


export type MutationdeleteMembershipFeeTransactionsArgs = {
  where?: Maybe<MembershipFeeTransactionWhereInput>;
  orderBy?: Maybe<MembershipFeeTransactionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type MutationcreateMembershipArgs = {
  data: MembershipCreateInput;
};


export type MutationupdateMembershipArgs = {
  where: MembershipWhereUniqueInput;
  data: MembershipUpdateInput;
};


export type MutationdeleteMembershipArgs = {
  where: MembershipWhereUniqueInput;
};


export type MutationdeleteMembershipsArgs = {
  where?: Maybe<MembershipWhereInput>;
  orderBy?: Maybe<MembershipOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type MutationcreateMemberArgs = {
  data: MemberCreateInput;
};


export type MutationupdateMemberArgs = {
  where: MemberWhereUniqueInput;
  data: MemberUpdateInput;
};


export type MutationdeleteMemberArgs = {
  where: MemberWhereUniqueInput;
};


export type MutationdeleteMembersArgs = {
  where?: Maybe<MemberWhereInput>;
  orderBy?: Maybe<MemberOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type MutationcreateCommitteePeriodArgs = {
  data: CommitteePeriodCreateInput;
};


export type MutationupdateCommitteePeriodArgs = {
  where: CommitteePeriodWhereUniqueInput;
  data: CommitteePeriodUpdateInput;
};


export type MutationdeleteCommitteePeriodArgs = {
  where: CommitteePeriodWhereUniqueInput;
};


export type MutationdeleteCommitteePeriodsArgs = {
  where?: Maybe<CommitteePeriodWhereInput>;
  orderBy?: Maybe<CommitteePeriodOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type MutationcreateCommitteeArgs = {
  data: CommitteeCreateInput;
};


export type MutationupdateCommitteeArgs = {
  where: CommitteeWhereUniqueInput;
  data: CommitteeUpdateInput;
};


export type MutationdeleteCommitteeArgs = {
  where: CommitteeWhereUniqueInput;
};


export type MutationdeleteCommitteesArgs = {
  where?: Maybe<CommitteeWhereInput>;
  orderBy?: Maybe<CommitteeOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type MutationcreatePageArgs = {
  data: PageCreateInput;
};


export type MutationupdatePageArgs = {
  where: PageWhereUniqueInput;
  data: PageUpdateInput;
};


export type MutationdeletePageArgs = {
  where: PageWhereUniqueInput;
};


export type MutationdeletePagesArgs = {
  where?: Maybe<PageWhereInput>;
  orderBy?: Maybe<PageOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type MutationcreateSettingArgs = {
  data: SettingCreateInput;
};


export type MutationupdateSettingArgs = {
  where: SettingWhereUniqueInput;
  data: SettingUpdateInput;
};


export type MutationdeleteSettingArgs = {
  where: SettingWhereUniqueInput;
};


export type MutationdeleteSettingsArgs = {
  where?: Maybe<SettingWhereInput>;
  orderBy?: Maybe<SettingOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type MutationcreateProviderArgs = {
  data: ProviderCreateInput;
};


export type MutationupdateProviderArgs = {
  where: ProviderWhereUniqueInput;
  data: ProviderUpdateInput;
};


export type MutationdeleteProviderArgs = {
  where: ProviderWhereUniqueInput;
};


export type MutationdeleteProvidersArgs = {
  where?: Maybe<ProviderWhereInput>;
  orderBy?: Maybe<ProviderOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type MutationcreateTokenArgs = {
  data: TokenCreateInput;
};


export type MutationupdateTokenArgs = {
  where: TokenWhereUniqueInput;
  data: TokenUpdateInput;
};


export type MutationdeleteTokenArgs = {
  where: TokenWhereUniqueInput;
};


export type MutationdeleteTokensArgs = {
  where?: Maybe<TokenWhereInput>;
  orderBy?: Maybe<TokenOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};


export type MutationregisterArgs = {
  data: RegisterInput;
};


export type MutationloginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationchangeEmailArgs = {
  email: Scalars['String'];
};


export type MutationchangePasswordArgs = {
  password: Scalars['String'];
  passwordRepeat: Scalars['String'];
};


export type MutationrequestVerifyEmailArgs = {
  email: Scalars['String'];
};


export type MutationrequestResetPasswordArgs = {
  email: Scalars['String'];
};


export type MutationverifyEmailArgs = {
  token: Scalars['String'];
};


export type MutationresetPasswordArgs = {
  token: Scalars['String'];
  password: Scalars['String'];
  passwordRepeat: Scalars['String'];
};

export type BankFragment = (
  { __typename?: 'Bank' }
  & Pick<Bank, 'id' | 'bic' | 'country' | 'name' | 'isActive'>
);

export type CommitteeFragment = (
  { __typename?: 'Committee' }
  & Pick<Committee, 'id'>
  & { name?: Maybe<(
    { __typename?: 'ShortTranslatable' }
    & TranslatableFragment_ShortTranslatable_
  )>, description?: Maybe<(
    { __typename?: 'LongTranslatable' }
    & TranslatableFragment_LongTranslatable_
  )> }
);

export type DirectDebitFragment = (
  { __typename?: 'DirectDebit' }
  & Pick<DirectDebit, 'id' | 'createdAt' | 'updatedAt' | 'status' | 'messageId' | 'collectionDate' | 'instructionCount' | 'amount'>
);

export type DirectDebitBatchFragment = (
  { __typename?: 'DirectDebitBatch' }
  & Pick<DirectDebitBatch, 'id' | 'createdAt' | 'updatedAt' | 'batchId' | 'sequenceType' | 'instructionCount' | 'amount'>
);

export type DirectDebitInstructionFragment = (
  { __typename?: 'DirectDebitInstruction' }
  & Pick<DirectDebitInstruction, 'id' | 'createdAt' | 'updatedAt' | 'instructionId' | 'description' | 'amount'>
);

export type DirectDebitWarningFragment = (
  { __typename?: 'DirectDebitWarning' }
  & Pick<DirectDebitWarning, 'id' | 'createdAt' | 'updatedAt' | 'description'>
  & { member?: Maybe<(
    { __typename?: 'Member' }
    & Pick<Member, 'id' | 'firstName' | 'lastName'>
  )> }
);

export type FileFragment = (
  { __typename?: 'File' }
  & Pick<File, 'id' | 'name' | 'url' | 'mimeType'>
);

export type MandateFragment_DigitalMandate_ = (
  { __typename?: 'DigitalMandate' }
  & Pick<DigitalMandate, 'id' | 'mandateId' | 'status' | 'createdAt' | 'acceptedAt' | 'bic' | 'iban' | 'reason' | 'isFirstTransaction' | 'errorMessage'>
);

export type MandateFragment_PaperMandate_ = (
  { __typename?: 'PaperMandate' }
  & Pick<PaperMandate, 'id' | 'mandateId' | 'status' | 'createdAt' | 'acceptedAt' | 'bic' | 'iban' | 'reason' | 'isFirstTransaction' | 'errorMessage'>
  & PaperMandateFragment
);

export type MandateFragment = MandateFragment_DigitalMandate_ | MandateFragment_PaperMandate_;

export type PaperMandateFragment = (
  { __typename?: 'PaperMandate' }
  & { generatedFile?: Maybe<(
    { __typename?: 'File' }
    & FileFragment
  )>, uploadedFile?: Maybe<(
    { __typename?: 'File' }
    & FileFragment
  )> }
);

export type MemberFragment = (
  { __typename?: 'Member' }
  & Pick<Member, 'id' | 'firstName' | 'initials' | 'lastName' | 'email' | 'address' | 'postalCode' | 'city' | 'phoneNumber' | 'birthdate' | 'language' | 'pronouns' | 'studentType' | 'isAdmin'>
  & { image?: Maybe<(
    { __typename?: 'File' }
    & FileFragment
  )> }
);

export type MembershipFragment = (
  { __typename?: 'Membership' }
  & Pick<Membership, 'id' | 'type' | 'startedAt' | 'endedAt'>
);

export type PageFragment = (
  { __typename?: 'Page' }
  & Pick<Page, 'id'>
  & { title?: Maybe<(
    { __typename?: 'ShortTranslatable' }
    & TranslatableFragment_ShortTranslatable_
  )>, body?: Maybe<(
    { __typename?: 'LongTranslatable' }
    & TranslatableFragment_LongTranslatable_
  )> }
);

export type ProviderFragment = (
  { __typename?: 'Provider' }
  & Pick<Provider, 'id' | 'type' | 'email'>
);

export type TransactionFragment = (
  { __typename?: 'MembershipFeeTransaction' }
  & Pick<MembershipFeeTransaction, 'id' | 'createdAt' | 'updatedAt' | 'description' | 'amount'>
  & MembershipFeeTransactionFragment
);

export type MembershipFeeTransactionFragment = (
  { __typename?: 'MembershipFeeTransaction' }
  & Pick<MembershipFeeTransaction, 'year'>
);

export type TranslatableFragment_ShortTranslatable_ = (
  { __typename?: 'ShortTranslatable' }
  & Pick<ShortTranslatable, 'en' | 'nl'>
);

export type TranslatableFragment_LongTranslatable_ = (
  { __typename?: 'LongTranslatable' }
  & Pick<LongTranslatable, 'en' | 'nl'>
);

export type TranslatableFragment = TranslatableFragment_ShortTranslatable_ | TranslatableFragment_LongTranslatable_;

export type AcceptPaperMandateMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type AcceptPaperMandateMutation = (
  { __typename?: 'Mutation' }
  & { acceptPaperMandate?: Maybe<(
    { __typename?: 'PaperMandate' }
    & MandateFragment_PaperMandate_
  )> }
);

export type CancelPaperMandateMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type CancelPaperMandateMutation = (
  { __typename?: 'Mutation' }
  & { cancelPaperMandate?: Maybe<(
    { __typename?: 'PaperMandate' }
    & MandateFragment_PaperMandate_
  )> }
);

export type ChangeEmailMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ChangeEmailMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'changeEmail'>
);

export type ChangePasswordMutationVariables = Exact<{
  password: Scalars['String'];
  passwordRepeat: Scalars['String'];
}>;


export type ChangePasswordMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'changePassword'>
);

export type CreateDigitalMandateMutationVariables = Exact<{
  data: CreateDigitalMandateInput;
}>;


export type CreateDigitalMandateMutation = (
  { __typename?: 'Mutation' }
  & { createDigitalMandate?: Maybe<(
    { __typename?: 'CreateDigitalMandateResult' }
    & Pick<CreateDigitalMandateResult, 'redirectUrl'>
  )> }
);

export type CreatePaperMandateMutationVariables = Exact<{
  data: CreatePaperMandateInput;
}>;


export type CreatePaperMandateMutation = (
  { __typename?: 'Mutation' }
  & { createPaperMandate?: Maybe<(
    { __typename?: 'PaperMandate' }
    & MandateFragment_PaperMandate_
  )> }
);

export type InvalidateMandateMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type InvalidateMandateMutation = (
  { __typename?: 'Mutation' }
  & { invalidateMandate?: Maybe<(
    { __typename?: 'DigitalMandate' }
    & MandateFragment_DigitalMandate_
  ) | (
    { __typename?: 'PaperMandate' }
    & MandateFragment_PaperMandate_
  )> }
);

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login?: Maybe<(
    { __typename?: 'AccessToken' }
    & Pick<AccessToken, 'accessToken' | 'expiresIn'>
  )> }
);

export type RegisterMutationVariables = Exact<{
  data: RegisterInput;
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'register'>
);

export type RejectPaperMandateMutationVariables = Exact<{
  id: Scalars['String'];
  reason: Scalars['String'];
}>;


export type RejectPaperMandateMutation = (
  { __typename?: 'Mutation' }
  & { rejectPaperMandate?: Maybe<(
    { __typename?: 'PaperMandate' }
    & MandateFragment_PaperMandate_
  )> }
);

export type RequestResetPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type RequestResetPasswordMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'requestResetPassword'>
);

export type RequestVerifyEmailMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type RequestVerifyEmailMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'requestVerifyEmail'>
);

export type ResetPasswordMutationVariables = Exact<{
  token: Scalars['String'];
  password: Scalars['String'];
  passwordRepeat: Scalars['String'];
}>;


export type ResetPasswordMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'resetPassword'>
);

export type UpdateMemberMutationVariables = Exact<{
  where: MemberWhereUniqueInput;
  data: MemberUpdateInput;
}>;


export type UpdateMemberMutation = (
  { __typename?: 'Mutation' }
  & { updateMember: (
    { __typename?: 'Member' }
    & MemberFragment
  ) }
);

export type UploadMemberImageMutationVariables = Exact<{
  member: MemberWhereUniqueInput;
  file: Scalars['Upload'];
}>;


export type UploadMemberImageMutation = (
  { __typename?: 'Mutation' }
  & { uploadMemberImage?: Maybe<(
    { __typename?: 'Member' }
    & MemberFragment
  )> }
);

export type UploadPaperMandateMutationVariables = Exact<{
  paperMandateId: Scalars['String'];
  file: Scalars['Upload'];
}>;


export type UploadPaperMandateMutation = (
  { __typename?: 'Mutation' }
  & { uploadPaperMandate?: Maybe<(
    { __typename?: 'PaperMandate' }
    & MandateFragment_PaperMandate_
  )> }
);

export type VerifyEmailMutationVariables = Exact<{
  token: Scalars['String'];
}>;


export type VerifyEmailMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'verifyEmail'>
);

export type GetBanksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBanksQuery = (
  { __typename?: 'Query' }
  & { banks: (
    { __typename?: 'BankList' }
    & { values: Array<(
      { __typename?: 'Bank' }
      & BankFragment
    )> }
  ) }
);

export type GetCommitteesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCommitteesQuery = (
  { __typename?: 'Query' }
  & { committees: (
    { __typename?: 'CommitteeList' }
    & { values: Array<(
      { __typename?: 'Committee' }
      & CommitteeFragment
    )> }
  ) }
);

export type GetDirectDebitQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetDirectDebitQuery = (
  { __typename?: 'Query' }
  & { directDebit: (
    { __typename?: 'DirectDebit' }
    & { batches?: Maybe<(
      { __typename?: 'DirectDebitBatchList' }
      & { values: Array<(
        { __typename?: 'DirectDebitBatch' }
        & { instructions?: Maybe<(
          { __typename?: 'DirectDebitInstructionList' }
          & { values: Array<(
            { __typename?: 'DirectDebitInstruction' }
            & { mandate?: Maybe<(
              { __typename?: 'DigitalMandate' }
              & { member?: Maybe<(
                { __typename?: 'Member' }
                & MemberFragment
              )> }
              & MandateFragment_DigitalMandate_
            ) | (
              { __typename?: 'PaperMandate' }
              & { member?: Maybe<(
                { __typename?: 'Member' }
                & MemberFragment
              )> }
              & MandateFragment_PaperMandate_
            )> }
            & DirectDebitInstructionFragment
          )> }
        )> }
        & DirectDebitBatchFragment
      )> }
    )>, warnings?: Maybe<(
      { __typename?: 'DirectDebitWarningList' }
      & { values: Array<(
        { __typename?: 'DirectDebitWarning' }
        & DirectDebitWarningFragment
      )> }
    )>, file?: Maybe<(
      { __typename?: 'File' }
      & FileFragment
    )> }
    & DirectDebitFragment
  ) }
);

export type GetDirectDebitBatchQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetDirectDebitBatchQuery = (
  { __typename?: 'Query' }
  & { directDebitBatch: (
    { __typename?: 'DirectDebitBatch' }
    & { instructions?: Maybe<(
      { __typename?: 'DirectDebitInstructionList' }
      & { values: Array<(
        { __typename?: 'DirectDebitInstruction' }
        & { mandate?: Maybe<(
          { __typename?: 'DigitalMandate' }
          & { member?: Maybe<(
            { __typename?: 'Member' }
            & MemberFragment
          )> }
          & MandateFragment_DigitalMandate_
        ) | (
          { __typename?: 'PaperMandate' }
          & { member?: Maybe<(
            { __typename?: 'Member' }
            & MemberFragment
          )> }
          & MandateFragment_PaperMandate_
        )> }
        & DirectDebitInstructionFragment
      )> }
    )>, directDebit?: Maybe<(
      { __typename?: 'DirectDebit' }
      & DirectDebitFragment
    )> }
    & DirectDebitBatchFragment
  ) }
);

export type GetDirectDebitInstructionQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetDirectDebitInstructionQuery = (
  { __typename?: 'Query' }
  & { directDebitInstruction: (
    { __typename?: 'DirectDebitInstruction' }
    & { batch?: Maybe<(
      { __typename?: 'DirectDebitBatch' }
      & { directDebit?: Maybe<(
        { __typename?: 'DirectDebit' }
        & DirectDebitFragment
      )> }
      & DirectDebitBatchFragment
    )>, transactions?: Maybe<(
      { __typename?: 'TransactionList' }
      & { values: Array<(
        { __typename?: 'MembershipFeeTransaction' }
        & TransactionFragment
      )> }
    )>, mandate?: Maybe<(
      { __typename?: 'DigitalMandate' }
      & { member?: Maybe<(
        { __typename?: 'Member' }
        & MemberFragment
      )> }
      & MandateFragment_DigitalMandate_
    ) | (
      { __typename?: 'PaperMandate' }
      & { member?: Maybe<(
        { __typename?: 'Member' }
        & MemberFragment
      )> }
      & MandateFragment_PaperMandate_
    )> }
    & DirectDebitInstructionFragment
  ) }
);

export type GetDirectDebitsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDirectDebitsQuery = (
  { __typename?: 'Query' }
  & { directDebits: (
    { __typename?: 'DirectDebitList' }
    & { values: Array<(
      { __typename?: 'DirectDebit' }
      & DirectDebitFragment
    )> }
  ) }
);

export type GetMandateQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetMandateQuery = (
  { __typename?: 'Query' }
  & { mandate: (
    { __typename?: 'DigitalMandate' }
    & { member?: Maybe<(
      { __typename?: 'Member' }
      & MemberFragment
    )> }
    & MandateFragment_DigitalMandate_
  ) | (
    { __typename?: 'PaperMandate' }
    & { member?: Maybe<(
      { __typename?: 'Member' }
      & MemberFragment
    )> }
    & MandateFragment_PaperMandate_
  ) }
);

export type GetMandatesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMandatesQuery = (
  { __typename?: 'Query' }
  & { mandates: (
    { __typename?: 'MandateList' }
    & { values: Array<(
      { __typename?: 'DigitalMandate' }
      & { member?: Maybe<(
        { __typename?: 'Member' }
        & MemberFragment
      )> }
      & MandateFragment_DigitalMandate_
    ) | (
      { __typename?: 'PaperMandate' }
      & { member?: Maybe<(
        { __typename?: 'Member' }
        & MemberFragment
      )> }
      & MandateFragment_PaperMandate_
    )> }
  ) }
);

export type GetMemberQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetMemberQuery = (
  { __typename?: 'Query' }
  & { member: (
    { __typename?: 'Member' }
    & { memberships?: Maybe<(
      { __typename?: 'MembershipList' }
      & { values: Array<(
        { __typename?: 'Membership' }
        & MembershipFragment
      )> }
    )>, mandates?: Maybe<(
      { __typename?: 'MandateList' }
      & { values: Array<(
        { __typename?: 'DigitalMandate' }
        & MandateFragment_DigitalMandate_
      ) | (
        { __typename?: 'PaperMandate' }
        & MandateFragment_PaperMandate_
      )> }
    )>, transactions?: Maybe<(
      { __typename?: 'TransactionList' }
      & { values: Array<(
        { __typename?: 'MembershipFeeTransaction' }
        & TransactionFragment
      )> }
    )> }
    & MemberFragment
  ) }
);

export type GetMemberMandatesQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetMemberMandatesQuery = (
  { __typename?: 'Query' }
  & { member: (
    { __typename?: 'Member' }
    & { mandates?: Maybe<(
      { __typename?: 'MandateList' }
      & { values: Array<(
        { __typename?: 'DigitalMandate' }
        & MandateFragment_DigitalMandate_
      ) | (
        { __typename?: 'PaperMandate' }
        & MandateFragment_PaperMandate_
      )> }
    )> }
  ) }
);

export type GetMemberTransactionQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetMemberTransactionQuery = (
  { __typename?: 'Query' }
  & { transaction: (
    { __typename?: 'MembershipFeeTransaction' }
    & TransactionFragment
  ) }
);

export type GetMemberTransactionsQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetMemberTransactionsQuery = (
  { __typename?: 'Query' }
  & { member: (
    { __typename?: 'Member' }
    & { transactions?: Maybe<(
      { __typename?: 'TransactionList' }
      & { values: Array<(
        { __typename?: 'MembershipFeeTransaction' }
        & TransactionFragment
      )> }
    )> }
  ) }
);

export type GetMembersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMembersQuery = (
  { __typename?: 'Query' }
  & { members: (
    { __typename?: 'MemberList' }
    & { values: Array<(
      { __typename?: 'Member' }
      & { latestMembership?: Maybe<(
        { __typename?: 'Membership' }
        & MembershipFragment
      )>, mandates?: Maybe<(
        { __typename?: 'MandateList' }
        & { values: Array<(
          { __typename?: 'DigitalMandate' }
          & MandateFragment_DigitalMandate_
        ) | (
          { __typename?: 'PaperMandate' }
          & MandateFragment_PaperMandate_
        )> }
      )> }
      & MemberFragment
    )> }
  ) }
);

export type GetPageQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetPageQuery = (
  { __typename?: 'Query' }
  & { page: (
    { __typename?: 'Page' }
    & PageFragment
  ) }
);

export type GetPagesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPagesQuery = (
  { __typename?: 'Query' }
  & { pages: (
    { __typename?: 'PageList' }
    & { values: Array<(
      { __typename?: 'Page' }
      & PageFragment
    )> }
  ) }
);

export type GetPaperMandatesQueryVariables = Exact<{
  status?: Maybe<MandateStatus>;
}>;


export type GetPaperMandatesQuery = (
  { __typename?: 'Query' }
  & { paperMandates: (
    { __typename?: 'PaperMandateList' }
    & { values: Array<(
      { __typename?: 'PaperMandate' }
      & { member?: Maybe<(
        { __typename?: 'Member' }
        & MemberFragment
      )> }
      & MandateFragment_PaperMandate_
    )> }
  ) }
);

export type GetProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProfileQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'Member' }
    & Pick<Member, 'hasMandate' | 'hasPendingPaperMandates'>
    & { providers?: Maybe<(
      { __typename?: 'ProviderList' }
      & { values: Array<(
        { __typename?: 'Provider' }
        & ProviderFragment
      )> }
    )> }
    & MemberFragment
  )> }
);

export type GetTransactionQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetTransactionQuery = (
  { __typename?: 'Query' }
  & { transaction: (
    { __typename?: 'MembershipFeeTransaction' }
    & { member?: Maybe<(
      { __typename?: 'Member' }
      & { latestMembership?: Maybe<(
        { __typename?: 'Membership' }
        & MembershipFragment
      )> }
      & MemberFragment
    )>, instruction?: Maybe<(
      { __typename?: 'DirectDebitInstruction' }
      & { batch?: Maybe<(
        { __typename?: 'DirectDebitBatch' }
        & { directDebit?: Maybe<(
          { __typename?: 'DirectDebit' }
          & DirectDebitFragment
        )> }
        & DirectDebitBatchFragment
      )> }
      & DirectDebitInstructionFragment
    )> }
    & TransactionFragment
  ) }
);

export const BankFragmentDoc = gql`
    fragment BankFragment on Bank {
  id
  bic
  country
  name
  isActive
}
    `;
export const TranslatableFragmentDoc = gql`
    fragment TranslatableFragment on Translatable {
  en
  nl
}
    `;
export const CommitteeFragmentDoc = gql`
    fragment CommitteeFragment on Committee {
  id
  name {
    ...TranslatableFragment
  }
  description {
    ...TranslatableFragment
  }
}
    ${TranslatableFragmentDoc}`;
export const DirectDebitFragmentDoc = gql`
    fragment DirectDebitFragment on DirectDebit {
  id
  createdAt
  updatedAt
  status
  messageId
  collectionDate
  instructionCount
  amount
}
    `;
export const DirectDebitBatchFragmentDoc = gql`
    fragment DirectDebitBatchFragment on DirectDebitBatch {
  id
  createdAt
  updatedAt
  batchId
  sequenceType
  instructionCount
  amount
}
    `;
export const DirectDebitInstructionFragmentDoc = gql`
    fragment DirectDebitInstructionFragment on DirectDebitInstruction {
  id
  createdAt
  updatedAt
  instructionId
  description
  amount
}
    `;
export const DirectDebitWarningFragmentDoc = gql`
    fragment DirectDebitWarningFragment on DirectDebitWarning {
  id
  createdAt
  updatedAt
  description
  member {
    id
    firstName
    lastName
  }
}
    `;
export const FileFragmentDoc = gql`
    fragment FileFragment on File {
  id
  name
  url
  mimeType
}
    `;
export const PaperMandateFragmentDoc = gql`
    fragment PaperMandateFragment on PaperMandate {
  generatedFile {
    ...FileFragment
  }
  uploadedFile {
    ...FileFragment
  }
}
    ${FileFragmentDoc}`;
export const MandateFragmentDoc = gql`
    fragment MandateFragment on Mandate {
  id
  mandateId
  status
  createdAt
  acceptedAt
  bic
  iban
  reason
  isFirstTransaction
  errorMessage
  ...PaperMandateFragment
}
    ${PaperMandateFragmentDoc}`;
export const MemberFragmentDoc = gql`
    fragment MemberFragment on Member {
  id
  firstName
  initials
  lastName
  email
  address
  postalCode
  city
  phoneNumber
  birthdate
  language
  pronouns
  studentType
  isAdmin
  image {
    ...FileFragment
  }
}
    ${FileFragmentDoc}`;
export const MembershipFragmentDoc = gql`
    fragment MembershipFragment on Membership {
  id
  type
  startedAt
  endedAt
}
    `;
export const PageFragmentDoc = gql`
    fragment PageFragment on Page {
  id
  title {
    ...TranslatableFragment
  }
  body {
    ...TranslatableFragment
  }
}
    ${TranslatableFragmentDoc}`;
export const ProviderFragmentDoc = gql`
    fragment ProviderFragment on Provider {
  id
  type
  email
}
    `;
export const MembershipFeeTransactionFragmentDoc = gql`
    fragment MembershipFeeTransactionFragment on MembershipFeeTransaction {
  year
}
    `;
export const TransactionFragmentDoc = gql`
    fragment TransactionFragment on Transaction {
  id
  createdAt
  updatedAt
  description
  amount
  ...MembershipFeeTransactionFragment
}
    ${MembershipFeeTransactionFragmentDoc}`;
export const AcceptPaperMandateDocument = gql`
    mutation AcceptPaperMandate($id: String!) {
  acceptPaperMandate(mandate: {id: $id}) {
    ...MandateFragment
  }
}
    ${MandateFragmentDoc}`;
export type AcceptPaperMandateMutationFn = ApolloReactCommon.MutationFunction<AcceptPaperMandateMutation, AcceptPaperMandateMutationVariables>;

/**
 * __useAcceptPaperMandateMutation__
 *
 * To run a mutation, you first call `useAcceptPaperMandateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAcceptPaperMandateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [acceptPaperMandateMutation, { data, loading, error }] = useAcceptPaperMandateMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAcceptPaperMandateMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AcceptPaperMandateMutation, AcceptPaperMandateMutationVariables>) {
        return ApolloReactHooks.useMutation<AcceptPaperMandateMutation, AcceptPaperMandateMutationVariables>(AcceptPaperMandateDocument, baseOptions);
      }
export type AcceptPaperMandateMutationHookResult = ReturnType<typeof useAcceptPaperMandateMutation>;
export type AcceptPaperMandateMutationResult = ApolloReactCommon.MutationResult<AcceptPaperMandateMutation>;
export type AcceptPaperMandateMutationOptions = ApolloReactCommon.BaseMutationOptions<AcceptPaperMandateMutation, AcceptPaperMandateMutationVariables>;
export const CancelPaperMandateDocument = gql`
    mutation CancelPaperMandate($id: String!) {
  cancelPaperMandate(mandate: {id: $id}) {
    ...MandateFragment
  }
}
    ${MandateFragmentDoc}`;
export type CancelPaperMandateMutationFn = ApolloReactCommon.MutationFunction<CancelPaperMandateMutation, CancelPaperMandateMutationVariables>;

/**
 * __useCancelPaperMandateMutation__
 *
 * To run a mutation, you first call `useCancelPaperMandateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCancelPaperMandateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cancelPaperMandateMutation, { data, loading, error }] = useCancelPaperMandateMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCancelPaperMandateMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CancelPaperMandateMutation, CancelPaperMandateMutationVariables>) {
        return ApolloReactHooks.useMutation<CancelPaperMandateMutation, CancelPaperMandateMutationVariables>(CancelPaperMandateDocument, baseOptions);
      }
export type CancelPaperMandateMutationHookResult = ReturnType<typeof useCancelPaperMandateMutation>;
export type CancelPaperMandateMutationResult = ApolloReactCommon.MutationResult<CancelPaperMandateMutation>;
export type CancelPaperMandateMutationOptions = ApolloReactCommon.BaseMutationOptions<CancelPaperMandateMutation, CancelPaperMandateMutationVariables>;
export const ChangeEmailDocument = gql`
    mutation ChangeEmail($email: String!) {
  changeEmail(email: $email)
}
    `;
export type ChangeEmailMutationFn = ApolloReactCommon.MutationFunction<ChangeEmailMutation, ChangeEmailMutationVariables>;

/**
 * __useChangeEmailMutation__
 *
 * To run a mutation, you first call `useChangeEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeEmailMutation, { data, loading, error }] = useChangeEmailMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useChangeEmailMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ChangeEmailMutation, ChangeEmailMutationVariables>) {
        return ApolloReactHooks.useMutation<ChangeEmailMutation, ChangeEmailMutationVariables>(ChangeEmailDocument, baseOptions);
      }
export type ChangeEmailMutationHookResult = ReturnType<typeof useChangeEmailMutation>;
export type ChangeEmailMutationResult = ApolloReactCommon.MutationResult<ChangeEmailMutation>;
export type ChangeEmailMutationOptions = ApolloReactCommon.BaseMutationOptions<ChangeEmailMutation, ChangeEmailMutationVariables>;
export const ChangePasswordDocument = gql`
    mutation ChangePassword($password: String!, $passwordRepeat: String!) {
  changePassword(password: $password, passwordRepeat: $passwordRepeat)
}
    `;
export type ChangePasswordMutationFn = ApolloReactCommon.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>;

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      password: // value for 'password'
 *      passwordRepeat: // value for 'passwordRepeat'
 *   },
 * });
 */
export function useChangePasswordMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ChangePasswordMutation, ChangePasswordMutationVariables>) {
        return ApolloReactHooks.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument, baseOptions);
      }
export type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>;
export type ChangePasswordMutationResult = ApolloReactCommon.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const CreateDigitalMandateDocument = gql`
    mutation CreateDigitalMandate($data: CreateDigitalMandateInput!) {
  createDigitalMandate(data: $data) {
    redirectUrl
  }
}
    `;
export type CreateDigitalMandateMutationFn = ApolloReactCommon.MutationFunction<CreateDigitalMandateMutation, CreateDigitalMandateMutationVariables>;

/**
 * __useCreateDigitalMandateMutation__
 *
 * To run a mutation, you first call `useCreateDigitalMandateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDigitalMandateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDigitalMandateMutation, { data, loading, error }] = useCreateDigitalMandateMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateDigitalMandateMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateDigitalMandateMutation, CreateDigitalMandateMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateDigitalMandateMutation, CreateDigitalMandateMutationVariables>(CreateDigitalMandateDocument, baseOptions);
      }
export type CreateDigitalMandateMutationHookResult = ReturnType<typeof useCreateDigitalMandateMutation>;
export type CreateDigitalMandateMutationResult = ApolloReactCommon.MutationResult<CreateDigitalMandateMutation>;
export type CreateDigitalMandateMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateDigitalMandateMutation, CreateDigitalMandateMutationVariables>;
export const CreatePaperMandateDocument = gql`
    mutation CreatePaperMandate($data: CreatePaperMandateInput!) {
  createPaperMandate(data: $data) {
    ...MandateFragment
  }
}
    ${MandateFragmentDoc}`;
export type CreatePaperMandateMutationFn = ApolloReactCommon.MutationFunction<CreatePaperMandateMutation, CreatePaperMandateMutationVariables>;

/**
 * __useCreatePaperMandateMutation__
 *
 * To run a mutation, you first call `useCreatePaperMandateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePaperMandateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPaperMandateMutation, { data, loading, error }] = useCreatePaperMandateMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreatePaperMandateMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreatePaperMandateMutation, CreatePaperMandateMutationVariables>) {
        return ApolloReactHooks.useMutation<CreatePaperMandateMutation, CreatePaperMandateMutationVariables>(CreatePaperMandateDocument, baseOptions);
      }
export type CreatePaperMandateMutationHookResult = ReturnType<typeof useCreatePaperMandateMutation>;
export type CreatePaperMandateMutationResult = ApolloReactCommon.MutationResult<CreatePaperMandateMutation>;
export type CreatePaperMandateMutationOptions = ApolloReactCommon.BaseMutationOptions<CreatePaperMandateMutation, CreatePaperMandateMutationVariables>;
export const InvalidateMandateDocument = gql`
    mutation InvalidateMandate($id: String!) {
  invalidateMandate(mandate: {id: $id}) {
    ...MandateFragment
  }
}
    ${MandateFragmentDoc}`;
export type InvalidateMandateMutationFn = ApolloReactCommon.MutationFunction<InvalidateMandateMutation, InvalidateMandateMutationVariables>;

/**
 * __useInvalidateMandateMutation__
 *
 * To run a mutation, you first call `useInvalidateMandateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInvalidateMandateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [invalidateMandateMutation, { data, loading, error }] = useInvalidateMandateMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useInvalidateMandateMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<InvalidateMandateMutation, InvalidateMandateMutationVariables>) {
        return ApolloReactHooks.useMutation<InvalidateMandateMutation, InvalidateMandateMutationVariables>(InvalidateMandateDocument, baseOptions);
      }
export type InvalidateMandateMutationHookResult = ReturnType<typeof useInvalidateMandateMutation>;
export type InvalidateMandateMutationResult = ApolloReactCommon.MutationResult<InvalidateMandateMutation>;
export type InvalidateMandateMutationOptions = ApolloReactCommon.BaseMutationOptions<InvalidateMandateMutation, InvalidateMandateMutationVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    accessToken
    expiresIn
  }
}
    `;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($data: RegisterInput!) {
  register(data: $data)
}
    `;
export type RegisterMutationFn = ApolloReactCommon.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return ApolloReactHooks.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = ApolloReactCommon.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = ApolloReactCommon.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const RejectPaperMandateDocument = gql`
    mutation RejectPaperMandate($id: String!, $reason: String!) {
  rejectPaperMandate(mandate: {id: $id}, reason: $reason) {
    ...MandateFragment
  }
}
    ${MandateFragmentDoc}`;
export type RejectPaperMandateMutationFn = ApolloReactCommon.MutationFunction<RejectPaperMandateMutation, RejectPaperMandateMutationVariables>;

/**
 * __useRejectPaperMandateMutation__
 *
 * To run a mutation, you first call `useRejectPaperMandateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRejectPaperMandateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [rejectPaperMandateMutation, { data, loading, error }] = useRejectPaperMandateMutation({
 *   variables: {
 *      id: // value for 'id'
 *      reason: // value for 'reason'
 *   },
 * });
 */
export function useRejectPaperMandateMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RejectPaperMandateMutation, RejectPaperMandateMutationVariables>) {
        return ApolloReactHooks.useMutation<RejectPaperMandateMutation, RejectPaperMandateMutationVariables>(RejectPaperMandateDocument, baseOptions);
      }
export type RejectPaperMandateMutationHookResult = ReturnType<typeof useRejectPaperMandateMutation>;
export type RejectPaperMandateMutationResult = ApolloReactCommon.MutationResult<RejectPaperMandateMutation>;
export type RejectPaperMandateMutationOptions = ApolloReactCommon.BaseMutationOptions<RejectPaperMandateMutation, RejectPaperMandateMutationVariables>;
export const RequestResetPasswordDocument = gql`
    mutation RequestResetPassword($email: String!) {
  requestResetPassword(email: $email)
}
    `;
export type RequestResetPasswordMutationFn = ApolloReactCommon.MutationFunction<RequestResetPasswordMutation, RequestResetPasswordMutationVariables>;

/**
 * __useRequestResetPasswordMutation__
 *
 * To run a mutation, you first call `useRequestResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequestResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestResetPasswordMutation, { data, loading, error }] = useRequestResetPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useRequestResetPasswordMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RequestResetPasswordMutation, RequestResetPasswordMutationVariables>) {
        return ApolloReactHooks.useMutation<RequestResetPasswordMutation, RequestResetPasswordMutationVariables>(RequestResetPasswordDocument, baseOptions);
      }
export type RequestResetPasswordMutationHookResult = ReturnType<typeof useRequestResetPasswordMutation>;
export type RequestResetPasswordMutationResult = ApolloReactCommon.MutationResult<RequestResetPasswordMutation>;
export type RequestResetPasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<RequestResetPasswordMutation, RequestResetPasswordMutationVariables>;
export const RequestVerifyEmailDocument = gql`
    mutation RequestVerifyEmail($email: String!) {
  requestVerifyEmail(email: $email)
}
    `;
export type RequestVerifyEmailMutationFn = ApolloReactCommon.MutationFunction<RequestVerifyEmailMutation, RequestVerifyEmailMutationVariables>;

/**
 * __useRequestVerifyEmailMutation__
 *
 * To run a mutation, you first call `useRequestVerifyEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequestVerifyEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestVerifyEmailMutation, { data, loading, error }] = useRequestVerifyEmailMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useRequestVerifyEmailMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RequestVerifyEmailMutation, RequestVerifyEmailMutationVariables>) {
        return ApolloReactHooks.useMutation<RequestVerifyEmailMutation, RequestVerifyEmailMutationVariables>(RequestVerifyEmailDocument, baseOptions);
      }
export type RequestVerifyEmailMutationHookResult = ReturnType<typeof useRequestVerifyEmailMutation>;
export type RequestVerifyEmailMutationResult = ApolloReactCommon.MutationResult<RequestVerifyEmailMutation>;
export type RequestVerifyEmailMutationOptions = ApolloReactCommon.BaseMutationOptions<RequestVerifyEmailMutation, RequestVerifyEmailMutationVariables>;
export const ResetPasswordDocument = gql`
    mutation ResetPassword($token: String!, $password: String!, $passwordRepeat: String!) {
  resetPassword(token: $token, password: $password, passwordRepeat: $passwordRepeat)
}
    `;
export type ResetPasswordMutationFn = ApolloReactCommon.MutationFunction<ResetPasswordMutation, ResetPasswordMutationVariables>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      token: // value for 'token'
 *      password: // value for 'password'
 *      passwordRepeat: // value for 'passwordRepeat'
 *   },
 * });
 */
export function useResetPasswordMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ResetPasswordMutation, ResetPasswordMutationVariables>) {
        return ApolloReactHooks.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument, baseOptions);
      }
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>;
export type ResetPasswordMutationResult = ApolloReactCommon.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const UpdateMemberDocument = gql`
    mutation UpdateMember($where: MemberWhereUniqueInput!, $data: MemberUpdateInput!) {
  updateMember(where: $where, data: $data) {
    ...MemberFragment
  }
}
    ${MemberFragmentDoc}`;
export type UpdateMemberMutationFn = ApolloReactCommon.MutationFunction<UpdateMemberMutation, UpdateMemberMutationVariables>;

/**
 * __useUpdateMemberMutation__
 *
 * To run a mutation, you first call `useUpdateMemberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMemberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMemberMutation, { data, loading, error }] = useUpdateMemberMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateMemberMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateMemberMutation, UpdateMemberMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateMemberMutation, UpdateMemberMutationVariables>(UpdateMemberDocument, baseOptions);
      }
export type UpdateMemberMutationHookResult = ReturnType<typeof useUpdateMemberMutation>;
export type UpdateMemberMutationResult = ApolloReactCommon.MutationResult<UpdateMemberMutation>;
export type UpdateMemberMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateMemberMutation, UpdateMemberMutationVariables>;
export const UploadMemberImageDocument = gql`
    mutation UploadMemberImage($member: MemberWhereUniqueInput!, $file: Upload!) {
  uploadMemberImage(member: $member, file: $file) {
    ...MemberFragment
  }
}
    ${MemberFragmentDoc}`;
export type UploadMemberImageMutationFn = ApolloReactCommon.MutationFunction<UploadMemberImageMutation, UploadMemberImageMutationVariables>;

/**
 * __useUploadMemberImageMutation__
 *
 * To run a mutation, you first call `useUploadMemberImageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadMemberImageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadMemberImageMutation, { data, loading, error }] = useUploadMemberImageMutation({
 *   variables: {
 *      member: // value for 'member'
 *      file: // value for 'file'
 *   },
 * });
 */
export function useUploadMemberImageMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UploadMemberImageMutation, UploadMemberImageMutationVariables>) {
        return ApolloReactHooks.useMutation<UploadMemberImageMutation, UploadMemberImageMutationVariables>(UploadMemberImageDocument, baseOptions);
      }
export type UploadMemberImageMutationHookResult = ReturnType<typeof useUploadMemberImageMutation>;
export type UploadMemberImageMutationResult = ApolloReactCommon.MutationResult<UploadMemberImageMutation>;
export type UploadMemberImageMutationOptions = ApolloReactCommon.BaseMutationOptions<UploadMemberImageMutation, UploadMemberImageMutationVariables>;
export const UploadPaperMandateDocument = gql`
    mutation UploadPaperMandate($paperMandateId: String!, $file: Upload!) {
  uploadPaperMandate(paperMandate: {id: $paperMandateId}, file: $file) {
    ...MandateFragment
  }
}
    ${MandateFragmentDoc}`;
export type UploadPaperMandateMutationFn = ApolloReactCommon.MutationFunction<UploadPaperMandateMutation, UploadPaperMandateMutationVariables>;

/**
 * __useUploadPaperMandateMutation__
 *
 * To run a mutation, you first call `useUploadPaperMandateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadPaperMandateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadPaperMandateMutation, { data, loading, error }] = useUploadPaperMandateMutation({
 *   variables: {
 *      paperMandateId: // value for 'paperMandateId'
 *      file: // value for 'file'
 *   },
 * });
 */
export function useUploadPaperMandateMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UploadPaperMandateMutation, UploadPaperMandateMutationVariables>) {
        return ApolloReactHooks.useMutation<UploadPaperMandateMutation, UploadPaperMandateMutationVariables>(UploadPaperMandateDocument, baseOptions);
      }
export type UploadPaperMandateMutationHookResult = ReturnType<typeof useUploadPaperMandateMutation>;
export type UploadPaperMandateMutationResult = ApolloReactCommon.MutationResult<UploadPaperMandateMutation>;
export type UploadPaperMandateMutationOptions = ApolloReactCommon.BaseMutationOptions<UploadPaperMandateMutation, UploadPaperMandateMutationVariables>;
export const VerifyEmailDocument = gql`
    mutation VerifyEmail($token: String!) {
  verifyEmail(token: $token)
}
    `;
export type VerifyEmailMutationFn = ApolloReactCommon.MutationFunction<VerifyEmailMutation, VerifyEmailMutationVariables>;

/**
 * __useVerifyEmailMutation__
 *
 * To run a mutation, you first call `useVerifyEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyEmailMutation, { data, loading, error }] = useVerifyEmailMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useVerifyEmailMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<VerifyEmailMutation, VerifyEmailMutationVariables>) {
        return ApolloReactHooks.useMutation<VerifyEmailMutation, VerifyEmailMutationVariables>(VerifyEmailDocument, baseOptions);
      }
export type VerifyEmailMutationHookResult = ReturnType<typeof useVerifyEmailMutation>;
export type VerifyEmailMutationResult = ApolloReactCommon.MutationResult<VerifyEmailMutation>;
export type VerifyEmailMutationOptions = ApolloReactCommon.BaseMutationOptions<VerifyEmailMutation, VerifyEmailMutationVariables>;
export const GetBanksDocument = gql`
    query GetBanks {
  banks {
    values {
      ...BankFragment
    }
  }
}
    ${BankFragmentDoc}`;

/**
 * __useGetBanksQuery__
 *
 * To run a query within a React component, call `useGetBanksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBanksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBanksQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBanksQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetBanksQuery, GetBanksQueryVariables>) {
        return ApolloReactHooks.useQuery<GetBanksQuery, GetBanksQueryVariables>(GetBanksDocument, baseOptions);
      }
export function useGetBanksLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetBanksQuery, GetBanksQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetBanksQuery, GetBanksQueryVariables>(GetBanksDocument, baseOptions);
        }
export type GetBanksQueryHookResult = ReturnType<typeof useGetBanksQuery>;
export type GetBanksLazyQueryHookResult = ReturnType<typeof useGetBanksLazyQuery>;
export type GetBanksQueryResult = ApolloReactCommon.QueryResult<GetBanksQuery, GetBanksQueryVariables>;
export const GetCommitteesDocument = gql`
    query GetCommittees {
  committees(orderBy: {name: {en: ASC}}) {
    values {
      ...CommitteeFragment
    }
  }
}
    ${CommitteeFragmentDoc}`;

/**
 * __useGetCommitteesQuery__
 *
 * To run a query within a React component, call `useGetCommitteesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCommitteesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCommitteesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCommitteesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetCommitteesQuery, GetCommitteesQueryVariables>) {
        return ApolloReactHooks.useQuery<GetCommitteesQuery, GetCommitteesQueryVariables>(GetCommitteesDocument, baseOptions);
      }
export function useGetCommitteesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetCommitteesQuery, GetCommitteesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetCommitteesQuery, GetCommitteesQueryVariables>(GetCommitteesDocument, baseOptions);
        }
export type GetCommitteesQueryHookResult = ReturnType<typeof useGetCommitteesQuery>;
export type GetCommitteesLazyQueryHookResult = ReturnType<typeof useGetCommitteesLazyQuery>;
export type GetCommitteesQueryResult = ApolloReactCommon.QueryResult<GetCommitteesQuery, GetCommitteesQueryVariables>;
export const GetDirectDebitDocument = gql`
    query GetDirectDebit($id: String!) {
  directDebit(where: {id: $id}) {
    ...DirectDebitFragment
    batches {
      values {
        ...DirectDebitBatchFragment
        instructions {
          values {
            ...DirectDebitInstructionFragment
            mandate {
              ...MandateFragment
              member {
                ...MemberFragment
              }
            }
          }
        }
      }
    }
    warnings {
      values {
        ...DirectDebitWarningFragment
      }
    }
    file {
      ...FileFragment
    }
  }
}
    ${DirectDebitFragmentDoc}
${DirectDebitBatchFragmentDoc}
${DirectDebitInstructionFragmentDoc}
${MandateFragmentDoc}
${MemberFragmentDoc}
${DirectDebitWarningFragmentDoc}
${FileFragmentDoc}`;

/**
 * __useGetDirectDebitQuery__
 *
 * To run a query within a React component, call `useGetDirectDebitQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDirectDebitQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDirectDebitQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetDirectDebitQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetDirectDebitQuery, GetDirectDebitQueryVariables>) {
        return ApolloReactHooks.useQuery<GetDirectDebitQuery, GetDirectDebitQueryVariables>(GetDirectDebitDocument, baseOptions);
      }
export function useGetDirectDebitLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetDirectDebitQuery, GetDirectDebitQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetDirectDebitQuery, GetDirectDebitQueryVariables>(GetDirectDebitDocument, baseOptions);
        }
export type GetDirectDebitQueryHookResult = ReturnType<typeof useGetDirectDebitQuery>;
export type GetDirectDebitLazyQueryHookResult = ReturnType<typeof useGetDirectDebitLazyQuery>;
export type GetDirectDebitQueryResult = ApolloReactCommon.QueryResult<GetDirectDebitQuery, GetDirectDebitQueryVariables>;
export const GetDirectDebitBatchDocument = gql`
    query GetDirectDebitBatch($id: String!) {
  directDebitBatch(where: {id: $id}) {
    ...DirectDebitBatchFragment
    instructions {
      values {
        ...DirectDebitInstructionFragment
        mandate {
          ...MandateFragment
          member {
            ...MemberFragment
          }
        }
      }
    }
    directDebit {
      ...DirectDebitFragment
    }
  }
}
    ${DirectDebitBatchFragmentDoc}
${DirectDebitInstructionFragmentDoc}
${MandateFragmentDoc}
${MemberFragmentDoc}
${DirectDebitFragmentDoc}`;

/**
 * __useGetDirectDebitBatchQuery__
 *
 * To run a query within a React component, call `useGetDirectDebitBatchQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDirectDebitBatchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDirectDebitBatchQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetDirectDebitBatchQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetDirectDebitBatchQuery, GetDirectDebitBatchQueryVariables>) {
        return ApolloReactHooks.useQuery<GetDirectDebitBatchQuery, GetDirectDebitBatchQueryVariables>(GetDirectDebitBatchDocument, baseOptions);
      }
export function useGetDirectDebitBatchLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetDirectDebitBatchQuery, GetDirectDebitBatchQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetDirectDebitBatchQuery, GetDirectDebitBatchQueryVariables>(GetDirectDebitBatchDocument, baseOptions);
        }
export type GetDirectDebitBatchQueryHookResult = ReturnType<typeof useGetDirectDebitBatchQuery>;
export type GetDirectDebitBatchLazyQueryHookResult = ReturnType<typeof useGetDirectDebitBatchLazyQuery>;
export type GetDirectDebitBatchQueryResult = ApolloReactCommon.QueryResult<GetDirectDebitBatchQuery, GetDirectDebitBatchQueryVariables>;
export const GetDirectDebitInstructionDocument = gql`
    query GetDirectDebitInstruction($id: String!) {
  directDebitInstruction(where: {id: $id}) {
    ...DirectDebitInstructionFragment
    batch {
      ...DirectDebitBatchFragment
      directDebit {
        ...DirectDebitFragment
      }
    }
    transactions {
      values {
        ...TransactionFragment
      }
    }
    mandate {
      ...MandateFragment
      member {
        ...MemberFragment
      }
    }
  }
}
    ${DirectDebitInstructionFragmentDoc}
${DirectDebitBatchFragmentDoc}
${DirectDebitFragmentDoc}
${TransactionFragmentDoc}
${MandateFragmentDoc}
${MemberFragmentDoc}`;

/**
 * __useGetDirectDebitInstructionQuery__
 *
 * To run a query within a React component, call `useGetDirectDebitInstructionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDirectDebitInstructionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDirectDebitInstructionQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetDirectDebitInstructionQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetDirectDebitInstructionQuery, GetDirectDebitInstructionQueryVariables>) {
        return ApolloReactHooks.useQuery<GetDirectDebitInstructionQuery, GetDirectDebitInstructionQueryVariables>(GetDirectDebitInstructionDocument, baseOptions);
      }
export function useGetDirectDebitInstructionLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetDirectDebitInstructionQuery, GetDirectDebitInstructionQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetDirectDebitInstructionQuery, GetDirectDebitInstructionQueryVariables>(GetDirectDebitInstructionDocument, baseOptions);
        }
export type GetDirectDebitInstructionQueryHookResult = ReturnType<typeof useGetDirectDebitInstructionQuery>;
export type GetDirectDebitInstructionLazyQueryHookResult = ReturnType<typeof useGetDirectDebitInstructionLazyQuery>;
export type GetDirectDebitInstructionQueryResult = ApolloReactCommon.QueryResult<GetDirectDebitInstructionQuery, GetDirectDebitInstructionQueryVariables>;
export const GetDirectDebitsDocument = gql`
    query GetDirectDebits {
  directDebits(orderBy: {createdAt: DESC}) {
    values {
      ...DirectDebitFragment
    }
  }
}
    ${DirectDebitFragmentDoc}`;

/**
 * __useGetDirectDebitsQuery__
 *
 * To run a query within a React component, call `useGetDirectDebitsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDirectDebitsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDirectDebitsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetDirectDebitsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetDirectDebitsQuery, GetDirectDebitsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetDirectDebitsQuery, GetDirectDebitsQueryVariables>(GetDirectDebitsDocument, baseOptions);
      }
export function useGetDirectDebitsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetDirectDebitsQuery, GetDirectDebitsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetDirectDebitsQuery, GetDirectDebitsQueryVariables>(GetDirectDebitsDocument, baseOptions);
        }
export type GetDirectDebitsQueryHookResult = ReturnType<typeof useGetDirectDebitsQuery>;
export type GetDirectDebitsLazyQueryHookResult = ReturnType<typeof useGetDirectDebitsLazyQuery>;
export type GetDirectDebitsQueryResult = ApolloReactCommon.QueryResult<GetDirectDebitsQuery, GetDirectDebitsQueryVariables>;
export const GetMandateDocument = gql`
    query GetMandate($id: String!) {
  mandate(where: {id: $id}) {
    ...MandateFragment
    member {
      ...MemberFragment
    }
  }
}
    ${MandateFragmentDoc}
${MemberFragmentDoc}`;

/**
 * __useGetMandateQuery__
 *
 * To run a query within a React component, call `useGetMandateQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMandateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMandateQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetMandateQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetMandateQuery, GetMandateQueryVariables>) {
        return ApolloReactHooks.useQuery<GetMandateQuery, GetMandateQueryVariables>(GetMandateDocument, baseOptions);
      }
export function useGetMandateLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetMandateQuery, GetMandateQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetMandateQuery, GetMandateQueryVariables>(GetMandateDocument, baseOptions);
        }
export type GetMandateQueryHookResult = ReturnType<typeof useGetMandateQuery>;
export type GetMandateLazyQueryHookResult = ReturnType<typeof useGetMandateLazyQuery>;
export type GetMandateQueryResult = ApolloReactCommon.QueryResult<GetMandateQuery, GetMandateQueryVariables>;
export const GetMandatesDocument = gql`
    query GetMandates {
  mandates(orderBy: {createdAt: DESC}) {
    values {
      ...MandateFragment
      member {
        ...MemberFragment
      }
    }
  }
}
    ${MandateFragmentDoc}
${MemberFragmentDoc}`;

/**
 * __useGetMandatesQuery__
 *
 * To run a query within a React component, call `useGetMandatesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMandatesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMandatesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMandatesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetMandatesQuery, GetMandatesQueryVariables>) {
        return ApolloReactHooks.useQuery<GetMandatesQuery, GetMandatesQueryVariables>(GetMandatesDocument, baseOptions);
      }
export function useGetMandatesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetMandatesQuery, GetMandatesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetMandatesQuery, GetMandatesQueryVariables>(GetMandatesDocument, baseOptions);
        }
export type GetMandatesQueryHookResult = ReturnType<typeof useGetMandatesQuery>;
export type GetMandatesLazyQueryHookResult = ReturnType<typeof useGetMandatesLazyQuery>;
export type GetMandatesQueryResult = ApolloReactCommon.QueryResult<GetMandatesQuery, GetMandatesQueryVariables>;
export const GetMemberDocument = gql`
    query GetMember($id: String!) {
  member(where: {id: $id}) {
    ...MemberFragment
    memberships {
      values {
        ...MembershipFragment
      }
    }
    mandates {
      values {
        ...MandateFragment
      }
    }
    transactions {
      values {
        ...TransactionFragment
      }
    }
  }
}
    ${MemberFragmentDoc}
${MembershipFragmentDoc}
${MandateFragmentDoc}
${TransactionFragmentDoc}`;

/**
 * __useGetMemberQuery__
 *
 * To run a query within a React component, call `useGetMemberQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMemberQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMemberQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetMemberQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetMemberQuery, GetMemberQueryVariables>) {
        return ApolloReactHooks.useQuery<GetMemberQuery, GetMemberQueryVariables>(GetMemberDocument, baseOptions);
      }
export function useGetMemberLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetMemberQuery, GetMemberQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetMemberQuery, GetMemberQueryVariables>(GetMemberDocument, baseOptions);
        }
export type GetMemberQueryHookResult = ReturnType<typeof useGetMemberQuery>;
export type GetMemberLazyQueryHookResult = ReturnType<typeof useGetMemberLazyQuery>;
export type GetMemberQueryResult = ApolloReactCommon.QueryResult<GetMemberQuery, GetMemberQueryVariables>;
export const GetMemberMandatesDocument = gql`
    query GetMemberMandates($id: String!) {
  member(where: {id: $id}) {
    mandates(orderBy: {createdAt: DESC}) {
      values {
        ...MandateFragment
      }
    }
  }
}
    ${MandateFragmentDoc}`;

/**
 * __useGetMemberMandatesQuery__
 *
 * To run a query within a React component, call `useGetMemberMandatesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMemberMandatesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMemberMandatesQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetMemberMandatesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetMemberMandatesQuery, GetMemberMandatesQueryVariables>) {
        return ApolloReactHooks.useQuery<GetMemberMandatesQuery, GetMemberMandatesQueryVariables>(GetMemberMandatesDocument, baseOptions);
      }
export function useGetMemberMandatesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetMemberMandatesQuery, GetMemberMandatesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetMemberMandatesQuery, GetMemberMandatesQueryVariables>(GetMemberMandatesDocument, baseOptions);
        }
export type GetMemberMandatesQueryHookResult = ReturnType<typeof useGetMemberMandatesQuery>;
export type GetMemberMandatesLazyQueryHookResult = ReturnType<typeof useGetMemberMandatesLazyQuery>;
export type GetMemberMandatesQueryResult = ApolloReactCommon.QueryResult<GetMemberMandatesQuery, GetMemberMandatesQueryVariables>;
export const GetMemberTransactionDocument = gql`
    query GetMemberTransaction($id: String!) {
  transaction(where: {id: $id}) {
    ...TransactionFragment
  }
}
    ${TransactionFragmentDoc}`;

/**
 * __useGetMemberTransactionQuery__
 *
 * To run a query within a React component, call `useGetMemberTransactionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMemberTransactionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMemberTransactionQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetMemberTransactionQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetMemberTransactionQuery, GetMemberTransactionQueryVariables>) {
        return ApolloReactHooks.useQuery<GetMemberTransactionQuery, GetMemberTransactionQueryVariables>(GetMemberTransactionDocument, baseOptions);
      }
export function useGetMemberTransactionLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetMemberTransactionQuery, GetMemberTransactionQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetMemberTransactionQuery, GetMemberTransactionQueryVariables>(GetMemberTransactionDocument, baseOptions);
        }
export type GetMemberTransactionQueryHookResult = ReturnType<typeof useGetMemberTransactionQuery>;
export type GetMemberTransactionLazyQueryHookResult = ReturnType<typeof useGetMemberTransactionLazyQuery>;
export type GetMemberTransactionQueryResult = ApolloReactCommon.QueryResult<GetMemberTransactionQuery, GetMemberTransactionQueryVariables>;
export const GetMemberTransactionsDocument = gql`
    query GetMemberTransactions($id: String!) {
  member(where: {id: $id}) {
    transactions(orderBy: {createdAt: DESC}) {
      values {
        ...TransactionFragment
      }
    }
  }
}
    ${TransactionFragmentDoc}`;

/**
 * __useGetMemberTransactionsQuery__
 *
 * To run a query within a React component, call `useGetMemberTransactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMemberTransactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMemberTransactionsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetMemberTransactionsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetMemberTransactionsQuery, GetMemberTransactionsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetMemberTransactionsQuery, GetMemberTransactionsQueryVariables>(GetMemberTransactionsDocument, baseOptions);
      }
export function useGetMemberTransactionsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetMemberTransactionsQuery, GetMemberTransactionsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetMemberTransactionsQuery, GetMemberTransactionsQueryVariables>(GetMemberTransactionsDocument, baseOptions);
        }
export type GetMemberTransactionsQueryHookResult = ReturnType<typeof useGetMemberTransactionsQuery>;
export type GetMemberTransactionsLazyQueryHookResult = ReturnType<typeof useGetMemberTransactionsLazyQuery>;
export type GetMemberTransactionsQueryResult = ApolloReactCommon.QueryResult<GetMemberTransactionsQuery, GetMemberTransactionsQueryVariables>;
export const GetMembersDocument = gql`
    query GetMembers {
  members(orderBy: {firstName: ASC, lastName: ASC}) {
    values {
      ...MemberFragment
      latestMembership {
        ...MembershipFragment
      }
      mandates(where: {status: {equals: ACCEPTED}}) {
        values {
          ...MandateFragment
        }
      }
    }
  }
}
    ${MemberFragmentDoc}
${MembershipFragmentDoc}
${MandateFragmentDoc}`;

/**
 * __useGetMembersQuery__
 *
 * To run a query within a React component, call `useGetMembersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMembersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMembersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMembersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetMembersQuery, GetMembersQueryVariables>) {
        return ApolloReactHooks.useQuery<GetMembersQuery, GetMembersQueryVariables>(GetMembersDocument, baseOptions);
      }
export function useGetMembersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetMembersQuery, GetMembersQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetMembersQuery, GetMembersQueryVariables>(GetMembersDocument, baseOptions);
        }
export type GetMembersQueryHookResult = ReturnType<typeof useGetMembersQuery>;
export type GetMembersLazyQueryHookResult = ReturnType<typeof useGetMembersLazyQuery>;
export type GetMembersQueryResult = ApolloReactCommon.QueryResult<GetMembersQuery, GetMembersQueryVariables>;
export const GetPageDocument = gql`
    query GetPage($id: String!) {
  page(where: {id: $id}) {
    ...PageFragment
  }
}
    ${PageFragmentDoc}`;

/**
 * __useGetPageQuery__
 *
 * To run a query within a React component, call `useGetPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPageQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPageQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetPageQuery, GetPageQueryVariables>) {
        return ApolloReactHooks.useQuery<GetPageQuery, GetPageQueryVariables>(GetPageDocument, baseOptions);
      }
export function useGetPageLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetPageQuery, GetPageQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetPageQuery, GetPageQueryVariables>(GetPageDocument, baseOptions);
        }
export type GetPageQueryHookResult = ReturnType<typeof useGetPageQuery>;
export type GetPageLazyQueryHookResult = ReturnType<typeof useGetPageLazyQuery>;
export type GetPageQueryResult = ApolloReactCommon.QueryResult<GetPageQuery, GetPageQueryVariables>;
export const GetPagesDocument = gql`
    query GetPages {
  pages(orderBy: {id: ASC}) {
    values {
      ...PageFragment
    }
  }
}
    ${PageFragmentDoc}`;

/**
 * __useGetPagesQuery__
 *
 * To run a query within a React component, call `useGetPagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPagesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPagesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetPagesQuery, GetPagesQueryVariables>) {
        return ApolloReactHooks.useQuery<GetPagesQuery, GetPagesQueryVariables>(GetPagesDocument, baseOptions);
      }
export function useGetPagesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetPagesQuery, GetPagesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetPagesQuery, GetPagesQueryVariables>(GetPagesDocument, baseOptions);
        }
export type GetPagesQueryHookResult = ReturnType<typeof useGetPagesQuery>;
export type GetPagesLazyQueryHookResult = ReturnType<typeof useGetPagesLazyQuery>;
export type GetPagesQueryResult = ApolloReactCommon.QueryResult<GetPagesQuery, GetPagesQueryVariables>;
export const GetPaperMandatesDocument = gql`
    query GetPaperMandates($status: MandateStatus) {
  paperMandates(where: {status: {equals: $status}}) {
    values {
      ...MandateFragment
      member {
        ...MemberFragment
      }
    }
  }
}
    ${MandateFragmentDoc}
${MemberFragmentDoc}`;

/**
 * __useGetPaperMandatesQuery__
 *
 * To run a query within a React component, call `useGetPaperMandatesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaperMandatesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaperMandatesQuery({
 *   variables: {
 *      status: // value for 'status'
 *   },
 * });
 */
export function useGetPaperMandatesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetPaperMandatesQuery, GetPaperMandatesQueryVariables>) {
        return ApolloReactHooks.useQuery<GetPaperMandatesQuery, GetPaperMandatesQueryVariables>(GetPaperMandatesDocument, baseOptions);
      }
export function useGetPaperMandatesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetPaperMandatesQuery, GetPaperMandatesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetPaperMandatesQuery, GetPaperMandatesQueryVariables>(GetPaperMandatesDocument, baseOptions);
        }
export type GetPaperMandatesQueryHookResult = ReturnType<typeof useGetPaperMandatesQuery>;
export type GetPaperMandatesLazyQueryHookResult = ReturnType<typeof useGetPaperMandatesLazyQuery>;
export type GetPaperMandatesQueryResult = ApolloReactCommon.QueryResult<GetPaperMandatesQuery, GetPaperMandatesQueryVariables>;
export const GetProfileDocument = gql`
    query GetProfile {
  me {
    ...MemberFragment
    hasMandate
    hasPendingPaperMandates
    providers {
      values {
        ...ProviderFragment
      }
    }
  }
}
    ${MemberFragmentDoc}
${ProviderFragmentDoc}`;

/**
 * __useGetProfileQuery__
 *
 * To run a query within a React component, call `useGetProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProfileQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetProfileQuery, GetProfileQueryVariables>) {
        return ApolloReactHooks.useQuery<GetProfileQuery, GetProfileQueryVariables>(GetProfileDocument, baseOptions);
      }
export function useGetProfileLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetProfileQuery, GetProfileQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetProfileQuery, GetProfileQueryVariables>(GetProfileDocument, baseOptions);
        }
export type GetProfileQueryHookResult = ReturnType<typeof useGetProfileQuery>;
export type GetProfileLazyQueryHookResult = ReturnType<typeof useGetProfileLazyQuery>;
export type GetProfileQueryResult = ApolloReactCommon.QueryResult<GetProfileQuery, GetProfileQueryVariables>;
export const GetTransactionDocument = gql`
    query GetTransaction($id: String!) {
  transaction(where: {id: $id}) {
    ...TransactionFragment
    member {
      ...MemberFragment
      latestMembership {
        ...MembershipFragment
      }
    }
    instruction {
      ...DirectDebitInstructionFragment
      batch {
        ...DirectDebitBatchFragment
        directDebit {
          ...DirectDebitFragment
        }
      }
    }
  }
}
    ${TransactionFragmentDoc}
${MemberFragmentDoc}
${MembershipFragmentDoc}
${DirectDebitInstructionFragmentDoc}
${DirectDebitBatchFragmentDoc}
${DirectDebitFragmentDoc}`;

/**
 * __useGetTransactionQuery__
 *
 * To run a query within a React component, call `useGetTransactionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTransactionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTransactionQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetTransactionQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetTransactionQuery, GetTransactionQueryVariables>) {
        return ApolloReactHooks.useQuery<GetTransactionQuery, GetTransactionQueryVariables>(GetTransactionDocument, baseOptions);
      }
export function useGetTransactionLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetTransactionQuery, GetTransactionQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetTransactionQuery, GetTransactionQueryVariables>(GetTransactionDocument, baseOptions);
        }
export type GetTransactionQueryHookResult = ReturnType<typeof useGetTransactionQuery>;
export type GetTransactionLazyQueryHookResult = ReturnType<typeof useGetTransactionLazyQuery>;
export type GetTransactionQueryResult = ApolloReactCommon.QueryResult<GetTransactionQuery, GetTransactionQueryVariables>;