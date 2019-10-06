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
// GraphQL mutation operation: UploadPaperMandate
// ====================================================

export interface UploadPaperMandate_uploadPaperMandate {
  __typename: "File";
  id: string;
  name: string;
  url: string;
  mimeType: string;
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
// GraphQL query operation: GetMandate
// ====================================================

export interface GetMandate_mandate_DigitalMandate_member {
  __typename: "Member";
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  language: Language;
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
  lastName: string;
  email: string;
  language: Language;
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
  lastName: string;
  email: string;
  language: Language;
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
  lastName: string;
  email: string;
  language: Language;
  mandates: GetMembers_members_mandates[];
}

export interface GetMembers {
  members: GetMembers_members[];
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
  lastName: string;
  email: string;
  language: Language;
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

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum Language {
  EN = "EN",
  NL = "NL",
}

export enum MandateStatus {
  ACCEPTED = "ACCEPTED",
  CANCELLED = "CANCELLED",
  ERROR = "ERROR",
  INVALID = "INVALID",
  REJECTED = "REJECTED",
  UNACCEPTED = "UNACCEPTED",
}

export enum ProviderType {
  GOOGLE = "GOOGLE",
}

export enum Role {
  ADMIN = "ADMIN",
  USER = "USER",
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
