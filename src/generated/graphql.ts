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
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Query = {
  __typename?: 'Query';
  me: User;
  bank?: Maybe<Bank>;
  banks: Array<Bank>;
  mandate?: Maybe<Mandate>;
  mandates: Array<Mandate>;
  directDebit?: Maybe<DirectDebit>;
  directDebits: Array<DirectDebit>;
  directDebitBatch?: Maybe<DirectDebitBatch>;
  directDebitInstruction?: Maybe<DirectDebitInstruction>;
  directDebitWarning?: Maybe<DirectDebitWarning>;
  member?: Maybe<Member>;
  members: Array<Member>;
  membership?: Maybe<Membership>;
  paperMandates: Array<PaperMandate>;
  provider?: Maybe<Provider>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QuerybankArgs = {
  id: Scalars['String'];
};


export type QuerymandateArgs = {
  id: Scalars['String'];
};


export type QuerydirectDebitArgs = {
  id: Scalars['String'];
};


export type QuerydirectDebitBatchArgs = {
  id: Scalars['String'];
};


export type QuerydirectDebitInstructionArgs = {
  id: Scalars['String'];
};


export type QuerydirectDebitWarningArgs = {
  id: Scalars['String'];
};


export type QuerymemberArgs = {
  id: Scalars['String'];
};


export type QuerymembershipArgs = {
  id: Scalars['String'];
};


export type QuerypaperMandatesArgs = {
  status?: Maybe<MandateStatus>;
};


export type QueryproviderArgs = {
  id: Scalars['String'];
};


export type QuerytransactionArgs = {
  id: Scalars['String'];
};


export type QueryuserArgs = {
  id: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  name: Scalars['String'];
  email: Scalars['String'];
  role: Role;
  providers: Array<Provider>;
};

export enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN'
}

export type Provider = {
  __typename?: 'Provider';
  id: Scalars['String'];
  type: ProviderType;
  email: Scalars['String'];
  isVerified: Scalars['Boolean'];
  user: User;
};

export enum ProviderType {
  GOOGLE = 'GOOGLE'
}

export type Bank = {
  __typename?: 'Bank';
  id: Scalars['String'];
  bic: Scalars['String'];
  country: Scalars['String'];
  name: Scalars['String'];
  isActive: Scalars['Boolean'];
};

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
  instructions: Array<DirectDebitInstruction>;
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
  birthdate: Scalars['DateTime'];
  language: Language;
  pronouns: Pronouns;
  studentType: StudentType;
  memberships: Array<Membership>;
  mandates: Array<Mandate>;
  transactions: Array<Transaction>;
  warnings: Array<DirectDebitWarning>;
  latestMembership: Membership;
};


export type MembermandatesArgs = {
  status?: Maybe<MandateStatus>;
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

export type Membership = {
  __typename?: 'Membership';
  id: Scalars['String'];
  type: MembershipType;
  startedAt: Scalars['DateTime'];
  endedAt?: Maybe<Scalars['DateTime']>;
  member: Member;
  transactions: Array<MembershipFeeTransaction>;
};

export enum MembershipType {
  NORMAL = 'NORMAL',
  HONORARY = 'HONORARY',
  EXTRAORDINARY = 'EXTRAORDINARY'
}

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

export type Transaction = {
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  description: Scalars['String'];
  amount: Scalars['Int'];
  member: Member;
  instruction?: Maybe<DirectDebitInstruction>;
};

export type DirectDebitInstruction = {
  __typename?: 'DirectDebitInstruction';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  instructionId: Scalars['String'];
  description: Scalars['String'];
  batch: DirectDebitBatch;
  transactions: Array<Transaction>;
  mandate: Mandate;
  amount: Scalars['Int'];
};

export type DirectDebitBatch = {
  __typename?: 'DirectDebitBatch';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  batchId: Scalars['String'];
  sequenceType: SequenceType;
  directDebit: DirectDebit;
  instructions: Array<DirectDebitInstruction>;
  instructionCount: Scalars['Int'];
  amount: Scalars['Int'];
};

export enum SequenceType {
  FIRST = 'FIRST',
  RECURRENT = 'RECURRENT',
  FINAL = 'FINAL',
  ONE_OFF = 'ONE_OFF'
}

export type DirectDebit = {
  __typename?: 'DirectDebit';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  status: DirectDebitStatus;
  messageId: Scalars['String'];
  collectionDate: Scalars['Date'];
  batches: Array<DirectDebitBatch>;
  warnings: Array<DirectDebitWarning>;
  file?: Maybe<File>;
  instructionCount: Scalars['Int'];
  amount: Scalars['Int'];
};

export enum DirectDebitStatus {
  CREATED = 'CREATED',
  GENERATED = 'GENERATED',
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED',
  CANCELLED = 'CANCELLED'
}


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
  instructions: Array<DirectDebitInstruction>;
  generatedFile?: Maybe<File>;
  uploadedFile?: Maybe<File>;
};

