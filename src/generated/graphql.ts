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
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A time string at UTC, such as 10:15:30Z, compliant with the `full-time` format outlined in section 5.6 of the RFC 3339profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Time: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
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




export enum OrderByArg {
  ASC = 'ASC',
  DESC = 'DESC'
}

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  not?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
};

export type FloatFilter = {
  equals?: Maybe<Scalars['Float']>;
  not?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  notIn?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
};

export type StringFilter = {
  equals?: Maybe<Scalars['String']>;
  not?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
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
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
};

export type ListInfo = {
  __typename?: 'ListInfo';
  count: Scalars['Int'];
};

export type AccessToken = {
  __typename?: 'AccessToken';
  accessToken: Scalars['String'];
  expiresIn: Scalars['Int'];
};

export type Bank = {
  __typename?: 'Bank';
  id: Scalars['String'];
  bic: Scalars['String'];
  country: Scalars['String'];
  name: Scalars['String'];
  isActive: Scalars['Boolean'];
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

export type Committee = {
  __typename?: 'Committee';
  id: Scalars['String'];
  name: ShortTranslatable;
  description: LongTranslatable;
};

export type Transaction = {
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  description: Scalars['String'];
  amount: Scalars['Int'];
  member: Member;
  instruction?: Maybe<DirectDebitInstruction>;
};

export type MembershipFeeTransaction = Transaction & {
  __typename?: 'MembershipFeeTransaction';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  description: Scalars['String'];
  amount: Scalars['Int'];
  member: Member;
  instruction?: Maybe<DirectDebitInstruction>;
  year: Scalars['Int'];
  membership: Membership;
};

export enum MembershipType {
  NORMAL = 'NORMAL',
  HONORARY = 'HONORARY',
  EXTRAORDINARY = 'EXTRAORDINARY'
}

export type Membership = {
  __typename?: 'Membership';
  id: Scalars['String'];
  type: MembershipType;
  startedAt: Scalars['Date'];
  endedAt?: Maybe<Scalars['Date']>;
  member: Member;
  transactions: MembershipFeeTransactionList;
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
  id: Scalars['String'];
  firstName: Scalars['String'];
  initials: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  address: Scalars['String'];
  postalCode: Scalars['String'];
  city: Scalars['String'];
  phoneNumber: Scalars['String'];
  birthdate: Scalars['Date'];
  language: Language;
  pronouns: Pronouns;
  studentType: StudentType;
  memberships: MembershipList;
  mandates: MandateList;
  transactions: TransactionList;
  warnings: DirectDebitWarningList;
  latestMembership: Membership;
};


export type MembermembershipsArgs = {
  where?: Maybe<MembershipWhereInput>;
  orderBy?: Maybe<MembershipOrderByInput>;
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

export type DirectDebitWarning = {
  __typename?: 'DirectDebitWarning';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  description: Scalars['String'];
  directDebit: DirectDebit;
  member?: Maybe<Member>;
};

export type File = {
  __typename?: 'File';
  id: Scalars['String'];
  name: Scalars['String'];
  mimeType: Scalars['String'];
  url: Scalars['String'];
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
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  status: DirectDebitStatus;
  messageId: Scalars['String'];
  collectionDate: Scalars['String'];
  batches: DirectDebitBatchList;
  warnings: DirectDebitWarningList;
  file?: Maybe<File>;
  instructionCount: Scalars['Int'];
  amount: Scalars['Int'];
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

export enum SequenceType {
  FIRST = 'FIRST',
  RECURRENT = 'RECURRENT',
  FINAL = 'FINAL',
  ONE_OFF = 'ONE_OFF'
}

export type DirectDebitBatch = {
  __typename?: 'DirectDebitBatch';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  batchId: Scalars['String'];
  sequenceType: SequenceType;
  directDebit: DirectDebit;
  instructions: DirectDebitInstructionList;
  instructionCount: Scalars['Int'];
  amount: Scalars['Int'];
};


export type DirectDebitBatchinstructionsArgs = {
  where?: Maybe<DirectDebitInstructionWhereInput>;
  orderBy?: Maybe<DirectDebitInstructionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};

export type DirectDebitInstruction = {
  __typename?: 'DirectDebitInstruction';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  instructionId: Scalars['String'];
  description: Scalars['String'];
  batch: DirectDebitBatch;
  transactions: TransactionList;
  mandate: Mandate;
  amount: Scalars['Int'];
};


export type DirectDebitInstructiontransactionsArgs = {
  where?: Maybe<TransactionWhereInput>;
  orderBy?: Maybe<TransactionOrderByInput>;
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
  id: Scalars['String'];
  mandateId: Scalars['String'];
  status: MandateStatus;
  createdAt: Scalars['DateTime'];
  acceptedAt?: Maybe<Scalars['DateTime']>;
  bic: Scalars['String'];
  iban?: Maybe<Scalars['String']>;
  reason: Scalars['String'];
  isFirstTransaction: Scalars['Boolean'];
  errorMessage?: Maybe<Scalars['String']>;
  member: Member;
  instructions: DirectDebitInstructionList;
};


export type MandateinstructionsArgs = {
  where?: Maybe<DirectDebitInstructionWhereInput>;
  orderBy?: Maybe<DirectDebitInstructionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};

export type DigitalMandate = Mandate & {
  __typename?: 'DigitalMandate';
  id: Scalars['String'];
  mandateId: Scalars['String'];
  status: MandateStatus;
  createdAt: Scalars['DateTime'];
  acceptedAt?: Maybe<Scalars['DateTime']>;
  bic: Scalars['String'];
  iban?: Maybe<Scalars['String']>;
  reason: Scalars['String'];
  isFirstTransaction: Scalars['Boolean'];
  errorMessage?: Maybe<Scalars['String']>;
  member: Member;
  instructions: DirectDebitInstructionList;
  messageId: Scalars['String'];
  entranceCode: Scalars['String'];
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
  id: Scalars['String'];
  title: ShortTranslatable;
  body: LongTranslatable;
};

export type PaperMandate = Mandate & {
  __typename?: 'PaperMandate';
  id: Scalars['String'];
  mandateId: Scalars['String'];
  status: MandateStatus;
  createdAt: Scalars['DateTime'];
  acceptedAt?: Maybe<Scalars['DateTime']>;
  bic: Scalars['String'];
  iban?: Maybe<Scalars['String']>;
  reason: Scalars['String'];
  isFirstTransaction: Scalars['Boolean'];
  errorMessage?: Maybe<Scalars['String']>;
  member: Member;
  instructions: DirectDebitInstructionList;
  generatedFile?: Maybe<File>;
  uploadedFile?: Maybe<File>;
};


export type PaperMandateinstructionsArgs = {
  where?: Maybe<DirectDebitInstructionWhereInput>;
  orderBy?: Maybe<DirectDebitInstructionOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};

export enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN'
}

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  name: Scalars['String'];
  email: Scalars['String'];
  role: Role;
  providers: ProviderList;
};


export type UserprovidersArgs = {
  where?: Maybe<ProviderWhereInput>;
  orderBy?: Maybe<ProviderOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};

export enum ProviderType {
  GOOGLE = 'GOOGLE'
}

export type Provider = {
  __typename?: 'Provider';
  id: Scalars['String'];
  type: ProviderType;
  identifier: Scalars['String'];
  credentials: Scalars['String'];
  email: Scalars['String'];
  isVerified: Scalars['Boolean'];
  user: User;
};

export type Setting = {
  __typename?: 'Setting';
  key: Scalars['String'];
  value: Scalars['String'];
  isPublic: Scalars['Boolean'];
};

export type CreateDigitalMandateResult = {
  __typename?: 'CreateDigitalMandateResult';
  redirectUrl: Scalars['String'];
  mandate: DigitalMandate;
};


export type BankWhereInput = {
  id?: Maybe<StringFilter>;
  bic?: Maybe<StringFilter>;
  country?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  isActive?: Maybe<Scalars['Boolean']>;
  AND?: Maybe<Array<BankWhereInput>>;
  OR?: Maybe<Array<BankWhereInput>>;
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
  info: ListInfo;
  values: Array<Bank>;
};

export type CommitteeWhereInput = {
  id?: Maybe<StringFilter>;
  name?: Maybe<ShortTranslatableWhereInput>;
  description?: Maybe<LongTranslatableWhereInput>;
  AND?: Maybe<Array<CommitteeWhereInput>>;
  OR?: Maybe<Array<CommitteeWhereInput>>;
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
};

export type CommitteeUpdateInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<ShortTranslatableUpdateInput>;
  description?: Maybe<LongTranslatableUpdateInput>;
};

