import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: string;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: string;
  /** A time string at UTC, such as 10:15:30Z, compliant with the `full-time` format outlined in section 5.6 of the RFC 3339profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Time: string;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AccessToken = {
  __typename?: 'AccessToken';
  accessToken: Scalars['String'];
  expiresIn: Scalars['Int'];
};

export type Bank = {
  __typename?: 'Bank';
  bic: Scalars['String'];
  country: Scalars['String'];
  id: Scalars['String'];
  isActive: Scalars['Boolean'];
  name: Scalars['String'];
};

export type BankCreateInput = {
  bic?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
};

export type BankList = {
  __typename?: 'BankList';
  info: ListInfo;
  values: Array<Bank>;
};

export type BankOrderByInput = {
  bic?: InputMaybe<OrderByArg>;
  country?: InputMaybe<OrderByArg>;
  id?: InputMaybe<OrderByArg>;
  isActive?: InputMaybe<OrderByArg>;
  name?: InputMaybe<OrderByArg>;
};

export type BankUpdateInput = {
  bic?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
};

export type BankWhereInput = {
  AND?: InputMaybe<Array<BankWhereInput>>;
  bic?: InputMaybe<StringFilter>;
  country?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<StringFilter>;
  OR?: InputMaybe<Array<BankWhereInput>>;
};

export type BankWhereUniqueInput = {
  bic?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};

export type BoardPeriod = Group & {
  __typename?: 'BoardPeriod';
  endedAt?: Maybe<Scalars['Date']>;
  events: EventList;
  id: Scalars['String'];
  members: MemberList;
  name: ShortTranslatable;
  startedAt: Scalars['Date'];
};


export type BoardPeriodeventsArgs = {
  orderBy?: InputMaybe<EventOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EventWhereInput>;
};


export type BoardPeriodmembersArgs = {
  orderBy?: InputMaybe<MemberOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MemberWhereInput>;
};

export type BoardPeriodCreateInput = {
  endedAt?: InputMaybe<Scalars['Date']>;
  events?: InputMaybe<Array<EventCreateRelationInput>>;
  id?: InputMaybe<Scalars['String']>;
  members?: InputMaybe<Array<MemberCreateRelationInput>>;
  name?: InputMaybe<ShortTranslatableCreateInput>;
  startedAt?: InputMaybe<Scalars['Date']>;
};

export type BoardPeriodList = {
  __typename?: 'BoardPeriodList';
  info: ListInfo;
  values: Array<BoardPeriod>;
};

export type BoardPeriodOrderByInput = {
  endedAt?: InputMaybe<OrderByArg>;
  id?: InputMaybe<OrderByArg>;
  name?: InputMaybe<ShortTranslatableOrderByInput>;
  startedAt?: InputMaybe<OrderByArg>;
};

export type BoardPeriodUpdateInput = {
  endedAt?: InputMaybe<Scalars['Date']>;
  events?: InputMaybe<Array<EventUpdateRelationInput>>;
  id?: InputMaybe<Scalars['String']>;
  members?: InputMaybe<Array<MemberUpdateRelationInput>>;
  name?: InputMaybe<ShortTranslatableUpdateInput>;
  startedAt?: InputMaybe<Scalars['Date']>;
};

export type BoardPeriodWhereInput = {
  AND?: InputMaybe<Array<BoardPeriodWhereInput>>;
  endedAt?: InputMaybe<DateTimeFilter>;
  events?: InputMaybe<EventWhereInput>;
  id?: InputMaybe<StringFilter>;
  members?: InputMaybe<MemberWhereInput>;
  name?: InputMaybe<ShortTranslatableWhereInput>;
  OR?: InputMaybe<Array<BoardPeriodWhereInput>>;
  startedAt?: InputMaybe<DateTimeFilter>;
};

export type BoardPeriodWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Committee = {
  __typename?: 'Committee';
  description: LongTranslatable;
  id: Scalars['String'];
  name: ShortTranslatable;
  periods: CommitteePeriodList;
};


export type CommitteeperiodsArgs = {
  orderBy?: InputMaybe<CommitteePeriodOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CommitteePeriodWhereInput>;
};

export type CommitteeCreateInput = {
  description?: InputMaybe<LongTranslatableCreateInput>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<ShortTranslatableCreateInput>;
  periods?: InputMaybe<Array<CommitteePeriodCreateRelationInput>>;
};

export type CommitteeCreateRelationInput = {
  connect?: InputMaybe<CommitteeWhereUniqueInput>;
  create?: InputMaybe<CommitteeCreateInput>;
};

export type CommitteeList = {
  __typename?: 'CommitteeList';
  info: ListInfo;
  values: Array<Committee>;
};

export type CommitteeOrderByInput = {
  description?: InputMaybe<LongTranslatableOrderByInput>;
  id?: InputMaybe<OrderByArg>;
  name?: InputMaybe<ShortTranslatableOrderByInput>;
};

export type CommitteePeriod = Group & {
  __typename?: 'CommitteePeriod';
  committee: Committee;
  endedAt?: Maybe<Scalars['Date']>;
  events: EventList;
  id: Scalars['String'];
  members: MemberList;
  name: ShortTranslatable;
  startedAt: Scalars['Date'];
};


export type CommitteePeriodeventsArgs = {
  orderBy?: InputMaybe<EventOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EventWhereInput>;
};


export type CommitteePeriodmembersArgs = {
  orderBy?: InputMaybe<MemberOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MemberWhereInput>;
};

export type CommitteePeriodCreateInput = {
  committee?: InputMaybe<CommitteeCreateRelationInput>;
  endedAt?: InputMaybe<Scalars['Date']>;
  events?: InputMaybe<Array<EventCreateRelationInput>>;
  id?: InputMaybe<Scalars['String']>;
  members?: InputMaybe<Array<MemberCreateRelationInput>>;
  name?: InputMaybe<ShortTranslatableCreateInput>;
  startedAt?: InputMaybe<Scalars['Date']>;
};

export type CommitteePeriodCreateRelationInput = {
  connect?: InputMaybe<CommitteePeriodWhereUniqueInput>;
  create?: InputMaybe<CommitteePeriodCreateInput>;
};

export type CommitteePeriodList = {
  __typename?: 'CommitteePeriodList';
  info: ListInfo;
  values: Array<CommitteePeriod>;
};

export type CommitteePeriodOrderByInput = {
  committee?: InputMaybe<CommitteeOrderByInput>;
  endedAt?: InputMaybe<OrderByArg>;
  id?: InputMaybe<OrderByArg>;
  name?: InputMaybe<ShortTranslatableOrderByInput>;
  startedAt?: InputMaybe<OrderByArg>;
};

export type CommitteePeriodUpdateInput = {
  committee?: InputMaybe<CommitteeUpdateRelationInput>;
  endedAt?: InputMaybe<Scalars['Date']>;
  events?: InputMaybe<Array<EventUpdateRelationInput>>;
  id?: InputMaybe<Scalars['String']>;
  members?: InputMaybe<Array<MemberUpdateRelationInput>>;
  name?: InputMaybe<ShortTranslatableUpdateInput>;
  startedAt?: InputMaybe<Scalars['Date']>;
};

export type CommitteePeriodUpdateRelationInput = {
  connect?: InputMaybe<CommitteePeriodWhereUniqueInput>;
  create?: InputMaybe<CommitteePeriodCreateInput>;
  disconnect?: InputMaybe<CommitteePeriodWhereUniqueInput>;
};

export type CommitteePeriodWhereInput = {
  AND?: InputMaybe<Array<CommitteePeriodWhereInput>>;
  committee?: InputMaybe<CommitteeWhereInput>;
  endedAt?: InputMaybe<DateTimeFilter>;
  events?: InputMaybe<EventWhereInput>;
  id?: InputMaybe<StringFilter>;
  members?: InputMaybe<MemberWhereInput>;
  name?: InputMaybe<ShortTranslatableWhereInput>;
  OR?: InputMaybe<Array<CommitteePeriodWhereInput>>;
  startedAt?: InputMaybe<DateTimeFilter>;
};

export type CommitteePeriodWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type CommitteeUpdateInput = {
  description?: InputMaybe<LongTranslatableUpdateInput>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<ShortTranslatableUpdateInput>;
  periods?: InputMaybe<Array<CommitteePeriodUpdateRelationInput>>;
};

export type CommitteeUpdateRelationInput = {
  connect?: InputMaybe<CommitteeWhereUniqueInput>;
  create?: InputMaybe<CommitteeCreateInput>;
  disconnect?: InputMaybe<CommitteeWhereUniqueInput>;
};

export type CommitteeWhereInput = {
  AND?: InputMaybe<Array<CommitteeWhereInput>>;
  description?: InputMaybe<LongTranslatableWhereInput>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<ShortTranslatableWhereInput>;
  OR?: InputMaybe<Array<CommitteeWhereInput>>;
  periods?: InputMaybe<CommitteePeriodWhereInput>;
};

export type CommitteeWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type CreateDigitalMandateInput = {
  bic: Scalars['String'];
  member: MemberWhereUniqueInput;
};

export type CreateDigitalMandateResult = {
  __typename?: 'CreateDigitalMandateResult';
  mandate: DigitalMandate;
  redirectUrl: Scalars['String'];
};

export type CreatePaperMandateInput = {
  bic: Scalars['String'];
  iban: Scalars['String'];
  member: MemberWhereUniqueInput;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<Scalars['DateTime']>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DigitalMandate = Mandate & {
  __typename?: 'DigitalMandate';
  acceptedAt?: Maybe<Scalars['DateTime']>;
  bic: Scalars['String'];
  createdAt: Scalars['DateTime'];
  entranceCode: Scalars['String'];
  errorMessage?: Maybe<Scalars['String']>;
  iban?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  instructions: DirectDebitInstructionList;
  isFirstTransaction: Scalars['Boolean'];
  mandateId: Scalars['String'];
  member: Member;
  messageId: Scalars['String'];
  reason: Scalars['String'];
  status: MandateStatus;
  transactionId?: Maybe<Scalars['String']>;
};


export type DigitalMandateinstructionsArgs = {
  orderBy?: InputMaybe<DirectDebitInstructionOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DirectDebitInstructionWhereInput>;
};

export type DigitalMandateCreateInput = {
  acceptedAt?: InputMaybe<Scalars['DateTime']>;
  bic?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  entranceCode?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  iban?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  instructions?: InputMaybe<Array<DirectDebitInstructionCreateRelationInput>>;
  isFirstTransaction?: InputMaybe<Scalars['Boolean']>;
  mandateId?: InputMaybe<Scalars['String']>;
  member?: InputMaybe<MemberCreateRelationInput>;
  messageId?: InputMaybe<Scalars['String']>;
  reason?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<MandateStatus>;
  transactionId?: InputMaybe<Scalars['String']>;
};

export type DigitalMandateList = {
  __typename?: 'DigitalMandateList';
  info: ListInfo;
  values: Array<DigitalMandate>;
};

export type DigitalMandateOrderByInput = {
  acceptedAt?: InputMaybe<OrderByArg>;
  bic?: InputMaybe<OrderByArg>;
  createdAt?: InputMaybe<OrderByArg>;
  entranceCode?: InputMaybe<OrderByArg>;
  errorMessage?: InputMaybe<OrderByArg>;
  iban?: InputMaybe<OrderByArg>;
  id?: InputMaybe<OrderByArg>;
  isFirstTransaction?: InputMaybe<OrderByArg>;
  mandateId?: InputMaybe<OrderByArg>;
  member?: InputMaybe<MemberOrderByInput>;
  messageId?: InputMaybe<OrderByArg>;
  reason?: InputMaybe<OrderByArg>;
  status?: InputMaybe<OrderByArg>;
  transactionId?: InputMaybe<OrderByArg>;
};

export type DigitalMandateUpdateInput = {
  acceptedAt?: InputMaybe<Scalars['DateTime']>;
  bic?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  entranceCode?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  iban?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  instructions?: InputMaybe<Array<DirectDebitInstructionUpdateRelationInput>>;
  isFirstTransaction?: InputMaybe<Scalars['Boolean']>;
  mandateId?: InputMaybe<Scalars['String']>;
  member?: InputMaybe<MemberUpdateRelationInput>;
  messageId?: InputMaybe<Scalars['String']>;
  reason?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<MandateStatus>;
  transactionId?: InputMaybe<Scalars['String']>;
};

export type DigitalMandateWhereInput = {
  acceptedAt?: InputMaybe<DateTimeFilter>;
  AND?: InputMaybe<Array<DigitalMandateWhereInput>>;
  bic?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  entranceCode?: InputMaybe<StringFilter>;
  errorMessage?: InputMaybe<StringFilter>;
  iban?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  instructions?: InputMaybe<DirectDebitInstructionWhereInput>;
  isFirstTransaction?: InputMaybe<Scalars['Boolean']>;
  mandateId?: InputMaybe<StringFilter>;
  member?: InputMaybe<MemberWhereInput>;
  messageId?: InputMaybe<StringFilter>;
  OR?: InputMaybe<Array<DigitalMandateWhereInput>>;
  reason?: InputMaybe<StringFilter>;
  status?: InputMaybe<MandateStatusFilter>;
  transactionId?: InputMaybe<StringFilter>;
};

export type DigitalMandateWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type DirectDebit = {
  __typename?: 'DirectDebit';
  amount: Scalars['Int'];
  batches: DirectDebitBatchList;
  collectionDate: Scalars['String'];
  createdAt: Scalars['DateTime'];
  file?: Maybe<File>;
  id: Scalars['String'];
  instructionCount: Scalars['Int'];
  messageId: Scalars['String'];
  status: DirectDebitStatus;
  updatedAt: Scalars['DateTime'];
  warnings: DirectDebitWarningList;
};


export type DirectDebitbatchesArgs = {
  orderBy?: InputMaybe<DirectDebitBatchOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DirectDebitBatchWhereInput>;
};


export type DirectDebitwarningsArgs = {
  orderBy?: InputMaybe<DirectDebitWarningOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DirectDebitWarningWhereInput>;
};

export type DirectDebitBatch = {
  __typename?: 'DirectDebitBatch';
  amount: Scalars['Int'];
  batchId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  directDebit: DirectDebit;
  id: Scalars['String'];
  instructionCount: Scalars['Int'];
  instructions: DirectDebitInstructionList;
  sequenceType: SequenceType;
  updatedAt: Scalars['DateTime'];
};


export type DirectDebitBatchinstructionsArgs = {
  orderBy?: InputMaybe<DirectDebitInstructionOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DirectDebitInstructionWhereInput>;
};

export type DirectDebitBatchCreateInput = {
  batchId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  directDebit?: InputMaybe<DirectDebitCreateRelationInput>;
  id?: InputMaybe<Scalars['String']>;
  instructions?: InputMaybe<Array<DirectDebitInstructionCreateRelationInput>>;
  sequenceType?: InputMaybe<SequenceType>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type DirectDebitBatchCreateRelationInput = {
  connect?: InputMaybe<DirectDebitBatchWhereUniqueInput>;
  create?: InputMaybe<DirectDebitBatchCreateInput>;
};

export type DirectDebitBatchList = {
  __typename?: 'DirectDebitBatchList';
  info: ListInfo;
  values: Array<DirectDebitBatch>;
};

export type DirectDebitBatchOrderByInput = {
  batchId?: InputMaybe<OrderByArg>;
  createdAt?: InputMaybe<OrderByArg>;
  directDebit?: InputMaybe<DirectDebitOrderByInput>;
  id?: InputMaybe<OrderByArg>;
  sequenceType?: InputMaybe<OrderByArg>;
  updatedAt?: InputMaybe<OrderByArg>;
};

export type DirectDebitBatchUpdateInput = {
  batchId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  directDebit?: InputMaybe<DirectDebitUpdateRelationInput>;
  id?: InputMaybe<Scalars['String']>;
  instructions?: InputMaybe<Array<DirectDebitInstructionUpdateRelationInput>>;
  sequenceType?: InputMaybe<SequenceType>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type DirectDebitBatchUpdateRelationInput = {
  connect?: InputMaybe<DirectDebitBatchWhereUniqueInput>;
  create?: InputMaybe<DirectDebitBatchCreateInput>;
  disconnect?: InputMaybe<DirectDebitBatchWhereUniqueInput>;
};

export type DirectDebitBatchWhereInput = {
  AND?: InputMaybe<Array<DirectDebitBatchWhereInput>>;
  batchId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  directDebit?: InputMaybe<DirectDebitWhereInput>;
  id?: InputMaybe<StringFilter>;
  instructions?: InputMaybe<DirectDebitInstructionWhereInput>;
  OR?: InputMaybe<Array<DirectDebitBatchWhereInput>>;
  sequenceType?: InputMaybe<SequenceTypeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type DirectDebitBatchWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type DirectDebitCreateInput = {
  batches?: InputMaybe<Array<DirectDebitBatchCreateRelationInput>>;
  collectionDate?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  file?: InputMaybe<FileCreateRelationInput>;
  id?: InputMaybe<Scalars['String']>;
  messageId?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<DirectDebitStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  warnings?: InputMaybe<Array<DirectDebitWarningCreateRelationInput>>;
};

export type DirectDebitCreateRelationInput = {
  connect?: InputMaybe<DirectDebitWhereUniqueInput>;
  create?: InputMaybe<DirectDebitCreateInput>;
};

export type DirectDebitInstruction = {
  __typename?: 'DirectDebitInstruction';
  amount: Scalars['Int'];
  batch: DirectDebitBatch;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  instructionId: Scalars['String'];
  mandate: Mandate;
  transactions: TransactionList;
  updatedAt: Scalars['DateTime'];
};


export type DirectDebitInstructiontransactionsArgs = {
  orderBy?: InputMaybe<TransactionOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TransactionWhereInput>;
};

export type DirectDebitInstructionCreateInput = {
  batch?: InputMaybe<DirectDebitBatchCreateRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  instructionId?: InputMaybe<Scalars['String']>;
  mandate?: InputMaybe<MandateCreateRelationInput>;
  transactions?: InputMaybe<Array<TransactionCreateRelationInput>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type DirectDebitInstructionCreateRelationInput = {
  connect?: InputMaybe<DirectDebitInstructionWhereUniqueInput>;
  create?: InputMaybe<DirectDebitInstructionCreateInput>;
};

export type DirectDebitInstructionList = {
  __typename?: 'DirectDebitInstructionList';
  info: ListInfo;
  values: Array<DirectDebitInstruction>;
};

export type DirectDebitInstructionOrderByInput = {
  batch?: InputMaybe<DirectDebitBatchOrderByInput>;
  createdAt?: InputMaybe<OrderByArg>;
  description?: InputMaybe<OrderByArg>;
  id?: InputMaybe<OrderByArg>;
  instructionId?: InputMaybe<OrderByArg>;
  mandate?: InputMaybe<MandateOrderByInput>;
  updatedAt?: InputMaybe<OrderByArg>;
};

export type DirectDebitInstructionUpdateInput = {
  batch?: InputMaybe<DirectDebitBatchUpdateRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  instructionId?: InputMaybe<Scalars['String']>;
  mandate?: InputMaybe<MandateUpdateRelationInput>;
  transactions?: InputMaybe<Array<TransactionUpdateRelationInput>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type DirectDebitInstructionUpdateRelationInput = {
  connect?: InputMaybe<DirectDebitInstructionWhereUniqueInput>;
  create?: InputMaybe<DirectDebitInstructionCreateInput>;
  disconnect?: InputMaybe<DirectDebitInstructionWhereUniqueInput>;
};

export type DirectDebitInstructionWhereInput = {
  AND?: InputMaybe<Array<DirectDebitInstructionWhereInput>>;
  batch?: InputMaybe<DirectDebitBatchWhereInput>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  instructionId?: InputMaybe<StringFilter>;
  mandate?: InputMaybe<MandateWhereInput>;
  OR?: InputMaybe<Array<DirectDebitInstructionWhereInput>>;
  transactions?: InputMaybe<TransactionWhereInput>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type DirectDebitInstructionWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type DirectDebitList = {
  __typename?: 'DirectDebitList';
  info: ListInfo;
  values: Array<DirectDebit>;
};

export type DirectDebitOrderByInput = {
  collectionDate?: InputMaybe<OrderByArg>;
  createdAt?: InputMaybe<OrderByArg>;
  file?: InputMaybe<FileOrderByInput>;
  id?: InputMaybe<OrderByArg>;
  messageId?: InputMaybe<OrderByArg>;
  status?: InputMaybe<OrderByArg>;
  updatedAt?: InputMaybe<OrderByArg>;
};

export enum DirectDebitStatus {
  ACCEPTED = 'ACCEPTED',
  CANCELLED = 'CANCELLED',
  CREATED = 'CREATED',
  GENERATED = 'GENERATED',
  REJECTED = 'REJECTED'
}

export type DirectDebitStatusFilter = {
  equals?: InputMaybe<DirectDebitStatus>;
  in?: InputMaybe<Array<DirectDebitStatus>>;
  not?: InputMaybe<DirectDebitStatus>;
  notIn?: InputMaybe<Array<DirectDebitStatus>>;
};

export type DirectDebitUpdateInput = {
  batches?: InputMaybe<Array<DirectDebitBatchUpdateRelationInput>>;
  collectionDate?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  file?: InputMaybe<FileUpdateRelationInput>;
  id?: InputMaybe<Scalars['String']>;
  messageId?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<DirectDebitStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  warnings?: InputMaybe<Array<DirectDebitWarningUpdateRelationInput>>;
};

export type DirectDebitUpdateRelationInput = {
  connect?: InputMaybe<DirectDebitWhereUniqueInput>;
  create?: InputMaybe<DirectDebitCreateInput>;
  disconnect?: InputMaybe<DirectDebitWhereUniqueInput>;
};

export type DirectDebitWarning = {
  __typename?: 'DirectDebitWarning';
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  directDebit: DirectDebit;
  id: Scalars['String'];
  member?: Maybe<Member>;
  updatedAt: Scalars['DateTime'];
};

export type DirectDebitWarningCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  directDebit?: InputMaybe<DirectDebitCreateRelationInput>;
  id?: InputMaybe<Scalars['String']>;
  member?: InputMaybe<MemberCreateRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type DirectDebitWarningCreateRelationInput = {
  connect?: InputMaybe<DirectDebitWarningWhereUniqueInput>;
  create?: InputMaybe<DirectDebitWarningCreateInput>;
};

export type DirectDebitWarningList = {
  __typename?: 'DirectDebitWarningList';
  info: ListInfo;
  values: Array<DirectDebitWarning>;
};

export type DirectDebitWarningOrderByInput = {
  createdAt?: InputMaybe<OrderByArg>;
  description?: InputMaybe<OrderByArg>;
  directDebit?: InputMaybe<DirectDebitOrderByInput>;
  id?: InputMaybe<OrderByArg>;
  member?: InputMaybe<MemberOrderByInput>;
  updatedAt?: InputMaybe<OrderByArg>;
};

export type DirectDebitWarningUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  directDebit?: InputMaybe<DirectDebitUpdateRelationInput>;
  id?: InputMaybe<Scalars['String']>;
  member?: InputMaybe<MemberUpdateRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type DirectDebitWarningUpdateRelationInput = {
  connect?: InputMaybe<DirectDebitWarningWhereUniqueInput>;
  create?: InputMaybe<DirectDebitWarningCreateInput>;
  disconnect?: InputMaybe<DirectDebitWarningWhereUniqueInput>;
};

export type DirectDebitWarningWhereInput = {
  AND?: InputMaybe<Array<DirectDebitWarningWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  directDebit?: InputMaybe<DirectDebitWhereInput>;
  id?: InputMaybe<StringFilter>;
  member?: InputMaybe<MemberWhereInput>;
  OR?: InputMaybe<Array<DirectDebitWarningWhereInput>>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type DirectDebitWarningWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type DirectDebitWhereInput = {
  AND?: InputMaybe<Array<DirectDebitWhereInput>>;
  batches?: InputMaybe<DirectDebitBatchWhereInput>;
  collectionDate?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  file?: InputMaybe<FileWhereInput>;
  id?: InputMaybe<StringFilter>;
  messageId?: InputMaybe<StringFilter>;
  OR?: InputMaybe<Array<DirectDebitWhereInput>>;
  status?: InputMaybe<DirectDebitStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  warnings?: InputMaybe<DirectDebitWarningWhereInput>;
};

export type DirectDebitWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Event = {
  __typename?: 'Event';
  closedAt: Scalars['DateTime'];
  description: LongTranslatable;
  endedAt: Scalars['DateTime'];
  groups: GroupList;
  id: Scalars['String'];
  isAllDay: Scalars['Boolean'];
  isCanceled: Scalars['Boolean'];
  isMembersOnly: Scalars['Boolean'];
  isParticipationRequired: Scalars['Boolean'];
  maxParticipations?: Maybe<Scalars['Int']>;
  name: ShortTranslatable;
  openedAt: Scalars['DateTime'];
  participations: ParticipationList;
  startedAt: Scalars['DateTime'];
};


export type EventgroupsArgs = {
  orderBy?: InputMaybe<GroupOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GroupWhereInput>;
};


export type EventparticipationsArgs = {
  orderBy?: InputMaybe<ParticipationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ParticipationWhereInput>;
};

export type EventCreateInput = {
  closedAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<LongTranslatableCreateInput>;
  endedAt?: InputMaybe<Scalars['DateTime']>;
  groups?: InputMaybe<Array<GroupCreateRelationInput>>;
  id?: InputMaybe<Scalars['String']>;
  isAllDay?: InputMaybe<Scalars['Boolean']>;
  isCanceled?: InputMaybe<Scalars['Boolean']>;
  isMembersOnly?: InputMaybe<Scalars['Boolean']>;
  isParticipationRequired?: InputMaybe<Scalars['Boolean']>;
  maxParticipations?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<ShortTranslatableCreateInput>;
  openedAt?: InputMaybe<Scalars['DateTime']>;
  participations?: InputMaybe<Array<ParticipationCreateRelationInput>>;
  startedAt?: InputMaybe<Scalars['DateTime']>;
};

export type EventCreateRelationInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  create?: InputMaybe<EventCreateInput>;
};

export type EventList = {
  __typename?: 'EventList';
  info: ListInfo;
  values: Array<Event>;
};

export type EventOrderByInput = {
  closedAt?: InputMaybe<OrderByArg>;
  description?: InputMaybe<LongTranslatableOrderByInput>;
  endedAt?: InputMaybe<OrderByArg>;
  id?: InputMaybe<OrderByArg>;
  isAllDay?: InputMaybe<OrderByArg>;
  isCanceled?: InputMaybe<OrderByArg>;
  isMembersOnly?: InputMaybe<OrderByArg>;
  isParticipationRequired?: InputMaybe<OrderByArg>;
  maxParticipations?: InputMaybe<OrderByArg>;
  name?: InputMaybe<ShortTranslatableOrderByInput>;
  openedAt?: InputMaybe<OrderByArg>;
  startedAt?: InputMaybe<OrderByArg>;
};

export type EventUpdateInput = {
  closedAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<LongTranslatableUpdateInput>;
  endedAt?: InputMaybe<Scalars['DateTime']>;
  groups?: InputMaybe<Array<GroupUpdateRelationInput>>;
  id?: InputMaybe<Scalars['String']>;
  isAllDay?: InputMaybe<Scalars['Boolean']>;
  isCanceled?: InputMaybe<Scalars['Boolean']>;
  isMembersOnly?: InputMaybe<Scalars['Boolean']>;
  isParticipationRequired?: InputMaybe<Scalars['Boolean']>;
  maxParticipations?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<ShortTranslatableUpdateInput>;
  openedAt?: InputMaybe<Scalars['DateTime']>;
  participations?: InputMaybe<Array<ParticipationUpdateRelationInput>>;
  startedAt?: InputMaybe<Scalars['DateTime']>;
};

export type EventUpdateRelationInput = {
  connect?: InputMaybe<EventWhereUniqueInput>;
  create?: InputMaybe<EventCreateInput>;
  disconnect?: InputMaybe<EventWhereUniqueInput>;
};

export type EventWhereInput = {
  AND?: InputMaybe<Array<EventWhereInput>>;
  closedAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<LongTranslatableWhereInput>;
  endedAt?: InputMaybe<DateTimeFilter>;
  groups?: InputMaybe<GroupWhereInput>;
  id?: InputMaybe<StringFilter>;
  isAllDay?: InputMaybe<Scalars['Boolean']>;
  isCanceled?: InputMaybe<Scalars['Boolean']>;
  isMembersOnly?: InputMaybe<Scalars['Boolean']>;
  isParticipationRequired?: InputMaybe<Scalars['Boolean']>;
  maxParticipations?: InputMaybe<IntFilter>;
  name?: InputMaybe<ShortTranslatableWhereInput>;
  openedAt?: InputMaybe<DateTimeFilter>;
  OR?: InputMaybe<Array<EventWhereInput>>;
  participations?: InputMaybe<ParticipationWhereInput>;
  startedAt?: InputMaybe<DateTimeFilter>;
};

export type EventWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type File = {
  __typename?: 'File';
  id: Scalars['String'];
  mimeType: Scalars['String'];
  name: Scalars['String'];
  url: Scalars['String'];
};

export type FileCreateInput = {
  id?: InputMaybe<Scalars['String']>;
  mimeType?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FileCreateRelationInput = {
  connect?: InputMaybe<FileWhereUniqueInput>;
  create?: InputMaybe<FileCreateInput>;
};

export type FileList = {
  __typename?: 'FileList';
  info: ListInfo;
  values: Array<File>;
};

export type FileOrderByInput = {
  id?: InputMaybe<OrderByArg>;
  mimeType?: InputMaybe<OrderByArg>;
  name?: InputMaybe<OrderByArg>;
};

export type FileUpdateInput = {
  id?: InputMaybe<Scalars['String']>;
  mimeType?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FileUpdateRelationInput = {
  connect?: InputMaybe<FileWhereUniqueInput>;
  create?: InputMaybe<FileCreateInput>;
  disconnect?: InputMaybe<FileWhereUniqueInput>;
};

export type FileWhereInput = {
  AND?: InputMaybe<Array<FileWhereInput>>;
  id?: InputMaybe<StringFilter>;
  mimeType?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  OR?: InputMaybe<Array<FileWhereInput>>;
};

export type FileWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type Group = {
  endedAt?: Maybe<Scalars['Date']>;
  events: EventList;
  id: Scalars['String'];
  members: MemberList;
  name: ShortTranslatable;
  startedAt: Scalars['Date'];
};


export type GroupeventsArgs = {
  orderBy?: InputMaybe<EventOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EventWhereInput>;
};


export type GroupmembersArgs = {
  orderBy?: InputMaybe<MemberOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MemberWhereInput>;
};

export type GroupCreateInput = {
  endedAt?: InputMaybe<Scalars['Date']>;
  events?: InputMaybe<Array<EventCreateRelationInput>>;
  id?: InputMaybe<Scalars['String']>;
  members?: InputMaybe<Array<MemberCreateRelationInput>>;
  name?: InputMaybe<ShortTranslatableCreateInput>;
  startedAt?: InputMaybe<Scalars['Date']>;
};

export type GroupCreateRelationInput = {
  connect?: InputMaybe<GroupWhereUniqueInput>;
  create?: InputMaybe<GroupCreateInput>;
};

export type GroupList = {
  __typename?: 'GroupList';
  info: ListInfo;
  values: Array<Group>;
};

export type GroupOrderByInput = {
  endedAt?: InputMaybe<OrderByArg>;
  id?: InputMaybe<OrderByArg>;
  name?: InputMaybe<ShortTranslatableOrderByInput>;
  startedAt?: InputMaybe<OrderByArg>;
};

export type GroupUpdateInput = {
  endedAt?: InputMaybe<Scalars['Date']>;
  events?: InputMaybe<Array<EventUpdateRelationInput>>;
  id?: InputMaybe<Scalars['String']>;
  members?: InputMaybe<Array<MemberUpdateRelationInput>>;
  name?: InputMaybe<ShortTranslatableUpdateInput>;
  startedAt?: InputMaybe<Scalars['Date']>;
};

export type GroupUpdateRelationInput = {
  connect?: InputMaybe<GroupWhereUniqueInput>;
  create?: InputMaybe<GroupCreateInput>;
  disconnect?: InputMaybe<GroupWhereUniqueInput>;
};

export type GroupWhereInput = {
  AND?: InputMaybe<Array<GroupWhereInput>>;
  endedAt?: InputMaybe<DateTimeFilter>;
  events?: InputMaybe<EventWhereInput>;
  id?: InputMaybe<StringFilter>;
  members?: InputMaybe<MemberWhereInput>;
  name?: InputMaybe<ShortTranslatableWhereInput>;
  OR?: InputMaybe<Array<GroupWhereInput>>;
  startedAt?: InputMaybe<DateTimeFilter>;
};

export type GroupWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export enum Language {
  EN = 'EN',
  NL = 'NL'
}

export type LanguageFilter = {
  equals?: InputMaybe<Language>;
  in?: InputMaybe<Array<Language>>;
  not?: InputMaybe<Language>;
  notIn?: InputMaybe<Array<Language>>;
};

export type ListInfo = {
  __typename?: 'ListInfo';
  count: Scalars['Int'];
};

export type LongTranslatable = Translatable & {
  __typename?: 'LongTranslatable';
  en?: Maybe<Scalars['String']>;
  nl?: Maybe<Scalars['String']>;
};

export type LongTranslatableCreateInput = {
  en?: InputMaybe<Scalars['String']>;
  nl?: InputMaybe<Scalars['String']>;
};

export type LongTranslatableOrderByInput = {
  en?: InputMaybe<OrderByArg>;
  nl?: InputMaybe<OrderByArg>;
};

export type LongTranslatableUpdateInput = {
  en?: InputMaybe<Scalars['String']>;
  nl?: InputMaybe<Scalars['String']>;
};

export type LongTranslatableWhereInput = {
  AND?: InputMaybe<Array<LongTranslatableWhereInput>>;
  en?: InputMaybe<StringFilter>;
  nl?: InputMaybe<StringFilter>;
  OR?: InputMaybe<Array<LongTranslatableWhereInput>>;
};

export type Mandate = {
  acceptedAt?: Maybe<Scalars['DateTime']>;
  bic: Scalars['String'];
  createdAt: Scalars['DateTime'];
  errorMessage?: Maybe<Scalars['String']>;
  iban?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  instructions: DirectDebitInstructionList;
  isFirstTransaction: Scalars['Boolean'];
  mandateId: Scalars['String'];
  member: Member;
  reason: Scalars['String'];
  status: MandateStatus;
};


export type MandateinstructionsArgs = {
  orderBy?: InputMaybe<DirectDebitInstructionOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DirectDebitInstructionWhereInput>;
};

export type MandateCreateInput = {
  acceptedAt?: InputMaybe<Scalars['DateTime']>;
  bic?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  iban?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  instructions?: InputMaybe<Array<DirectDebitInstructionCreateRelationInput>>;
  isFirstTransaction?: InputMaybe<Scalars['Boolean']>;
  mandateId?: InputMaybe<Scalars['String']>;
  member?: InputMaybe<MemberCreateRelationInput>;
  reason?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<MandateStatus>;
};

export type MandateCreateRelationInput = {
  connect?: InputMaybe<MandateWhereUniqueInput>;
  create?: InputMaybe<MandateCreateInput>;
};

export type MandateList = {
  __typename?: 'MandateList';
  info: ListInfo;
  values: Array<Mandate>;
};

export type MandateOrderByInput = {
  acceptedAt?: InputMaybe<OrderByArg>;
  bic?: InputMaybe<OrderByArg>;
  createdAt?: InputMaybe<OrderByArg>;
  errorMessage?: InputMaybe<OrderByArg>;
  iban?: InputMaybe<OrderByArg>;
  id?: InputMaybe<OrderByArg>;
  isFirstTransaction?: InputMaybe<OrderByArg>;
  mandateId?: InputMaybe<OrderByArg>;
  member?: InputMaybe<MemberOrderByInput>;
  reason?: InputMaybe<OrderByArg>;
  status?: InputMaybe<OrderByArg>;
};

export enum MandateStatus {
  ACCEPTED = 'ACCEPTED',
  CANCELLED = 'CANCELLED',
  CREATED = 'CREATED',
  ERROR = 'ERROR',
  INVALID = 'INVALID',
  REJECTED = 'REJECTED',
  UNACCEPTED = 'UNACCEPTED'
}

export type MandateStatusFilter = {
  equals?: InputMaybe<MandateStatus>;
  in?: InputMaybe<Array<MandateStatus>>;
  not?: InputMaybe<MandateStatus>;
  notIn?: InputMaybe<Array<MandateStatus>>;
};

export type MandateUpdateInput = {
  acceptedAt?: InputMaybe<Scalars['DateTime']>;
  bic?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  iban?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  instructions?: InputMaybe<Array<DirectDebitInstructionUpdateRelationInput>>;
  isFirstTransaction?: InputMaybe<Scalars['Boolean']>;
  mandateId?: InputMaybe<Scalars['String']>;
  member?: InputMaybe<MemberUpdateRelationInput>;
  reason?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<MandateStatus>;
};

export type MandateUpdateRelationInput = {
  connect?: InputMaybe<MandateWhereUniqueInput>;
  create?: InputMaybe<MandateCreateInput>;
  disconnect?: InputMaybe<MandateWhereUniqueInput>;
};

export type MandateWhereInput = {
  acceptedAt?: InputMaybe<DateTimeFilter>;
  AND?: InputMaybe<Array<MandateWhereInput>>;
  bic?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  errorMessage?: InputMaybe<StringFilter>;
  iban?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  instructions?: InputMaybe<DirectDebitInstructionWhereInput>;
  isFirstTransaction?: InputMaybe<Scalars['Boolean']>;
  mandateId?: InputMaybe<StringFilter>;
  member?: InputMaybe<MemberWhereInput>;
  OR?: InputMaybe<Array<MandateWhereInput>>;
  reason?: InputMaybe<StringFilter>;
  status?: InputMaybe<MandateStatusFilter>;
};

export type MandateWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Member = {
  __typename?: 'Member';
  address: Scalars['String'];
  birthdate: Scalars['Date'];
  city: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  groups: GroupList;
  hasMandate: Scalars['Boolean'];
  hasPendingPaperMandates: Scalars['Boolean'];
  id: Scalars['String'];
  image?: Maybe<File>;
  initials: Scalars['String'];
  isAdmin: Scalars['Boolean'];
  language: Language;
  lastName: Scalars['String'];
  latestMembership: Membership;
  mandates: MandateList;
  memberships: MembershipList;
  participations: ParticipationList;
  phoneNumber: Scalars['String'];
  postalCode: Scalars['String'];
  pronouns: Pronouns;
  providers: ProviderList;
  studentType: StudentType;
  transactions: TransactionList;
  warnings: DirectDebitWarningList;
};


export type MembergroupsArgs = {
  orderBy?: InputMaybe<GroupOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GroupWhereInput>;
};


export type MembermandatesArgs = {
  orderBy?: InputMaybe<MandateOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MandateWhereInput>;
};


export type MembermembershipsArgs = {
  orderBy?: InputMaybe<MembershipOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MembershipWhereInput>;
};


export type MemberparticipationsArgs = {
  orderBy?: InputMaybe<ParticipationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ParticipationWhereInput>;
};


export type MemberprovidersArgs = {
  orderBy?: InputMaybe<ProviderOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProviderWhereInput>;
};


export type MembertransactionsArgs = {
  orderBy?: InputMaybe<TransactionOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TransactionWhereInput>;
};


export type MemberwarningsArgs = {
  orderBy?: InputMaybe<DirectDebitWarningOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DirectDebitWarningWhereInput>;
};

export type MemberCreateInput = {
  address?: InputMaybe<Scalars['String']>;
  birthdate?: InputMaybe<Scalars['Date']>;
  city?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  groups?: InputMaybe<Array<GroupCreateRelationInput>>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<FileCreateRelationInput>;
  initials?: InputMaybe<Scalars['String']>;
  isAdmin?: InputMaybe<Scalars['Boolean']>;
  language?: InputMaybe<Language>;
  lastName?: InputMaybe<Scalars['String']>;
  mandates?: InputMaybe<Array<MandateCreateRelationInput>>;
  memberships?: InputMaybe<Array<MembershipCreateRelationInput>>;
  participations?: InputMaybe<Array<ParticipationCreateRelationInput>>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  pronouns?: InputMaybe<Pronouns>;
  providers?: InputMaybe<Array<ProviderCreateRelationInput>>;
  studentType?: InputMaybe<StudentType>;
  transactions?: InputMaybe<Array<TransactionCreateRelationInput>>;
  warnings?: InputMaybe<Array<DirectDebitWarningCreateRelationInput>>;
};

export type MemberCreateRelationInput = {
  connect?: InputMaybe<MemberWhereUniqueInput>;
  create?: InputMaybe<MemberCreateInput>;
};

export type MemberList = {
  __typename?: 'MemberList';
  info: ListInfo;
  values: Array<Member>;
};

export type MemberOrderByInput = {
  address?: InputMaybe<OrderByArg>;
  birthdate?: InputMaybe<OrderByArg>;
  city?: InputMaybe<OrderByArg>;
  email?: InputMaybe<OrderByArg>;
  firstName?: InputMaybe<OrderByArg>;
  id?: InputMaybe<OrderByArg>;
  image?: InputMaybe<FileOrderByInput>;
  initials?: InputMaybe<OrderByArg>;
  isAdmin?: InputMaybe<OrderByArg>;
  language?: InputMaybe<OrderByArg>;
  lastName?: InputMaybe<OrderByArg>;
  phoneNumber?: InputMaybe<OrderByArg>;
  postalCode?: InputMaybe<OrderByArg>;
  pronouns?: InputMaybe<OrderByArg>;
  studentType?: InputMaybe<OrderByArg>;
};

export type Membership = {
  __typename?: 'Membership';
  endedAt?: Maybe<Scalars['Date']>;
  id: Scalars['String'];
  isAccepted: Scalars['Boolean'];
  member: Member;
  startedAt: Scalars['Date'];
  transactions: MembershipFeeTransactionList;
  type: MembershipType;
};


export type MembershiptransactionsArgs = {
  orderBy?: InputMaybe<MembershipFeeTransactionOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MembershipFeeTransactionWhereInput>;
};

export type MembershipCreateInput = {
  endedAt?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  isAccepted?: InputMaybe<Scalars['Boolean']>;
  member?: InputMaybe<MemberCreateRelationInput>;
  startedAt?: InputMaybe<Scalars['Date']>;
  transactions?: InputMaybe<Array<MembershipFeeTransactionCreateRelationInput>>;
  type?: InputMaybe<MembershipType>;
};

export type MembershipCreateRelationInput = {
  connect?: InputMaybe<MembershipWhereUniqueInput>;
  create?: InputMaybe<MembershipCreateInput>;
};

export type MembershipFeeTransaction = Transaction & {
  __typename?: 'MembershipFeeTransaction';
  amount: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  instruction?: Maybe<DirectDebitInstruction>;
  member: Member;
  membership: Membership;
  updatedAt: Scalars['DateTime'];
  year: Scalars['Int'];
};

export type MembershipFeeTransactionCreateInput = {
  amount?: InputMaybe<Scalars['Float']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  instruction?: InputMaybe<DirectDebitInstructionCreateRelationInput>;
  member?: InputMaybe<MemberCreateRelationInput>;
  membership?: InputMaybe<MembershipCreateRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  year?: InputMaybe<Scalars['Float']>;
};

export type MembershipFeeTransactionCreateRelationInput = {
  connect?: InputMaybe<MembershipFeeTransactionWhereUniqueInput>;
  create?: InputMaybe<MembershipFeeTransactionCreateInput>;
};

export type MembershipFeeTransactionList = {
  __typename?: 'MembershipFeeTransactionList';
  info: ListInfo;
  values: Array<MembershipFeeTransaction>;
};

export type MembershipFeeTransactionOrderByInput = {
  amount?: InputMaybe<OrderByArg>;
  createdAt?: InputMaybe<OrderByArg>;
  description?: InputMaybe<OrderByArg>;
  id?: InputMaybe<OrderByArg>;
  instruction?: InputMaybe<DirectDebitInstructionOrderByInput>;
  member?: InputMaybe<MemberOrderByInput>;
  membership?: InputMaybe<MembershipOrderByInput>;
  updatedAt?: InputMaybe<OrderByArg>;
  year?: InputMaybe<OrderByArg>;
};

export type MembershipFeeTransactionUpdateInput = {
  amount?: InputMaybe<Scalars['Float']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  instruction?: InputMaybe<DirectDebitInstructionUpdateRelationInput>;
  member?: InputMaybe<MemberUpdateRelationInput>;
  membership?: InputMaybe<MembershipUpdateRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  year?: InputMaybe<Scalars['Float']>;
};

export type MembershipFeeTransactionUpdateRelationInput = {
  connect?: InputMaybe<MembershipFeeTransactionWhereUniqueInput>;
  create?: InputMaybe<MembershipFeeTransactionCreateInput>;
  disconnect?: InputMaybe<MembershipFeeTransactionWhereUniqueInput>;
};

export type MembershipFeeTransactionWhereInput = {
  amount?: InputMaybe<IntFilter>;
  AND?: InputMaybe<Array<MembershipFeeTransactionWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  instruction?: InputMaybe<DirectDebitInstructionWhereInput>;
  member?: InputMaybe<MemberWhereInput>;
  membership?: InputMaybe<MembershipWhereInput>;
  OR?: InputMaybe<Array<MembershipFeeTransactionWhereInput>>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  year?: InputMaybe<IntFilter>;
};

export type MembershipFeeTransactionWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type MembershipList = {
  __typename?: 'MembershipList';
  info: ListInfo;
  values: Array<Membership>;
};

export type MembershipOrderByInput = {
  endedAt?: InputMaybe<OrderByArg>;
  id?: InputMaybe<OrderByArg>;
  isAccepted?: InputMaybe<OrderByArg>;
  member?: InputMaybe<MemberOrderByInput>;
  startedAt?: InputMaybe<OrderByArg>;
  type?: InputMaybe<OrderByArg>;
};

export enum MembershipType {
  EXTRAORDINARY = 'EXTRAORDINARY',
  HONORARY = 'HONORARY',
  NORMAL = 'NORMAL'
}

export type MembershipTypeFilter = {
  equals?: InputMaybe<MembershipType>;
  in?: InputMaybe<Array<MembershipType>>;
  not?: InputMaybe<MembershipType>;
  notIn?: InputMaybe<Array<MembershipType>>;
};

export type MembershipUpdateInput = {
  endedAt?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['String']>;
  isAccepted?: InputMaybe<Scalars['Boolean']>;
  member?: InputMaybe<MemberUpdateRelationInput>;
  startedAt?: InputMaybe<Scalars['Date']>;
  transactions?: InputMaybe<Array<MembershipFeeTransactionUpdateRelationInput>>;
  type?: InputMaybe<MembershipType>;
};

export type MembershipUpdateRelationInput = {
  connect?: InputMaybe<MembershipWhereUniqueInput>;
  create?: InputMaybe<MembershipCreateInput>;
  disconnect?: InputMaybe<MembershipWhereUniqueInput>;
};

export type MembershipWhereInput = {
  AND?: InputMaybe<Array<MembershipWhereInput>>;
  endedAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  isAccepted?: InputMaybe<Scalars['Boolean']>;
  member?: InputMaybe<MemberWhereInput>;
  OR?: InputMaybe<Array<MembershipWhereInput>>;
  startedAt?: InputMaybe<DateTimeFilter>;
  transactions?: InputMaybe<MembershipFeeTransactionWhereInput>;
  type?: InputMaybe<MembershipTypeFilter>;
};

export type MembershipWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type MemberUpdateInput = {
  address?: InputMaybe<Scalars['String']>;
  birthdate?: InputMaybe<Scalars['Date']>;
  city?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  groups?: InputMaybe<Array<GroupUpdateRelationInput>>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<FileUpdateRelationInput>;
  initials?: InputMaybe<Scalars['String']>;
  isAdmin?: InputMaybe<Scalars['Boolean']>;
  language?: InputMaybe<Language>;
  lastName?: InputMaybe<Scalars['String']>;
  mandates?: InputMaybe<Array<MandateUpdateRelationInput>>;
  memberships?: InputMaybe<Array<MembershipUpdateRelationInput>>;
  participations?: InputMaybe<Array<ParticipationUpdateRelationInput>>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  pronouns?: InputMaybe<Pronouns>;
  providers?: InputMaybe<Array<ProviderUpdateRelationInput>>;
  studentType?: InputMaybe<StudentType>;
  transactions?: InputMaybe<Array<TransactionUpdateRelationInput>>;
  warnings?: InputMaybe<Array<DirectDebitWarningUpdateRelationInput>>;
};

export type MemberUpdateRelationInput = {
  connect?: InputMaybe<MemberWhereUniqueInput>;
  create?: InputMaybe<MemberCreateInput>;
  disconnect?: InputMaybe<MemberWhereUniqueInput>;
};

export type MemberWhereInput = {
  address?: InputMaybe<StringFilter>;
  AND?: InputMaybe<Array<MemberWhereInput>>;
  birthdate?: InputMaybe<DateTimeFilter>;
  city?: InputMaybe<StringFilter>;
  email?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringFilter>;
  groups?: InputMaybe<GroupWhereInput>;
  id?: InputMaybe<StringFilter>;
  image?: InputMaybe<FileWhereInput>;
  initials?: InputMaybe<StringFilter>;
  isAdmin?: InputMaybe<Scalars['Boolean']>;
  language?: InputMaybe<LanguageFilter>;
  lastName?: InputMaybe<StringFilter>;
  mandates?: InputMaybe<MandateWhereInput>;
  memberships?: InputMaybe<MembershipWhereInput>;
  OR?: InputMaybe<Array<MemberWhereInput>>;
  participations?: InputMaybe<ParticipationWhereInput>;
  phoneNumber?: InputMaybe<StringFilter>;
  postalCode?: InputMaybe<StringFilter>;
  pronouns?: InputMaybe<PronounsFilter>;
  providers?: InputMaybe<ProviderWhereInput>;
  studentType?: InputMaybe<StudentTypeFilter>;
  transactions?: InputMaybe<TransactionWhereInput>;
  warnings?: InputMaybe<DirectDebitWarningWhereInput>;
};

export type MemberWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  acceptPaperMandate?: Maybe<PaperMandate>;
  cancelPaperMandate?: Maybe<PaperMandate>;
  changeEmail?: Maybe<Scalars['Boolean']>;
  changePassword?: Maybe<Scalars['Boolean']>;
  createBank: Bank;
  createBoardPeriod: BoardPeriod;
  createCommittee: Committee;
  createCommitteePeriod: CommitteePeriod;
  createDigitalMandate?: Maybe<CreateDigitalMandateResult>;
  createDirectDebit: DirectDebit;
  createDirectDebitBatch: DirectDebitBatch;
  createDirectDebitInstruction: DirectDebitInstruction;
  createDirectDebitWarning: DirectDebitWarning;
  createEvent: Event;
  createFile: File;
  createGroup: Group;
  createMandate: Mandate;
  createMember: Member;
  createMembership: Membership;
  createMembershipFeeTransaction: MembershipFeeTransaction;
  createPage: Page;
  createPaperMandate?: Maybe<PaperMandate>;
  createParticipation: Participation;
  createProvider: Provider;
  createSetting: Setting;
  createToken: Token;
  createTransaction: Transaction;
  deleteBank: Bank;
  deleteBanks: BankList;
  deleteBoardPeriod: BoardPeriod;
  deleteBoardPeriods: BoardPeriodList;
  deleteCommittee: Committee;
  deleteCommitteePeriod: CommitteePeriod;
  deleteCommitteePeriods: CommitteePeriodList;
  deleteCommittees: CommitteeList;
  deleteDirectDebit: DirectDebit;
  deleteDirectDebitBatch: DirectDebitBatch;
  deleteDirectDebitBatches: DirectDebitBatchList;
  deleteDirectDebitInstruction: DirectDebitInstruction;
  deleteDirectDebitInstructions: DirectDebitInstructionList;
  deleteDirectDebits: DirectDebitList;
  deleteDirectDebitWarning: DirectDebitWarning;
  deleteDirectDebitWarnings: DirectDebitWarningList;
  deleteEvent: Event;
  deleteEvents: EventList;
  deleteFile: File;
  deleteFiles: FileList;
  deleteGroup: Group;
  deleteGroups: GroupList;
  deleteMandate: Mandate;
  deleteMandates: MandateList;
  deleteMember: Member;
  deleteMembers: MemberList;
  deleteMembership: Membership;
  deleteMembershipFeeTransaction: MembershipFeeTransaction;
  deleteMembershipFeeTransactions: MembershipFeeTransactionList;
  deleteMemberships: MembershipList;
  deletePage: Page;
  deletePages: PageList;
  deleteParticipation: Participation;
  deleteParticipations: ParticipationList;
  deleteProvider: Provider;
  deleteProviders: ProviderList;
  deleteSetting: Setting;
  deleteSettings: SettingList;
  deleteToken: Token;
  deleteTokens: TokenList;
  deleteTransaction: Transaction;
  deleteTransactions: TransactionList;
  generateDirectDebit?: Maybe<DirectDebit>;
  generateDirectDebitFile?: Maybe<DirectDebit>;
  generateMembershipFeeTransactions?: Maybe<Scalars['Int']>;
  invalidateMandate?: Maybe<Mandate>;
  login?: Maybe<AccessToken>;
  register?: Maybe<Scalars['Boolean']>;
  rejectPaperMandate?: Maybe<PaperMandate>;
  requestResetPassword?: Maybe<Scalars['Boolean']>;
  requestVerifyEmail?: Maybe<Scalars['Boolean']>;
  resetPassword?: Maybe<Scalars['Boolean']>;
  sendContactForm?: Maybe<Scalars['Boolean']>;
  sendMandateReminders?: Maybe<Scalars['Boolean']>;
  updateBank: Bank;
  updateBoardPeriod: BoardPeriod;
  updateCommittee: Committee;
  updateCommitteePeriod: CommitteePeriod;
  updateDirectDebit: DirectDebit;
  updateDirectDebitBatch: DirectDebitBatch;
  updateDirectDebitInstruction: DirectDebitInstruction;
  updateDirectDebitWarning: DirectDebitWarning;
  updateEvent: Event;
  updateFile: File;
  updateGroup: Group;
  updateMandate: Mandate;
  updateMember: Member;
  updateMembership: Membership;
  updateMembershipFeeTransaction: MembershipFeeTransaction;
  updatePage: Page;
  updateParticipation: Participation;
  updateProvider: Provider;
  updateSetting: Setting;
  updateToken: Token;
  updateTransaction: Transaction;
  uploadMemberImage?: Maybe<Member>;
  uploadPaperMandate?: Maybe<PaperMandate>;
  verifyEmail?: Maybe<Scalars['Boolean']>;
};


export type MutationacceptPaperMandateArgs = {
  mandate: PaperMandateWhereUniqueInput;
};


export type MutationcancelPaperMandateArgs = {
  mandate: PaperMandateWhereUniqueInput;
};


export type MutationchangeEmailArgs = {
  email: Scalars['String'];
};


export type MutationchangePasswordArgs = {
  password: Scalars['String'];
  passwordRepeat: Scalars['String'];
};


export type MutationcreateBankArgs = {
  data: BankCreateInput;
};


export type MutationcreateBoardPeriodArgs = {
  data: BoardPeriodCreateInput;
};


export type MutationcreateCommitteeArgs = {
  data: CommitteeCreateInput;
};


export type MutationcreateCommitteePeriodArgs = {
  data: CommitteePeriodCreateInput;
};


export type MutationcreateDigitalMandateArgs = {
  data: CreateDigitalMandateInput;
};


export type MutationcreateDirectDebitArgs = {
  data: DirectDebitCreateInput;
};


export type MutationcreateDirectDebitBatchArgs = {
  data: DirectDebitBatchCreateInput;
};


export type MutationcreateDirectDebitInstructionArgs = {
  data: DirectDebitInstructionCreateInput;
};


export type MutationcreateDirectDebitWarningArgs = {
  data: DirectDebitWarningCreateInput;
};


export type MutationcreateEventArgs = {
  data: EventCreateInput;
};


export type MutationcreateFileArgs = {
  data: FileCreateInput;
};


export type MutationcreateGroupArgs = {
  data: GroupCreateInput;
};


export type MutationcreateMandateArgs = {
  data: MandateCreateInput;
};


export type MutationcreateMemberArgs = {
  data: MemberCreateInput;
};


export type MutationcreateMembershipArgs = {
  data: MembershipCreateInput;
};


export type MutationcreateMembershipFeeTransactionArgs = {
  data: MembershipFeeTransactionCreateInput;
};


export type MutationcreatePageArgs = {
  data: PageCreateInput;
};


export type MutationcreatePaperMandateArgs = {
  data: CreatePaperMandateInput;
};


export type MutationcreateParticipationArgs = {
  data: ParticipationCreateInput;
};


export type MutationcreateProviderArgs = {
  data: ProviderCreateInput;
};


export type MutationcreateSettingArgs = {
  data: SettingCreateInput;
};


export type MutationcreateTokenArgs = {
  data: TokenCreateInput;
};


export type MutationcreateTransactionArgs = {
  data: TransactionCreateInput;
};


export type MutationdeleteBankArgs = {
  where: BankWhereUniqueInput;
};


export type MutationdeleteBanksArgs = {
  orderBy?: InputMaybe<BankOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BankWhereInput>;
};


export type MutationdeleteBoardPeriodArgs = {
  where: BoardPeriodWhereUniqueInput;
};


export type MutationdeleteBoardPeriodsArgs = {
  orderBy?: InputMaybe<BoardPeriodOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BoardPeriodWhereInput>;
};


export type MutationdeleteCommitteeArgs = {
  where: CommitteeWhereUniqueInput;
};


export type MutationdeleteCommitteePeriodArgs = {
  where: CommitteePeriodWhereUniqueInput;
};


export type MutationdeleteCommitteePeriodsArgs = {
  orderBy?: InputMaybe<CommitteePeriodOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CommitteePeriodWhereInput>;
};


export type MutationdeleteCommitteesArgs = {
  orderBy?: InputMaybe<CommitteeOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CommitteeWhereInput>;
};


export type MutationdeleteDirectDebitArgs = {
  where: DirectDebitWhereUniqueInput;
};


export type MutationdeleteDirectDebitBatchArgs = {
  where: DirectDebitBatchWhereUniqueInput;
};


export type MutationdeleteDirectDebitBatchesArgs = {
  orderBy?: InputMaybe<DirectDebitBatchOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DirectDebitBatchWhereInput>;
};


export type MutationdeleteDirectDebitInstructionArgs = {
  where: DirectDebitInstructionWhereUniqueInput;
};


export type MutationdeleteDirectDebitInstructionsArgs = {
  orderBy?: InputMaybe<DirectDebitInstructionOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DirectDebitInstructionWhereInput>;
};


export type MutationdeleteDirectDebitsArgs = {
  orderBy?: InputMaybe<DirectDebitOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DirectDebitWhereInput>;
};


export type MutationdeleteDirectDebitWarningArgs = {
  where: DirectDebitWarningWhereUniqueInput;
};


export type MutationdeleteDirectDebitWarningsArgs = {
  orderBy?: InputMaybe<DirectDebitWarningOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DirectDebitWarningWhereInput>;
};


export type MutationdeleteEventArgs = {
  where: EventWhereUniqueInput;
};


export type MutationdeleteEventsArgs = {
  orderBy?: InputMaybe<EventOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EventWhereInput>;
};


export type MutationdeleteFileArgs = {
  where: FileWhereUniqueInput;
};


export type MutationdeleteFilesArgs = {
  orderBy?: InputMaybe<FileOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FileWhereInput>;
};


export type MutationdeleteGroupArgs = {
  where: GroupWhereUniqueInput;
};


export type MutationdeleteGroupsArgs = {
  orderBy?: InputMaybe<GroupOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GroupWhereInput>;
};


export type MutationdeleteMandateArgs = {
  where: MandateWhereUniqueInput;
};


export type MutationdeleteMandatesArgs = {
  orderBy?: InputMaybe<MandateOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MandateWhereInput>;
};


export type MutationdeleteMemberArgs = {
  where: MemberWhereUniqueInput;
};


export type MutationdeleteMembersArgs = {
  orderBy?: InputMaybe<MemberOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MemberWhereInput>;
};


export type MutationdeleteMembershipArgs = {
  where: MembershipWhereUniqueInput;
};


export type MutationdeleteMembershipFeeTransactionArgs = {
  where: MembershipFeeTransactionWhereUniqueInput;
};


export type MutationdeleteMembershipFeeTransactionsArgs = {
  orderBy?: InputMaybe<MembershipFeeTransactionOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MembershipFeeTransactionWhereInput>;
};


export type MutationdeleteMembershipsArgs = {
  orderBy?: InputMaybe<MembershipOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MembershipWhereInput>;
};


export type MutationdeletePageArgs = {
  where: PageWhereUniqueInput;
};


export type MutationdeletePagesArgs = {
  orderBy?: InputMaybe<PageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageWhereInput>;
};


export type MutationdeleteParticipationArgs = {
  where: ParticipationWhereUniqueInput;
};


export type MutationdeleteParticipationsArgs = {
  orderBy?: InputMaybe<ParticipationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ParticipationWhereInput>;
};


export type MutationdeleteProviderArgs = {
  where: ProviderWhereUniqueInput;
};


export type MutationdeleteProvidersArgs = {
  orderBy?: InputMaybe<ProviderOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProviderWhereInput>;
};


export type MutationdeleteSettingArgs = {
  where: SettingWhereUniqueInput;
};


export type MutationdeleteSettingsArgs = {
  orderBy?: InputMaybe<SettingOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SettingWhereInput>;
};


export type MutationdeleteTokenArgs = {
  where: TokenWhereUniqueInput;
};


export type MutationdeleteTokensArgs = {
  orderBy?: InputMaybe<TokenOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TokenWhereInput>;
};


export type MutationdeleteTransactionArgs = {
  where: TransactionWhereUniqueInput;
};


export type MutationdeleteTransactionsArgs = {
  orderBy?: InputMaybe<TransactionOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TransactionWhereInput>;
};


export type MutationgenerateDirectDebitArgs = {
  collectionDate: Scalars['Date'];
};


export type MutationgenerateDirectDebitFileArgs = {
  directDebit: DirectDebitWhereUniqueInput;
};


export type MutationgenerateMembershipFeeTransactionsArgs = {
  year: Scalars['Int'];
};


export type MutationinvalidateMandateArgs = {
  mandate: MandateWhereUniqueInput;
};


export type MutationloginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationregisterArgs = {
  data?: InputMaybe<RegisterInput>;
};


export type MutationrejectPaperMandateArgs = {
  mandate: PaperMandateWhereUniqueInput;
  reason: Scalars['String'];
};


export type MutationrequestResetPasswordArgs = {
  email: Scalars['String'];
};


export type MutationrequestVerifyEmailArgs = {
  email: Scalars['String'];
};


export type MutationresetPasswordArgs = {
  password: Scalars['String'];
  passwordRepeat: Scalars['String'];
  token: Scalars['String'];
};


export type MutationsendContactFormArgs = {
  email: Scalars['String'];
  message: Scalars['String'];
  name: Scalars['String'];
  recaptcha: Scalars['String'];
  subject: Scalars['String'];
};


export type MutationsendMandateRemindersArgs = {
  beforeDate: Scalars['Date'];
};


export type MutationupdateBankArgs = {
  data: BankUpdateInput;
  where: BankWhereUniqueInput;
};


export type MutationupdateBoardPeriodArgs = {
  data: BoardPeriodUpdateInput;
  where: BoardPeriodWhereUniqueInput;
};


export type MutationupdateCommitteeArgs = {
  data: CommitteeUpdateInput;
  where: CommitteeWhereUniqueInput;
};


export type MutationupdateCommitteePeriodArgs = {
  data: CommitteePeriodUpdateInput;
  where: CommitteePeriodWhereUniqueInput;
};


export type MutationupdateDirectDebitArgs = {
  data: DirectDebitUpdateInput;
  where: DirectDebitWhereUniqueInput;
};


export type MutationupdateDirectDebitBatchArgs = {
  data: DirectDebitBatchUpdateInput;
  where: DirectDebitBatchWhereUniqueInput;
};


export type MutationupdateDirectDebitInstructionArgs = {
  data: DirectDebitInstructionUpdateInput;
  where: DirectDebitInstructionWhereUniqueInput;
};


export type MutationupdateDirectDebitWarningArgs = {
  data: DirectDebitWarningUpdateInput;
  where: DirectDebitWarningWhereUniqueInput;
};


export type MutationupdateEventArgs = {
  data: EventUpdateInput;
  where: EventWhereUniqueInput;
};


export type MutationupdateFileArgs = {
  data: FileUpdateInput;
  where: FileWhereUniqueInput;
};


export type MutationupdateGroupArgs = {
  data: GroupUpdateInput;
  where: GroupWhereUniqueInput;
};


export type MutationupdateMandateArgs = {
  data: MandateUpdateInput;
  where: MandateWhereUniqueInput;
};


export type MutationupdateMemberArgs = {
  data: MemberUpdateInput;
  where: MemberWhereUniqueInput;
};


export type MutationupdateMembershipArgs = {
  data: MembershipUpdateInput;
  where: MembershipWhereUniqueInput;
};


export type MutationupdateMembershipFeeTransactionArgs = {
  data: MembershipFeeTransactionUpdateInput;
  where: MembershipFeeTransactionWhereUniqueInput;
};


export type MutationupdatePageArgs = {
  data: PageUpdateInput;
  where: PageWhereUniqueInput;
};


export type MutationupdateParticipationArgs = {
  data: ParticipationUpdateInput;
  where: ParticipationWhereUniqueInput;
};


export type MutationupdateProviderArgs = {
  data: ProviderUpdateInput;
  where: ProviderWhereUniqueInput;
};


export type MutationupdateSettingArgs = {
  data: SettingUpdateInput;
  where: SettingWhereUniqueInput;
};


export type MutationupdateTokenArgs = {
  data: TokenUpdateInput;
  where: TokenWhereUniqueInput;
};


export type MutationupdateTransactionArgs = {
  data: TransactionUpdateInput;
  where: TransactionWhereUniqueInput;
};


export type MutationuploadMemberImageArgs = {
  file: Scalars['Upload'];
  member: MemberWhereUniqueInput;
};


export type MutationuploadPaperMandateArgs = {
  file: Scalars['Upload'];
  paperMandate: PaperMandateWhereUniqueInput;
};


export type MutationverifyEmailArgs = {
  token: Scalars['String'];
};

export enum OrderByArg {
  ASC = 'ASC',
  DESC = 'DESC'
}

export type Page = {
  __typename?: 'Page';
  body: LongTranslatable;
  id: Scalars['String'];
  title: ShortTranslatable;
};

export type PageCreateInput = {
  body?: InputMaybe<LongTranslatableCreateInput>;
  id?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<ShortTranslatableCreateInput>;
};

export type PageList = {
  __typename?: 'PageList';
  info: ListInfo;
  values: Array<Page>;
};

export type PageOrderByInput = {
  body?: InputMaybe<LongTranslatableOrderByInput>;
  id?: InputMaybe<OrderByArg>;
  title?: InputMaybe<ShortTranslatableOrderByInput>;
};

export type PageUpdateInput = {
  body?: InputMaybe<LongTranslatableUpdateInput>;
  id?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<ShortTranslatableUpdateInput>;
};

export type PageWhereInput = {
  AND?: InputMaybe<Array<PageWhereInput>>;
  body?: InputMaybe<LongTranslatableWhereInput>;
  id?: InputMaybe<StringFilter>;
  OR?: InputMaybe<Array<PageWhereInput>>;
  title?: InputMaybe<ShortTranslatableWhereInput>;
};

export type PageWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type PaperMandate = Mandate & {
  __typename?: 'PaperMandate';
  acceptedAt?: Maybe<Scalars['DateTime']>;
  bic: Scalars['String'];
  createdAt: Scalars['DateTime'];
  errorMessage?: Maybe<Scalars['String']>;
  generatedFile?: Maybe<File>;
  iban?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  instructions: DirectDebitInstructionList;
  isFirstTransaction: Scalars['Boolean'];
  mandateId: Scalars['String'];
  member: Member;
  reason: Scalars['String'];
  status: MandateStatus;
  uploadedFile?: Maybe<File>;
};


export type PaperMandateinstructionsArgs = {
  orderBy?: InputMaybe<DirectDebitInstructionOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DirectDebitInstructionWhereInput>;
};

export type PaperMandateCreateInput = {
  acceptedAt?: InputMaybe<Scalars['DateTime']>;
  bic?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  generatedFile?: InputMaybe<FileCreateRelationInput>;
  iban?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  instructions?: InputMaybe<Array<DirectDebitInstructionCreateRelationInput>>;
  isFirstTransaction?: InputMaybe<Scalars['Boolean']>;
  mandateId?: InputMaybe<Scalars['String']>;
  member?: InputMaybe<MemberCreateRelationInput>;
  reason?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<MandateStatus>;
  uploadedFile?: InputMaybe<FileCreateRelationInput>;
};

export type PaperMandateList = {
  __typename?: 'PaperMandateList';
  info: ListInfo;
  values: Array<PaperMandate>;
};

export type PaperMandateOrderByInput = {
  acceptedAt?: InputMaybe<OrderByArg>;
  bic?: InputMaybe<OrderByArg>;
  createdAt?: InputMaybe<OrderByArg>;
  errorMessage?: InputMaybe<OrderByArg>;
  generatedFile?: InputMaybe<FileOrderByInput>;
  iban?: InputMaybe<OrderByArg>;
  id?: InputMaybe<OrderByArg>;
  isFirstTransaction?: InputMaybe<OrderByArg>;
  mandateId?: InputMaybe<OrderByArg>;
  member?: InputMaybe<MemberOrderByInput>;
  reason?: InputMaybe<OrderByArg>;
  status?: InputMaybe<OrderByArg>;
  uploadedFile?: InputMaybe<FileOrderByInput>;
};

export type PaperMandateUpdateInput = {
  acceptedAt?: InputMaybe<Scalars['DateTime']>;
  bic?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  generatedFile?: InputMaybe<FileUpdateRelationInput>;
  iban?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  instructions?: InputMaybe<Array<DirectDebitInstructionUpdateRelationInput>>;
  isFirstTransaction?: InputMaybe<Scalars['Boolean']>;
  mandateId?: InputMaybe<Scalars['String']>;
  member?: InputMaybe<MemberUpdateRelationInput>;
  reason?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<MandateStatus>;
  uploadedFile?: InputMaybe<FileUpdateRelationInput>;
};

export type PaperMandateWhereInput = {
  acceptedAt?: InputMaybe<DateTimeFilter>;
  AND?: InputMaybe<Array<PaperMandateWhereInput>>;
  bic?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  errorMessage?: InputMaybe<StringFilter>;
  generatedFile?: InputMaybe<FileWhereInput>;
  iban?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  instructions?: InputMaybe<DirectDebitInstructionWhereInput>;
  isFirstTransaction?: InputMaybe<Scalars['Boolean']>;
  mandateId?: InputMaybe<StringFilter>;
  member?: InputMaybe<MemberWhereInput>;
  OR?: InputMaybe<Array<PaperMandateWhereInput>>;
  reason?: InputMaybe<StringFilter>;
  status?: InputMaybe<MandateStatusFilter>;
  uploadedFile?: InputMaybe<FileWhereInput>;
};

export type PaperMandateWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Participation = {
  __typename?: 'Participation';
  createdAt: Scalars['DateTime'];
  event: Event;
  id: Scalars['String'];
  member: Member;
};

export type ParticipationCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  event?: InputMaybe<EventCreateRelationInput>;
  id?: InputMaybe<Scalars['String']>;
  member?: InputMaybe<MemberCreateRelationInput>;
};

export type ParticipationCreateRelationInput = {
  connect?: InputMaybe<ParticipationWhereUniqueInput>;
  create?: InputMaybe<ParticipationCreateInput>;
};

export type ParticipationList = {
  __typename?: 'ParticipationList';
  info: ListInfo;
  values: Array<Participation>;
};

export type ParticipationOrderByInput = {
  createdAt?: InputMaybe<OrderByArg>;
  event?: InputMaybe<EventOrderByInput>;
  id?: InputMaybe<OrderByArg>;
  member?: InputMaybe<MemberOrderByInput>;
};

export type ParticipationUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  event?: InputMaybe<EventUpdateRelationInput>;
  id?: InputMaybe<Scalars['String']>;
  member?: InputMaybe<MemberUpdateRelationInput>;
};

export type ParticipationUpdateRelationInput = {
  connect?: InputMaybe<ParticipationWhereUniqueInput>;
  create?: InputMaybe<ParticipationCreateInput>;
  disconnect?: InputMaybe<ParticipationWhereUniqueInput>;
};

export type ParticipationWhereInput = {
  AND?: InputMaybe<Array<ParticipationWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  event?: InputMaybe<EventWhereInput>;
  id?: InputMaybe<StringFilter>;
  member?: InputMaybe<MemberWhereInput>;
  OR?: InputMaybe<Array<ParticipationWhereInput>>;
};

export type ParticipationWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export enum Pronouns {
  HE_HIM = 'HE_HIM',
  SHE_HER = 'SHE_HER',
  THEY_THEM = 'THEY_THEM'
}

export type PronounsFilter = {
  equals?: InputMaybe<Pronouns>;
  in?: InputMaybe<Array<Pronouns>>;
  not?: InputMaybe<Pronouns>;
  notIn?: InputMaybe<Array<Pronouns>>;
};

export type Provider = {
  __typename?: 'Provider';
  email: Scalars['String'];
  id: Scalars['String'];
  isVerified: Scalars['Boolean'];
  type: Scalars['String'];
  user: Member;
};

export type ProviderCreateInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  isVerified?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<MemberCreateRelationInput>;
};

export type ProviderCreateRelationInput = {
  connect?: InputMaybe<ProviderWhereUniqueInput>;
  create?: InputMaybe<ProviderCreateInput>;
};

export type ProviderList = {
  __typename?: 'ProviderList';
  info: ListInfo;
  values: Array<Provider>;
};

export type ProviderOrderByInput = {
  email?: InputMaybe<OrderByArg>;
  id?: InputMaybe<OrderByArg>;
  isVerified?: InputMaybe<OrderByArg>;
  type?: InputMaybe<OrderByArg>;
  user?: InputMaybe<MemberOrderByInput>;
};

export type ProviderUpdateInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  isVerified?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<MemberUpdateRelationInput>;
};

export type ProviderUpdateRelationInput = {
  connect?: InputMaybe<ProviderWhereUniqueInput>;
  create?: InputMaybe<ProviderCreateInput>;
  disconnect?: InputMaybe<ProviderWhereUniqueInput>;
};

export type ProviderWhereInput = {
  AND?: InputMaybe<Array<ProviderWhereInput>>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  isVerified?: InputMaybe<Scalars['Boolean']>;
  OR?: InputMaybe<Array<ProviderWhereInput>>;
  type?: InputMaybe<StringFilter>;
  user?: InputMaybe<MemberWhereInput>;
};

export type ProviderWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  bank: Bank;
  banks: BankList;
  boardPeriod: BoardPeriod;
  boardPeriods: BoardPeriodList;
  committee: Committee;
  committeePeriod: CommitteePeriod;
  committeePeriods: CommitteePeriodList;
  committees: CommitteeList;
  digitalMandate: DigitalMandate;
  digitalMandates: DigitalMandateList;
  directDebit: DirectDebit;
  directDebitBatch: DirectDebitBatch;
  directDebitBatches: DirectDebitBatchList;
  directDebitInstruction: DirectDebitInstruction;
  directDebitInstructions: DirectDebitInstructionList;
  directDebits: DirectDebitList;
  directDebitWarning: DirectDebitWarning;
  directDebitWarnings: DirectDebitWarningList;
  event: Event;
  events: EventList;
  file: File;
  files: FileList;
  group: Group;
  groups: GroupList;
  mandate: Mandate;
  mandates: MandateList;
  me?: Maybe<Member>;
  member: Member;
  members: MemberList;
  membership: Membership;
  membershipFeeTransaction: MembershipFeeTransaction;
  membershipFeeTransactions: MembershipFeeTransactionList;
  memberships: MembershipList;
  page: Page;
  pages: PageList;
  paperMandate: PaperMandate;
  paperMandates: PaperMandateList;
  participation: Participation;
  participations: ParticipationList;
  provider: Provider;
  providers: ProviderList;
  setting: Setting;
  settings: SettingList;
  token: Token;
  tokens: TokenList;
  transaction: Transaction;
  transactions: TransactionList;
};


export type QuerybankArgs = {
  where: BankWhereUniqueInput;
};


export type QuerybanksArgs = {
  orderBy?: InputMaybe<BankOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BankWhereInput>;
};


export type QueryboardPeriodArgs = {
  where: BoardPeriodWhereUniqueInput;
};


export type QueryboardPeriodsArgs = {
  orderBy?: InputMaybe<BoardPeriodOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BoardPeriodWhereInput>;
};


export type QuerycommitteeArgs = {
  where: CommitteeWhereUniqueInput;
};


export type QuerycommitteePeriodArgs = {
  where: CommitteePeriodWhereUniqueInput;
};


export type QuerycommitteePeriodsArgs = {
  orderBy?: InputMaybe<CommitteePeriodOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CommitteePeriodWhereInput>;
};


export type QuerycommitteesArgs = {
  orderBy?: InputMaybe<CommitteeOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CommitteeWhereInput>;
};


export type QuerydigitalMandateArgs = {
  where: DigitalMandateWhereUniqueInput;
};


export type QuerydigitalMandatesArgs = {
  orderBy?: InputMaybe<DigitalMandateOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DigitalMandateWhereInput>;
};


export type QuerydirectDebitArgs = {
  where: DirectDebitWhereUniqueInput;
};


export type QuerydirectDebitBatchArgs = {
  where: DirectDebitBatchWhereUniqueInput;
};


export type QuerydirectDebitBatchesArgs = {
  orderBy?: InputMaybe<DirectDebitBatchOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DirectDebitBatchWhereInput>;
};


export type QuerydirectDebitInstructionArgs = {
  where: DirectDebitInstructionWhereUniqueInput;
};


export type QuerydirectDebitInstructionsArgs = {
  orderBy?: InputMaybe<DirectDebitInstructionOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DirectDebitInstructionWhereInput>;
};


export type QuerydirectDebitsArgs = {
  orderBy?: InputMaybe<DirectDebitOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DirectDebitWhereInput>;
};


export type QuerydirectDebitWarningArgs = {
  where: DirectDebitWarningWhereUniqueInput;
};


export type QuerydirectDebitWarningsArgs = {
  orderBy?: InputMaybe<DirectDebitWarningOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<DirectDebitWarningWhereInput>;
};


export type QueryeventArgs = {
  where: EventWhereUniqueInput;
};


export type QueryeventsArgs = {
  orderBy?: InputMaybe<EventOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EventWhereInput>;
};


export type QueryfileArgs = {
  where: FileWhereUniqueInput;
};


export type QueryfilesArgs = {
  orderBy?: InputMaybe<FileOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FileWhereInput>;
};


export type QuerygroupArgs = {
  where: GroupWhereUniqueInput;
};


export type QuerygroupsArgs = {
  orderBy?: InputMaybe<GroupOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GroupWhereInput>;
};


export type QuerymandateArgs = {
  where: MandateWhereUniqueInput;
};


export type QuerymandatesArgs = {
  orderBy?: InputMaybe<MandateOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MandateWhereInput>;
};


export type QuerymemberArgs = {
  where: MemberWhereUniqueInput;
};


export type QuerymembersArgs = {
  orderBy?: InputMaybe<MemberOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MemberWhereInput>;
};


export type QuerymembershipArgs = {
  where: MembershipWhereUniqueInput;
};


export type QuerymembershipFeeTransactionArgs = {
  where: MembershipFeeTransactionWhereUniqueInput;
};


export type QuerymembershipFeeTransactionsArgs = {
  orderBy?: InputMaybe<MembershipFeeTransactionOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MembershipFeeTransactionWhereInput>;
};


export type QuerymembershipsArgs = {
  orderBy?: InputMaybe<MembershipOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MembershipWhereInput>;
};


export type QuerypageArgs = {
  where: PageWhereUniqueInput;
};


export type QuerypagesArgs = {
  orderBy?: InputMaybe<PageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageWhereInput>;
};


export type QuerypaperMandateArgs = {
  where: PaperMandateWhereUniqueInput;
};


export type QuerypaperMandatesArgs = {
  orderBy?: InputMaybe<PaperMandateOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PaperMandateWhereInput>;
};


export type QueryparticipationArgs = {
  where: ParticipationWhereUniqueInput;
};


export type QueryparticipationsArgs = {
  orderBy?: InputMaybe<ParticipationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ParticipationWhereInput>;
};


export type QueryproviderArgs = {
  where: ProviderWhereUniqueInput;
};


export type QueryprovidersArgs = {
  orderBy?: InputMaybe<ProviderOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ProviderWhereInput>;
};


export type QuerysettingArgs = {
  where: SettingWhereUniqueInput;
};


export type QuerysettingsArgs = {
  orderBy?: InputMaybe<SettingOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SettingWhereInput>;
};


export type QuerytokenArgs = {
  where: TokenWhereUniqueInput;
};


export type QuerytokensArgs = {
  orderBy?: InputMaybe<TokenOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TokenWhereInput>;
};


export type QuerytransactionArgs = {
  where: TransactionWhereUniqueInput;
};


export type QuerytransactionsArgs = {
  orderBy?: InputMaybe<TransactionOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TransactionWhereInput>;
};

export type RegisterInput = {
  address: Scalars['String'];
  birthdate: Scalars['Date'];
  city: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  initials: Scalars['String'];
  language: Language;
  lastName: Scalars['String'];
  password: Scalars['String'];
  passwordRepeat: Scalars['String'];
  phoneNumber: Scalars['String'];
  postalCode: Scalars['String'];
  pronouns: Pronouns;
  studentType: StudentType;
};

export enum SequenceType {
  FINAL = 'FINAL',
  FIRST = 'FIRST',
  ONE_OFF = 'ONE_OFF',
  RECURRENT = 'RECURRENT'
}

export type SequenceTypeFilter = {
  equals?: InputMaybe<SequenceType>;
  in?: InputMaybe<Array<SequenceType>>;
  not?: InputMaybe<SequenceType>;
  notIn?: InputMaybe<Array<SequenceType>>;
};

export type Setting = {
  __typename?: 'Setting';
  isPublic: Scalars['Boolean'];
  key: Scalars['String'];
  value: Scalars['String'];
};

export type SettingCreateInput = {
  isPublic?: InputMaybe<Scalars['Boolean']>;
  key?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type SettingList = {
  __typename?: 'SettingList';
  info: ListInfo;
  values: Array<Setting>;
};

export type SettingOrderByInput = {
  isPublic?: InputMaybe<OrderByArg>;
  key?: InputMaybe<OrderByArg>;
  value?: InputMaybe<OrderByArg>;
};

export type SettingUpdateInput = {
  isPublic?: InputMaybe<Scalars['Boolean']>;
  key?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type SettingWhereInput = {
  AND?: InputMaybe<Array<SettingWhereInput>>;
  isPublic?: InputMaybe<Scalars['Boolean']>;
  key?: InputMaybe<StringFilter>;
  OR?: InputMaybe<Array<SettingWhereInput>>;
  value?: InputMaybe<StringFilter>;
};

export type SettingWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type ShortTranslatable = Translatable & {
  __typename?: 'ShortTranslatable';
  en?: Maybe<Scalars['String']>;
  nl?: Maybe<Scalars['String']>;
};

export type ShortTranslatableCreateInput = {
  en?: InputMaybe<Scalars['String']>;
  nl?: InputMaybe<Scalars['String']>;
};

export type ShortTranslatableOrderByInput = {
  en?: InputMaybe<OrderByArg>;
  nl?: InputMaybe<OrderByArg>;
};

export type ShortTranslatableUpdateInput = {
  en?: InputMaybe<Scalars['String']>;
  nl?: InputMaybe<Scalars['String']>;
};

export type ShortTranslatableWhereInput = {
  AND?: InputMaybe<Array<ShortTranslatableWhereInput>>;
  en?: InputMaybe<StringFilter>;
  nl?: InputMaybe<StringFilter>;
  OR?: InputMaybe<Array<ShortTranslatableWhereInput>>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export enum StudentType {
  HBO_OTHER = 'HBO_OTHER',
  HBO_SAXION = 'HBO_SAXION',
  MBO = 'MBO',
  UNIVERSITY_OTHER = 'UNIVERSITY_OTHER',
  UNIVERSITY_UT = 'UNIVERSITY_UT',
  WORKING = 'WORKING'
}

export type StudentTypeFilter = {
  equals?: InputMaybe<StudentType>;
  in?: InputMaybe<Array<StudentType>>;
  not?: InputMaybe<StudentType>;
  notIn?: InputMaybe<Array<StudentType>>;
};

export type Token = {
  __typename?: 'Token';
  expiresAt: Scalars['DateTime'];
  id: Scalars['String'];
  provider: Provider;
  token: Scalars['String'];
  type: TokenType;
};

export type TokenCreateInput = {
  expiresAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<ProviderCreateRelationInput>;
  token?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<TokenType>;
};

export type TokenList = {
  __typename?: 'TokenList';
  info: ListInfo;
  values: Array<Token>;
};

export type TokenOrderByInput = {
  expiresAt?: InputMaybe<OrderByArg>;
  id?: InputMaybe<OrderByArg>;
  provider?: InputMaybe<ProviderOrderByInput>;
  token?: InputMaybe<OrderByArg>;
  type?: InputMaybe<OrderByArg>;
};

export enum TokenType {
  RESET_PASSWORD = 'RESET_PASSWORD',
  VERIFY_EMAIL = 'VERIFY_EMAIL'
}

export type TokenTypeFilter = {
  equals?: InputMaybe<TokenType>;
  in?: InputMaybe<Array<TokenType>>;
  not?: InputMaybe<TokenType>;
  notIn?: InputMaybe<Array<TokenType>>;
};

export type TokenUpdateInput = {
  expiresAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<ProviderUpdateRelationInput>;
  token?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<TokenType>;
};

export type TokenWhereInput = {
  AND?: InputMaybe<Array<TokenWhereInput>>;
  expiresAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  OR?: InputMaybe<Array<TokenWhereInput>>;
  provider?: InputMaybe<ProviderWhereInput>;
  token?: InputMaybe<StringFilter>;
  type?: InputMaybe<TokenTypeFilter>;
};

export type TokenWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};

export type Transaction = {
  amount: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['String'];
  instruction?: Maybe<DirectDebitInstruction>;
  member: Member;
  updatedAt: Scalars['DateTime'];
};

export type TransactionCreateInput = {
  amount?: InputMaybe<Scalars['Float']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  instruction?: InputMaybe<DirectDebitInstructionCreateRelationInput>;
  member?: InputMaybe<MemberCreateRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TransactionCreateRelationInput = {
  connect?: InputMaybe<TransactionWhereUniqueInput>;
  create?: InputMaybe<TransactionCreateInput>;
};

export type TransactionList = {
  __typename?: 'TransactionList';
  info: ListInfo;
  values: Array<Transaction>;
};

export type TransactionOrderByInput = {
  amount?: InputMaybe<OrderByArg>;
  createdAt?: InputMaybe<OrderByArg>;
  description?: InputMaybe<OrderByArg>;
  id?: InputMaybe<OrderByArg>;
  instruction?: InputMaybe<DirectDebitInstructionOrderByInput>;
  member?: InputMaybe<MemberOrderByInput>;
  updatedAt?: InputMaybe<OrderByArg>;
};

export type TransactionUpdateInput = {
  amount?: InputMaybe<Scalars['Float']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  instruction?: InputMaybe<DirectDebitInstructionUpdateRelationInput>;
  member?: InputMaybe<MemberUpdateRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TransactionUpdateRelationInput = {
  connect?: InputMaybe<TransactionWhereUniqueInput>;
  create?: InputMaybe<TransactionCreateInput>;
  disconnect?: InputMaybe<TransactionWhereUniqueInput>;
};

export type TransactionWhereInput = {
  amount?: InputMaybe<IntFilter>;
  AND?: InputMaybe<Array<TransactionWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  instruction?: InputMaybe<DirectDebitInstructionWhereInput>;
  member?: InputMaybe<MemberWhereInput>;
  OR?: InputMaybe<Array<TransactionWhereInput>>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type TransactionWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Translatable = {
  en?: Maybe<Scalars['String']>;
  nl?: Maybe<Scalars['String']>;
};

export type BankFragment = { __typename?: 'Bank', id: string, bic: string, country: string, name: string, isActive: boolean };

export type CommitteeFragment = { __typename?: 'Committee', id: string, name: { __typename?: 'ShortTranslatable', en?: string | null, nl?: string | null }, description: { __typename?: 'LongTranslatable', en?: string | null, nl?: string | null } };

export type DirectDebitFragment = { __typename?: 'DirectDebit', id: string, createdAt: string, updatedAt: string, status: DirectDebitStatus, messageId: string, collectionDate: string, instructionCount: number, amount: number };

export type DirectDebitBatchFragment = { __typename?: 'DirectDebitBatch', id: string, createdAt: string, updatedAt: string, batchId: string, sequenceType: SequenceType, instructionCount: number, amount: number };

export type DirectDebitInstructionFragment = { __typename?: 'DirectDebitInstruction', id: string, createdAt: string, updatedAt: string, instructionId: string, description: string, amount: number };

export type DirectDebitWarningFragment = { __typename?: 'DirectDebitWarning', id: string, createdAt: string, updatedAt: string, description: string, member?: { __typename?: 'Member', id: string, firstName: string, lastName: string } | null };

export type FileFragment = { __typename?: 'File', id: string, name: string, url: string, mimeType: string };

export type MandateFragment_DigitalMandate_ = { __typename?: 'DigitalMandate', id: string, mandateId: string, status: MandateStatus, createdAt: string, acceptedAt?: string | null, bic: string, iban?: string | null, reason: string, isFirstTransaction: boolean, errorMessage?: string | null };

export type MandateFragment_PaperMandate_ = { __typename?: 'PaperMandate', id: string, mandateId: string, status: MandateStatus, createdAt: string, acceptedAt?: string | null, bic: string, iban?: string | null, reason: string, isFirstTransaction: boolean, errorMessage?: string | null, generatedFile?: { __typename?: 'File', id: string, name: string, url: string, mimeType: string } | null, uploadedFile?: { __typename?: 'File', id: string, name: string, url: string, mimeType: string } | null };

export type MandateFragment = MandateFragment_DigitalMandate_ | MandateFragment_PaperMandate_;

export type PaperMandateFragment = { __typename?: 'PaperMandate', generatedFile?: { __typename?: 'File', id: string, name: string, url: string, mimeType: string } | null, uploadedFile?: { __typename?: 'File', id: string, name: string, url: string, mimeType: string } | null };

export type MemberFragment = { __typename?: 'Member', id: string, firstName: string, initials: string, lastName: string, email: string, address: string, postalCode: string, city: string, phoneNumber: string, birthdate: string, language: Language, pronouns: Pronouns, studentType: StudentType, isAdmin: boolean, image?: { __typename?: 'File', id: string, name: string, url: string, mimeType: string } | null };

export type MembershipFragment = { __typename?: 'Membership', id: string, type: MembershipType, startedAt: string, endedAt?: string | null, isAccepted: boolean };

export type PageFragment = { __typename?: 'Page', id: string, title: { __typename?: 'ShortTranslatable', en?: string | null, nl?: string | null }, body: { __typename?: 'LongTranslatable', en?: string | null, nl?: string | null } };

export type ProviderFragment = { __typename?: 'Provider', id: string, type: string, email: string };

export type TransactionFragment = { __typename?: 'MembershipFeeTransaction', id: string, createdAt: string, updatedAt: string, description: string, amount: number, year: number };

export type MembershipFeeTransactionFragment = { __typename?: 'MembershipFeeTransaction', year: number };

export type TranslatableFragment_LongTranslatable_ = { __typename?: 'LongTranslatable', en?: string | null, nl?: string | null };

export type TranslatableFragment_ShortTranslatable_ = { __typename?: 'ShortTranslatable', en?: string | null, nl?: string | null };

export type TranslatableFragment = TranslatableFragment_LongTranslatable_ | TranslatableFragment_ShortTranslatable_;

export type AcceptPaperMandateMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type AcceptPaperMandateMutation = { __typename?: 'Mutation', acceptPaperMandate?: { __typename?: 'PaperMandate', id: string, mandateId: string, status: MandateStatus, createdAt: string, acceptedAt?: string | null, bic: string, iban?: string | null, reason: string, isFirstTransaction: boolean, errorMessage?: string | null, generatedFile?: { __typename?: 'File', id: string, name: string, url: string, mimeType: string } | null, uploadedFile?: { __typename?: 'File', id: string, name: string, url: string, mimeType: string } | null } | null };

export type CancelPaperMandateMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type CancelPaperMandateMutation = { __typename?: 'Mutation', cancelPaperMandate?: { __typename?: 'PaperMandate', id: string, mandateId: string, status: MandateStatus, createdAt: string, acceptedAt?: string | null, bic: string, iban?: string | null, reason: string, isFirstTransaction: boolean, errorMessage?: string | null, generatedFile?: { __typename?: 'File', id: string, name: string, url: string, mimeType: string } | null, uploadedFile?: { __typename?: 'File', id: string, name: string, url: string, mimeType: string } | null } | null };

export type ChangeEmailMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ChangeEmailMutation = { __typename?: 'Mutation', changeEmail?: boolean | null };

export type ChangePasswordMutationVariables = Exact<{
  password: Scalars['String'];
  passwordRepeat: Scalars['String'];
}>;


export type ChangePasswordMutation = { __typename?: 'Mutation', changePassword?: boolean | null };

export type CreateDigitalMandateMutationVariables = Exact<{
  data: CreateDigitalMandateInput;
}>;


export type CreateDigitalMandateMutation = { __typename?: 'Mutation', createDigitalMandate?: { __typename?: 'CreateDigitalMandateResult', redirectUrl: string } | null };

export type CreatePaperMandateMutationVariables = Exact<{
  data: CreatePaperMandateInput;
}>;


export type CreatePaperMandateMutation = { __typename?: 'Mutation', createPaperMandate?: { __typename?: 'PaperMandate', id: string, mandateId: string, status: MandateStatus, createdAt: string, acceptedAt?: string | null, bic: string, iban?: string | null, reason: string, isFirstTransaction: boolean, errorMessage?: string | null, generatedFile?: { __typename?: 'File', id: string, name: string, url: string, mimeType: string } | null, uploadedFile?: { __typename?: 'File', id: string, name: string, url: string, mimeType: string } | null } | null };

export type EndMembershipMutationVariables = Exact<{
  id: Scalars['String'];
  date: Scalars['Date'];
}>;


export type EndMembershipMutation = { __typename?: 'Mutation', updateMembership: { __typename?: 'Membership', id: string, type: MembershipType, startedAt: string, endedAt?: string | null, isAccepted: boolean } };

export type InvalidateMandateMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type InvalidateMandateMutation = { __typename?: 'Mutation', invalidateMandate?: { __typename?: 'DigitalMandate', id: string, mandateId: string, status: MandateStatus, createdAt: string, acceptedAt?: string | null, bic: string, iban?: string | null, reason: string, isFirstTransaction: boolean, errorMessage?: string | null } | { __typename?: 'PaperMandate', id: string, mandateId: string, status: MandateStatus, createdAt: string, acceptedAt?: string | null, bic: string, iban?: string | null, reason: string, isFirstTransaction: boolean, errorMessage?: string | null, generatedFile?: { __typename?: 'File', id: string, name: string, url: string, mimeType: string } | null, uploadedFile?: { __typename?: 'File', id: string, name: string, url: string, mimeType: string } | null } | null };

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'AccessToken', accessToken: string, expiresIn: number } | null };

export type RegisterMutationVariables = Exact<{
  data: RegisterInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register?: boolean | null };

export type RejectPaperMandateMutationVariables = Exact<{
  id: Scalars['String'];
  reason: Scalars['String'];
}>;


export type RejectPaperMandateMutation = { __typename?: 'Mutation', rejectPaperMandate?: { __typename?: 'PaperMandate', id: string, mandateId: string, status: MandateStatus, createdAt: string, acceptedAt?: string | null, bic: string, iban?: string | null, reason: string, isFirstTransaction: boolean, errorMessage?: string | null, generatedFile?: { __typename?: 'File', id: string, name: string, url: string, mimeType: string } | null, uploadedFile?: { __typename?: 'File', id: string, name: string, url: string, mimeType: string } | null } | null };

export type RequestResetPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type RequestResetPasswordMutation = { __typename?: 'Mutation', requestResetPassword?: boolean | null };

export type RequestVerifyEmailMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type RequestVerifyEmailMutation = { __typename?: 'Mutation', requestVerifyEmail?: boolean | null };

export type ResetPasswordMutationVariables = Exact<{
  token: Scalars['String'];
  password: Scalars['String'];
  passwordRepeat: Scalars['String'];
}>;


export type ResetPasswordMutation = { __typename?: 'Mutation', resetPassword?: boolean | null };

export type UpdateMemberMutationVariables = Exact<{
  where: MemberWhereUniqueInput;
  data: MemberUpdateInput;
}>;


export type UpdateMemberMutation = { __typename?: 'Mutation', updateMember: { __typename?: 'Member', id: string, firstName: string, initials: string, lastName: string, email: string, address: string, postalCode: string, city: string, phoneNumber: string, birthdate: string, language: Language, pronouns: Pronouns, studentType: StudentType, isAdmin: boolean, image?: { __typename?: 'File', id: string, name: string, url: string, mimeType: string } | null } };

export type UploadMemberImageMutationVariables = Exact<{
  member: MemberWhereUniqueInput;
  file: Scalars['Upload'];
}>;


export type UploadMemberImageMutation = { __typename?: 'Mutation', uploadMemberImage?: { __typename?: 'Member', id: string, firstName: string, initials: string, lastName: string, email: string, address: string, postalCode: string, city: string, phoneNumber: string, birthdate: string, language: Language, pronouns: Pronouns, studentType: StudentType, isAdmin: boolean, image?: { __typename?: 'File', id: string, name: string, url: string, mimeType: string } | null } | null };

export type UploadPaperMandateMutationVariables = Exact<{
  paperMandateId: Scalars['String'];
  file: Scalars['Upload'];
}>;


export type UploadPaperMandateMutation = { __typename?: 'Mutation', uploadPaperMandate?: { __typename?: 'PaperMandate', id: string, mandateId: string, status: MandateStatus, createdAt: string, acceptedAt?: string | null, bic: string, iban?: string | null, reason: string, isFirstTransaction: boolean, errorMessage?: string | null, generatedFile?: { __typename?: 'File', id: string, name: string, url: string, mimeType: string } | null, uploadedFile?: { __typename?: 'File', id: string, name: string, url: string, mimeType: string } | null } | null };

export type VerifyEmailMutationVariables = Exact<{
  token: Scalars['String'];
}>;


export type VerifyEmailMutation = { __typename?: 'Mutation', verifyEmail?: boolean | null };

export type GetBanksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBanksQuery = { __typename?: 'Query', banks: { __typename?: 'BankList', values: Array<{ __typename?: 'Bank', id: string, bic: string, country: string, name: string, isActive: boolean }> } };

export type GetCommitteesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCommitteesQuery = { __typename?: 'Query', committees: { __typename?: 'CommitteeList', values: Array<{ __typename?: 'Committee', id: string, name: { __typename?: 'ShortTranslatable', en?: string | null, nl?: string | null }, description: { __typename?: 'LongTranslatable', en?: string | null, nl?: string | null } }> } };

export type GetDirectDebitQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetDirectDebitQuery = { __typename?: 'Query', directDebit: { __typename?: 'DirectDebit', id: string, createdAt: string, updatedAt: string, status: DirectDebitStatus, messageId: string, collectionDate: string, instructionCount: number, amount: number, batches: { __typename?: 'DirectDebitBatchList', values: Array<{ __typename?: 'DirectDebitBatch', id: string, createdAt: string, updatedAt: string, batchId: string, sequenceType: SequenceType, instructionCount: number, amount: number, instructions: { __typename?: 'DirectDebitInstructionList', values: Array<{ __typename?: 'DirectDebitInstruction', id: string, createdAt: string, updatedAt: string, instructionId: string, description: string, amount: number, mandate: { __typename?: 'DigitalMandate', id: string, mandateId: string, status: MandateStatus, createdAt: string, acceptedAt?: string | null, bic: string, iban?: string | null, reason: string, isFirstTransaction: boolean, errorMessage?: string | null, member: { __typename?: 'Member', id: string, firstName: string, initials: string, lastName: string, email: string, address: string, postalCode: string, city: string, phoneNumber: string, birthdate: string, language: Language, pronouns: Pronouns, studentType: StudentType, isAdmin: boolean, image?: { __typename?: 'File', id: string, name: string, url: string, mimeType: string } | null } } | { __typename?: 'PaperMandate', id: string, mandateId: string, status: MandateStatus, createdAt: string, acceptedAt?: string | null, bic: string, iban?: string | null, reason: string, isFirstTransaction: boolean, errorMessage?: string | null, member: { __typename?: 'Member', id: string, firstName: string, initials: string, lastName: string, email: string, address: string, postalCode: string, city: string, phoneNumber: string, birthdate: string, language: Language, pronouns: Pronouns, studentType: StudentType, isAdmin: boolean, image?: { __typename?: 'File', id: string, name: string, url: string, mimeType: string } | null }, generatedFile?: { __typename?: 'File', id: string, name: string, url: string, mimeType: string } | null, uploadedFile?: { __typename?: 'File', id: string, name: string, url: string, mimeType: string } | null } }> } }> }, warnings: { __typename?: 'DirectDebitWarningList', values: Array<{ __typename?: 'DirectDebitWarning', id: string, createdAt: string, updatedAt: string, description: string, member?: { __typename?: 'Member', id: string, firstName: string, lastName: string } | null }> }, file?: { __typename?: 'File', id: string, name: string, url: string, mimeType: string } | null } };

export type GetDirectDebitBatchQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetDirectDebitBatchQuery = { __typename?: 'Query', directDebitBatch: { __typename?: 'DirectDebitBatch', id: string, createdAt: string, updatedAt: string, batchId: string, sequenceType: SequenceType, instructionCount: number, amount: number, instructions: { __typename?: 'DirectDebitInstructionList', values: Array<{ __typename?: 'DirectDebitInstruction', id: string, createdAt: string, updatedAt: string, instructionId: string, description: string, amount: number, mandate: { __typename?: 'DigitalMandate', id: string, mandateId: string, status: MandateStatus, createdAt: string, acceptedAt?: string | null, bic: string, iban?: string | null, reason: string, isFirstTransaction: boolean, errorMessage?: string | null, member: { __typename?: 'Member', id: string, firstName: string, initials: string, lastName: string, email: string, address: string, postalCode: string, city: string, phoneNumber: string, birthdate: string, language: Language, pronouns: Pronouns, studentType: StudentType, isAdmin: boolean, image?: { __typename?: 'File', id: string, name: string, url: string, mimeType: string } | null } } | { __typename?: 'PaperMandate', id: string, mandateId: string, status: MandateStatus, createdAt: string, acceptedAt?: string | null, bic: string, iban?: string | null, reason: string, isFirstTransaction: boolean, errorMessage?: string | null, member: { __typename?: 'Member', id: string, firstName: string, initials: string, lastName: string, email: string, address: string, postalCode: string, city: string, phoneNumber: string, birthdate: string, language: Language, pronouns: Pronouns, studentType: StudentType, isAdmin: boolean, image?: { __typename?: 'File', id: string, name: string, url: string, mimeType: string } | null }, generatedFile?: { __typename?: 'File', id: string, name: string, url: string, mimeType: string } | null, uploadedFile?: { __typename?: 'File', id: string, name: string, url: string, mimeType: string } | null } }> }, directDebit: { __typename?: 'DirectDebit', id: string, createdAt: string, updatedAt: string, status: DirectDebitStatus, messageId: string, collectionDate: string, instructionCount: number, amount: number } } };

export type GetDirectDebitInstructionQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetDirectDebitInstructionQuery = { __typename?: 'Query', directDebitInstruction: { __typename?: 'DirectDebitInstruction', id: string, createdAt: string, updatedAt: string, instructionId: string, description: string, amount: number, batch: { __typename?: 'DirectDebitBatch', id: string, createdAt: string, updatedAt: string, batchId: string, sequenceType: SequenceType, instructionCount: number, amount: number, directDebit: { __typename?: 'DirectDebit', id: string, createdAt: string, updatedAt: string, status: DirectDebitStatus, messageId: string, collectionDate: string, instructionCount: number, amount: number } }, transactions: { __typename?: 'TransactionList', values: Array<{ __typename?: 'MembershipFeeTransaction', id: string, createdAt: string, updatedAt: string, description: string, amount: number, year: number }> }, mandate: { __typename?: 'DigitalMandate', id: string, mandateId: string, status: MandateStatus, createdAt: string, acceptedAt?: string | null, bic: string, iban?: string | null, reason: string, isFirstTransaction: boolean, errorMessage?: string | null, member: { __typename?: 'Member', id: string, firstName: string, initials: string, lastName: string, email: string, address: string, postalCode: string, city: string, phoneNumber: string, birthdate: string, language: Language, pronouns: Pronouns, studentType: StudentType, isAdmin: boolean, image?: { __typename?: 'File', id: string, name: string, url: string, mimeType: string } | null } } | { __typename?: 'PaperMandate', id: string, mandateId: string, status: MandateStatus, createdAt: string, acceptedAt?: string | null, bic: string, iban?: string | null, reason: string, isFirstTransaction: boolean, errorMessage?: string | null, member: { __typename?: 'Member', id: string, firstName: string, initials: string, lastName: string, email: string, address: string, postalCode: string, city: string, phoneNumber: string, birthdate: string, language: Language, pronouns: Pronouns, studentType: StudentType, isAdmin: boolean, image?: { __typename?: 'File', id: string, name: string, url: string, mimeType: string } | null }, generatedFile?: { __typename?: 'File', id: string, name: string, url: string, mimeType: string } | null, uploadedFile?: { __typename?: 'File', id: string, name: string, url: string, mimeType: string } | null } } };

export type GetDirectDebitsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDirectDebitsQuery = { __typename?: 'Query', directDebits: { __typename?: 'DirectDebitList', values: Array<{ __typename?: 'DirectDebit', id: string, createdAt: string, updatedAt: string, status: DirectDebitStatus, messageId: string, collectionDate: string, instructionCount: number, amount: number }> } };

export type GetMandateQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetMandateQuery = { __typename?: 'Query', mandate: { __typename?: 'DigitalMandate', id: string, mandateId: string, status: MandateStatus, createdAt: string, acceptedAt?: string | null, bic: string, iban?: string | null, reason: string, isFirstTransaction: boolean, errorMessage?: string | null, member: { __typename?: 'Member', id: string, firstName: string, initials: string, lastName: string, email: string, address: string, postalCode: string, city: string, phoneNumber: string, birthdate: string, language: Language, pronouns: Pronouns, studentType: StudentType, isAdmin: boolean, image?: { __typename?: 'File', id: string, name: string, url: string, mimeType: string } | null } } | { __typename?: 'PaperMandate', id: string, mandateId: string, status: MandateStatus, createdAt: string, acceptedAt?: string | null, bic: string, iban?: string | null, reason: string, isFirstTransaction: boolean, errorMessage?: string | null, member: { __typename?: 'Member', id: string, firstName: string, initials: string, lastName: string, email: string, address: string, postalCode: string, city: string, phoneNumber: string, birthdate: string, language: Language, pronouns: Pronouns, studentType: StudentType, isAdmin: boolean, image?: { __typename?: 'File', id: string, name: string, url: string, mimeType: string } | null }, generatedFile?: { __typename?: 'File', id: string, name: string, url: string, mimeType: string } | null, uploadedFile?: { __typename?: 'File', id: string, name: string, url: string, mimeType: string } | null } };

export type GetMandatesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMandatesQuery = { __typename?: 'Query', mandates: { __typename?: 'MandateList', values: Array<{ __typename?: 'DigitalMandate', id: string, mandateId: string, status: MandateStatus, createdAt: string, acceptedAt?: string | null, bic: string, iban?: string | null, reason: string, isFirstTransaction: boolean, errorMessage?: string | null, member: { __typename?: 'Member', id: string, firstName: string, initials: string, lastName: string, email: string, address: string, postalCode: string, city: string, phoneNumber: string, birthdate: string, language: Language, pronouns: Pronouns, studentType: StudentType, isAdmin: boolean, image?: { __typename?: 'File', id: string, name: string, url: string, mimeType: string } | null } } | { __typename?: 'PaperMandate', id: string, mandateId: string, status: MandateStatus, createdAt: string, acceptedAt?: string | null, bic: string, iban?: string | null, reason: string, isFirstTransaction: boolean, errorMessage?: string | null, member: { __typename?: 'Member', id: string, firstName: string, initials: string, lastName: string, email: string, address: string, postalCode: string, city: string, phoneNumber: string, birthdate: string, language: Language, pronouns: Pronouns, studentType: StudentType, isAdmin: boolean, image?: { __typename?: 'File', id: string, name: string, url: string, mimeType: string } | null }, generatedFile?: { __typename?: 'File', id: string, name: string, url: string, mimeType: string } | null, uploadedFile?: { __typename?: 'File', id: string, name: string, url: string, mimeType: string } | null }> } };

export type GetMemberQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetMemberQuery = { __typename?: 'Query', member: { __typename?: 'Member', id: string, firstName: string, initials: string, lastName: string, email: string, address: string, postalCode: string, city: string, phoneNumber: string, birthdate: string, language: Language, pronouns: Pronouns, studentType: StudentType, isAdmin: boolean, memberships: { __typename?: 'MembershipList', values: Array<{ __typename?: 'Membership', id: string, type: MembershipType, startedAt: string, endedAt?: string | null, isAccepted: boolean }> }, mandates: { __typename?: 'MandateList', values: Array<{ __typename?: 'DigitalMandate', id: string, mandateId: string, status: MandateStatus, createdAt: string, acceptedAt?: string | null, bic: string, iban?: string | null, reason: string, isFirstTransaction: boolean, errorMessage?: string | null } | { __typename?: 'PaperMandate', id: string, mandateId: string, status: MandateStatus, createdAt: string, acceptedAt?: string | null, bic: string, iban?: string | null, reason: string, isFirstTransaction: boolean, errorMessage?: string | null, generatedFile?: { __typename?: 'File', id: string, name: string, url: string, mimeType: string } | null, uploadedFile?: { __typename?: 'File', id: string, name: string, url: string, mimeType: string } | null }> }, transactions: { __typename?: 'TransactionList', values: Array<{ __typename?: 'MembershipFeeTransaction', id: string, createdAt: string, updatedAt: string, description: string, amount: number, year: number }> }, image?: { __typename?: 'File', id: string, name: string, url: string, mimeType: string } | null } };

export type GetMemberMandatesQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetMemberMandatesQuery = { __typename?: 'Query', member: { __typename?: 'Member', mandates: { __typename?: 'MandateList', values: Array<{ __typename?: 'DigitalMandate', id: string, mandateId: string, status: MandateStatus, createdAt: string, acceptedAt?: string | null, bic: string, iban?: string | null, reason: string, isFirstTransaction: boolean, errorMessage?: string | null } | { __typename?: 'PaperMandate', id: string, mandateId: string, status: MandateStatus, createdAt: string, acceptedAt?: string | null, bic: string, iban?: string | null, reason: string, isFirstTransaction: boolean, errorMessage?: string | null, generatedFile?: { __typename?: 'File', id: string, name: string, url: string, mimeType: string } | null, uploadedFile?: { __typename?: 'File', id: string, name: string, url: string, mimeType: string } | null }> } } };

export type GetMemberTransactionQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetMemberTransactionQuery = { __typename?: 'Query', transaction: { __typename?: 'MembershipFeeTransaction', id: string, createdAt: string, updatedAt: string, description: string, amount: number, year: number } };

export type GetMemberTransactionsQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetMemberTransactionsQuery = { __typename?: 'Query', member: { __typename?: 'Member', transactions: { __typename?: 'TransactionList', values: Array<{ __typename?: 'MembershipFeeTransaction', id: string, createdAt: string, updatedAt: string, description: string, amount: number, year: number }> } } };

export type GetMembersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMembersQuery = { __typename?: 'Query', members: { __typename?: 'MemberList', values: Array<{ __typename?: 'Member', id: string, firstName: string, initials: string, lastName: string, email: string, address: string, postalCode: string, city: string, phoneNumber: string, birthdate: string, language: Language, pronouns: Pronouns, studentType: StudentType, isAdmin: boolean, latestMembership: { __typename?: 'Membership', id: string, type: MembershipType, startedAt: string, endedAt?: string | null, isAccepted: boolean }, mandates: { __typename?: 'MandateList', values: Array<{ __typename?: 'DigitalMandate', id: string, mandateId: string, status: MandateStatus, createdAt: string, acceptedAt?: string | null, bic: string, iban?: string | null, reason: string, isFirstTransaction: boolean, errorMessage?: string | null } | { __typename?: 'PaperMandate', id: string, mandateId: string, status: MandateStatus, createdAt: string, acceptedAt?: string | null, bic: string, iban?: string | null, reason: string, isFirstTransaction: boolean, errorMessage?: string | null, generatedFile?: { __typename?: 'File', id: string, name: string, url: string, mimeType: string } | null, uploadedFile?: { __typename?: 'File', id: string, name: string, url: string, mimeType: string } | null }> }, image?: { __typename?: 'File', id: string, name: string, url: string, mimeType: string } | null }> } };

export type GetPageQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetPageQuery = { __typename?: 'Query', page: { __typename?: 'Page', id: string, title: { __typename?: 'ShortTranslatable', en?: string | null, nl?: string | null }, body: { __typename?: 'LongTranslatable', en?: string | null, nl?: string | null } } };

export type GetPagesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPagesQuery = { __typename?: 'Query', pages: { __typename?: 'PageList', values: Array<{ __typename?: 'Page', id: string, title: { __typename?: 'ShortTranslatable', en?: string | null, nl?: string | null }, body: { __typename?: 'LongTranslatable', en?: string | null, nl?: string | null } }> } };

export type GetPaperMandatesQueryVariables = Exact<{
  status?: InputMaybe<MandateStatus>;
}>;


export type GetPaperMandatesQuery = { __typename?: 'Query', paperMandates: { __typename?: 'PaperMandateList', values: Array<{ __typename?: 'PaperMandate', id: string, mandateId: string, status: MandateStatus, createdAt: string, acceptedAt?: string | null, bic: string, iban?: string | null, reason: string, isFirstTransaction: boolean, errorMessage?: string | null, member: { __typename?: 'Member', id: string, firstName: string, initials: string, lastName: string, email: string, address: string, postalCode: string, city: string, phoneNumber: string, birthdate: string, language: Language, pronouns: Pronouns, studentType: StudentType, isAdmin: boolean, image?: { __typename?: 'File', id: string, name: string, url: string, mimeType: string } | null }, generatedFile?: { __typename?: 'File', id: string, name: string, url: string, mimeType: string } | null, uploadedFile?: { __typename?: 'File', id: string, name: string, url: string, mimeType: string } | null }> } };

export type GetProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProfileQuery = { __typename?: 'Query', me?: { __typename?: 'Member', hasMandate: boolean, hasPendingPaperMandates: boolean, id: string, firstName: string, initials: string, lastName: string, email: string, address: string, postalCode: string, city: string, phoneNumber: string, birthdate: string, language: Language, pronouns: Pronouns, studentType: StudentType, isAdmin: boolean, providers: { __typename?: 'ProviderList', values: Array<{ __typename?: 'Provider', id: string, type: string, email: string }> }, image?: { __typename?: 'File', id: string, name: string, url: string, mimeType: string } | null } | null };

export type GetTransactionQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetTransactionQuery = { __typename?: 'Query', transaction: { __typename?: 'MembershipFeeTransaction', id: string, createdAt: string, updatedAt: string, description: string, amount: number, year: number, member: { __typename?: 'Member', id: string, firstName: string, initials: string, lastName: string, email: string, address: string, postalCode: string, city: string, phoneNumber: string, birthdate: string, language: Language, pronouns: Pronouns, studentType: StudentType, isAdmin: boolean, latestMembership: { __typename?: 'Membership', id: string, type: MembershipType, startedAt: string, endedAt?: string | null, isAccepted: boolean }, image?: { __typename?: 'File', id: string, name: string, url: string, mimeType: string } | null }, instruction?: { __typename?: 'DirectDebitInstruction', id: string, createdAt: string, updatedAt: string, instructionId: string, description: string, amount: number, batch: { __typename?: 'DirectDebitBatch', id: string, createdAt: string, updatedAt: string, batchId: string, sequenceType: SequenceType, instructionCount: number, amount: number, directDebit: { __typename?: 'DirectDebit', id: string, createdAt: string, updatedAt: string, status: DirectDebitStatus, messageId: string, collectionDate: string, instructionCount: number, amount: number } } } | null } };

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
  isAccepted
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
export type AcceptPaperMandateMutationFn = Apollo.MutationFunction<AcceptPaperMandateMutation, AcceptPaperMandateMutationVariables>;

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
export function useAcceptPaperMandateMutation(baseOptions?: Apollo.MutationHookOptions<AcceptPaperMandateMutation, AcceptPaperMandateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AcceptPaperMandateMutation, AcceptPaperMandateMutationVariables>(AcceptPaperMandateDocument, options);
      }
export type AcceptPaperMandateMutationHookResult = ReturnType<typeof useAcceptPaperMandateMutation>;
export type AcceptPaperMandateMutationResult = Apollo.MutationResult<AcceptPaperMandateMutation>;
export type AcceptPaperMandateMutationOptions = Apollo.BaseMutationOptions<AcceptPaperMandateMutation, AcceptPaperMandateMutationVariables>;
export const CancelPaperMandateDocument = gql`
    mutation CancelPaperMandate($id: String!) {
  cancelPaperMandate(mandate: {id: $id}) {
    ...MandateFragment
  }
}
    ${MandateFragmentDoc}`;
export type CancelPaperMandateMutationFn = Apollo.MutationFunction<CancelPaperMandateMutation, CancelPaperMandateMutationVariables>;

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
export function useCancelPaperMandateMutation(baseOptions?: Apollo.MutationHookOptions<CancelPaperMandateMutation, CancelPaperMandateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CancelPaperMandateMutation, CancelPaperMandateMutationVariables>(CancelPaperMandateDocument, options);
      }
export type CancelPaperMandateMutationHookResult = ReturnType<typeof useCancelPaperMandateMutation>;
export type CancelPaperMandateMutationResult = Apollo.MutationResult<CancelPaperMandateMutation>;
export type CancelPaperMandateMutationOptions = Apollo.BaseMutationOptions<CancelPaperMandateMutation, CancelPaperMandateMutationVariables>;
export const ChangeEmailDocument = gql`
    mutation ChangeEmail($email: String!) {
  changeEmail(email: $email)
}
    `;
export type ChangeEmailMutationFn = Apollo.MutationFunction<ChangeEmailMutation, ChangeEmailMutationVariables>;

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
export function useChangeEmailMutation(baseOptions?: Apollo.MutationHookOptions<ChangeEmailMutation, ChangeEmailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeEmailMutation, ChangeEmailMutationVariables>(ChangeEmailDocument, options);
      }
export type ChangeEmailMutationHookResult = ReturnType<typeof useChangeEmailMutation>;
export type ChangeEmailMutationResult = Apollo.MutationResult<ChangeEmailMutation>;
export type ChangeEmailMutationOptions = Apollo.BaseMutationOptions<ChangeEmailMutation, ChangeEmailMutationVariables>;
export const ChangePasswordDocument = gql`
    mutation ChangePassword($password: String!, $passwordRepeat: String!) {
  changePassword(password: $password, passwordRepeat: $passwordRepeat)
}
    `;
export type ChangePasswordMutationFn = Apollo.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>;

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
export function useChangePasswordMutation(baseOptions?: Apollo.MutationHookOptions<ChangePasswordMutation, ChangePasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument, options);
      }
export type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>;
export type ChangePasswordMutationResult = Apollo.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = Apollo.BaseMutationOptions<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const CreateDigitalMandateDocument = gql`
    mutation CreateDigitalMandate($data: CreateDigitalMandateInput!) {
  createDigitalMandate(data: $data) {
    redirectUrl
  }
}
    `;
export type CreateDigitalMandateMutationFn = Apollo.MutationFunction<CreateDigitalMandateMutation, CreateDigitalMandateMutationVariables>;

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
export function useCreateDigitalMandateMutation(baseOptions?: Apollo.MutationHookOptions<CreateDigitalMandateMutation, CreateDigitalMandateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateDigitalMandateMutation, CreateDigitalMandateMutationVariables>(CreateDigitalMandateDocument, options);
      }
export type CreateDigitalMandateMutationHookResult = ReturnType<typeof useCreateDigitalMandateMutation>;
export type CreateDigitalMandateMutationResult = Apollo.MutationResult<CreateDigitalMandateMutation>;
export type CreateDigitalMandateMutationOptions = Apollo.BaseMutationOptions<CreateDigitalMandateMutation, CreateDigitalMandateMutationVariables>;
export const CreatePaperMandateDocument = gql`
    mutation CreatePaperMandate($data: CreatePaperMandateInput!) {
  createPaperMandate(data: $data) {
    ...MandateFragment
  }
}
    ${MandateFragmentDoc}`;
export type CreatePaperMandateMutationFn = Apollo.MutationFunction<CreatePaperMandateMutation, CreatePaperMandateMutationVariables>;

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
export function useCreatePaperMandateMutation(baseOptions?: Apollo.MutationHookOptions<CreatePaperMandateMutation, CreatePaperMandateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePaperMandateMutation, CreatePaperMandateMutationVariables>(CreatePaperMandateDocument, options);
      }
export type CreatePaperMandateMutationHookResult = ReturnType<typeof useCreatePaperMandateMutation>;
export type CreatePaperMandateMutationResult = Apollo.MutationResult<CreatePaperMandateMutation>;
export type CreatePaperMandateMutationOptions = Apollo.BaseMutationOptions<CreatePaperMandateMutation, CreatePaperMandateMutationVariables>;
export const EndMembershipDocument = gql`
    mutation EndMembership($id: String!, $date: Date!) {
  updateMembership(where: {id: $id}, data: {endedAt: $date}) {
    ...MembershipFragment
  }
}
    ${MembershipFragmentDoc}`;
export type EndMembershipMutationFn = Apollo.MutationFunction<EndMembershipMutation, EndMembershipMutationVariables>;

/**
 * __useEndMembershipMutation__
 *
 * To run a mutation, you first call `useEndMembershipMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEndMembershipMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [endMembershipMutation, { data, loading, error }] = useEndMembershipMutation({
 *   variables: {
 *      id: // value for 'id'
 *      date: // value for 'date'
 *   },
 * });
 */
