import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  uuid: any;
};

/** columns and relationships of "Address" */
export type Address = {
  __typename?: 'Address';
  /** An array relationship */
  Opportunities: Array<Opportunity>;
  /** An aggregate relationship */
  Opportunities_aggregate: Opportunity_Aggregate;
  city: Scalars['String'];
  country: Scalars['String'];
  id: Scalars['uuid'];
  state: Scalars['String'];
  streetAddress: Scalars['String'];
  zipCode: Scalars['String'];
};


/** columns and relationships of "Address" */
export type AddressOpportunitiesArgs = {
  distinct_on?: InputMaybe<Array<Opportunity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Opportunity_Order_By>>;
  where?: InputMaybe<Opportunity_Bool_Exp>;
};


/** columns and relationships of "Address" */
export type AddressOpportunities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Opportunity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Opportunity_Order_By>>;
  where?: InputMaybe<Opportunity_Bool_Exp>;
};

/** aggregated selection of "Address" */
export type Address_Aggregate = {
  __typename?: 'Address_aggregate';
  aggregate?: Maybe<Address_Aggregate_Fields>;
  nodes: Array<Address>;
};

/** aggregate fields of "Address" */
export type Address_Aggregate_Fields = {
  __typename?: 'Address_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Address_Max_Fields>;
  min?: Maybe<Address_Min_Fields>;
};