export type Mutation = {
  __typename?: 'Mutation';
  oauthAuthorize: Scalars['String'];
  oauthAuthenticate: AccessToken;
  oauthUnlink: Provider;
  deleteMandate: Mandate;
  invalidateMandate: Mandate;
  createDigitalMandate: DigitalMandateCreateResponse;
  uploadPaperMandate: PaperMandate;
  generateDirectDebit: DirectDebit;
  generateDirectDebitFile: DirectDebit;
  createMember: Member;
  updateMember: Member;
  deleteMember: Member;
  createMembership: Membership;
  updateMembership: Membership;
  deleteMembership: Membership;
  generateMembershipFeeTransactions: Scalars['Int'];
  createPaperMandate: PaperMandate;
  cancelPaperMandate: PaperMandate;
  acceptPaperMandate: PaperMandate;
  rejectPaperMandate: PaperMandate;
  updateProvider: Provider;
  deleteProvider: Provider;
  createUser: User;
  updateUser: User;
  deleteUser: User;
};


export type MutationoauthAuthorizeArgs = {
  redirectUri: Scalars['String'];
  type: ProviderType;
};


export type MutationoauthAuthenticateArgs = {
  userId?: Maybe<Scalars['String']>;
  code: Scalars['String'];
  redirectUri: Scalars['String'];
  type: ProviderType;
};


export type MutationoauthUnlinkArgs = {
  type: ProviderType;
};


export type MutationdeleteMandateArgs = {
  id: Scalars['String'];
};


export type MutationinvalidateMandateArgs = {
  mandate: MandateWhereInput;
};


export type MutationcreateDigitalMandateArgs = {
  data: DigitalMandateCreateInput;
};


export type MutationuploadPaperMandateArgs = {
  file: Scalars['Upload'];
  data: PaperMandateFileCreateInput;
};


export type MutationgenerateDirectDebitArgs = {
  collectionDate: Scalars['Date'];
};


export type MutationgenerateDirectDebitFileArgs = {
  directDebit: DirectDebitWhereInput;
};


export type MutationcreateMemberArgs = {
  data: MemberCreateInput;
};


export type MutationupdateMemberArgs = {
  data: MemberUpdateInput;
  id: Scalars['String'];
};


export type MutationdeleteMemberArgs = {
  id: Scalars['String'];
};


export type MutationcreateMembershipArgs = {
  data: MembershipCreateInput;
};


export type MutationupdateMembershipArgs = {
  data: MembershipUpdateInput;
  id: Scalars['String'];
};


export type MutationdeleteMembershipArgs = {
  id: Scalars['String'];
};


export type MutationgenerateMembershipFeeTransactionsArgs = {
  year: Scalars['Int'];
};


export type MutationcreatePaperMandateArgs = {
  data: PaperMandateCreateInput;
};


export type MutationcancelPaperMandateArgs = {
  mandate: PaperMandateWhereInput;
};


export type MutationacceptPaperMandateArgs = {
  mandate: PaperMandateWhereInput;
};


export type MutationrejectPaperMandateArgs = {
  reason: Scalars['String'];
  mandate: PaperMandateWhereInput;
};


export type MutationupdateProviderArgs = {
  data: ProviderUpdateInput;
  id: Scalars['String'];
};


export type MutationdeleteProviderArgs = {
  id: Scalars['String'];
};


export type MutationcreateUserArgs = {
  data: UserCreateInput;
};


export type MutationupdateUserArgs = {
  data: UserUpdateInput;
  id: Scalars['String'];
};


export type MutationdeleteUserArgs = {
  id: Scalars['String'];
};

