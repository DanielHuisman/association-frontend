/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AcceptPaperMandate
// ====================================================

export interface AcceptPaperMandate_acceptPaperMandate_generatedFile {
  __typename: "File";
  id: string;
  name: string;
  url: string;
  mimeType: string;
}

export interface AcceptPaperMandate_acceptPaperMandate_uploadedFile {
  __typename: "File";
  id: string;
  name: string;
  url: string;
  mimeType: string;
}

export interface AcceptPaperMandate_acceptPaperMandate {
  __typename: "PaperMandate";
  id: string;
  mandateId: string;
  status: MandateStatus;
  createdAt: any;
  acceptedAt: any | null;
  bic: string;
  iban: string | null;
  reason: string;
  isFirstTransaction: boolean;
  errorMessage: string | null;
  generatedFile: AcceptPaperMandate_acceptPaperMandate_generatedFile | null;
  uploadedFile: AcceptPaperMandate_acceptPaperMandate_uploadedFile | null;
}

export interface AcceptPaperMandate {
  acceptPaperMandate: AcceptPaperMandate_acceptPaperMandate;
}

export interface AcceptPaperMandateVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CancelPaperMandate
// ====================================================

export interface CancelPaperMandate_cancelPaperMandate_generatedFile {
  __typename: "File";
  id: string;
  name: string;
  url: string;
  mimeType: string;
}

export interface CancelPaperMandate_cancelPaperMandate_uploadedFile {
  __typename: "File";
  id: string;
  name: string;
  url: string;
  mimeType: string;
}

export interface CancelPaperMandate_cancelPaperMandate {
  __typename: "PaperMandate";
  id: string;
  mandateId: string;
  status: MandateStatus;
  createdAt: any;
  acceptedAt: any | null;
  bic: string;
  iban: string | null;
  reason: string;
  isFirstTransaction: boolean;
  errorMessage: string | null;
  generatedFile: CancelPaperMandate_cancelPaperMandate_generatedFile | null;
  uploadedFile: CancelPaperMandate_cancelPaperMandate_uploadedFile | null;
}

export interface CancelPaperMandate {
  cancelPaperMandate: CancelPaperMandate_cancelPaperMandate;
}

export interface CancelPaperMandateVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateDigitalMandate
// ====================================================

export interface CreateDigitalMandate_createDigitalMandate {
  __typename: "DigitalMandateCreateResponse";
  redirectUrl: string;
}

export interface CreateDigitalMandate {
  createDigitalMandate: CreateDigitalMandate_createDigitalMandate;
}