export type CommitteeWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type CommitteeList = {
  __typename?: 'CommitteeList';
  info: ListInfo;
  values: Array<Committee>;
};

export type TransactionWhereInput = {
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  description?: Maybe<StringFilter>;
  amount?: Maybe<IntFilter>;
  member?: Maybe<MemberWhereInput>;
  instruction?: Maybe<DirectDebitInstructionWhereInput>;
  AND?: Maybe<Array<TransactionWhereInput>>;
  OR?: Maybe<Array<TransactionWhereInput>>;
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
  info: ListInfo;
  values: Array<Transaction>;
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
  AND?: Maybe<Array<MembershipFeeTransactionWhereInput>>;
  OR?: Maybe<Array<MembershipFeeTransactionWhereInput>>;
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
  info: ListInfo;
  values: Array<MembershipFeeTransaction>;
};

export type MembershipWhereInput = {
  id?: Maybe<StringFilter>;
  type?: Maybe<MembershipTypeFilter>;
  startedAt?: Maybe<DateTimeFilter>;
  endedAt?: Maybe<DateTimeFilter>;
  member?: Maybe<MemberWhereInput>;
  transactions?: Maybe<MembershipFeeTransactionWhereInput>;
  AND?: Maybe<Array<MembershipWhereInput>>;
  OR?: Maybe<Array<MembershipWhereInput>>;
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
  startedAt: Scalars['DateTime'];
  endedAt?: Maybe<Scalars['DateTime']>;
  member: MemberCreateRelationInput;
  transactions?: Maybe<Array<MembershipFeeTransactionCreateRelationInput>>;
};

export type MembershipUpdateInput = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<MembershipType>;
  startedAt?: Maybe<Scalars['DateTime']>;
  endedAt?: Maybe<Scalars['DateTime']>;
  member?: Maybe<MemberUpdateRelationInput>;
  transactions?: Maybe<Array<MembershipFeeTransactionUpdateRelationInput>>;
};

export type MembershipWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type MembershipList = {
  __typename?: 'MembershipList';
  info: ListInfo;
  values: Array<Membership>;
};

export type MemberWhereInput = {
  id?: Maybe<StringFilter>;
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
  memberships?: Maybe<MembershipWhereInput>;
  mandates?: Maybe<MandateWhereInput>;
  transactions?: Maybe<TransactionWhereInput>;
  warnings?: Maybe<DirectDebitWarningWhereInput>;
  AND?: Maybe<Array<MemberWhereInput>>;
  OR?: Maybe<Array<MemberWhereInput>>;
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
};

export type MemberCreateInput = {
  id?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  initials: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  address: Scalars['String'];
  postalCode: Scalars['String'];
  city: Scalars['String'];
  phoneNumber: Scalars['String'];
  birthdate: Scalars['DateTime'];
  language?: Maybe<Language>;
  pronouns?: Maybe<Pronouns>;
  studentType: StudentType;
  memberships?: Maybe<Array<MembershipCreateRelationInput>>;
  mandates?: Maybe<Array<MandateCreateRelationInput>>;
  transactions?: Maybe<Array<TransactionCreateRelationInput>>;
  warnings?: Maybe<Array<DirectDebitWarningCreateRelationInput>>;
};

export type MemberUpdateInput = {
  id?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  initials?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  birthdate?: Maybe<Scalars['DateTime']>;
  language?: Maybe<Language>;
  pronouns?: Maybe<Pronouns>;
  studentType?: Maybe<StudentType>;
  memberships?: Maybe<Array<MembershipUpdateRelationInput>>;
  mandates?: Maybe<Array<MandateUpdateRelationInput>>;
  transactions?: Maybe<Array<TransactionUpdateRelationInput>>;
  warnings?: Maybe<Array<DirectDebitWarningUpdateRelationInput>>;
};