export type AccessToken = {
  __typename?: 'AccessToken';
  accessToken: Scalars['String'];
  expiresIn: Scalars['Float'];
};

export type MandateWhereInput = {
  id: Scalars['String'];
};

export type DigitalMandateCreateInput = {
  member: MemberWhereInput;
  bic: Scalars['String'];
};

export type MemberWhereInput = {
  id: Scalars['String'];
};

export type DigitalMandateCreateResponse = {
  __typename?: 'DigitalMandateCreateResponse';
  redirectUrl: Scalars['String'];
  mandate: DigitalMandate;
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
  instructions: Array<DirectDebitInstruction>;
  messageId: Scalars['String'];
  entranceCode: Scalars['String'];
  transactionId?: Maybe<Scalars['String']>;
};


export type PaperMandateFileCreateInput = {
  name: Scalars['String'];
  paperMandate: PaperMandateWhereInput;
};

export type PaperMandateWhereInput = {
  id: Scalars['String'];
};

export type DirectDebitWhereInput = {
  id: Scalars['String'];
};

export type MemberCreateInput = {
  firstName: Scalars['String'];
  initials: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  address: Scalars['String'];
  postalCode: Scalars['String'];
  city: Scalars['String'];
  phoneNumber: Scalars['String'];
  birthdate: Scalars['DateTime'];
  language: Language;
  pronouns: Pronouns;
  studentType: StudentType;
};

export type MemberUpdateInput = {
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
};

export type MembershipCreateInput = {
  member: MemberWhereInput;
  type: MembershipType;
  startedAt: Scalars['DateTime'];
  endedAt?: Maybe<Scalars['DateTime']>;
};

export type MembershipUpdateInput = {
  type?: Maybe<MembershipType>;
  startedAt?: Maybe<Scalars['DateTime']>;
  endedAt?: Maybe<Scalars['DateTime']>;
};

export type PaperMandateCreateInput = {
  member: MemberWhereInput;
  bic: Scalars['String'];
  iban: Scalars['String'];
};

export type ProviderUpdateInput = {
  type?: Maybe<ProviderType>;
  identifier?: Maybe<Scalars['String']>;
  credentials?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  user?: Maybe<UserWhereInput>;
};

export type UserWhereInput = {
  id: Scalars['String'];
};

export type UserCreateInput = {
  name: Scalars['String'];
  email: Scalars['String'];
};

export type UserUpdateInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type Setting = {
  __typename?: 'Setting';
  key: Scalars['String'];
  value: Scalars['String'];
  isPublic: Scalars['Boolean'];
};

export type RegisterInput = {
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  passwordRepeat: Scalars['String'];
};

export type DigitalMandateWhereInput = {
  id: Scalars['String'];
};

export type FileCreateInput = {
  name: Scalars['String'];
};

export type MembershipWhereInput = {
  id: Scalars['String'];
};

export type ProviderWhereInput = {
  id: Scalars['String'];
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

export type MandateFragment_PaperMandate_ = (
  { __typename?: 'PaperMandate' }
  & Pick<PaperMandate, 'id' | 'mandateId' | 'status' | 'createdAt' | 'acceptedAt' | 'bic' | 'iban' | 'reason' | 'isFirstTransaction' | 'errorMessage'>
  & PaperMandateFragment
);

export type MandateFragment_DigitalMandate_ = (
  { __typename?: 'DigitalMandate' }
  & Pick<DigitalMandate, 'id' | 'mandateId' | 'status' | 'createdAt' | 'acceptedAt' | 'bic' | 'iban' | 'reason' | 'isFirstTransaction' | 'errorMessage'>
);

export type MandateFragment = MandateFragment_PaperMandate_ | MandateFragment_DigitalMandate_;

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
  data: DigitalMandateCreateInput;
}>;


export type CreateDigitalMandateMutation = (
  { __typename?: 'Mutation' }
  & { createDigitalMandate: (
    { __typename?: 'DigitalMandateCreateResponse' }
    & Pick<DigitalMandateCreateResponse, 'redirectUrl'>
  ) }
);

export type CreatePaperMandateMutationVariables = Exact<{
  data: PaperMandateCreateInput;
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
    { __typename?: 'PaperMandate' }
    & MandateFragment_PaperMandate_
  ) | (
    { __typename?: 'DigitalMandate' }
    & MandateFragment_DigitalMandate_
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
  data: PaperMandateFileCreateInput;
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
  & { banks: Array<(
    { __typename?: 'Bank' }
    & BankFragment
  )> }
);

