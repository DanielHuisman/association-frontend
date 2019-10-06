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
// GraphQL query operation: GetMember
// ====================================================

export interface GetMember_member {
  __typename: "Member";
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  language: Language;
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

export interface GetMembers_members {
  __typename: "Member";
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  language: Language;
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