export function useEndMembershipMutation(baseOptions?: Apollo.MutationHookOptions<EndMembershipMutation, EndMembershipMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EndMembershipMutation, EndMembershipMutationVariables>(EndMembershipDocument, options);
      }
export type EndMembershipMutationHookResult = ReturnType<typeof useEndMembershipMutation>;
export type EndMembershipMutationResult = Apollo.MutationResult<EndMembershipMutation>;
export type EndMembershipMutationOptions = Apollo.BaseMutationOptions<EndMembershipMutation, EndMembershipMutationVariables>;
export const InvalidateMandateDocument = gql`
    mutation InvalidateMandate($id: String!) {
  invalidateMandate(mandate: {id: $id}) {
    ...MandateFragment
  }
}
    ${MandateFragmentDoc}`;
export type InvalidateMandateMutationFn = Apollo.MutationFunction<InvalidateMandateMutation, InvalidateMandateMutationVariables>;

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
export function useInvalidateMandateMutation(baseOptions?: Apollo.MutationHookOptions<InvalidateMandateMutation, InvalidateMandateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InvalidateMandateMutation, InvalidateMandateMutationVariables>(InvalidateMandateDocument, options);
      }
export type InvalidateMandateMutationHookResult = ReturnType<typeof useInvalidateMandateMutation>;
export type InvalidateMandateMutationResult = Apollo.MutationResult<InvalidateMandateMutation>;
export type InvalidateMandateMutationOptions = Apollo.BaseMutationOptions<InvalidateMandateMutation, InvalidateMandateMutationVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    accessToken
    expiresIn
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

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
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($data: RegisterInput!) {
  register(data: $data)
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

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
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const RejectPaperMandateDocument = gql`
    mutation RejectPaperMandate($id: String!, $reason: String!) {
  rejectPaperMandate(mandate: {id: $id}, reason: $reason) {
    ...MandateFragment
  }
}
    ${MandateFragmentDoc}`;
export type RejectPaperMandateMutationFn = Apollo.MutationFunction<RejectPaperMandateMutation, RejectPaperMandateMutationVariables>;

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
export function useRejectPaperMandateMutation(baseOptions?: Apollo.MutationHookOptions<RejectPaperMandateMutation, RejectPaperMandateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RejectPaperMandateMutation, RejectPaperMandateMutationVariables>(RejectPaperMandateDocument, options);
      }
export type RejectPaperMandateMutationHookResult = ReturnType<typeof useRejectPaperMandateMutation>;
export type RejectPaperMandateMutationResult = Apollo.MutationResult<RejectPaperMandateMutation>;
export type RejectPaperMandateMutationOptions = Apollo.BaseMutationOptions<RejectPaperMandateMutation, RejectPaperMandateMutationVariables>;
export const RequestResetPasswordDocument = gql`
    mutation RequestResetPassword($email: String!) {
  requestResetPassword(email: $email)
}
    `;
export type RequestResetPasswordMutationFn = Apollo.MutationFunction<RequestResetPasswordMutation, RequestResetPasswordMutationVariables>;

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
export function useRequestResetPasswordMutation(baseOptions?: Apollo.MutationHookOptions<RequestResetPasswordMutation, RequestResetPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RequestResetPasswordMutation, RequestResetPasswordMutationVariables>(RequestResetPasswordDocument, options);
      }
export type RequestResetPasswordMutationHookResult = ReturnType<typeof useRequestResetPasswordMutation>;
export type RequestResetPasswordMutationResult = Apollo.MutationResult<RequestResetPasswordMutation>;
export type RequestResetPasswordMutationOptions = Apollo.BaseMutationOptions<RequestResetPasswordMutation, RequestResetPasswordMutationVariables>;
export const RequestVerifyEmailDocument = gql`
    mutation RequestVerifyEmail($email: String!) {
  requestVerifyEmail(email: $email)
}
    `;
export type RequestVerifyEmailMutationFn = Apollo.MutationFunction<RequestVerifyEmailMutation, RequestVerifyEmailMutationVariables>;

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
export function useRequestVerifyEmailMutation(baseOptions?: Apollo.MutationHookOptions<RequestVerifyEmailMutation, RequestVerifyEmailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RequestVerifyEmailMutation, RequestVerifyEmailMutationVariables>(RequestVerifyEmailDocument, options);
      }
export type RequestVerifyEmailMutationHookResult = ReturnType<typeof useRequestVerifyEmailMutation>;
export type RequestVerifyEmailMutationResult = Apollo.MutationResult<RequestVerifyEmailMutation>;
export type RequestVerifyEmailMutationOptions = Apollo.BaseMutationOptions<RequestVerifyEmailMutation, RequestVerifyEmailMutationVariables>;
export const ResetPasswordDocument = gql`
    mutation ResetPassword($token: String!, $password: String!, $passwordRepeat: String!) {
  resetPassword(
    token: $token
    password: $password
    passwordRepeat: $passwordRepeat
  )
}
    `;
export type ResetPasswordMutationFn = Apollo.MutationFunction<ResetPasswordMutation, ResetPasswordMutationVariables>;

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
export function useResetPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ResetPasswordMutation, ResetPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument, options);
      }
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>;
export type ResetPasswordMutationResult = Apollo.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = Apollo.BaseMutationOptions<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const UpdateMemberDocument = gql`
    mutation UpdateMember($where: MemberWhereUniqueInput!, $data: MemberUpdateInput!) {
  updateMember(where: $where, data: $data) {
    ...MemberFragment
  }
}
    ${MemberFragmentDoc}`;