export type GetDirectDebitQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetDirectDebitQuery = (
  { __typename?: 'Query' }
  & { directDebit?: Maybe<(
    { __typename?: 'DirectDebit' }
    & { batches: Array<(
      { __typename?: 'DirectDebitBatch' }
      & { instructions: Array<(
        { __typename?: 'DirectDebitInstruction' }
        & { mandate: (
          { __typename?: 'PaperMandate' }
          & { member: (
            { __typename?: 'Member' }
            & MemberFragment
          ) }
          & MandateFragment_PaperMandate_
        ) | (
          { __typename?: 'DigitalMandate' }
          & { member: (
            { __typename?: 'Member' }
            & MemberFragment
          ) }
          & MandateFragment_DigitalMandate_
        ) }
        & DirectDebitInstructionFragment
      )> }
      & DirectDebitBatchFragment
    )>, warnings: Array<(
      { __typename?: 'DirectDebitWarning' }
      & DirectDebitWarningFragment
    )>, file?: Maybe<(
      { __typename?: 'File' }
      & FileFragment
    )> }
    & DirectDebitFragment
  )> }
);

export type GetDirectDebitBatchQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetDirectDebitBatchQuery = (
  { __typename?: 'Query' }
  & { directDebitBatch?: Maybe<(
    { __typename?: 'DirectDebitBatch' }
    & { instructions: Array<(
      { __typename?: 'DirectDebitInstruction' }
      & { mandate: (
        { __typename?: 'PaperMandate' }
        & { member: (
          { __typename?: 'Member' }
          & MemberFragment
        ) }
        & MandateFragment_PaperMandate_
      ) | (
        { __typename?: 'DigitalMandate' }
        & { member: (
          { __typename?: 'Member' }
          & MemberFragment
        ) }
        & MandateFragment_DigitalMandate_
      ) }
      & DirectDebitInstructionFragment
    )>, directDebit: (
      { __typename?: 'DirectDebit' }
      & DirectDebitFragment
    ) }
    & DirectDebitBatchFragment
  )> }
);

export type GetDirectDebitInstructionQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetDirectDebitInstructionQuery = (
  { __typename?: 'Query' }
  & { directDebitInstruction?: Maybe<(
    { __typename?: 'DirectDebitInstruction' }
    & { batch: (
      { __typename?: 'DirectDebitBatch' }
      & { directDebit: (
        { __typename?: 'DirectDebit' }
        & DirectDebitFragment
      ) }
      & DirectDebitBatchFragment
    ), transactions: Array<(
      { __typename?: 'MembershipFeeTransaction' }
      & TransactionFragment
    )>, mandate: (
      { __typename?: 'PaperMandate' }
      & { member: (
        { __typename?: 'Member' }
        & MemberFragment
      ) }
      & MandateFragment_PaperMandate_
    ) | (
      { __typename?: 'DigitalMandate' }
      & { member: (
        { __typename?: 'Member' }
        & MemberFragment
      ) }
      & MandateFragment_DigitalMandate_
    ) }
    & DirectDebitInstructionFragment
  )> }
);

export type GetDirectDebitsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDirectDebitsQuery = (
  { __typename?: 'Query' }
  & { directDebits: Array<(
    { __typename?: 'DirectDebit' }
    & DirectDebitFragment
  )> }
);

export type GetMandateQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetMandateQuery = (
  { __typename?: 'Query' }
  & { mandate?: Maybe<(
    { __typename?: 'PaperMandate' }
    & { member: (
      { __typename?: 'Member' }
      & MemberFragment
    ) }
    & MandateFragment_PaperMandate_
  ) | (
    { __typename?: 'DigitalMandate' }
    & { member: (
      { __typename?: 'Member' }
      & MemberFragment
    ) }
    & MandateFragment_DigitalMandate_
  )> }
);

export type GetMandatesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMandatesQuery = (
  { __typename?: 'Query' }
  & { mandates: Array<(
    { __typename?: 'PaperMandate' }
    & { member: (
      { __typename?: 'Member' }
      & MemberFragment
    ) }
    & MandateFragment_PaperMandate_
  ) | (
    { __typename?: 'DigitalMandate' }
    & { member: (
      { __typename?: 'Member' }
      & MemberFragment
    ) }
    & MandateFragment_DigitalMandate_
  )> }
);