export type MemberWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type MemberList = {
  __typename?: 'MemberList';
  info: ListInfo;
  values: Array<Member>;
};

export type DirectDebitWarningWhereInput = {
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  description?: Maybe<StringFilter>;
  directDebit?: Maybe<DirectDebitWhereInput>;
  member?: Maybe<MemberWhereInput>;
  AND?: Maybe<Array<DirectDebitWarningWhereInput>>;
  OR?: Maybe<Array<DirectDebitWarningWhereInput>>;
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
  info: ListInfo;
  values: Array<DirectDebitWarning>;
};

export type FileWhereInput = {
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  mimeType?: Maybe<StringFilter>;
  AND?: Maybe<Array<FileWhereInput>>;
  OR?: Maybe<Array<FileWhereInput>>;
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
  info: ListInfo;
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
  AND?: Maybe<Array<DirectDebitWhereInput>>;
  OR?: Maybe<Array<DirectDebitWhereInput>>;
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
  batches?: Maybe<Array<DirectDebitBatchCreateRelationInput>>;
  warnings?: Maybe<Array<DirectDebitWarningCreateRelationInput>>;
  file?: Maybe<FileCreateRelationInput>;
};

export type DirectDebitUpdateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  status?: Maybe<DirectDebitStatus>;
  messageId?: Maybe<Scalars['String']>;
  collectionDate?: Maybe<Scalars['String']>;
  batches?: Maybe<Array<DirectDebitBatchUpdateRelationInput>>;
  warnings?: Maybe<Array<DirectDebitWarningUpdateRelationInput>>;
  file?: Maybe<FileUpdateRelationInput>;
};

export type DirectDebitWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type DirectDebitList = {
  __typename?: 'DirectDebitList';
  info: ListInfo;
  values: Array<DirectDebit>;
};

export type DirectDebitBatchWhereInput = {
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  batchId?: Maybe<StringFilter>;
  sequenceType?: Maybe<SequenceTypeFilter>;
  directDebit?: Maybe<DirectDebitWhereInput>;
  instructions?: Maybe<DirectDebitInstructionWhereInput>;
  AND?: Maybe<Array<DirectDebitBatchWhereInput>>;
  OR?: Maybe<Array<DirectDebitBatchWhereInput>>;
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
  instructions?: Maybe<Array<DirectDebitInstructionCreateRelationInput>>;
};

export type DirectDebitBatchUpdateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  batchId?: Maybe<Scalars['String']>;
  sequenceType?: Maybe<SequenceType>;
  directDebit?: Maybe<DirectDebitUpdateRelationInput>;
  instructions?: Maybe<Array<DirectDebitInstructionUpdateRelationInput>>;
};

export type DirectDebitBatchWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type DirectDebitBatchList = {
  __typename?: 'DirectDebitBatchList';
  info: ListInfo;
  values: Array<DirectDebitBatch>;
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
  AND?: Maybe<Array<DirectDebitInstructionWhereInput>>;
  OR?: Maybe<Array<DirectDebitInstructionWhereInput>>;
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
  transactions?: Maybe<Array<TransactionCreateRelationInput>>;
  mandate: MandateCreateRelationInput;
};

export type DirectDebitInstructionUpdateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  instructionId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  batch?: Maybe<DirectDebitBatchUpdateRelationInput>;
  transactions?: Maybe<Array<TransactionUpdateRelationInput>>;
  mandate?: Maybe<MandateUpdateRelationInput>;
};

export type DirectDebitInstructionWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type DirectDebitInstructionList = {
  __typename?: 'DirectDebitInstructionList';
  info: ListInfo;
  values: Array<DirectDebitInstruction>;
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
  AND?: Maybe<Array<MandateWhereInput>>;
  OR?: Maybe<Array<MandateWhereInput>>;
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
  instructions?: Maybe<Array<DirectDebitInstructionCreateRelationInput>>;
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
  instructions?: Maybe<Array<DirectDebitInstructionUpdateRelationInput>>;
};

export type MandateWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type MandateList = {
  __typename?: 'MandateList';
  info: ListInfo;
  values: Array<Mandate>;
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
  AND?: Maybe<Array<DigitalMandateWhereInput>>;
  OR?: Maybe<Array<DigitalMandateWhereInput>>;
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
  instructions?: Maybe<Array<DirectDebitInstructionCreateRelationInput>>;
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
  instructions?: Maybe<Array<DirectDebitInstructionUpdateRelationInput>>;
  messageId?: Maybe<Scalars['String']>;
  entranceCode?: Maybe<Scalars['String']>;
  transactionId?: Maybe<Scalars['String']>;
};

export type DigitalMandateWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type DigitalMandateList = {
  __typename?: 'DigitalMandateList';
  info: ListInfo;
  values: Array<DigitalMandate>;
};

export type PageWhereInput = {
  id?: Maybe<StringFilter>;
  title?: Maybe<ShortTranslatableWhereInput>;
  body?: Maybe<LongTranslatableWhereInput>;
  AND?: Maybe<Array<PageWhereInput>>;
  OR?: Maybe<Array<PageWhereInput>>;
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
  info: ListInfo;
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
  AND?: Maybe<Array<PaperMandateWhereInput>>;
  OR?: Maybe<Array<PaperMandateWhereInput>>;
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
  instructions?: Maybe<Array<DirectDebitInstructionCreateRelationInput>>;
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
  instructions?: Maybe<Array<DirectDebitInstructionUpdateRelationInput>>;
  generatedFile?: Maybe<FileUpdateRelationInput>;
  uploadedFile?: Maybe<FileUpdateRelationInput>;
};

export type PaperMandateWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type PaperMandateList = {
  __typename?: 'PaperMandateList';
  info: ListInfo;
  values: Array<PaperMandate>;
};

export type UserWhereInput = {
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  email?: Maybe<StringFilter>;
  role?: Maybe<RoleFilter>;
  providers?: Maybe<ProviderWhereInput>;
  AND?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
};

export type UserOrderByInput = {
  id?: Maybe<OrderByArg>;
  name?: Maybe<OrderByArg>;
  email?: Maybe<OrderByArg>;
  role?: Maybe<OrderByArg>;
};

export type UserCreateInput = {
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  email: Scalars['String'];
  role?: Maybe<Role>;
  providers?: Maybe<Array<ProviderCreateRelationInput>>;
};