export type UpdateMemberMutationFn = Apollo.MutationFunction<UpdateMemberMutation, UpdateMemberMutationVariables>;

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
export function useUpdateMemberMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMemberMutation, UpdateMemberMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMemberMutation, UpdateMemberMutationVariables>(UpdateMemberDocument, options);
      }
export type UpdateMemberMutationHookResult = ReturnType<typeof useUpdateMemberMutation>;
export type UpdateMemberMutationResult = Apollo.MutationResult<UpdateMemberMutation>;
export type UpdateMemberMutationOptions = Apollo.BaseMutationOptions<UpdateMemberMutation, UpdateMemberMutationVariables>;
export const UploadMemberImageDocument = gql`
    mutation UploadMemberImage($member: MemberWhereUniqueInput!, $file: Upload!) {
  uploadMemberImage(member: $member, file: $file) {
    ...MemberFragment
  }
}
    ${MemberFragmentDoc}`;
export type UploadMemberImageMutationFn = Apollo.MutationFunction<UploadMemberImageMutation, UploadMemberImageMutationVariables>;

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
export function useUploadMemberImageMutation(baseOptions?: Apollo.MutationHookOptions<UploadMemberImageMutation, UploadMemberImageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UploadMemberImageMutation, UploadMemberImageMutationVariables>(UploadMemberImageDocument, options);
      }