export type GetMemberQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetMemberQuery = (
  { __typename?: 'Query' }
  & { member?: Maybe<(
    { __typename?: 'Member' }
    & { memberships: Array<(
      { __typename?: 'Membership' }
      & MembershipFragment
    )>, mandates: Array<(
      { __typename?: 'PaperMandate' }
      & MandateFragment_PaperMandate_
    ) | (
      { __typename?: 'DigitalMandate' }
      & MandateFragment_DigitalMandate_
    )>, transactions: Array<(
      { __typename?: 'MembershipFeeTransaction' }
      & TransactionFragment
    )> }
    & MemberFragment
  )> }
);

export type GetMembersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMembersQuery = (
  { __typename?: 'Query' }
  & { members: Array<(
    { __typename?: 'Member' }
    & { mandates: Array<(
      { __typename?: 'PaperMandate' }
      & MandateFragment_PaperMandate_
    ) | (
      { __typename?: 'DigitalMandate' }
      & MandateFragment_DigitalMandate_
    )> }
    & MemberFragment
  )> }
);

export type GetPaperMandatesQueryVariables = Exact<{
  status?: Maybe<MandateStatus>;
}>;


export type GetPaperMandatesQuery = (
  { __typename?: 'Query' }
  & { paperMandates: Array<(
    { __typename?: 'PaperMandate' }
    & { member: (
      { __typename?: 'Member' }
      & MemberFragment
    ) }
    & MandateFragment_PaperMandate_
  )> }
);

export type GetProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProfileQuery = (
  { __typename?: 'Query' }
  & { me: (
    { __typename?: 'User' }
    & { providers: Array<(
      { __typename?: 'Provider' }
      & ProviderFragment
    )> }
    & UserFragment
  ) }
);

export type GetTransactionQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetTransactionQuery = (
  { __typename?: 'Query' }
  & { transaction?: Maybe<(
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
  )> }
);

export type GetUserQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetUserQuery = (
  { __typename?: 'Query' }
  & { user?: Maybe<(
    { __typename?: 'User' }
    & UserFragment
  )> }
);

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = (
  { __typename?: 'Query' }
  & { users: Array<(
    { __typename?: 'User' }
    & UserFragment
  )> }
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
    mutation CreateDigitalMandate($data: DigitalMandateCreateInput!) {
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
    mutation CreatePaperMandate($data: PaperMandateCreateInput!) {
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
    mutation UploadPaperMandate($data: PaperMandateFileCreateInput!, $file: Upload!) {
  uploadPaperMandate(data: $data, file: $file) {
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
 *      data: // value for 'data'
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
    ...BankFragment
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
  directDebit(id: $id) {
    ...DirectDebitFragment
    batches {
      ...DirectDebitBatchFragment
      instructions {
        ...DirectDebitInstructionFragment
        mandate {
          ...MandateFragment
          member {
            ...MemberFragment
          }
        }
      }
    }
    warnings {
      ...DirectDebitWarningFragment
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
  directDebitBatch(id: $id) {
    ...DirectDebitBatchFragment
    instructions {
      ...DirectDebitInstructionFragment
      mandate {
        ...MandateFragment
        member {
          ...MemberFragment
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
  directDebitInstruction(id: $id) {
    ...DirectDebitInstructionFragment
    batch {
      ...DirectDebitBatchFragment
      directDebit {
        ...DirectDebitFragment
      }
    }
    transactions {
      ...TransactionFragment
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
    ...DirectDebitFragment
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
  mandate(id: $id) {
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
    ...MandateFragment
    member {
      ...MemberFragment
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
  member(id: $id) {
    ...MemberFragment
    memberships {
      ...MembershipFragment
    }
    mandates {
      ...MandateFragment
    }
    transactions {
      ...TransactionFragment
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
    ...MemberFragment
    mandates(status: ACCEPTED) {
      ...MandateFragment
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
  paperMandates(status: $status) {
    ...MandateFragment
    member {
      ...MemberFragment
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
      ...ProviderFragment
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
  transaction(id: $id) {
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
  user(id: $id) {
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
    ...UserFragment
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