export type UserUpdateInput = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  providers?: Maybe<Array<ProviderUpdateRelationInput>>;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type UserList = {
  __typename?: 'UserList';
  info: ListInfo;
  values: Array<User>;
};

export type ProviderWhereInput = {
  id?: Maybe<StringFilter>;
  type?: Maybe<ProviderTypeFilter>;
  identifier?: Maybe<StringFilter>;
  credentials?: Maybe<StringFilter>;
  email?: Maybe<StringFilter>;
  isVerified?: Maybe<Scalars['Boolean']>;
  user?: Maybe<UserWhereInput>;
  AND?: Maybe<Array<ProviderWhereInput>>;
  OR?: Maybe<Array<ProviderWhereInput>>;
};

export type ProviderOrderByInput = {
  id?: Maybe<OrderByArg>;
  type?: Maybe<OrderByArg>;
  identifier?: Maybe<OrderByArg>;
  credentials?: Maybe<OrderByArg>;
  email?: Maybe<OrderByArg>;
  isVerified?: Maybe<OrderByArg>;
  user?: Maybe<UserOrderByInput>;
};

export type ProviderCreateInput = {
  id?: Maybe<Scalars['String']>;
  type: ProviderType;
  identifier: Scalars['String'];
  credentials: Scalars['String'];
  email: Scalars['String'];
  isVerified?: Maybe<Scalars['Boolean']>;
  user: UserCreateRelationInput;
};

export type ProviderUpdateInput = {
  id?: Maybe<Scalars['String']>;
  type?: Maybe<ProviderType>;
  identifier?: Maybe<Scalars['String']>;
  credentials?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  isVerified?: Maybe<Scalars['Boolean']>;
  user?: Maybe<UserUpdateRelationInput>;
};

export type ProviderWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type ProviderList = {
  __typename?: 'ProviderList';
  info: ListInfo;
  values: Array<Provider>;
};

export type SettingWhereInput = {
  key?: Maybe<StringFilter>;
  value?: Maybe<StringFilter>;
  isPublic?: Maybe<Scalars['Boolean']>;
  AND?: Maybe<Array<SettingWhereInput>>;
  OR?: Maybe<Array<SettingWhereInput>>;
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
  info: ListInfo;
  values: Array<Setting>;
};

export type ShortTranslatableWhereInput = {
  en?: Maybe<StringFilter>;
  nl?: Maybe<StringFilter>;
  AND?: Maybe<Array<ShortTranslatableWhereInput>>;
  OR?: Maybe<Array<ShortTranslatableWhereInput>>;
};

export type LongTranslatableWhereInput = {
  en?: Maybe<StringFilter>;
  nl?: Maybe<StringFilter>;
  AND?: Maybe<Array<LongTranslatableWhereInput>>;
  OR?: Maybe<Array<LongTranslatableWhereInput>>;
};

export type ShortTranslatableOrderByInput = {
  en?: Maybe<OrderByArg>;
  nl?: Maybe<OrderByArg>;
};

export type LongTranslatableOrderByInput = {
  en?: Maybe<OrderByArg>;
  nl?: Maybe<OrderByArg>;
};

export type ShortTranslatableCreateInput = {
  en?: Maybe<Scalars['String']>;
  nl?: Maybe<Scalars['String']>;
};

export type LongTranslatableCreateInput = {
  en?: Maybe<Scalars['String']>;
  nl?: Maybe<Scalars['String']>;
};

export type ShortTranslatableUpdateInput = {
  en?: Maybe<Scalars['String']>;
  nl?: Maybe<Scalars['String']>;
};

export type LongTranslatableUpdateInput = {
  en?: Maybe<Scalars['String']>;
  nl?: Maybe<Scalars['String']>;
};

export type MemberCreateRelationInput = {
  create?: Maybe<MemberCreateInput>;
  connect?: Maybe<MemberWhereUniqueInput>;
};

export type DirectDebitInstructionCreateRelationInput = {
  create?: Maybe<DirectDebitInstructionCreateInput>;
  connect?: Maybe<DirectDebitInstructionWhereUniqueInput>;
};

export type MemberUpdateRelationInput = {
  create?: Maybe<MemberCreateInput>;
  connect?: Maybe<MemberWhereUniqueInput>;
  disconnect?: Maybe<MemberWhereUniqueInput>;
};

export type DirectDebitInstructionUpdateRelationInput = {
  create?: Maybe<DirectDebitInstructionCreateInput>;
  connect?: Maybe<DirectDebitInstructionWhereUniqueInput>;
  disconnect?: Maybe<DirectDebitInstructionWhereUniqueInput>;
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
  in?: Maybe<Array<MembershipType>>;
  notIn?: Maybe<Array<MembershipType>>;
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
  in?: Maybe<Array<Language>>;
  notIn?: Maybe<Array<Language>>;
};

export type PronounsFilter = {
  equals?: Maybe<Pronouns>;
  not?: Maybe<Pronouns>;
  in?: Maybe<Array<Pronouns>>;
  notIn?: Maybe<Array<Pronouns>>;
};

export type StudentTypeFilter = {
  equals?: Maybe<StudentType>;
  not?: Maybe<StudentType>;
  in?: Maybe<Array<StudentType>>;
  notIn?: Maybe<Array<StudentType>>;
};

export type MandateCreateRelationInput = {
  create?: Maybe<MandateCreateInput>;
  connect?: Maybe<MandateWhereUniqueInput>;
};

export type TransactionCreateRelationInput = {
  create?: Maybe<TransactionCreateInput>;
  connect?: Maybe<TransactionWhereUniqueInput>;
};

export type DirectDebitWarningCreateRelationInput = {
  create?: Maybe<DirectDebitWarningCreateInput>;
  connect?: Maybe<DirectDebitWarningWhereUniqueInput>;
};

export type MandateUpdateRelationInput = {
  create?: Maybe<MandateCreateInput>;
  connect?: Maybe<MandateWhereUniqueInput>;
  disconnect?: Maybe<MandateWhereUniqueInput>;
};

export type TransactionUpdateRelationInput = {
  create?: Maybe<TransactionCreateInput>;
  connect?: Maybe<TransactionWhereUniqueInput>;
  disconnect?: Maybe<TransactionWhereUniqueInput>;
};