export type UploadMemberImageMutationHookResult = ReturnType<typeof useUploadMemberImageMutation>;
export type UploadMemberImageMutationResult = Apollo.MutationResult<UploadMemberImageMutation>;
export type UploadMemberImageMutationOptions = Apollo.BaseMutationOptions<UploadMemberImageMutation, UploadMemberImageMutationVariables>;
export const UploadPaperMandateDocument = gql`
    mutation UploadPaperMandate($paperMandateId: String!, $file: Upload!) {
  uploadPaperMandate(paperMandate: {id: $paperMandateId}, file: $file) {
    ...MandateFragment
  }
}
    ${MandateFragmentDoc}`;
export type UploadPaperMandateMutationFn = Apollo.MutationFunction<UploadPaperMandateMutation, UploadPaperMandateMutationVariables>;

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
export function useUploadPaperMandateMutation(baseOptions?: Apollo.MutationHookOptions<UploadPaperMandateMutation, UploadPaperMandateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UploadPaperMandateMutation, UploadPaperMandateMutationVariables>(UploadPaperMandateDocument, options);
      }
export type UploadPaperMandateMutationHookResult = ReturnType<typeof useUploadPaperMandateMutation>;
export type UploadPaperMandateMutationResult = Apollo.MutationResult<UploadPaperMandateMutation>;
export type UploadPaperMandateMutationOptions = Apollo.BaseMutationOptions<UploadPaperMandateMutation, UploadPaperMandateMutationVariables>;
export const VerifyEmailDocument = gql`
    mutation VerifyEmail($token: String!) {
  verifyEmail(token: $token)
}
    `;