/** aggregate fields of "Address" */
export type Address_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Address_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "Address". All fields are combined with a logical 'AND'. */
export type Address_Bool_Exp = {
  Opportunities?: InputMaybe<Opportunity_Bool_Exp>;
  Opportunities_aggregate?: InputMaybe<Opportunity_Aggregate_Bool_Exp>;
  _and?: InputMaybe<Array<Address_Bool_Exp>>;
  _not?: InputMaybe<Address_Bool_Exp>;
  _or?: InputMaybe<Array<Address_Bool_Exp>>;
  city?: InputMaybe<String_Comparison_Exp>;
  country?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  state?: InputMaybe<String_Comparison_Exp>;
  streetAddress?: InputMaybe<String_Comparison_Exp>;
  zipCode?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Address" */
export enum Address_Constraint {
  /** unique or primary key constraint on columns "id" */
  AddressPkey = 'Address_pkey'
}

/** input type for inserting data into table "Address" */
export type Address_Insert_Input = {
  Opportunities?: InputMaybe<Opportunity_Arr_Rel_Insert_Input>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  state?: InputMaybe<Scalars['String']>;
  streetAddress?: InputMaybe<Scalars['String']>;
  zipCode?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Address_Max_Fields = {
  __typename?: 'Address_max_fields';
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  state?: Maybe<Scalars['String']>;
  streetAddress?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Address_Min_Fields = {
  __typename?: 'Address_min_fields';
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  state?: Maybe<Scalars['String']>;
  streetAddress?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "Address" */
export type Address_Mutation_Response = {
  __typename?: 'Address_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Address>;
};

/** input type for inserting object relation for remote table "Address" */
export type Address_Obj_Rel_Insert_Input = {
  data: Address_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Address_On_Conflict>;
};

/** on_conflict condition type for table "Address" */
export type Address_On_Conflict = {
  constraint: Address_Constraint;
  update_columns?: Array<Address_Update_Column>;
  where?: InputMaybe<Address_Bool_Exp>;
};

/** Ordering options when selecting data from "Address". */
export type Address_Order_By = {
  Opportunities_aggregate?: InputMaybe<Opportunity_Aggregate_Order_By>;
  city?: InputMaybe<Order_By>;
  country?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  streetAddress?: InputMaybe<Order_By>;
  zipCode?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Address */
export type Address_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "Address" */
export enum Address_Select_Column {
  /** column name */
  City = 'city',
  /** column name */
  Country = 'country',
  /** column name */
  Id = 'id',
  /** column name */
  State = 'state',
  /** column name */
  StreetAddress = 'streetAddress',
  /** column name */
  ZipCode = 'zipCode'
}

/** input type for updating data in table "Address" */
export type Address_Set_Input = {
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  state?: InputMaybe<Scalars['String']>;
  streetAddress?: InputMaybe<Scalars['String']>;
  zipCode?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "Address" */
export type Address_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Address_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Address_Stream_Cursor_Value_Input = {
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  state?: InputMaybe<Scalars['String']>;
  streetAddress?: InputMaybe<Scalars['String']>;
  zipCode?: InputMaybe<Scalars['String']>;
};

/** update columns of table "Address" */
export enum Address_Update_Column {
  /** column name */
  City = 'city',
  /** column name */
  Country = 'country',
  /** column name */
  Id = 'id',
  /** column name */
  State = 'state',
  /** column name */
  StreetAddress = 'streetAddress',
  /** column name */
  ZipCode = 'zipCode'
}

export type Address_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Address_Set_Input>;
  where: Address_Bool_Exp;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** columns and relationships of "Opportunity" */
export type Opportunity = {
  __typename?: 'Opportunity';
  /** An object relationship */
  Address: Address;
  /** An array relationship */
  OpportunityVolunteers: Array<OpportunityVolunteer>;
  /** An aggregate relationship */
  OpportunityVolunteers_aggregate: OpportunityVolunteer_Aggregate;
  address_id: Scalars['uuid'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  imgSrc?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};


/** columns and relationships of "Opportunity" */
export type OpportunityOpportunityVolunteersArgs = {
  distinct_on?: InputMaybe<Array<OpportunityVolunteer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OpportunityVolunteer_Order_By>>;
  where?: InputMaybe<OpportunityVolunteer_Bool_Exp>;
};


/** columns and relationships of "Opportunity" */
export type OpportunityOpportunityVolunteers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<OpportunityVolunteer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OpportunityVolunteer_Order_By>>;
  where?: InputMaybe<OpportunityVolunteer_Bool_Exp>;
};

/** Join for many-to-many relationship between Opportunity table and Volunteer table  */
export type OpportunityVolunteer = {
  __typename?: 'OpportunityVolunteer';
  /** An object relationship */
  Opportunity: Opportunity;
  /** An object relationship */
  Volunteer: Volunteer;
  opportunity_id: Scalars['uuid'];
  volunteer_id: Scalars['uuid'];
};

/** aggregated selection of "OpportunityVolunteer" */
export type OpportunityVolunteer_Aggregate = {
  __typename?: 'OpportunityVolunteer_aggregate';
  aggregate?: Maybe<OpportunityVolunteer_Aggregate_Fields>;
  nodes: Array<OpportunityVolunteer>;
};

export type OpportunityVolunteer_Aggregate_Bool_Exp = {
  count?: InputMaybe<OpportunityVolunteer_Aggregate_Bool_Exp_Count>;
};

export type OpportunityVolunteer_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<OpportunityVolunteer_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<OpportunityVolunteer_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "OpportunityVolunteer" */
export type OpportunityVolunteer_Aggregate_Fields = {
  __typename?: 'OpportunityVolunteer_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<OpportunityVolunteer_Max_Fields>;
  min?: Maybe<OpportunityVolunteer_Min_Fields>;
};


/** aggregate fields of "OpportunityVolunteer" */
export type OpportunityVolunteer_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<OpportunityVolunteer_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "OpportunityVolunteer" */
export type OpportunityVolunteer_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<OpportunityVolunteer_Max_Order_By>;
  min?: InputMaybe<OpportunityVolunteer_Min_Order_By>;
};

/** input type for inserting array relation for remote table "OpportunityVolunteer" */
export type OpportunityVolunteer_Arr_Rel_Insert_Input = {
  data: Array<OpportunityVolunteer_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<OpportunityVolunteer_On_Conflict>;
};

/** Boolean expression to filter rows from the table "OpportunityVolunteer". All fields are combined with a logical 'AND'. */
export type OpportunityVolunteer_Bool_Exp = {
  Opportunity?: InputMaybe<Opportunity_Bool_Exp>;
  Volunteer?: InputMaybe<Volunteer_Bool_Exp>;
  _and?: InputMaybe<Array<OpportunityVolunteer_Bool_Exp>>;
  _not?: InputMaybe<OpportunityVolunteer_Bool_Exp>;
  _or?: InputMaybe<Array<OpportunityVolunteer_Bool_Exp>>;
  opportunity_id?: InputMaybe<Uuid_Comparison_Exp>;
  volunteer_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "OpportunityVolunteer" */
export enum OpportunityVolunteer_Constraint {
  /** unique or primary key constraint on columns "volunteer_id", "opportunity_id" */
  OpportunityVolunteerPkey = 'OpportunityVolunteer_pkey'
}

/** input type for inserting data into table "OpportunityVolunteer" */
export type OpportunityVolunteer_Insert_Input = {
  Opportunity?: InputMaybe<Opportunity_Obj_Rel_Insert_Input>;
  Volunteer?: InputMaybe<Volunteer_Obj_Rel_Insert_Input>;
  opportunity_id?: InputMaybe<Scalars['uuid']>;
  volunteer_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type OpportunityVolunteer_Max_Fields = {
  __typename?: 'OpportunityVolunteer_max_fields';
  opportunity_id?: Maybe<Scalars['uuid']>;
  volunteer_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "OpportunityVolunteer" */
export type OpportunityVolunteer_Max_Order_By = {
  opportunity_id?: InputMaybe<Order_By>;
  volunteer_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type OpportunityVolunteer_Min_Fields = {
  __typename?: 'OpportunityVolunteer_min_fields';
  opportunity_id?: Maybe<Scalars['uuid']>;
  volunteer_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "OpportunityVolunteer" */
export type OpportunityVolunteer_Min_Order_By = {
  opportunity_id?: InputMaybe<Order_By>;
  volunteer_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "OpportunityVolunteer" */
export type OpportunityVolunteer_Mutation_Response = {
  __typename?: 'OpportunityVolunteer_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<OpportunityVolunteer>;
};

/** on_conflict condition type for table "OpportunityVolunteer" */
export type OpportunityVolunteer_On_Conflict = {
  constraint: OpportunityVolunteer_Constraint;
  update_columns?: Array<OpportunityVolunteer_Update_Column>;
  where?: InputMaybe<OpportunityVolunteer_Bool_Exp>;
};

/** Ordering options when selecting data from "OpportunityVolunteer". */
export type OpportunityVolunteer_Order_By = {
  Opportunity?: InputMaybe<Opportunity_Order_By>;
  Volunteer?: InputMaybe<Volunteer_Order_By>;
  opportunity_id?: InputMaybe<Order_By>;
  volunteer_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: OpportunityVolunteer */
export type OpportunityVolunteer_Pk_Columns_Input = {
  opportunity_id: Scalars['uuid'];
  volunteer_id: Scalars['uuid'];
};

/** select columns of table "OpportunityVolunteer" */
export enum OpportunityVolunteer_Select_Column {
  /** column name */
  OpportunityId = 'opportunity_id',
  /** column name */
  VolunteerId = 'volunteer_id'
}

/** input type for updating data in table "OpportunityVolunteer" */
export type OpportunityVolunteer_Set_Input = {
  opportunity_id?: InputMaybe<Scalars['uuid']>;
  volunteer_id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "OpportunityVolunteer" */
export type OpportunityVolunteer_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: OpportunityVolunteer_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type OpportunityVolunteer_Stream_Cursor_Value_Input = {
  opportunity_id?: InputMaybe<Scalars['uuid']>;
  volunteer_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "OpportunityVolunteer" */
export enum OpportunityVolunteer_Update_Column {
  /** column name */
  OpportunityId = 'opportunity_id',
  /** column name */
  VolunteerId = 'volunteer_id'
}

export type OpportunityVolunteer_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<OpportunityVolunteer_Set_Input>;
  where: OpportunityVolunteer_Bool_Exp;
};

/** aggregated selection of "Opportunity" */
export type Opportunity_Aggregate = {
  __typename?: 'Opportunity_aggregate';
  aggregate?: Maybe<Opportunity_Aggregate_Fields>;
  nodes: Array<Opportunity>;
};

export type Opportunity_Aggregate_Bool_Exp = {
  count?: InputMaybe<Opportunity_Aggregate_Bool_Exp_Count>;
};

export type Opportunity_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Opportunity_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Opportunity_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "Opportunity" */
export type Opportunity_Aggregate_Fields = {
  __typename?: 'Opportunity_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Opportunity_Max_Fields>;
  min?: Maybe<Opportunity_Min_Fields>;
};


/** aggregate fields of "Opportunity" */
export type Opportunity_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Opportunity_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Opportunity" */
export type Opportunity_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Opportunity_Max_Order_By>;
  min?: InputMaybe<Opportunity_Min_Order_By>;
};

/** input type for inserting array relation for remote table "Opportunity" */
export type Opportunity_Arr_Rel_Insert_Input = {
  data: Array<Opportunity_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Opportunity_On_Conflict>;
};

/** Boolean expression to filter rows from the table "Opportunity". All fields are combined with a logical 'AND'. */
export type Opportunity_Bool_Exp = {
  Address?: InputMaybe<Address_Bool_Exp>;
  OpportunityVolunteers?: InputMaybe<OpportunityVolunteer_Bool_Exp>;
  OpportunityVolunteers_aggregate?: InputMaybe<OpportunityVolunteer_Aggregate_Bool_Exp>;
  _and?: InputMaybe<Array<Opportunity_Bool_Exp>>;
  _not?: InputMaybe<Opportunity_Bool_Exp>;
  _or?: InputMaybe<Array<Opportunity_Bool_Exp>>;
  address_id?: InputMaybe<Uuid_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  imgSrc?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Opportunity" */
export enum Opportunity_Constraint {
  /** unique or primary key constraint on columns "id" */
  OpportunityPkey = 'Opportunity_pkey'
}

/** input type for inserting data into table "Opportunity" */
export type Opportunity_Insert_Input = {
  Address?: InputMaybe<Address_Obj_Rel_Insert_Input>;
  OpportunityVolunteers?: InputMaybe<OpportunityVolunteer_Arr_Rel_Insert_Input>;
  address_id?: InputMaybe<Scalars['uuid']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  imgSrc?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Opportunity_Max_Fields = {
  __typename?: 'Opportunity_max_fields';
  address_id?: Maybe<Scalars['uuid']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  imgSrc?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "Opportunity" */
export type Opportunity_Max_Order_By = {
  address_id?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imgSrc?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Opportunity_Min_Fields = {
  __typename?: 'Opportunity_min_fields';
  address_id?: Maybe<Scalars['uuid']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  imgSrc?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "Opportunity" */
export type Opportunity_Min_Order_By = {
  address_id?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imgSrc?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "Opportunity" */
export type Opportunity_Mutation_Response = {
  __typename?: 'Opportunity_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Opportunity>;
};

/** input type for inserting object relation for remote table "Opportunity" */
export type Opportunity_Obj_Rel_Insert_Input = {
  data: Opportunity_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Opportunity_On_Conflict>;
};

/** on_conflict condition type for table "Opportunity" */
export type Opportunity_On_Conflict = {
  constraint: Opportunity_Constraint;
  update_columns?: Array<Opportunity_Update_Column>;
  where?: InputMaybe<Opportunity_Bool_Exp>;
};

/** Ordering options when selecting data from "Opportunity". */
export type Opportunity_Order_By = {
  Address?: InputMaybe<Address_Order_By>;
  OpportunityVolunteers_aggregate?: InputMaybe<OpportunityVolunteer_Aggregate_Order_By>;
  address_id?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  imgSrc?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Opportunity */
export type Opportunity_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "Opportunity" */
export enum Opportunity_Select_Column {
  /** column name */
  AddressId = 'address_id',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ImgSrc = 'imgSrc',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "Opportunity" */
export type Opportunity_Set_Input = {
  address_id?: InputMaybe<Scalars['uuid']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  imgSrc?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "Opportunity" */
export type Opportunity_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Opportunity_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Opportunity_Stream_Cursor_Value_Input = {
  address_id?: InputMaybe<Scalars['uuid']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  imgSrc?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "Opportunity" */
export enum Opportunity_Update_Column {
  /** column name */
  AddressId = 'address_id',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ImgSrc = 'imgSrc',
  /** column name */
  Name = 'name'
}

export type Opportunity_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Opportunity_Set_Input>;
  where: Opportunity_Bool_Exp;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "Volunteer" */
export type Volunteer = {
  __typename?: 'Volunteer';
  /** An array relationship */
  OpportunityVolunteers: Array<OpportunityVolunteer>;
  /** An aggregate relationship */
  OpportunityVolunteers_aggregate: OpportunityVolunteer_Aggregate;
  email: Scalars['String'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  profileSrc?: Maybe<Scalars['String']>;
};


/** columns and relationships of "Volunteer" */
export type VolunteerOpportunityVolunteersArgs = {
  distinct_on?: InputMaybe<Array<OpportunityVolunteer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OpportunityVolunteer_Order_By>>;
  where?: InputMaybe<OpportunityVolunteer_Bool_Exp>;
};


/** columns and relationships of "Volunteer" */
export type VolunteerOpportunityVolunteers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<OpportunityVolunteer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OpportunityVolunteer_Order_By>>;
  where?: InputMaybe<OpportunityVolunteer_Bool_Exp>;
};

/** aggregated selection of "Volunteer" */
export type Volunteer_Aggregate = {
  __typename?: 'Volunteer_aggregate';
  aggregate?: Maybe<Volunteer_Aggregate_Fields>;
  nodes: Array<Volunteer>;
};

/** aggregate fields of "Volunteer" */
export type Volunteer_Aggregate_Fields = {
  __typename?: 'Volunteer_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Volunteer_Max_Fields>;
  min?: Maybe<Volunteer_Min_Fields>;
};


/** aggregate fields of "Volunteer" */
export type Volunteer_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Volunteer_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "Volunteer". All fields are combined with a logical 'AND'. */
export type Volunteer_Bool_Exp = {
  OpportunityVolunteers?: InputMaybe<OpportunityVolunteer_Bool_Exp>;
  OpportunityVolunteers_aggregate?: InputMaybe<OpportunityVolunteer_Aggregate_Bool_Exp>;
  _and?: InputMaybe<Array<Volunteer_Bool_Exp>>;
  _not?: InputMaybe<Volunteer_Bool_Exp>;
  _or?: InputMaybe<Array<Volunteer_Bool_Exp>>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  profileSrc?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Volunteer" */
export enum Volunteer_Constraint {
  /** unique or primary key constraint on columns "email" */
  VolunteerEmailKey = 'Volunteer_email_key',
  /** unique or primary key constraint on columns "id" */
  VolunteerPkey = 'Volunteer_pkey'
}

/** input type for inserting data into table "Volunteer" */
export type Volunteer_Insert_Input = {
  OpportunityVolunteers?: InputMaybe<OpportunityVolunteer_Arr_Rel_Insert_Input>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  profileSrc?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Volunteer_Max_Fields = {
  __typename?: 'Volunteer_max_fields';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  profileSrc?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Volunteer_Min_Fields = {
  __typename?: 'Volunteer_min_fields';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  profileSrc?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "Volunteer" */
export type Volunteer_Mutation_Response = {
  __typename?: 'Volunteer_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Volunteer>;
};

/** input type for inserting object relation for remote table "Volunteer" */
export type Volunteer_Obj_Rel_Insert_Input = {
  data: Volunteer_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Volunteer_On_Conflict>;
};

/** on_conflict condition type for table "Volunteer" */
export type Volunteer_On_Conflict = {
  constraint: Volunteer_Constraint;
  update_columns?: Array<Volunteer_Update_Column>;
  where?: InputMaybe<Volunteer_Bool_Exp>;
};

/** Ordering options when selecting data from "Volunteer". */
export type Volunteer_Order_By = {
  OpportunityVolunteers_aggregate?: InputMaybe<OpportunityVolunteer_Aggregate_Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  profileSrc?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Volunteer */
export type Volunteer_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "Volunteer" */
export enum Volunteer_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ProfileSrc = 'profileSrc'
}

/** input type for updating data in table "Volunteer" */
export type Volunteer_Set_Input = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  profileSrc?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "Volunteer" */
export type Volunteer_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Volunteer_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Volunteer_Stream_Cursor_Value_Input = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  profileSrc?: InputMaybe<Scalars['String']>;
};

/** update columns of table "Volunteer" */
export enum Volunteer_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ProfileSrc = 'profileSrc'
}

export type Volunteer_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Volunteer_Set_Input>;
  where: Volunteer_Bool_Exp;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "Address" */
  delete_Address?: Maybe<Address_Mutation_Response>;
  /** delete single row from the table: "Address" */
  delete_Address_by_pk?: Maybe<Address>;
  /** delete data from the table: "Opportunity" */
  delete_Opportunity?: Maybe<Opportunity_Mutation_Response>;
  /** delete data from the table: "OpportunityVolunteer" */
  delete_OpportunityVolunteer?: Maybe<OpportunityVolunteer_Mutation_Response>;
  /** delete single row from the table: "OpportunityVolunteer" */
  delete_OpportunityVolunteer_by_pk?: Maybe<OpportunityVolunteer>;
  /** delete single row from the table: "Opportunity" */
  delete_Opportunity_by_pk?: Maybe<Opportunity>;
  /** delete data from the table: "Volunteer" */
  delete_Volunteer?: Maybe<Volunteer_Mutation_Response>;
  /** delete single row from the table: "Volunteer" */
  delete_Volunteer_by_pk?: Maybe<Volunteer>;
  /** insert data into the table: "Address" */
  insert_Address?: Maybe<Address_Mutation_Response>;
  /** insert a single row into the table: "Address" */
  insert_Address_one?: Maybe<Address>;
  /** insert data into the table: "Opportunity" */
  insert_Opportunity?: Maybe<Opportunity_Mutation_Response>;
  /** insert data into the table: "OpportunityVolunteer" */
  insert_OpportunityVolunteer?: Maybe<OpportunityVolunteer_Mutation_Response>;
  /** insert a single row into the table: "OpportunityVolunteer" */
  insert_OpportunityVolunteer_one?: Maybe<OpportunityVolunteer>;
  /** insert a single row into the table: "Opportunity" */
  insert_Opportunity_one?: Maybe<Opportunity>;
  /** insert data into the table: "Volunteer" */
  insert_Volunteer?: Maybe<Volunteer_Mutation_Response>;
  /** insert a single row into the table: "Volunteer" */
  insert_Volunteer_one?: Maybe<Volunteer>;
  /** update data of the table: "Address" */
  update_Address?: Maybe<Address_Mutation_Response>;
  /** update single row of the table: "Address" */
  update_Address_by_pk?: Maybe<Address>;
  /** update multiples rows of table: "Address" */
  update_Address_many?: Maybe<Array<Maybe<Address_Mutation_Response>>>;
  /** update data of the table: "Opportunity" */
  update_Opportunity?: Maybe<Opportunity_Mutation_Response>;
  /** update data of the table: "OpportunityVolunteer" */
  update_OpportunityVolunteer?: Maybe<OpportunityVolunteer_Mutation_Response>;
  /** update single row of the table: "OpportunityVolunteer" */
  update_OpportunityVolunteer_by_pk?: Maybe<OpportunityVolunteer>;
  /** update multiples rows of table: "OpportunityVolunteer" */
  update_OpportunityVolunteer_many?: Maybe<Array<Maybe<OpportunityVolunteer_Mutation_Response>>>;
  /** update single row of the table: "Opportunity" */
  update_Opportunity_by_pk?: Maybe<Opportunity>;
  /** update multiples rows of table: "Opportunity" */
  update_Opportunity_many?: Maybe<Array<Maybe<Opportunity_Mutation_Response>>>;
  /** update data of the table: "Volunteer" */
  update_Volunteer?: Maybe<Volunteer_Mutation_Response>;
  /** update single row of the table: "Volunteer" */
  update_Volunteer_by_pk?: Maybe<Volunteer>;
  /** update multiples rows of table: "Volunteer" */
  update_Volunteer_many?: Maybe<Array<Maybe<Volunteer_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_AddressArgs = {
  where: Address_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Address_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_OpportunityArgs = {
  where: Opportunity_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_OpportunityVolunteerArgs = {
  where: OpportunityVolunteer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_OpportunityVolunteer_By_PkArgs = {
  opportunity_id: Scalars['uuid'];
  volunteer_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Opportunity_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_VolunteerArgs = {
  where: Volunteer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Volunteer_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_AddressArgs = {
  objects: Array<Address_Insert_Input>;
  on_conflict?: InputMaybe<Address_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Address_OneArgs = {
  object: Address_Insert_Input;
  on_conflict?: InputMaybe<Address_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OpportunityArgs = {
  objects: Array<Opportunity_Insert_Input>;
  on_conflict?: InputMaybe<Opportunity_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OpportunityVolunteerArgs = {
  objects: Array<OpportunityVolunteer_Insert_Input>;
  on_conflict?: InputMaybe<OpportunityVolunteer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OpportunityVolunteer_OneArgs = {
  object: OpportunityVolunteer_Insert_Input;
  on_conflict?: InputMaybe<OpportunityVolunteer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Opportunity_OneArgs = {
  object: Opportunity_Insert_Input;
  on_conflict?: InputMaybe<Opportunity_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_VolunteerArgs = {
  objects: Array<Volunteer_Insert_Input>;
  on_conflict?: InputMaybe<Volunteer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Volunteer_OneArgs = {
  object: Volunteer_Insert_Input;
  on_conflict?: InputMaybe<Volunteer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_AddressArgs = {
  _set?: InputMaybe<Address_Set_Input>;
  where: Address_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Address_By_PkArgs = {
  _set?: InputMaybe<Address_Set_Input>;
  pk_columns: Address_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Address_ManyArgs = {
  updates: Array<Address_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_OpportunityArgs = {
  _set?: InputMaybe<Opportunity_Set_Input>;
  where: Opportunity_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_OpportunityVolunteerArgs = {
  _set?: InputMaybe<OpportunityVolunteer_Set_Input>;
  where: OpportunityVolunteer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_OpportunityVolunteer_By_PkArgs = {
  _set?: InputMaybe<OpportunityVolunteer_Set_Input>;
  pk_columns: OpportunityVolunteer_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_OpportunityVolunteer_ManyArgs = {
  updates: Array<OpportunityVolunteer_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Opportunity_By_PkArgs = {
  _set?: InputMaybe<Opportunity_Set_Input>;
  pk_columns: Opportunity_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Opportunity_ManyArgs = {
  updates: Array<Opportunity_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_VolunteerArgs = {
  _set?: InputMaybe<Volunteer_Set_Input>;
  where: Volunteer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Volunteer_By_PkArgs = {
  _set?: InputMaybe<Volunteer_Set_Input>;
  pk_columns: Volunteer_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Volunteer_ManyArgs = {
  updates: Array<Volunteer_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "Address" */
  Address: Array<Address>;
  /** fetch aggregated fields from the table: "Address" */
  Address_aggregate: Address_Aggregate;
  /** fetch data from the table: "Address" using primary key columns */
  Address_by_pk?: Maybe<Address>;
  /** fetch data from the table: "Opportunity" */
  Opportunity: Array<Opportunity>;
  /** fetch data from the table: "OpportunityVolunteer" */
  OpportunityVolunteer: Array<OpportunityVolunteer>;
  /** fetch aggregated fields from the table: "OpportunityVolunteer" */
  OpportunityVolunteer_aggregate: OpportunityVolunteer_Aggregate;
  /** fetch data from the table: "OpportunityVolunteer" using primary key columns */
  OpportunityVolunteer_by_pk?: Maybe<OpportunityVolunteer>;
  /** fetch aggregated fields from the table: "Opportunity" */
  Opportunity_aggregate: Opportunity_Aggregate;
  /** fetch data from the table: "Opportunity" using primary key columns */
  Opportunity_by_pk?: Maybe<Opportunity>;
  /** fetch data from the table: "Volunteer" */
  Volunteer: Array<Volunteer>;
  /** fetch aggregated fields from the table: "Volunteer" */
  Volunteer_aggregate: Volunteer_Aggregate;
  /** fetch data from the table: "Volunteer" using primary key columns */
  Volunteer_by_pk?: Maybe<Volunteer>;
};


export type Query_RootAddressArgs = {
  distinct_on?: InputMaybe<Array<Address_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Address_Order_By>>;
  where?: InputMaybe<Address_Bool_Exp>;
};


export type Query_RootAddress_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Address_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Address_Order_By>>;
  where?: InputMaybe<Address_Bool_Exp>;
};


export type Query_RootAddress_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootOpportunityArgs = {
  distinct_on?: InputMaybe<Array<Opportunity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Opportunity_Order_By>>;
  where?: InputMaybe<Opportunity_Bool_Exp>;
};


export type Query_RootOpportunityVolunteerArgs = {
  distinct_on?: InputMaybe<Array<OpportunityVolunteer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OpportunityVolunteer_Order_By>>;
  where?: InputMaybe<OpportunityVolunteer_Bool_Exp>;
};


export type Query_RootOpportunityVolunteer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<OpportunityVolunteer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OpportunityVolunteer_Order_By>>;
  where?: InputMaybe<OpportunityVolunteer_Bool_Exp>;
};


export type Query_RootOpportunityVolunteer_By_PkArgs = {
  opportunity_id: Scalars['uuid'];
  volunteer_id: Scalars['uuid'];
};


export type Query_RootOpportunity_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Opportunity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Opportunity_Order_By>>;
  where?: InputMaybe<Opportunity_Bool_Exp>;
};


export type Query_RootOpportunity_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootVolunteerArgs = {
  distinct_on?: InputMaybe<Array<Volunteer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Volunteer_Order_By>>;
  where?: InputMaybe<Volunteer_Bool_Exp>;
};


export type Query_RootVolunteer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Volunteer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Volunteer_Order_By>>;
  where?: InputMaybe<Volunteer_Bool_Exp>;
};


export type Query_RootVolunteer_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "Address" */
  Address: Array<Address>;
  /** fetch aggregated fields from the table: "Address" */
  Address_aggregate: Address_Aggregate;
  /** fetch data from the table: "Address" using primary key columns */
  Address_by_pk?: Maybe<Address>;
  /** fetch data from the table in a streaming manner: "Address" */
  Address_stream: Array<Address>;
  /** fetch data from the table: "Opportunity" */
  Opportunity: Array<Opportunity>;
  /** fetch data from the table: "OpportunityVolunteer" */
  OpportunityVolunteer: Array<OpportunityVolunteer>;
  /** fetch aggregated fields from the table: "OpportunityVolunteer" */
  OpportunityVolunteer_aggregate: OpportunityVolunteer_Aggregate;
  /** fetch data from the table: "OpportunityVolunteer" using primary key columns */
  OpportunityVolunteer_by_pk?: Maybe<OpportunityVolunteer>;
  /** fetch data from the table in a streaming manner: "OpportunityVolunteer" */
  OpportunityVolunteer_stream: Array<OpportunityVolunteer>;
  /** fetch aggregated fields from the table: "Opportunity" */
  Opportunity_aggregate: Opportunity_Aggregate;
  /** fetch data from the table: "Opportunity" using primary key columns */
  Opportunity_by_pk?: Maybe<Opportunity>;
  /** fetch data from the table in a streaming manner: "Opportunity" */
  Opportunity_stream: Array<Opportunity>;
  /** fetch data from the table: "Volunteer" */
  Volunteer: Array<Volunteer>;
  /** fetch aggregated fields from the table: "Volunteer" */
  Volunteer_aggregate: Volunteer_Aggregate;
  /** fetch data from the table: "Volunteer" using primary key columns */
  Volunteer_by_pk?: Maybe<Volunteer>;
  /** fetch data from the table in a streaming manner: "Volunteer" */
  Volunteer_stream: Array<Volunteer>;
};


export type Subscription_RootAddressArgs = {
  distinct_on?: InputMaybe<Array<Address_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Address_Order_By>>;
  where?: InputMaybe<Address_Bool_Exp>;
};


export type Subscription_RootAddress_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Address_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Address_Order_By>>;
  where?: InputMaybe<Address_Bool_Exp>;
};


export type Subscription_RootAddress_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAddress_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Address_Stream_Cursor_Input>>;
  where?: InputMaybe<Address_Bool_Exp>;
};


export type Subscription_RootOpportunityArgs = {
  distinct_on?: InputMaybe<Array<Opportunity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Opportunity_Order_By>>;
  where?: InputMaybe<Opportunity_Bool_Exp>;
};


export type Subscription_RootOpportunityVolunteerArgs = {
  distinct_on?: InputMaybe<Array<OpportunityVolunteer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OpportunityVolunteer_Order_By>>;
  where?: InputMaybe<OpportunityVolunteer_Bool_Exp>;
};


export type Subscription_RootOpportunityVolunteer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<OpportunityVolunteer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<OpportunityVolunteer_Order_By>>;
  where?: InputMaybe<OpportunityVolunteer_Bool_Exp>;
};


export type Subscription_RootOpportunityVolunteer_By_PkArgs = {
  opportunity_id: Scalars['uuid'];
  volunteer_id: Scalars['uuid'];
};


export type Subscription_RootOpportunityVolunteer_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<OpportunityVolunteer_Stream_Cursor_Input>>;
  where?: InputMaybe<OpportunityVolunteer_Bool_Exp>;
};


export type Subscription_RootOpportunity_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Opportunity_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Opportunity_Order_By>>;
  where?: InputMaybe<Opportunity_Bool_Exp>;
};


export type Subscription_RootOpportunity_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootOpportunity_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Opportunity_Stream_Cursor_Input>>;
  where?: InputMaybe<Opportunity_Bool_Exp>;
};


export type Subscription_RootVolunteerArgs = {
  distinct_on?: InputMaybe<Array<Volunteer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Volunteer_Order_By>>;
  where?: InputMaybe<Volunteer_Bool_Exp>;
};


export type Subscription_RootVolunteer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Volunteer_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Volunteer_Order_By>>;
  where?: InputMaybe<Volunteer_Bool_Exp>;
};


export type Subscription_RootVolunteer_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootVolunteer_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Volunteer_Stream_Cursor_Input>>;
  where?: InputMaybe<Volunteer_Bool_Exp>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type GetAllQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllQuery = { __typename?: 'query_root', Opportunity: Array<{ __typename?: 'Opportunity', name: string, Address: { __typename?: 'Address', city: string, country: string, state: string, streetAddress: string, zipCode: string }, OpportunityVolunteers: Array<{ __typename?: 'OpportunityVolunteer', Volunteer: { __typename?: 'Volunteer', name: string } }> }> };



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Address: ResolverTypeWrapper<Address>;
  Address_aggregate: ResolverTypeWrapper<Address_Aggregate>;
  Address_aggregate_fields: ResolverTypeWrapper<Address_Aggregate_Fields>;
  Address_bool_exp: Address_Bool_Exp;
  Address_constraint: Address_Constraint;
  Address_insert_input: Address_Insert_Input;
  Address_max_fields: ResolverTypeWrapper<Address_Max_Fields>;
  Address_min_fields: ResolverTypeWrapper<Address_Min_Fields>;
  Address_mutation_response: ResolverTypeWrapper<Address_Mutation_Response>;
  Address_obj_rel_insert_input: Address_Obj_Rel_Insert_Input;
  Address_on_conflict: Address_On_Conflict;
  Address_order_by: Address_Order_By;
  Address_pk_columns_input: Address_Pk_Columns_Input;
  Address_select_column: Address_Select_Column;
  Address_set_input: Address_Set_Input;
  Address_stream_cursor_input: Address_Stream_Cursor_Input;
  Address_stream_cursor_value_input: Address_Stream_Cursor_Value_Input;
  Address_update_column: Address_Update_Column;
  Address_updates: Address_Updates;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Int_comparison_exp: Int_Comparison_Exp;
  Opportunity: ResolverTypeWrapper<Opportunity>;
  OpportunityVolunteer: ResolverTypeWrapper<OpportunityVolunteer>;
  OpportunityVolunteer_aggregate: ResolverTypeWrapper<OpportunityVolunteer_Aggregate>;
  OpportunityVolunteer_aggregate_bool_exp: OpportunityVolunteer_Aggregate_Bool_Exp;
  OpportunityVolunteer_aggregate_bool_exp_count: OpportunityVolunteer_Aggregate_Bool_Exp_Count;
  OpportunityVolunteer_aggregate_fields: ResolverTypeWrapper<OpportunityVolunteer_Aggregate_Fields>;
  OpportunityVolunteer_aggregate_order_by: OpportunityVolunteer_Aggregate_Order_By;
  OpportunityVolunteer_arr_rel_insert_input: OpportunityVolunteer_Arr_Rel_Insert_Input;
  OpportunityVolunteer_bool_exp: OpportunityVolunteer_Bool_Exp;
  OpportunityVolunteer_constraint: OpportunityVolunteer_Constraint;
  OpportunityVolunteer_insert_input: OpportunityVolunteer_Insert_Input;
  OpportunityVolunteer_max_fields: ResolverTypeWrapper<OpportunityVolunteer_Max_Fields>;
  OpportunityVolunteer_max_order_by: OpportunityVolunteer_Max_Order_By;
  OpportunityVolunteer_min_fields: ResolverTypeWrapper<OpportunityVolunteer_Min_Fields>;
  OpportunityVolunteer_min_order_by: OpportunityVolunteer_Min_Order_By;
  OpportunityVolunteer_mutation_response: ResolverTypeWrapper<OpportunityVolunteer_Mutation_Response>;
  OpportunityVolunteer_on_conflict: OpportunityVolunteer_On_Conflict;
  OpportunityVolunteer_order_by: OpportunityVolunteer_Order_By;
  OpportunityVolunteer_pk_columns_input: OpportunityVolunteer_Pk_Columns_Input;
  OpportunityVolunteer_select_column: OpportunityVolunteer_Select_Column;
  OpportunityVolunteer_set_input: OpportunityVolunteer_Set_Input;
  OpportunityVolunteer_stream_cursor_input: OpportunityVolunteer_Stream_Cursor_Input;
  OpportunityVolunteer_stream_cursor_value_input: OpportunityVolunteer_Stream_Cursor_Value_Input;
  OpportunityVolunteer_update_column: OpportunityVolunteer_Update_Column;
  OpportunityVolunteer_updates: OpportunityVolunteer_Updates;
  Opportunity_aggregate: ResolverTypeWrapper<Opportunity_Aggregate>;
  Opportunity_aggregate_bool_exp: Opportunity_Aggregate_Bool_Exp;
  Opportunity_aggregate_bool_exp_count: Opportunity_Aggregate_Bool_Exp_Count;
  Opportunity_aggregate_fields: ResolverTypeWrapper<Opportunity_Aggregate_Fields>;
  Opportunity_aggregate_order_by: Opportunity_Aggregate_Order_By;
  Opportunity_arr_rel_insert_input: Opportunity_Arr_Rel_Insert_Input;
  Opportunity_bool_exp: Opportunity_Bool_Exp;
  Opportunity_constraint: Opportunity_Constraint;
  Opportunity_insert_input: Opportunity_Insert_Input;
  Opportunity_max_fields: ResolverTypeWrapper<Opportunity_Max_Fields>;
  Opportunity_max_order_by: Opportunity_Max_Order_By;
  Opportunity_min_fields: ResolverTypeWrapper<Opportunity_Min_Fields>;
  Opportunity_min_order_by: Opportunity_Min_Order_By;
  Opportunity_mutation_response: ResolverTypeWrapper<Opportunity_Mutation_Response>;
  Opportunity_obj_rel_insert_input: Opportunity_Obj_Rel_Insert_Input;
  Opportunity_on_conflict: Opportunity_On_Conflict;
  Opportunity_order_by: Opportunity_Order_By;
  Opportunity_pk_columns_input: Opportunity_Pk_Columns_Input;
  Opportunity_select_column: Opportunity_Select_Column;
  Opportunity_set_input: Opportunity_Set_Input;
  Opportunity_stream_cursor_input: Opportunity_Stream_Cursor_Input;
  Opportunity_stream_cursor_value_input: Opportunity_Stream_Cursor_Value_Input;
  Opportunity_update_column: Opportunity_Update_Column;
  Opportunity_updates: Opportunity_Updates;
  String: ResolverTypeWrapper<Scalars['String']>;
  String_comparison_exp: String_Comparison_Exp;
  Volunteer: ResolverTypeWrapper<Volunteer>;
  Volunteer_aggregate: ResolverTypeWrapper<Volunteer_Aggregate>;
  Volunteer_aggregate_fields: ResolverTypeWrapper<Volunteer_Aggregate_Fields>;
  Volunteer_bool_exp: Volunteer_Bool_Exp;
  Volunteer_constraint: Volunteer_Constraint;
  Volunteer_insert_input: Volunteer_Insert_Input;
  Volunteer_max_fields: ResolverTypeWrapper<Volunteer_Max_Fields>;
  Volunteer_min_fields: ResolverTypeWrapper<Volunteer_Min_Fields>;
  Volunteer_mutation_response: ResolverTypeWrapper<Volunteer_Mutation_Response>;
  Volunteer_obj_rel_insert_input: Volunteer_Obj_Rel_Insert_Input;
  Volunteer_on_conflict: Volunteer_On_Conflict;
  Volunteer_order_by: Volunteer_Order_By;
  Volunteer_pk_columns_input: Volunteer_Pk_Columns_Input;
  Volunteer_select_column: Volunteer_Select_Column;
  Volunteer_set_input: Volunteer_Set_Input;
  Volunteer_stream_cursor_input: Volunteer_Stream_Cursor_Input;
  Volunteer_stream_cursor_value_input: Volunteer_Stream_Cursor_Value_Input;
  Volunteer_update_column: Volunteer_Update_Column;
  Volunteer_updates: Volunteer_Updates;
  cursor_ordering: Cursor_Ordering;
  mutation_root: ResolverTypeWrapper<{}>;
  order_by: Order_By;
  query_root: ResolverTypeWrapper<{}>;
  subscription_root: ResolverTypeWrapper<{}>;
  uuid: ResolverTypeWrapper<Scalars['uuid']>;
  uuid_comparison_exp: Uuid_Comparison_Exp;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Address: Address;
  Address_aggregate: Address_Aggregate;
  Address_aggregate_fields: Address_Aggregate_Fields;
  Address_bool_exp: Address_Bool_Exp;
  Address_insert_input: Address_Insert_Input;
  Address_max_fields: Address_Max_Fields;
  Address_min_fields: Address_Min_Fields;
  Address_mutation_response: Address_Mutation_Response;
  Address_obj_rel_insert_input: Address_Obj_Rel_Insert_Input;
  Address_on_conflict: Address_On_Conflict;
  Address_order_by: Address_Order_By;
  Address_pk_columns_input: Address_Pk_Columns_Input;
  Address_set_input: Address_Set_Input;
  Address_stream_cursor_input: Address_Stream_Cursor_Input;
  Address_stream_cursor_value_input: Address_Stream_Cursor_Value_Input;
  Address_updates: Address_Updates;
  Boolean: Scalars['Boolean'];
  Int: Scalars['Int'];
  Int_comparison_exp: Int_Comparison_Exp;
  Opportunity: Opportunity;
  OpportunityVolunteer: OpportunityVolunteer;
  OpportunityVolunteer_aggregate: OpportunityVolunteer_Aggregate;
  OpportunityVolunteer_aggregate_bool_exp: OpportunityVolunteer_Aggregate_Bool_Exp;
  OpportunityVolunteer_aggregate_bool_exp_count: OpportunityVolunteer_Aggregate_Bool_Exp_Count;
  OpportunityVolunteer_aggregate_fields: OpportunityVolunteer_Aggregate_Fields;
  OpportunityVolunteer_aggregate_order_by: OpportunityVolunteer_Aggregate_Order_By;
  OpportunityVolunteer_arr_rel_insert_input: OpportunityVolunteer_Arr_Rel_Insert_Input;
  OpportunityVolunteer_bool_exp: OpportunityVolunteer_Bool_Exp;
  OpportunityVolunteer_insert_input: OpportunityVolunteer_Insert_Input;
  OpportunityVolunteer_max_fields: OpportunityVolunteer_Max_Fields;
  OpportunityVolunteer_max_order_by: OpportunityVolunteer_Max_Order_By;
  OpportunityVolunteer_min_fields: OpportunityVolunteer_Min_Fields;
  OpportunityVolunteer_min_order_by: OpportunityVolunteer_Min_Order_By;
  OpportunityVolunteer_mutation_response: OpportunityVolunteer_Mutation_Response;
  OpportunityVolunteer_on_conflict: OpportunityVolunteer_On_Conflict;
  OpportunityVolunteer_order_by: OpportunityVolunteer_Order_By;
  OpportunityVolunteer_pk_columns_input: OpportunityVolunteer_Pk_Columns_Input;
  OpportunityVolunteer_set_input: OpportunityVolunteer_Set_Input;
  OpportunityVolunteer_stream_cursor_input: OpportunityVolunteer_Stream_Cursor_Input;
  OpportunityVolunteer_stream_cursor_value_input: OpportunityVolunteer_Stream_Cursor_Value_Input;
  OpportunityVolunteer_updates: OpportunityVolunteer_Updates;
  Opportunity_aggregate: Opportunity_Aggregate;
  Opportunity_aggregate_bool_exp: Opportunity_Aggregate_Bool_Exp;
  Opportunity_aggregate_bool_exp_count: Opportunity_Aggregate_Bool_Exp_Count;
  Opportunity_aggregate_fields: Opportunity_Aggregate_Fields;
  Opportunity_aggregate_order_by: Opportunity_Aggregate_Order_By;
  Opportunity_arr_rel_insert_input: Opportunity_Arr_Rel_Insert_Input;
  Opportunity_bool_exp: Opportunity_Bool_Exp;
  Opportunity_insert_input: Opportunity_Insert_Input;
  Opportunity_max_fields: Opportunity_Max_Fields;
  Opportunity_max_order_by: Opportunity_Max_Order_By;
  Opportunity_min_fields: Opportunity_Min_Fields;
  Opportunity_min_order_by: Opportunity_Min_Order_By;
  Opportunity_mutation_response: Opportunity_Mutation_Response;
  Opportunity_obj_rel_insert_input: Opportunity_Obj_Rel_Insert_Input;
  Opportunity_on_conflict: Opportunity_On_Conflict;
  Opportunity_order_by: Opportunity_Order_By;
  Opportunity_pk_columns_input: Opportunity_Pk_Columns_Input;
  Opportunity_set_input: Opportunity_Set_Input;
  Opportunity_stream_cursor_input: Opportunity_Stream_Cursor_Input;
  Opportunity_stream_cursor_value_input: Opportunity_Stream_Cursor_Value_Input;
  Opportunity_updates: Opportunity_Updates;
  String: Scalars['String'];
  String_comparison_exp: String_Comparison_Exp;
  Volunteer: Volunteer;
  Volunteer_aggregate: Volunteer_Aggregate;
  Volunteer_aggregate_fields: Volunteer_Aggregate_Fields;
  Volunteer_bool_exp: Volunteer_Bool_Exp;
  Volunteer_insert_input: Volunteer_Insert_Input;
  Volunteer_max_fields: Volunteer_Max_Fields;
  Volunteer_min_fields: Volunteer_Min_Fields;
  Volunteer_mutation_response: Volunteer_Mutation_Response;
  Volunteer_obj_rel_insert_input: Volunteer_Obj_Rel_Insert_Input;
  Volunteer_on_conflict: Volunteer_On_Conflict;
  Volunteer_order_by: Volunteer_Order_By;
  Volunteer_pk_columns_input: Volunteer_Pk_Columns_Input;
  Volunteer_set_input: Volunteer_Set_Input;
  Volunteer_stream_cursor_input: Volunteer_Stream_Cursor_Input;
  Volunteer_stream_cursor_value_input: Volunteer_Stream_Cursor_Value_Input;
  Volunteer_updates: Volunteer_Updates;
  mutation_root: {};
  query_root: {};
  subscription_root: {};
  uuid: Scalars['uuid'];
  uuid_comparison_exp: Uuid_Comparison_Exp;
};

export type CachedDirectiveArgs = {
  refresh?: Scalars['Boolean'];
  ttl?: Scalars['Int'];
};

export type CachedDirectiveResolver<Result, Parent, ContextType = any, Args = CachedDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AddressResolvers<ContextType = any, ParentType extends ResolversParentTypes['Address'] = ResolversParentTypes['Address']> = {
  Opportunities?: Resolver<Array<ResolversTypes['Opportunity']>, ParentType, ContextType, Partial<AddressOpportunitiesArgs>>;
  Opportunities_aggregate?: Resolver<ResolversTypes['Opportunity_aggregate'], ParentType, ContextType, Partial<AddressOpportunities_AggregateArgs>>;
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  state?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  streetAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  zipCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Address_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['Address_aggregate'] = ResolversParentTypes['Address_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['Address_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['Address']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Address_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Address_aggregate_fields'] = ResolversParentTypes['Address_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Address_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['Address_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['Address_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Address_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Address_max_fields'] = ResolversParentTypes['Address_max_fields']> = {
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  streetAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zipCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Address_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Address_min_fields'] = ResolversParentTypes['Address_min_fields']> = {
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  state?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  streetAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  zipCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Address_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['Address_mutation_response'] = ResolversParentTypes['Address_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['Address']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OpportunityResolvers<ContextType = any, ParentType extends ResolversParentTypes['Opportunity'] = ResolversParentTypes['Opportunity']> = {
  Address?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  OpportunityVolunteers?: Resolver<Array<ResolversTypes['OpportunityVolunteer']>, ParentType, ContextType, Partial<OpportunityOpportunityVolunteersArgs>>;
  OpportunityVolunteers_aggregate?: Resolver<ResolversTypes['OpportunityVolunteer_aggregate'], ParentType, ContextType, Partial<OpportunityOpportunityVolunteers_AggregateArgs>>;
  address_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  imgSrc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OpportunityVolunteerResolvers<ContextType = any, ParentType extends ResolversParentTypes['OpportunityVolunteer'] = ResolversParentTypes['OpportunityVolunteer']> = {
  Opportunity?: Resolver<ResolversTypes['Opportunity'], ParentType, ContextType>;
  Volunteer?: Resolver<ResolversTypes['Volunteer'], ParentType, ContextType>;
  opportunity_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  volunteer_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OpportunityVolunteer_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['OpportunityVolunteer_aggregate'] = ResolversParentTypes['OpportunityVolunteer_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['OpportunityVolunteer_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['OpportunityVolunteer']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OpportunityVolunteer_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['OpportunityVolunteer_aggregate_fields'] = ResolversParentTypes['OpportunityVolunteer_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<OpportunityVolunteer_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['OpportunityVolunteer_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['OpportunityVolunteer_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OpportunityVolunteer_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['OpportunityVolunteer_max_fields'] = ResolversParentTypes['OpportunityVolunteer_max_fields']> = {
  opportunity_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  volunteer_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OpportunityVolunteer_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['OpportunityVolunteer_min_fields'] = ResolversParentTypes['OpportunityVolunteer_min_fields']> = {
  opportunity_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  volunteer_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OpportunityVolunteer_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['OpportunityVolunteer_mutation_response'] = ResolversParentTypes['OpportunityVolunteer_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['OpportunityVolunteer']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Opportunity_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['Opportunity_aggregate'] = ResolversParentTypes['Opportunity_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['Opportunity_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['Opportunity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Opportunity_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Opportunity_aggregate_fields'] = ResolversParentTypes['Opportunity_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Opportunity_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['Opportunity_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['Opportunity_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Opportunity_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Opportunity_max_fields'] = ResolversParentTypes['Opportunity_max_fields']> = {
  address_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  imgSrc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Opportunity_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Opportunity_min_fields'] = ResolversParentTypes['Opportunity_min_fields']> = {
  address_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  imgSrc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Opportunity_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['Opportunity_mutation_response'] = ResolversParentTypes['Opportunity_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['Opportunity']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VolunteerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Volunteer'] = ResolversParentTypes['Volunteer']> = {
  OpportunityVolunteers?: Resolver<Array<ResolversTypes['OpportunityVolunteer']>, ParentType, ContextType, Partial<VolunteerOpportunityVolunteersArgs>>;
  OpportunityVolunteers_aggregate?: Resolver<ResolversTypes['OpportunityVolunteer_aggregate'], ParentType, ContextType, Partial<VolunteerOpportunityVolunteers_AggregateArgs>>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  profileSrc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Volunteer_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['Volunteer_aggregate'] = ResolversParentTypes['Volunteer_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['Volunteer_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['Volunteer']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Volunteer_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Volunteer_aggregate_fields'] = ResolversParentTypes['Volunteer_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Volunteer_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['Volunteer_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['Volunteer_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Volunteer_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Volunteer_max_fields'] = ResolversParentTypes['Volunteer_max_fields']> = {
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  profileSrc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Volunteer_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Volunteer_min_fields'] = ResolversParentTypes['Volunteer_min_fields']> = {
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  profileSrc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Volunteer_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['Volunteer_mutation_response'] = ResolversParentTypes['Volunteer_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['Volunteer']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Mutation_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['mutation_root'] = ResolversParentTypes['mutation_root']> = {
  delete_Address?: Resolver<Maybe<ResolversTypes['Address_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_AddressArgs, 'where'>>;
  delete_Address_by_pk?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Address_By_PkArgs, 'id'>>;
  delete_Opportunity?: Resolver<Maybe<ResolversTypes['Opportunity_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_OpportunityArgs, 'where'>>;
  delete_OpportunityVolunteer?: Resolver<Maybe<ResolversTypes['OpportunityVolunteer_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_OpportunityVolunteerArgs, 'where'>>;
  delete_OpportunityVolunteer_by_pk?: Resolver<Maybe<ResolversTypes['OpportunityVolunteer']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_OpportunityVolunteer_By_PkArgs, 'opportunity_id' | 'volunteer_id'>>;
  delete_Opportunity_by_pk?: Resolver<Maybe<ResolversTypes['Opportunity']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Opportunity_By_PkArgs, 'id'>>;
  delete_Volunteer?: Resolver<Maybe<ResolversTypes['Volunteer_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_VolunteerArgs, 'where'>>;
  delete_Volunteer_by_pk?: Resolver<Maybe<ResolversTypes['Volunteer']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Volunteer_By_PkArgs, 'id'>>;
  insert_Address?: Resolver<Maybe<ResolversTypes['Address_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_AddressArgs, 'objects'>>;
  insert_Address_one?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Address_OneArgs, 'object'>>;
  insert_Opportunity?: Resolver<Maybe<ResolversTypes['Opportunity_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_OpportunityArgs, 'objects'>>;
  insert_OpportunityVolunteer?: Resolver<Maybe<ResolversTypes['OpportunityVolunteer_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_OpportunityVolunteerArgs, 'objects'>>;
  insert_OpportunityVolunteer_one?: Resolver<Maybe<ResolversTypes['OpportunityVolunteer']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_OpportunityVolunteer_OneArgs, 'object'>>;
  insert_Opportunity_one?: Resolver<Maybe<ResolversTypes['Opportunity']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Opportunity_OneArgs, 'object'>>;
  insert_Volunteer?: Resolver<Maybe<ResolversTypes['Volunteer_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_VolunteerArgs, 'objects'>>;
  insert_Volunteer_one?: Resolver<Maybe<ResolversTypes['Volunteer']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Volunteer_OneArgs, 'object'>>;
  update_Address?: Resolver<Maybe<ResolversTypes['Address_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_AddressArgs, 'where'>>;
  update_Address_by_pk?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Address_By_PkArgs, 'pk_columns'>>;
  update_Address_many?: Resolver<Maybe<Array<Maybe<ResolversTypes['Address_mutation_response']>>>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Address_ManyArgs, 'updates'>>;
  update_Opportunity?: Resolver<Maybe<ResolversTypes['Opportunity_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_OpportunityArgs, 'where'>>;
  update_OpportunityVolunteer?: Resolver<Maybe<ResolversTypes['OpportunityVolunteer_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_OpportunityVolunteerArgs, 'where'>>;
  update_OpportunityVolunteer_by_pk?: Resolver<Maybe<ResolversTypes['OpportunityVolunteer']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_OpportunityVolunteer_By_PkArgs, 'pk_columns'>>;
  update_OpportunityVolunteer_many?: Resolver<Maybe<Array<Maybe<ResolversTypes['OpportunityVolunteer_mutation_response']>>>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_OpportunityVolunteer_ManyArgs, 'updates'>>;
  update_Opportunity_by_pk?: Resolver<Maybe<ResolversTypes['Opportunity']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Opportunity_By_PkArgs, 'pk_columns'>>;
  update_Opportunity_many?: Resolver<Maybe<Array<Maybe<ResolversTypes['Opportunity_mutation_response']>>>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Opportunity_ManyArgs, 'updates'>>;
  update_Volunteer?: Resolver<Maybe<ResolversTypes['Volunteer_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_VolunteerArgs, 'where'>>;
  update_Volunteer_by_pk?: Resolver<Maybe<ResolversTypes['Volunteer']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Volunteer_By_PkArgs, 'pk_columns'>>;
  update_Volunteer_many?: Resolver<Maybe<Array<Maybe<ResolversTypes['Volunteer_mutation_response']>>>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Volunteer_ManyArgs, 'updates'>>;
};

export type Query_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['query_root'] = ResolversParentTypes['query_root']> = {
  Address?: Resolver<Array<ResolversTypes['Address']>, ParentType, ContextType, Partial<Query_RootAddressArgs>>;
  Address_aggregate?: Resolver<ResolversTypes['Address_aggregate'], ParentType, ContextType, Partial<Query_RootAddress_AggregateArgs>>;
  Address_by_pk?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType, RequireFields<Query_RootAddress_By_PkArgs, 'id'>>;
  Opportunity?: Resolver<Array<ResolversTypes['Opportunity']>, ParentType, ContextType, Partial<Query_RootOpportunityArgs>>;
  OpportunityVolunteer?: Resolver<Array<ResolversTypes['OpportunityVolunteer']>, ParentType, ContextType, Partial<Query_RootOpportunityVolunteerArgs>>;
  OpportunityVolunteer_aggregate?: Resolver<ResolversTypes['OpportunityVolunteer_aggregate'], ParentType, ContextType, Partial<Query_RootOpportunityVolunteer_AggregateArgs>>;
  OpportunityVolunteer_by_pk?: Resolver<Maybe<ResolversTypes['OpportunityVolunteer']>, ParentType, ContextType, RequireFields<Query_RootOpportunityVolunteer_By_PkArgs, 'opportunity_id' | 'volunteer_id'>>;
  Opportunity_aggregate?: Resolver<ResolversTypes['Opportunity_aggregate'], ParentType, ContextType, Partial<Query_RootOpportunity_AggregateArgs>>;
  Opportunity_by_pk?: Resolver<Maybe<ResolversTypes['Opportunity']>, ParentType, ContextType, RequireFields<Query_RootOpportunity_By_PkArgs, 'id'>>;
  Volunteer?: Resolver<Array<ResolversTypes['Volunteer']>, ParentType, ContextType, Partial<Query_RootVolunteerArgs>>;
  Volunteer_aggregate?: Resolver<ResolversTypes['Volunteer_aggregate'], ParentType, ContextType, Partial<Query_RootVolunteer_AggregateArgs>>;
  Volunteer_by_pk?: Resolver<Maybe<ResolversTypes['Volunteer']>, ParentType, ContextType, RequireFields<Query_RootVolunteer_By_PkArgs, 'id'>>;
};

export type Subscription_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['subscription_root'] = ResolversParentTypes['subscription_root']> = {
  Address?: SubscriptionResolver<Array<ResolversTypes['Address']>, "Address", ParentType, ContextType, Partial<Subscription_RootAddressArgs>>;
  Address_aggregate?: SubscriptionResolver<ResolversTypes['Address_aggregate'], "Address_aggregate", ParentType, ContextType, Partial<Subscription_RootAddress_AggregateArgs>>;
  Address_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['Address']>, "Address_by_pk", ParentType, ContextType, RequireFields<Subscription_RootAddress_By_PkArgs, 'id'>>;
  Address_stream?: SubscriptionResolver<Array<ResolversTypes['Address']>, "Address_stream", ParentType, ContextType, RequireFields<Subscription_RootAddress_StreamArgs, 'batch_size' | 'cursor'>>;
  Opportunity?: SubscriptionResolver<Array<ResolversTypes['Opportunity']>, "Opportunity", ParentType, ContextType, Partial<Subscription_RootOpportunityArgs>>;
  OpportunityVolunteer?: SubscriptionResolver<Array<ResolversTypes['OpportunityVolunteer']>, "OpportunityVolunteer", ParentType, ContextType, Partial<Subscription_RootOpportunityVolunteerArgs>>;
  OpportunityVolunteer_aggregate?: SubscriptionResolver<ResolversTypes['OpportunityVolunteer_aggregate'], "OpportunityVolunteer_aggregate", ParentType, ContextType, Partial<Subscription_RootOpportunityVolunteer_AggregateArgs>>;
  OpportunityVolunteer_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['OpportunityVolunteer']>, "OpportunityVolunteer_by_pk", ParentType, ContextType, RequireFields<Subscription_RootOpportunityVolunteer_By_PkArgs, 'opportunity_id' | 'volunteer_id'>>;
  OpportunityVolunteer_stream?: SubscriptionResolver<Array<ResolversTypes['OpportunityVolunteer']>, "OpportunityVolunteer_stream", ParentType, ContextType, RequireFields<Subscription_RootOpportunityVolunteer_StreamArgs, 'batch_size' | 'cursor'>>;
  Opportunity_aggregate?: SubscriptionResolver<ResolversTypes['Opportunity_aggregate'], "Opportunity_aggregate", ParentType, ContextType, Partial<Subscription_RootOpportunity_AggregateArgs>>;
  Opportunity_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['Opportunity']>, "Opportunity_by_pk", ParentType, ContextType, RequireFields<Subscription_RootOpportunity_By_PkArgs, 'id'>>;
  Opportunity_stream?: SubscriptionResolver<Array<ResolversTypes['Opportunity']>, "Opportunity_stream", ParentType, ContextType, RequireFields<Subscription_RootOpportunity_StreamArgs, 'batch_size' | 'cursor'>>;
  Volunteer?: SubscriptionResolver<Array<ResolversTypes['Volunteer']>, "Volunteer", ParentType, ContextType, Partial<Subscription_RootVolunteerArgs>>;
  Volunteer_aggregate?: SubscriptionResolver<ResolversTypes['Volunteer_aggregate'], "Volunteer_aggregate", ParentType, ContextType, Partial<Subscription_RootVolunteer_AggregateArgs>>;
  Volunteer_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['Volunteer']>, "Volunteer_by_pk", ParentType, ContextType, RequireFields<Subscription_RootVolunteer_By_PkArgs, 'id'>>;
  Volunteer_stream?: SubscriptionResolver<Array<ResolversTypes['Volunteer']>, "Volunteer_stream", ParentType, ContextType, RequireFields<Subscription_RootVolunteer_StreamArgs, 'batch_size' | 'cursor'>>;
};

export interface UuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['uuid'], any> {
  name: 'uuid';
}

export type Resolvers<ContextType = any> = {
  Address?: AddressResolvers<ContextType>;
  Address_aggregate?: Address_AggregateResolvers<ContextType>;
  Address_aggregate_fields?: Address_Aggregate_FieldsResolvers<ContextType>;
  Address_max_fields?: Address_Max_FieldsResolvers<ContextType>;
  Address_min_fields?: Address_Min_FieldsResolvers<ContextType>;
  Address_mutation_response?: Address_Mutation_ResponseResolvers<ContextType>;
  Opportunity?: OpportunityResolvers<ContextType>;
  OpportunityVolunteer?: OpportunityVolunteerResolvers<ContextType>;
  OpportunityVolunteer_aggregate?: OpportunityVolunteer_AggregateResolvers<ContextType>;
  OpportunityVolunteer_aggregate_fields?: OpportunityVolunteer_Aggregate_FieldsResolvers<ContextType>;
  OpportunityVolunteer_max_fields?: OpportunityVolunteer_Max_FieldsResolvers<ContextType>;
  OpportunityVolunteer_min_fields?: OpportunityVolunteer_Min_FieldsResolvers<ContextType>;
  OpportunityVolunteer_mutation_response?: OpportunityVolunteer_Mutation_ResponseResolvers<ContextType>;
  Opportunity_aggregate?: Opportunity_AggregateResolvers<ContextType>;
  Opportunity_aggregate_fields?: Opportunity_Aggregate_FieldsResolvers<ContextType>;
  Opportunity_max_fields?: Opportunity_Max_FieldsResolvers<ContextType>;
  Opportunity_min_fields?: Opportunity_Min_FieldsResolvers<ContextType>;
  Opportunity_mutation_response?: Opportunity_Mutation_ResponseResolvers<ContextType>;
  Volunteer?: VolunteerResolvers<ContextType>;
  Volunteer_aggregate?: Volunteer_AggregateResolvers<ContextType>;
  Volunteer_aggregate_fields?: Volunteer_Aggregate_FieldsResolvers<ContextType>;
  Volunteer_max_fields?: Volunteer_Max_FieldsResolvers<ContextType>;
  Volunteer_min_fields?: Volunteer_Min_FieldsResolvers<ContextType>;
  Volunteer_mutation_response?: Volunteer_Mutation_ResponseResolvers<ContextType>;
  mutation_root?: Mutation_RootResolvers<ContextType>;
  query_root?: Query_RootResolvers<ContextType>;
  subscription_root?: Subscription_RootResolvers<ContextType>;
  uuid?: GraphQLScalarType;
};

export type DirectiveResolvers<ContextType = any> = {
  cached?: CachedDirectiveResolver<any, any, ContextType>;
};


export const GetAllDocument = gql`
    query getAll {
  Opportunity {
    name
    Address {
      city
      country
      state
      streetAddress
      zipCode
    }
    OpportunityVolunteers {
      Volunteer {
        name
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getAll(variables?: GetAllQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetAllQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllQuery>(GetAllDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAll', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;