export type DirectDebitWarningUpdateRelationInput = {
  create?: Maybe<DirectDebitWarningCreateInput>;
  connect?: Maybe<DirectDebitWarningWhereUniqueInput>;
  disconnect?: Maybe<DirectDebitWarningWhereUniqueInput>;
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
  in?: Maybe<Array<DirectDebitStatus>>;
  notIn?: Maybe<Array<DirectDebitStatus>>;
};

export type DirectDebitBatchCreateRelationInput = {
  create?: Maybe<DirectDebitBatchCreateInput>;
  connect?: Maybe<DirectDebitBatchWhereUniqueInput>;
};

export type FileCreateRelationInput = {
  create?: Maybe<FileCreateInput>;
  connect?: Maybe<FileWhereUniqueInput>;
};

export type DirectDebitBatchUpdateRelationInput = {
  create?: Maybe<DirectDebitBatchCreateInput>;
  connect?: Maybe<DirectDebitBatchWhereUniqueInput>;
  disconnect?: Maybe<DirectDebitBatchWhereUniqueInput>;
};

export type FileUpdateRelationInput = {
  create?: Maybe<FileCreateInput>;
  connect?: Maybe<FileWhereUniqueInput>;
  disconnect?: Maybe<FileWhereUniqueInput>;
};

export type SequenceTypeFilter = {
  equals?: Maybe<SequenceType>;
  not?: Maybe<SequenceType>;
  in?: Maybe<Array<SequenceType>>;
  notIn?: Maybe<Array<SequenceType>>;
};

export type MandateStatusFilter = {
  equals?: Maybe<MandateStatus>;
  not?: Maybe<MandateStatus>;
  in?: Maybe<Array<MandateStatus>>;
  notIn?: Maybe<Array<MandateStatus>>;
};

export type RoleFilter = {
  equals?: Maybe<Role>;
  not?: Maybe<Role>;
  in?: Maybe<Array<Role>>;
  notIn?: Maybe<Array<Role>>;
};

export type ProviderCreateRelationInput = {
  create?: Maybe<ProviderCreateInput>;
  connect?: Maybe<ProviderWhereUniqueInput>;
};

export type ProviderUpdateRelationInput = {
  create?: Maybe<ProviderCreateInput>;
  connect?: Maybe<ProviderWhereUniqueInput>;
  disconnect?: Maybe<ProviderWhereUniqueInput>;
};

export type ProviderTypeFilter = {
  equals?: Maybe<ProviderType>;
  not?: Maybe<ProviderType>;
  in?: Maybe<Array<ProviderType>>;
  notIn?: Maybe<Array<ProviderType>>;
};