export type VerifyEmailMutationFn = Apollo.MutationFunction<VerifyEmailMutation, VerifyEmailMutationVariables>;

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
export function useVerifyEmailMutation(baseOptions?: Apollo.MutationHookOptions<VerifyEmailMutation, VerifyEmailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VerifyEmailMutation, VerifyEmailMutationVariables>(VerifyEmailDocument, options);
      }
export type VerifyEmailMutationHookResult = ReturnType<typeof useVerifyEmailMutation>;
export type VerifyEmailMutationResult = Apollo.MutationResult<VerifyEmailMutation>;
export type VerifyEmailMutationOptions = Apollo.BaseMutationOptions<VerifyEmailMutation, VerifyEmailMutationVariables>;
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
export function useGetBanksQuery(baseOptions?: Apollo.QueryHookOptions<GetBanksQuery, GetBanksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBanksQuery, GetBanksQueryVariables>(GetBanksDocument, options);
      }
export function useGetBanksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBanksQuery, GetBanksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBanksQuery, GetBanksQueryVariables>(GetBanksDocument, options);
        }
export type GetBanksQueryHookResult = ReturnType<typeof useGetBanksQuery>;
export type GetBanksLazyQueryHookResult = ReturnType<typeof useGetBanksLazyQuery>;
export type GetBanksQueryResult = Apollo.QueryResult<GetBanksQuery, GetBanksQueryVariables>;
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
export function useGetCommitteesQuery(baseOptions?: Apollo.QueryHookOptions<GetCommitteesQuery, GetCommitteesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCommitteesQuery, GetCommitteesQueryVariables>(GetCommitteesDocument, options);
      }