export interface CreateDigitalMandateVariables {
  data: DigitalMandateCreateInput;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreatePaperMandate
// ====================================================

export interface CreatePaperMandate_createPaperMandate_generatedFile {
  __typename: "File";
  id: string;
  name: string;
  url: string;
  mimeType: string;
}

export interface CreatePaperMandate_createPaperMandate_uploadedFile {
  __typename: "File";
  id: string;
  name: string;
  url: string;
  mimeType: string;
}

export interface CreatePaperMandate_createPaperMandate {
  __typename: "PaperMandate";
  id: string;
  mandateId: string;
  status: MandateStatus;
  createdAt: any;
  acceptedAt: any | null;
  bic: string;
  iban: string | null;
  reason: string;
  isFirstTransaction: boolean;
  errorMessage: string | null;
  generatedFile: CreatePaperMandate_createPaperMandate_generatedFile | null;
  uploadedFile: CreatePaperMandate_createPaperMandate_uploadedFile | null;
}

export interface CreatePaperMandate {
  createPaperMandate: CreatePaperMandate_createPaperMandate;
}

export interface CreatePaperMandateVariables {
  data: PaperMandateCreateInput;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: InvalidateMandate
// ====================================================

export interface InvalidateMandate_invalidateMandate_DigitalMandate {
  __typename: "DigitalMandate";
  id: string;
  mandateId: string;
  status: MandateStatus;
  createdAt: any;
  acceptedAt: any | null;
  bic: string;
  iban: string | null;
  reason: string;
  isFirstTransaction: boolean;
  errorMessage: string | null;
}

export interface InvalidateMandate_invalidateMandate_PaperMandate_generatedFile {
  __typename: "File";
  id: string;
  name: string;
  url: string;
  mimeType: string;
}

export interface InvalidateMandate_invalidateMandate_PaperMandate_uploadedFile {
  __typename: "File";
  id: string;
  name: string;
  url: string;
  mimeType: string;
}

export interface InvalidateMandate_invalidateMandate_PaperMandate {
  __typename: "PaperMandate";
  id: string;
  mandateId: string;
  status: MandateStatus;
  createdAt: any;
  acceptedAt: any | null;
  bic: string;
  iban: string | null;
  reason: string;
  isFirstTransaction: boolean;
  errorMessage: string | null;
  generatedFile: InvalidateMandate_invalidateMandate_PaperMandate_generatedFile | null;
  uploadedFile: InvalidateMandate_invalidateMandate_PaperMandate_uploadedFile | null;
}

export type InvalidateMandate_invalidateMandate = InvalidateMandate_invalidateMandate_DigitalMandate | InvalidateMandate_invalidateMandate_PaperMandate;

export interface InvalidateMandate {
  invalidateMandate: InvalidateMandate_invalidateMandate;
}

export interface InvalidateMandateVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: OAuthAuthenticate
// ====================================================

export interface OAuthAuthenticate_oauthAuthenticate {
  __typename: "AccessToken";
  accessToken: string;
  expiresIn: number;
}

export interface OAuthAuthenticate {
  oauthAuthenticate: OAuthAuthenticate_oauthAuthenticate;
}

export interface OAuthAuthenticateVariables {
  type: ProviderType;
  redirectUri: string;
  code: string;
  userId?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: OAuthAuthorize
// ====================================================

export interface OAuthAuthorize {
  oauthAuthorize: string;
}

export interface OAuthAuthorizeVariables {
  type: ProviderType;
  redirectUri: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: OAuthUnlink
// ====================================================

export interface OAuthUnlink_oauthUnlink {
  __typename: "Provider";
  id: string;
}

export interface OAuthUnlink {
  oauthUnlink: OAuthUnlink_oauthUnlink;
}

export interface OAuthUnlinkVariables {
  type: ProviderType;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RejectPaperMandate
// ====================================================

export interface RejectPaperMandate_rejectPaperMandate_generatedFile {
  __typename: "File";
  id: string;
  name: string;
  url: string;
  mimeType: string;
}

export interface RejectPaperMandate_rejectPaperMandate_uploadedFile {
  __typename: "File";
  id: string;
  name: string;
  url: string;
  mimeType: string;
}

export interface RejectPaperMandate_rejectPaperMandate {
  __typename: "PaperMandate";
  id: string;
  mandateId: string;
  status: MandateStatus;
  createdAt: any;
  acceptedAt: any | null;
  bic: string;
  iban: string | null;
  reason: string;
  isFirstTransaction: boolean;
  errorMessage: string | null;
  generatedFile: RejectPaperMandate_rejectPaperMandate_generatedFile | null;
  uploadedFile: RejectPaperMandate_rejectPaperMandate_uploadedFile | null;
}

export interface RejectPaperMandate {
  rejectPaperMandate: RejectPaperMandate_rejectPaperMandate;
}

export interface RejectPaperMandateVariables {
  id: string;
  reason: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UploadPaperMandate
// ====================================================

export interface UploadPaperMandate_uploadPaperMandate_generatedFile {
  __typename: "File";
  id: string;
  name: string;
  url: string;
  mimeType: string;
}

export interface UploadPaperMandate_uploadPaperMandate_uploadedFile {
  __typename: "File";
  id: string;
  name: string;
  url: string;
  mimeType: string;
}

export interface UploadPaperMandate_uploadPaperMandate {
  __typename: "PaperMandate";
  id: string;
  mandateId: string;
  status: MandateStatus;
  createdAt: any;
  acceptedAt: any | null;
  bic: string;
  iban: string | null;
  reason: string;
  isFirstTransaction: boolean;
  errorMessage: string | null;
  generatedFile: UploadPaperMandate_uploadPaperMandate_generatedFile | null;
  uploadedFile: UploadPaperMandate_uploadPaperMandate_uploadedFile | null;
}

export interface UploadPaperMandate {
  uploadPaperMandate: UploadPaperMandate_uploadPaperMandate;
}

export interface UploadPaperMandateVariables {
  data: PaperMandateFileCreateInput;
  file: any;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetBanks
// ====================================================

export interface GetBanks_banks {
  __typename: "Bank";
  id: string;
  bic: string;
  country: string;
  name: string;
  isActive: boolean;
}

export interface GetBanks {
  banks: GetBanks_banks[];
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetDirectDebits
// ====================================================

export interface GetDirectDebits_directDebits {
  __typename: "DirectDebit";
  id: string;
  createdAt: any;
  updatedAt: any;
  status: DirectDebitStatus;
  messageId: string;
  collectionDate: any;
}

export interface GetDirectDebits {
  directDebits: GetDirectDebits_directDebits[];
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetMandate
// ====================================================

export interface GetMandate_mandate_DigitalMandate_member {
  __typename: "Member";
  id: string;
  firstName: string;
  initials: string;
  lastName: string;
  email: string;
  address: string;
  postalCode: string;
  city: string;
  phoneNumber: string;
  birthdate: any;
  startOfMembership: any;
  endOfMembership: any | null;
  language: Language;
  pronouns: Pronouns;
  studentType: StudentType;
}

export interface GetMandate_mandate_DigitalMandate {
  __typename: "DigitalMandate";
  id: string;
  mandateId: string;
  status: MandateStatus;
  createdAt: any;
  acceptedAt: any | null;
  bic: string;
  iban: string | null;
  reason: string;
  isFirstTransaction: boolean;
  errorMessage: string | null;
  member: GetMandate_mandate_DigitalMandate_member;
}

export interface GetMandate_mandate_PaperMandate_generatedFile {
  __typename: "File";
  id: string;
  name: string;
  url: string;
  mimeType: string;
}

export interface GetMandate_mandate_PaperMandate_uploadedFile {
  __typename: "File";
  id: string;
  name: string;
  url: string;
  mimeType: string;
}

export interface GetMandate_mandate_PaperMandate_member {
  __typename: "Member";
  id: string;
  firstName: string;
  initials: string;
  lastName: string;
  email: string;
  address: string;
  postalCode: string;
  city: string;
  phoneNumber: string;
  birthdate: any;
  startOfMembership: any;
  endOfMembership: any | null;
  language: Language;
  pronouns: Pronouns;
  studentType: StudentType;
}

export interface GetMandate_mandate_PaperMandate {
  __typename: "PaperMandate";
  id: string;
  mandateId: string;
  status: MandateStatus;
  createdAt: any;
  acceptedAt: any | null;
  bic: string;
  iban: string | null;
  reason: string;
  isFirstTransaction: boolean;
  errorMessage: string | null;
  generatedFile: GetMandate_mandate_PaperMandate_generatedFile | null;
  uploadedFile: GetMandate_mandate_PaperMandate_uploadedFile | null;
  member: GetMandate_mandate_PaperMandate_member;
}

export type GetMandate_mandate = GetMandate_mandate_DigitalMandate | GetMandate_mandate_PaperMandate;

export interface GetMandate {
  mandate: GetMandate_mandate | null;
}

export interface GetMandateVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetMandates
// ====================================================

export interface GetMandates_mandates_DigitalMandate_member {
  __typename: "Member";
  id: string;
  firstName: string;
  initials: string;
  lastName: string;
  email: string;
  address: string;
  postalCode: string;
  city: string;
  phoneNumber: string;
  birthdate: any;
  startOfMembership: any;
  endOfMembership: any | null;
  language: Language;
  pronouns: Pronouns;
  studentType: StudentType;
}

export interface GetMandates_mandates_DigitalMandate {
  __typename: "DigitalMandate";
  id: string;
  mandateId: string;
  status: MandateStatus;
  createdAt: any;
  acceptedAt: any | null;
  bic: string;
  iban: string | null;
  reason: string;
  isFirstTransaction: boolean;
  errorMessage: string | null;
  member: GetMandates_mandates_DigitalMandate_member;
}

export interface GetMandates_mandates_PaperMandate_generatedFile {
  __typename: "File";
  id: string;
  name: string;
  url: string;
  mimeType: string;
}

export interface GetMandates_mandates_PaperMandate_uploadedFile {
  __typename: "File";
  id: string;
  name: string;
  url: string;
  mimeType: string;
}

export interface GetMandates_mandates_PaperMandate_member {
  __typename: "Member";
  id: string;
  firstName: string;
  initials: string;
  lastName: string;
  email: string;
  address: string;
  postalCode: string;
  city: string;
  phoneNumber: string;
  birthdate: any;
  startOfMembership: any;
  endOfMembership: any | null;
  language: Language;
  pronouns: Pronouns;
  studentType: StudentType;
}

export interface GetMandates_mandates_PaperMandate {
  __typename: "PaperMandate";
  id: string;
  mandateId: string;
  status: MandateStatus;
  createdAt: any;
  acceptedAt: any | null;
  bic: string;
  iban: string | null;
  reason: string;
  isFirstTransaction: boolean;
  errorMessage: string | null;
  generatedFile: GetMandates_mandates_PaperMandate_generatedFile | null;
  uploadedFile: GetMandates_mandates_PaperMandate_uploadedFile | null;
  member: GetMandates_mandates_PaperMandate_member;
}

export type GetMandates_mandates = GetMandates_mandates_DigitalMandate | GetMandates_mandates_PaperMandate;

export interface GetMandates {
  mandates: GetMandates_mandates[];
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetMember
// ====================================================

export interface GetMember_member_mandates_DigitalMandate {
  __typename: "DigitalMandate";
  id: string;
  mandateId: string;
  status: MandateStatus;
  createdAt: any;
  acceptedAt: any | null;
  bic: string;
  iban: string | null;
  reason: string;
  isFirstTransaction: boolean;
  errorMessage: string | null;
}

export interface GetMember_member_mandates_PaperMandate_generatedFile {
  __typename: "File";
  id: string;
  name: string;
  url: string;
  mimeType: string;
}

export interface GetMember_member_mandates_PaperMandate_uploadedFile {
  __typename: "File";
  id: string;
  name: string;
  url: string;
  mimeType: string;
}

export interface GetMember_member_mandates_PaperMandate {
  __typename: "PaperMandate";
  id: string;
  mandateId: string;
  status: MandateStatus;
  createdAt: any;
  acceptedAt: any | null;
  bic: string;
  iban: string | null;
  reason: string;
  isFirstTransaction: boolean;
  errorMessage: string | null;
  generatedFile: GetMember_member_mandates_PaperMandate_generatedFile | null;
  uploadedFile: GetMember_member_mandates_PaperMandate_uploadedFile | null;
}

export type GetMember_member_mandates = GetMember_member_mandates_DigitalMandate | GetMember_member_mandates_PaperMandate;

export interface GetMember_member {
  __typename: "Member";
  id: string;
  firstName: string;
  initials: string;
  lastName: string;
  email: string;
  address: string;
  postalCode: string;
  city: string;
  phoneNumber: string;
  birthdate: any;
  startOfMembership: any;
  endOfMembership: any | null;
  language: Language;
  pronouns: Pronouns;
  studentType: StudentType;
  mandates: GetMember_member_mandates[];
}

export interface GetMember {
  member: GetMember_member | null;
}

export interface GetMemberVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetMembers
// ====================================================

export interface GetMembers_members_mandates_DigitalMandate {
  __typename: "DigitalMandate";
  id: string;
  mandateId: string;
  status: MandateStatus;
  createdAt: any;
  acceptedAt: any | null;
  bic: string;
  iban: string | null;
  reason: string;
  isFirstTransaction: boolean;
  errorMessage: string | null;
}

export interface GetMembers_members_mandates_PaperMandate_generatedFile {
  __typename: "File";
  id: string;
  name: string;
  url: string;
  mimeType: string;
}

export interface GetMembers_members_mandates_PaperMandate_uploadedFile {
  __typename: "File";
  id: string;
  name: string;
  url: string;
  mimeType: string;
}

export interface GetMembers_members_mandates_PaperMandate {
  __typename: "PaperMandate";
  id: string;
  mandateId: string;
  status: MandateStatus;
  createdAt: any;
  acceptedAt: any | null;
  bic: string;
  iban: string | null;
  reason: string;
  isFirstTransaction: boolean;
  errorMessage: string | null;
  generatedFile: GetMembers_members_mandates_PaperMandate_generatedFile | null;
  uploadedFile: GetMembers_members_mandates_PaperMandate_uploadedFile | null;
}

export type GetMembers_members_mandates = GetMembers_members_mandates_DigitalMandate | GetMembers_members_mandates_PaperMandate;

export interface GetMembers_members {
  __typename: "Member";
  id: string;
  firstName: string;
  initials: string;
  lastName: string;
  email: string;
  address: string;
  postalCode: string;
  city: string;
  phoneNumber: string;
  birthdate: any;
  startOfMembership: any;
  endOfMembership: any | null;
  language: Language;
  pronouns: Pronouns;
  studentType: StudentType;
  mandates: GetMembers_members_mandates[];
}

export interface GetMembers {
  members: GetMembers_members[];
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPaperMandates
// ====================================================

export interface GetPaperMandates_paperMandates_generatedFile {
  __typename: "File";
  id: string;
  name: string;
  url: string;
  mimeType: string;
}

export interface GetPaperMandates_paperMandates_uploadedFile {
  __typename: "File";
  id: string;
  name: string;
  url: string;
  mimeType: string;
}

export interface GetPaperMandates_paperMandates_member {
  __typename: "Member";
  id: string;
  firstName: string;
  initials: string;
  lastName: string;
  email: string;
  address: string;
  postalCode: string;
  city: string;
  phoneNumber: string;
  birthdate: any;
  startOfMembership: any;
  endOfMembership: any | null;
  language: Language;
  pronouns: Pronouns;
  studentType: StudentType;
}

export interface GetPaperMandates_paperMandates {
  __typename: "PaperMandate";
  id: string;
  mandateId: string;
  status: MandateStatus;
  createdAt: any;
  acceptedAt: any | null;
  bic: string;
  iban: string | null;
  reason: string;
  isFirstTransaction: boolean;
  errorMessage: string | null;
  generatedFile: GetPaperMandates_paperMandates_generatedFile | null;
  uploadedFile: GetPaperMandates_paperMandates_uploadedFile | null;
  member: GetPaperMandates_paperMandates_member;
}

export interface GetPaperMandates {
  paperMandates: GetPaperMandates_paperMandates[];
}

export interface GetPaperMandatesVariables {
  status?: MandateStatus | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetProfile
// ====================================================

export interface GetProfile_me_providers {
  __typename: "Provider";
  id: string;
  type: ProviderType;
  email: string;
}

export interface GetProfile_me {
  __typename: "User";
  id: string;
  name: string;
  email: string;
  role: Role;
  providers: GetProfile_me_providers[];
}

export interface GetProfile {
  me: GetProfile_me;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUser
// ====================================================

export interface GetUser_user {
  __typename: "User";
  id: string;
  name: string;
  email: string;
  role: Role;
}

export interface GetUser {
  user: GetUser_user | null;
}

export interface GetUserVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUsers
// ====================================================

export interface GetUsers_users {
  __typename: "User";
  id: string;
  name: string;
  email: string;
  role: Role;
}

export interface GetUsers {
  users: GetUsers_users[];
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: BankFragment
// ====================================================

export interface BankFragment {
  __typename: "Bank";
  id: string;
  bic: string;
  country: string;
  name: string;
  isActive: boolean;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FileFragment
// ====================================================

export interface FileFragment {
  __typename: "File";
  id: string;
  name: string;
  url: string;
  mimeType: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: MandateFragment
// ====================================================

export interface MandateFragment_DigitalMandate {
  __typename: "DigitalMandate";
  id: string;
  mandateId: string;
  status: MandateStatus;
  createdAt: any;
  acceptedAt: any | null;
  bic: string;
  iban: string | null;
  reason: string;
  isFirstTransaction: boolean;
  errorMessage: string | null;
}

export interface MandateFragment_PaperMandate_generatedFile {
  __typename: "File";
  id: string;
  name: string;
  url: string;
  mimeType: string;
}

export interface MandateFragment_PaperMandate_uploadedFile {
  __typename: "File";
  id: string;
  name: string;
  url: string;
  mimeType: string;
}

export interface MandateFragment_PaperMandate {
  __typename: "PaperMandate";
  id: string;
  mandateId: string;
  status: MandateStatus;
  createdAt: any;
  acceptedAt: any | null;
  bic: string;
  iban: string | null;
  reason: string;
  isFirstTransaction: boolean;
  errorMessage: string | null;
  generatedFile: MandateFragment_PaperMandate_generatedFile | null;
  uploadedFile: MandateFragment_PaperMandate_uploadedFile | null;
}

export type MandateFragment = MandateFragment_DigitalMandate | MandateFragment_PaperMandate;

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: PaperMandateFragment
// ====================================================

export interface PaperMandateFragment_generatedFile {
  __typename: "File";
  id: string;
  name: string;
  url: string;
  mimeType: string;
}

export interface PaperMandateFragment_uploadedFile {
  __typename: "File";
  id: string;
  name: string;
  url: string;
  mimeType: string;
}

export interface PaperMandateFragment {
  __typename: "PaperMandate";
  generatedFile: PaperMandateFragment_generatedFile | null;
  uploadedFile: PaperMandateFragment_uploadedFile | null;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: MemberFragment
// ====================================================

export interface MemberFragment {
  __typename: "Member";
  id: string;
  firstName: string;
  initials: string;
  lastName: string;
  email: string;
  address: string;
  postalCode: string;
  city: string;
  phoneNumber: string;
  birthdate: any;
  startOfMembership: any;
  endOfMembership: any | null;
  language: Language;
  pronouns: Pronouns;
  studentType: StudentType;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ProviderFragment
// ====================================================

export interface ProviderFragment {
  __typename: "Provider";
  id: string;
  type: ProviderType;
  email: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: UserFragment
// ====================================================

export interface UserFragment {
  __typename: "User";
  id: string;
  name: string;
  email: string;
  role: Role;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: DirectDebitFragment
// ====================================================

export interface DirectDebitFragment {
  __typename: "DirectDebit";
  id: string;
  createdAt: any;
  updatedAt: any;
  status: DirectDebitStatus;
  messageId: string;
  collectionDate: any;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum DirectDebitStatus {
  ACCEPTED = "ACCEPTED",
  CANCELLED = "CANCELLED",
  CREATED = "CREATED",
  GENERATED = "GENERATED",
  REJECTED = "REJECTED",
}

export enum Language {
  EN = "EN",
  NL = "NL",
}

export enum MandateStatus {
  ACCEPTED = "ACCEPTED",
  CANCELLED = "CANCELLED",
  CREATED = "CREATED",
  ERROR = "ERROR",
  INVALID = "INVALID",
  REJECTED = "REJECTED",
  UNACCEPTED = "UNACCEPTED",
}

export enum Pronouns {
  HE_HIM = "HE_HIM",
  SHE_HER = "SHE_HER",
  THEY_THEM = "THEY_THEM",
}

export enum ProviderType {
  GOOGLE = "GOOGLE",
}

export enum Role {
  ADMIN = "ADMIN",
  USER = "USER",
}

export enum StudentType {
  HBO_OTHER = "HBO_OTHER",
  HBO_SAXION = "HBO_SAXION",
  MBO = "MBO",
  UNIVERSITY_OTHER = "UNIVERSITY_OTHER",
  UNIVERSITY_UT = "UNIVERSITY_UT",
  WORKING = "WORKING",
}

export interface DigitalMandateCreateInput {
  member: MemberWhereInput;
  bic: string;
}

export interface MemberWhereInput {
  id: string;
}

export interface PaperMandateCreateInput {
  member: MemberWhereInput;
  bic: string;
  iban: string;
}

export interface PaperMandateFileCreateInput {
  name: string;
  paperMandate: PaperMandateWhereInput;
}

export interface PaperMandateWhereInput {
  id: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