export type UserCreateRelationInput = {
  create?: Maybe<UserCreateInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserUpdateRelationInput = {
  create?: Maybe<UserCreateInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  disconnect?: Maybe<UserWhereUniqueInput>;
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
  bank: Bank;
  banks: BankList;
  committee: Committee;
  committees: CommitteeList;
  transaction: Transaction;
  transactions: TransactionList;
  membershipFeeTransaction: MembershipFeeTransaction;
  membershipFeeTransactions: MembershipFeeTransactionList;
  membership: Membership;
  memberships: MembershipList;
  member: Member;
  members: MemberList;
  directDebitWarning: DirectDebitWarning;
  directDebitWarnings: DirectDebitWarningList;
  file: File;
  files: FileList;
  directDebit: DirectDebit;
  directDebits: DirectDebitList;
  directDebitBatch: DirectDebitBatch;
  directDebitBatches: DirectDebitBatchList;
  directDebitInstruction: DirectDebitInstruction;
  directDebitInstructions: DirectDebitInstructionList;
  mandate: Mandate;
  mandates: MandateList;
  digitalMandate: DigitalMandate;
  digitalMandates: DigitalMandateList;
  page: Page;
  pages: PageList;
  paperMandate: PaperMandate;
  paperMandates: PaperMandateList;
  user: User;
  users: UserList;
  provider: Provider;
  providers: ProviderList;
  setting: Setting;
  settings: SettingList;
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


export type QuerycommitteeArgs = {
  where: CommitteeWhereUniqueInput;
};


export type QuerycommitteesArgs = {
  where?: Maybe<CommitteeWhereInput>;
  orderBy?: Maybe<CommitteeOrderByInput>;
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


export type QuerydirectDebitWarningArgs = {
  where: DirectDebitWarningWhereUniqueInput;
};


export type QuerydirectDebitWarningsArgs = {
  where?: Maybe<DirectDebitWarningWhereInput>;
  orderBy?: Maybe<DirectDebitWarningOrderByInput>;
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


export type QuerydirectDebitBatchArgs = {
  where: DirectDebitBatchWhereUniqueInput;
};


export type QuerydirectDebitBatchesArgs = {
  where?: Maybe<DirectDebitBatchWhereInput>;
  orderBy?: Maybe<DirectDebitBatchOrderByInput>;
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


export type QuerymandateArgs = {
  where: MandateWhereUniqueInput;
};


export type QuerymandatesArgs = {
  where?: Maybe<MandateWhereInput>;
  orderBy?: Maybe<MandateOrderByInput>;
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


export type QueryuserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryusersArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
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


export type QuerysettingArgs = {
  where: SettingWhereUniqueInput;
};


export type QuerysettingsArgs = {
  where?: Maybe<SettingWhereInput>;
  orderBy?: Maybe<SettingOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  oauthAuthorize: Scalars['String'];
  oauthAuthenticate: AccessToken;
  oauthUnlink: Provider;
  invalidateMandate: Mandate;
  createDigitalMandate: CreateDigitalMandateResult;
  createPaperMandate: PaperMandate;
  cancelPaperMandate: PaperMandate;
  acceptPaperMandate: PaperMandate;
  rejectPaperMandate: PaperMandate;
  generateMembershipFeeTransactions: Scalars['Int'];
  uploadPaperMandate: PaperMandate;
  createBank: Bank;
  updateBank: Bank;
  deleteBank: Bank;
  deleteBanks: BankList;
  createCommittee: Committee;
  updateCommittee: Committee;
  deleteCommittee: Committee;
  deleteCommittees: CommitteeList;
  createTransaction: Transaction;
  updateTransaction: Transaction;
  deleteTransaction: Transaction;
  deleteTransactions: TransactionList;
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
  createDirectDebitWarning: DirectDebitWarning;
  updateDirectDebitWarning: DirectDebitWarning;
  deleteDirectDebitWarning: DirectDebitWarning;
  deleteDirectDebitWarnings: DirectDebitWarningList;
  createFile: File;
  updateFile: File;
  deleteFile: File;
  deleteFiles: FileList;
  createDirectDebit: DirectDebit;
  updateDirectDebit: DirectDebit;
  deleteDirectDebit: DirectDebit;
  deleteDirectDebits: DirectDebitList;
  createDirectDebitBatch: DirectDebitBatch;
  updateDirectDebitBatch: DirectDebitBatch;
  deleteDirectDebitBatch: DirectDebitBatch;
  deleteDirectDebitBatches: DirectDebitBatchList;
  createDirectDebitInstruction: DirectDebitInstruction;
  updateDirectDebitInstruction: DirectDebitInstruction;
  deleteDirectDebitInstruction: DirectDebitInstruction;
  deleteDirectDebitInstructions: DirectDebitInstructionList;
  createMandate: Mandate;
  updateMandate: Mandate;
  deleteMandate: Mandate;
  deleteMandates: MandateList;
  createPage: Page;
  updatePage: Page;
  deletePage: Page;
  deletePages: PageList;
  createUser: User;
  updateUser: User;
  deleteUser: User;
  deleteUsers: UserList;
  createProvider: Provider;
  updateProvider: Provider;
  deleteProvider: Provider;
  deleteProviders: ProviderList;
  createSetting: Setting;
  updateSetting: Setting;
  deleteSetting: Setting;
  deleteSettings: SettingList;
};


export type MutationoauthAuthorizeArgs = {
  type: ProviderType;
  redirectUri: Scalars['String'];
};


export type MutationoauthAuthenticateArgs = {
  type: ProviderType;
  redirectUri: Scalars['String'];
  code: Scalars['String'];
  userId?: Maybe<Scalars['String']>;
};


export type MutationoauthUnlinkArgs = {
  type: ProviderType;
};


export type MutationinvalidateMandateArgs = {
  mandate: MandateWhereUniqueInput;
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


export type MutationuploadPaperMandateArgs = {
  paperMandate: PaperMandateWhereUniqueInput;
  file?: Maybe<Scalars['Upload']>;
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


export type MutationcreateUserArgs = {
  data: UserCreateInput;
};


export type MutationupdateUserArgs = {
  where: UserWhereUniqueInput;
  data: UserUpdateInput;
};


export type MutationdeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationdeleteUsersArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
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

export type BankFragment = (
  { __typename?: 'Bank' }
  & Pick<Bank, 'id' | 'bic' | 'country' | 'name' | 'isActive'>
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
  & Pick<Member, 'id' | 'firstName' | 'initials' | 'lastName' | 'email' | 'address' | 'postalCode' | 'city' | 'phoneNumber' | 'birthdate' | 'language' | 'pronouns' | 'studentType'>
);

export type MembershipFragment = (
  { __typename?: 'Membership' }
  & Pick<Membership, 'id' | 'type' | 'startedAt' | 'endedAt'>
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

export type UserFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'name' | 'email' | 'role'>
);

export type AcceptPaperMandateMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type AcceptPaperMandateMutation = (
  { __typename?: 'Mutation' }
  & { acceptPaperMandate: (
    { __typename?: 'PaperMandate' }
    & MandateFragment_PaperMandate_
  ) }
);

export type CancelPaperMandateMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type CancelPaperMandateMutation = (
  { __typename?: 'Mutation' }
  & { cancelPaperMandate: (
    { __typename?: 'PaperMandate' }
    & MandateFragment_PaperMandate_
  ) }
);

export type CreateDigitalMandateMutationVariables = Exact<{
  data: CreateDigitalMandateInput;
}>;


export type CreateDigitalMandateMutation = (
  { __typename?: 'Mutation' }
  & { createDigitalMandate: (
    { __typename?: 'CreateDigitalMandateResult' }
    & Pick<CreateDigitalMandateResult, 'redirectUrl'>
  ) }
);

export type CreatePaperMandateMutationVariables = Exact<{
  data: CreatePaperMandateInput;
}>;


export type CreatePaperMandateMutation = (
  { __typename?: 'Mutation' }
  & { createPaperMandate: (
    { __typename?: 'PaperMandate' }
    & MandateFragment_PaperMandate_
  ) }
);

export type InvalidateMandateMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type InvalidateMandateMutation = (
  { __typename?: 'Mutation' }
  & { invalidateMandate: (
    { __typename?: 'DigitalMandate' }
    & MandateFragment_DigitalMandate_
  ) | (
    { __typename?: 'PaperMandate' }
    & MandateFragment_PaperMandate_
  ) }
);

export type OAuthAuthenticateMutationVariables = Exact<{
  type: ProviderType;
  redirectUri: Scalars['String'];
  code: Scalars['String'];
  userId?: Maybe<Scalars['String']>;
}>;


export type OAuthAuthenticateMutation = (
  { __typename?: 'Mutation' }
  & { oauthAuthenticate: (
    { __typename?: 'AccessToken' }
    & Pick<AccessToken, 'accessToken' | 'expiresIn'>
  ) }
);

export type OAuthAuthorizeMutationVariables = Exact<{
  type: ProviderType;
  redirectUri: Scalars['String'];
}>;


export type OAuthAuthorizeMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'oauthAuthorize'>
);

export type OAuthUnlinkMutationVariables = Exact<{
  type: ProviderType;
}>;


export type OAuthUnlinkMutation = (
  { __typename?: 'Mutation' }
  & { oauthUnlink: (
    { __typename?: 'Provider' }
    & Pick<Provider, 'id'>
  ) }
);

export type RejectPaperMandateMutationVariables = Exact<{
  id: Scalars['String'];
  reason: Scalars['String'];
}>;


export type RejectPaperMandateMutation = (
  { __typename?: 'Mutation' }
  & { rejectPaperMandate: (
    { __typename?: 'PaperMandate' }
    & MandateFragment_PaperMandate_
  ) }
);

export type UploadPaperMandateMutationVariables = Exact<{
  paperMandateId: Scalars['String'];
  file: Scalars['Upload'];
}>;


export type UploadPaperMandateMutation = (
  { __typename?: 'Mutation' }
  & { uploadPaperMandate: (
    { __typename?: 'PaperMandate' }
    & MandateFragment_PaperMandate_
  ) }
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

export type GetDirectDebitQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetDirectDebitQuery = (
  { __typename?: 'Query' }
  & { directDebit: (
    { __typename?: 'DirectDebit' }
    & { batches: (
      { __typename?: 'DirectDebitBatchList' }
      & { values: Array<(
        { __typename?: 'DirectDebitBatch' }
        & { instructions: (
          { __typename?: 'DirectDebitInstructionList' }
          & { values: Array<(
            { __typename?: 'DirectDebitInstruction' }
            & { mandate: (
              { __typename?: 'DigitalMandate' }
              & { member: (
                { __typename?: 'Member' }
                & MemberFragment
              ) }
              & MandateFragment_DigitalMandate_
            ) | (
              { __typename?: 'PaperMandate' }
              & { member: (
                { __typename?: 'Member' }
                & MemberFragment
              ) }
              & MandateFragment_PaperMandate_
            ) }
            & DirectDebitInstructionFragment
          )> }
        ) }
        & DirectDebitBatchFragment
      )> }
    ), warnings: (
      { __typename?: 'DirectDebitWarningList' }
      & { values: Array<(
        { __typename?: 'DirectDebitWarning' }
        & DirectDebitWarningFragment
      )> }
    ), file?: Maybe<(
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
    & { instructions: (
      { __typename?: 'DirectDebitInstructionList' }
      & { values: Array<(
        { __typename?: 'DirectDebitInstruction' }
        & { mandate: (
          { __typename?: 'DigitalMandate' }
          & { member: (
            { __typename?: 'Member' }
            & MemberFragment
          ) }
          & MandateFragment_DigitalMandate_
        ) | (
          { __typename?: 'PaperMandate' }
          & { member: (
            { __typename?: 'Member' }
            & MemberFragment
          ) }
          & MandateFragment_PaperMandate_
        ) }
        & DirectDebitInstructionFragment
      )> }
    ), directDebit: (
      { __typename?: 'DirectDebit' }
      & DirectDebitFragment
    ) }
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
    & { batch: (
      { __typename?: 'DirectDebitBatch' }
      & { directDebit: (
        { __typename?: 'DirectDebit' }
        & DirectDebitFragment
      ) }
      & DirectDebitBatchFragment
    ), transactions: (
      { __typename?: 'TransactionList' }
      & { values: Array<(
        { __typename?: 'MembershipFeeTransaction' }
        & TransactionFragment
      )> }
    ), mandate: (
      { __typename?: 'DigitalMandate' }
      & { member: (
        { __typename?: 'Member' }
        & MemberFragment
      ) }
      & MandateFragment_DigitalMandate_
    ) | (
      { __typename?: 'PaperMandate' }
      & { member: (
        { __typename?: 'Member' }
        & MemberFragment
      ) }
      & MandateFragment_PaperMandate_
    ) }
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
    & { member: (
      { __typename?: 'Member' }
      & MemberFragment
    ) }
    & MandateFragment_DigitalMandate_
  ) | (
    { __typename?: 'PaperMandate' }
    & { member: (
      { __typename?: 'Member' }
      & MemberFragment
    ) }
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
      & { member: (
        { __typename?: 'Member' }
        & MemberFragment
      ) }
      & MandateFragment_DigitalMandate_
    ) | (
      { __typename?: 'PaperMandate' }
      & { member: (
        { __typename?: 'Member' }
        & MemberFragment
      ) }
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
    & { memberships: (
      { __typename?: 'MembershipList' }
      & { values: Array<(
        { __typename?: 'Membership' }
        & MembershipFragment
      )> }
    ), mandates: (
      { __typename?: 'MandateList' }
      & { values: Array<(
        { __typename?: 'DigitalMandate' }
        & MandateFragment_DigitalMandate_
      ) | (
        { __typename?: 'PaperMandate' }
        & MandateFragment_PaperMandate_
      )> }
    ), transactions: (
      { __typename?: 'TransactionList' }
      & { values: Array<(
        { __typename?: 'MembershipFeeTransaction' }
        & TransactionFragment
      )> }
    ) }
    & MemberFragment
  ) }
);

export type GetMembersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMembersQuery = (
  { __typename?: 'Query' }
  & { members: (
    { __typename?: 'MemberList' }
    & { values: Array<(
      { __typename?: 'Member' }
      & { mandates: (
        { __typename?: 'MandateList' }
        & { values: Array<(
          { __typename?: 'DigitalMandate' }
          & MandateFragment_DigitalMandate_
        ) | (
          { __typename?: 'PaperMandate' }
          & MandateFragment_PaperMandate_
        )> }
      ) }
      & MemberFragment
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
      & { member: (
        { __typename?: 'Member' }
        & MemberFragment
      ) }
      & MandateFragment_PaperMandate_
    )> }
  ) }
);

export type GetProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProfileQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & { providers: (
      { __typename?: 'ProviderList' }
      & { values: Array<(
        { __typename?: 'Provider' }
        & ProviderFragment
      )> }
    ) }
    & UserFragment
  )> }
);

export type GetTransactionQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetTransactionQuery = (
  { __typename?: 'Query' }
  & { transaction: (
    { __typename?: 'MembershipFeeTransaction' }
    & { member: (
      { __typename?: 'Member' }
      & { latestMembership: (
        { __typename?: 'Membership' }
        & MembershipFragment
      ) }
      & MemberFragment
    ), instruction?: Maybe<(
      { __typename?: 'DirectDebitInstruction' }
      & { batch: (
        { __typename?: 'DirectDebitBatch' }
        & { directDebit: (
          { __typename?: 'DirectDebit' }
          & DirectDebitFragment
        ) }
        & DirectDebitBatchFragment
      ) }
      & DirectDebitInstructionFragment
    )> }
    & TransactionFragment
  ) }
);

export type GetUserQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetUserQuery = (
  { __typename?: 'Query' }
  & { user: (
    { __typename?: 'User' }
    & UserFragment
  ) }
);

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = (
  { __typename?: 'Query' }
  & { users: (
    { __typename?: 'UserList' }
    & { values: Array<(
      { __typename?: 'User' }
      & UserFragment
    )> }
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
}
    `;
export const MembershipFragmentDoc = gql`
    fragment MembershipFragment on Membership {
  id
  type
  startedAt
  endedAt
}
    `;
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
export const UserFragmentDoc = gql`
    fragment UserFragment on User {
  id
  name
  email
  role
}
    `;
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
export const OAuthAuthenticateDocument = gql`
    mutation OAuthAuthenticate($type: ProviderType!, $redirectUri: String!, $code: String!, $userId: String) {
  oauthAuthenticate(type: $type, redirectUri: $redirectUri, code: $code, userId: $userId) {
    accessToken
    expiresIn
  }
}
    `;
export type OAuthAuthenticateMutationFn = ApolloReactCommon.MutationFunction<OAuthAuthenticateMutation, OAuthAuthenticateMutationVariables>;

/**
 * __useOAuthAuthenticateMutation__
 *
 * To run a mutation, you first call `useOAuthAuthenticateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useOAuthAuthenticateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [oAuthAuthenticateMutation, { data, loading, error }] = useOAuthAuthenticateMutation({
 *   variables: {
 *      type: // value for 'type'
 *      redirectUri: // value for 'redirectUri'
 *      code: // value for 'code'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useOAuthAuthenticateMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<OAuthAuthenticateMutation, OAuthAuthenticateMutationVariables>) {
        return ApolloReactHooks.useMutation<OAuthAuthenticateMutation, OAuthAuthenticateMutationVariables>(OAuthAuthenticateDocument, baseOptions);
      }
export type OAuthAuthenticateMutationHookResult = ReturnType<typeof useOAuthAuthenticateMutation>;
export type OAuthAuthenticateMutationResult = ApolloReactCommon.MutationResult<OAuthAuthenticateMutation>;
export type OAuthAuthenticateMutationOptions = ApolloReactCommon.BaseMutationOptions<OAuthAuthenticateMutation, OAuthAuthenticateMutationVariables>;
export const OAuthAuthorizeDocument = gql`
    mutation OAuthAuthorize($type: ProviderType!, $redirectUri: String!) {
  oauthAuthorize(type: $type, redirectUri: $redirectUri)
}
    `;
export type OAuthAuthorizeMutationFn = ApolloReactCommon.MutationFunction<OAuthAuthorizeMutation, OAuthAuthorizeMutationVariables>;

/**
 * __useOAuthAuthorizeMutation__
 *
 * To run a mutation, you first call `useOAuthAuthorizeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useOAuthAuthorizeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [oAuthAuthorizeMutation, { data, loading, error }] = useOAuthAuthorizeMutation({
 *   variables: {
 *      type: // value for 'type'
 *      redirectUri: // value for 'redirectUri'
 *   },
 * });
 */
export function useOAuthAuthorizeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<OAuthAuthorizeMutation, OAuthAuthorizeMutationVariables>) {
        return ApolloReactHooks.useMutation<OAuthAuthorizeMutation, OAuthAuthorizeMutationVariables>(OAuthAuthorizeDocument, baseOptions);
      }
export type OAuthAuthorizeMutationHookResult = ReturnType<typeof useOAuthAuthorizeMutation>;
export type OAuthAuthorizeMutationResult = ApolloReactCommon.MutationResult<OAuthAuthorizeMutation>;
export type OAuthAuthorizeMutationOptions = ApolloReactCommon.BaseMutationOptions<OAuthAuthorizeMutation, OAuthAuthorizeMutationVariables>;
export const OAuthUnlinkDocument = gql`
    mutation OAuthUnlink($type: ProviderType!) {
  oauthUnlink(type: $type) {
    id
  }
}
    `;
export type OAuthUnlinkMutationFn = ApolloReactCommon.MutationFunction<OAuthUnlinkMutation, OAuthUnlinkMutationVariables>;

/**
 * __useOAuthUnlinkMutation__
 *
 * To run a mutation, you first call `useOAuthUnlinkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useOAuthUnlinkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [oAuthUnlinkMutation, { data, loading, error }] = useOAuthUnlinkMutation({
 *   variables: {
 *      type: // value for 'type'
 *   },
 * });
 */
export function useOAuthUnlinkMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<OAuthUnlinkMutation, OAuthUnlinkMutationVariables>) {
        return ApolloReactHooks.useMutation<OAuthUnlinkMutation, OAuthUnlinkMutationVariables>(OAuthUnlinkDocument, baseOptions);
      }
export type OAuthUnlinkMutationHookResult = ReturnType<typeof useOAuthUnlinkMutation>;
export type OAuthUnlinkMutationResult = ApolloReactCommon.MutationResult<OAuthUnlinkMutation>;
export type OAuthUnlinkMutationOptions = ApolloReactCommon.BaseMutationOptions<OAuthUnlinkMutation, OAuthUnlinkMutationVariables>;
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
  directDebits {
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
  mandates {
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
export const GetMembersDocument = gql`
    query GetMembers {
  members {
    values {
      ...MemberFragment
      mandates(where: {status: {equals: ACCEPTED}}) {
        values {
          ...MandateFragment
        }
      }
    }
  }
}
    ${MemberFragmentDoc}
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
    ...UserFragment
    providers {
      values {
        ...ProviderFragment
      }
    }
  }
}
    ${UserFragmentDoc}
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
export const GetUserDocument = gql`
    query GetUser($id: String!) {
  user(where: {id: $id}) {
    ...UserFragment
  }
}
    ${UserFragmentDoc}`;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        return ApolloReactHooks.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, baseOptions);
      }
export function useGetUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, baseOptions);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = ApolloReactCommon.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const GetUsersDocument = gql`
    query GetUsers {
  users {
    values {
      ...UserFragment
    }
  }
}
    ${UserFragmentDoc}`;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        return ApolloReactHooks.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, baseOptions);
      }
export function useGetUsersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, baseOptions);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = ApolloReactCommon.QueryResult<GetUsersQuery, GetUsersQueryVariables>;