export function useGetCommitteesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCommitteesQuery, GetCommitteesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCommitteesQuery, GetCommitteesQueryVariables>(GetCommitteesDocument, options);
        }
export type GetCommitteesQueryHookResult = ReturnType<typeof useGetCommitteesQuery>;
export type GetCommitteesLazyQueryHookResult = ReturnType<typeof useGetCommitteesLazyQuery>;
export type GetCommitteesQueryResult = Apollo.QueryResult<GetCommitteesQuery, GetCommitteesQueryVariables>;
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
export function useGetDirectDebitQuery(baseOptions: Apollo.QueryHookOptions<GetDirectDebitQuery, GetDirectDebitQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDirectDebitQuery, GetDirectDebitQueryVariables>(GetDirectDebitDocument, options);
      }
export function useGetDirectDebitLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDirectDebitQuery, GetDirectDebitQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDirectDebitQuery, GetDirectDebitQueryVariables>(GetDirectDebitDocument, options);
        }
export type GetDirectDebitQueryHookResult = ReturnType<typeof useGetDirectDebitQuery>;
export type GetDirectDebitLazyQueryHookResult = ReturnType<typeof useGetDirectDebitLazyQuery>;
export type GetDirectDebitQueryResult = Apollo.QueryResult<GetDirectDebitQuery, GetDirectDebitQueryVariables>;
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
export function useGetDirectDebitBatchQuery(baseOptions: Apollo.QueryHookOptions<GetDirectDebitBatchQuery, GetDirectDebitBatchQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDirectDebitBatchQuery, GetDirectDebitBatchQueryVariables>(GetDirectDebitBatchDocument, options);
      }
export function useGetDirectDebitBatchLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDirectDebitBatchQuery, GetDirectDebitBatchQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDirectDebitBatchQuery, GetDirectDebitBatchQueryVariables>(GetDirectDebitBatchDocument, options);
        }
export type GetDirectDebitBatchQueryHookResult = ReturnType<typeof useGetDirectDebitBatchQuery>;
export type GetDirectDebitBatchLazyQueryHookResult = ReturnType<typeof useGetDirectDebitBatchLazyQuery>;
export type GetDirectDebitBatchQueryResult = Apollo.QueryResult<GetDirectDebitBatchQuery, GetDirectDebitBatchQueryVariables>;
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
export function useGetDirectDebitInstructionQuery(baseOptions: Apollo.QueryHookOptions<GetDirectDebitInstructionQuery, GetDirectDebitInstructionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDirectDebitInstructionQuery, GetDirectDebitInstructionQueryVariables>(GetDirectDebitInstructionDocument, options);
      }
export function useGetDirectDebitInstructionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDirectDebitInstructionQuery, GetDirectDebitInstructionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDirectDebitInstructionQuery, GetDirectDebitInstructionQueryVariables>(GetDirectDebitInstructionDocument, options);
        }
export type GetDirectDebitInstructionQueryHookResult = ReturnType<typeof useGetDirectDebitInstructionQuery>;
export type GetDirectDebitInstructionLazyQueryHookResult = ReturnType<typeof useGetDirectDebitInstructionLazyQuery>;
export type GetDirectDebitInstructionQueryResult = Apollo.QueryResult<GetDirectDebitInstructionQuery, GetDirectDebitInstructionQueryVariables>;
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
export function useGetDirectDebitsQuery(baseOptions?: Apollo.QueryHookOptions<GetDirectDebitsQuery, GetDirectDebitsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDirectDebitsQuery, GetDirectDebitsQueryVariables>(GetDirectDebitsDocument, options);
      }
export function useGetDirectDebitsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDirectDebitsQuery, GetDirectDebitsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDirectDebitsQuery, GetDirectDebitsQueryVariables>(GetDirectDebitsDocument, options);
        }
export type GetDirectDebitsQueryHookResult = ReturnType<typeof useGetDirectDebitsQuery>;
export type GetDirectDebitsLazyQueryHookResult = ReturnType<typeof useGetDirectDebitsLazyQuery>;
export type GetDirectDebitsQueryResult = Apollo.QueryResult<GetDirectDebitsQuery, GetDirectDebitsQueryVariables>;
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
export function useGetMandateQuery(baseOptions: Apollo.QueryHookOptions<GetMandateQuery, GetMandateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMandateQuery, GetMandateQueryVariables>(GetMandateDocument, options);
      }
export function useGetMandateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMandateQuery, GetMandateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMandateQuery, GetMandateQueryVariables>(GetMandateDocument, options);
        }
export type GetMandateQueryHookResult = ReturnType<typeof useGetMandateQuery>;
export type GetMandateLazyQueryHookResult = ReturnType<typeof useGetMandateLazyQuery>;
export type GetMandateQueryResult = Apollo.QueryResult<GetMandateQuery, GetMandateQueryVariables>;
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
export function useGetMandatesQuery(baseOptions?: Apollo.QueryHookOptions<GetMandatesQuery, GetMandatesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMandatesQuery, GetMandatesQueryVariables>(GetMandatesDocument, options);
      }
export function useGetMandatesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMandatesQuery, GetMandatesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMandatesQuery, GetMandatesQueryVariables>(GetMandatesDocument, options);
        }
export type GetMandatesQueryHookResult = ReturnType<typeof useGetMandatesQuery>;
export type GetMandatesLazyQueryHookResult = ReturnType<typeof useGetMandatesLazyQuery>;
export type GetMandatesQueryResult = Apollo.QueryResult<GetMandatesQuery, GetMandatesQueryVariables>;
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
export function useGetMemberQuery(baseOptions: Apollo.QueryHookOptions<GetMemberQuery, GetMemberQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMemberQuery, GetMemberQueryVariables>(GetMemberDocument, options);
      }
export function useGetMemberLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMemberQuery, GetMemberQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMemberQuery, GetMemberQueryVariables>(GetMemberDocument, options);
        }
export type GetMemberQueryHookResult = ReturnType<typeof useGetMemberQuery>;
export type GetMemberLazyQueryHookResult = ReturnType<typeof useGetMemberLazyQuery>;
export type GetMemberQueryResult = Apollo.QueryResult<GetMemberQuery, GetMemberQueryVariables>;
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
export function useGetMemberMandatesQuery(baseOptions: Apollo.QueryHookOptions<GetMemberMandatesQuery, GetMemberMandatesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMemberMandatesQuery, GetMemberMandatesQueryVariables>(GetMemberMandatesDocument, options);
      }
export function useGetMemberMandatesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMemberMandatesQuery, GetMemberMandatesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMemberMandatesQuery, GetMemberMandatesQueryVariables>(GetMemberMandatesDocument, options);
        }
export type GetMemberMandatesQueryHookResult = ReturnType<typeof useGetMemberMandatesQuery>;
export type GetMemberMandatesLazyQueryHookResult = ReturnType<typeof useGetMemberMandatesLazyQuery>;
export type GetMemberMandatesQueryResult = Apollo.QueryResult<GetMemberMandatesQuery, GetMemberMandatesQueryVariables>;
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
export function useGetMemberTransactionQuery(baseOptions: Apollo.QueryHookOptions<GetMemberTransactionQuery, GetMemberTransactionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMemberTransactionQuery, GetMemberTransactionQueryVariables>(GetMemberTransactionDocument, options);
      }
export function useGetMemberTransactionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMemberTransactionQuery, GetMemberTransactionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMemberTransactionQuery, GetMemberTransactionQueryVariables>(GetMemberTransactionDocument, options);
        }
export type GetMemberTransactionQueryHookResult = ReturnType<typeof useGetMemberTransactionQuery>;
export type GetMemberTransactionLazyQueryHookResult = ReturnType<typeof useGetMemberTransactionLazyQuery>;
export type GetMemberTransactionQueryResult = Apollo.QueryResult<GetMemberTransactionQuery, GetMemberTransactionQueryVariables>;
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
export function useGetMemberTransactionsQuery(baseOptions: Apollo.QueryHookOptions<GetMemberTransactionsQuery, GetMemberTransactionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMemberTransactionsQuery, GetMemberTransactionsQueryVariables>(GetMemberTransactionsDocument, options);
      }
export function useGetMemberTransactionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMemberTransactionsQuery, GetMemberTransactionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMemberTransactionsQuery, GetMemberTransactionsQueryVariables>(GetMemberTransactionsDocument, options);
        }
export type GetMemberTransactionsQueryHookResult = ReturnType<typeof useGetMemberTransactionsQuery>;
export type GetMemberTransactionsLazyQueryHookResult = ReturnType<typeof useGetMemberTransactionsLazyQuery>;
export type GetMemberTransactionsQueryResult = Apollo.QueryResult<GetMemberTransactionsQuery, GetMemberTransactionsQueryVariables>;
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
export function useGetMembersQuery(baseOptions?: Apollo.QueryHookOptions<GetMembersQuery, GetMembersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMembersQuery, GetMembersQueryVariables>(GetMembersDocument, options);
      }
export function useGetMembersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMembersQuery, GetMembersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMembersQuery, GetMembersQueryVariables>(GetMembersDocument, options);
        }
export type GetMembersQueryHookResult = ReturnType<typeof useGetMembersQuery>;
export type GetMembersLazyQueryHookResult = ReturnType<typeof useGetMembersLazyQuery>;
export type GetMembersQueryResult = Apollo.QueryResult<GetMembersQuery, GetMembersQueryVariables>;
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
export function useGetPageQuery(baseOptions: Apollo.QueryHookOptions<GetPageQuery, GetPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPageQuery, GetPageQueryVariables>(GetPageDocument, options);
      }
export function useGetPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPageQuery, GetPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPageQuery, GetPageQueryVariables>(GetPageDocument, options);
        }
export type GetPageQueryHookResult = ReturnType<typeof useGetPageQuery>;
export type GetPageLazyQueryHookResult = ReturnType<typeof useGetPageLazyQuery>;
export type GetPageQueryResult = Apollo.QueryResult<GetPageQuery, GetPageQueryVariables>;
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
export function useGetPagesQuery(baseOptions?: Apollo.QueryHookOptions<GetPagesQuery, GetPagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPagesQuery, GetPagesQueryVariables>(GetPagesDocument, options);
      }
export function useGetPagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPagesQuery, GetPagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPagesQuery, GetPagesQueryVariables>(GetPagesDocument, options);
        }
export type GetPagesQueryHookResult = ReturnType<typeof useGetPagesQuery>;
export type GetPagesLazyQueryHookResult = ReturnType<typeof useGetPagesLazyQuery>;
export type GetPagesQueryResult = Apollo.QueryResult<GetPagesQuery, GetPagesQueryVariables>;
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
export function useGetPaperMandatesQuery(baseOptions?: Apollo.QueryHookOptions<GetPaperMandatesQuery, GetPaperMandatesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPaperMandatesQuery, GetPaperMandatesQueryVariables>(GetPaperMandatesDocument, options);
      }
export function useGetPaperMandatesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPaperMandatesQuery, GetPaperMandatesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPaperMandatesQuery, GetPaperMandatesQueryVariables>(GetPaperMandatesDocument, options);
        }
export type GetPaperMandatesQueryHookResult = ReturnType<typeof useGetPaperMandatesQuery>;
export type GetPaperMandatesLazyQueryHookResult = ReturnType<typeof useGetPaperMandatesLazyQuery>;
export type GetPaperMandatesQueryResult = Apollo.QueryResult<GetPaperMandatesQuery, GetPaperMandatesQueryVariables>;
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
export function useGetProfileQuery(baseOptions?: Apollo.QueryHookOptions<GetProfileQuery, GetProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProfileQuery, GetProfileQueryVariables>(GetProfileDocument, options);
      }
export function useGetProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProfileQuery, GetProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProfileQuery, GetProfileQueryVariables>(GetProfileDocument, options);
        }
export type GetProfileQueryHookResult = ReturnType<typeof useGetProfileQuery>;
export type GetProfileLazyQueryHookResult = ReturnType<typeof useGetProfileLazyQuery>;
export type GetProfileQueryResult = Apollo.QueryResult<GetProfileQuery, GetProfileQueryVariables>;
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
export function useGetTransactionQuery(baseOptions: Apollo.QueryHookOptions<GetTransactionQuery, GetTransactionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTransactionQuery, GetTransactionQueryVariables>(GetTransactionDocument, options);
      }
export function useGetTransactionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTransactionQuery, GetTransactionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTransactionQuery, GetTransactionQueryVariables>(GetTransactionDocument, options);
        }
export type GetTransactionQueryHookResult = ReturnType<typeof useGetTransactionQuery>;
export type GetTransactionLazyQueryHookResult = ReturnType<typeof useGetTransactionLazyQuery>;
export type GetTransactionQueryResult = Apollo.QueryResult<GetTransactionQuery, GetTransactionQueryVariables>;