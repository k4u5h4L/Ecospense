/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */







declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  Account: { // root type
    balance?: number | null; // Float
    desc?: string | null; // String
    id?: string | null; // String
    name?: string | null; // String
  }
  Bill: { // root type
    amount?: number | null; // Float
    desc?: string | null; // String
    icon?: string | null; // String
    id?: string | null; // String
    name?: string | null; // String
  }
  Chat: { // root type
    message?: string | null; // String
    sender?: string | null; // String
    timestamp?: string | null; // String
    user?: string | null; // String
  }
  Currency: { // root type
    currencyName?: string | null; // String
    currencySymbol?: string | null; // String
    id?: string | null; // String
  }
  ExpenseStatus: { // root type
    balance?: number | null; // Float
    bills?: number | null; // Float
    currency?: string | null; // String
    expenses?: number | null; // Float
    id?: string | null; // String
    income?: number | null; // Float
    savings?: number | null; // Float
  }
  Goal: { // root type
    collectedAmount?: number | null; // Float
    desc?: string | null; // String
    id?: string | null; // String
    name?: string | null; // String
    totalAmount?: number | null; // Float
  }
  Log: { // root type
    action?: string | null; // String
    id?: string | null; // String
    name?: string | null; // String
  }
  Mutation: {};
  News: { // root type
    author?: string | null; // String
    content?: string | null; // String
    description?: string | null; // String
    id?: string | null; // String
    imageUrl?: string | null; // String
    publishedAt?: string | null; // String
    sourceName?: string | null; // String
    title?: string | null; // String
    url?: string | null; // String
  }
  Profile: { // root type
    currency?: string | null; // String
    id?: string | null; // String
    income?: number | null; // Int
  }
  Query: {};
  Test: { // root type
    message?: string | null; // String
  }
  Transaction: { // root type
    amount?: number | null; // Float
    desc?: string | null; // String
    icon?: string | null; // String
    id?: string | null; // String
    name?: string | null; // String
    timestamp?: string | null; // String
  }
  User: { // root type
    email?: string | null; // String
    id?: string | null; // String
    name?: string | null; // String
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Account: { // field return type
    balance: number | null; // Float
    desc: string | null; // String
    id: string | null; // String
    name: string | null; // String
    user: NexusGenRootTypes['User'] | null; // User
  }
  Bill: { // field return type
    amount: number | null; // Float
    desc: string | null; // String
    icon: string | null; // String
    id: string | null; // String
    name: string | null; // String
    user: NexusGenRootTypes['User'] | null; // User
  }
  Chat: { // field return type
    message: string | null; // String
    sender: string | null; // String
    timestamp: string | null; // String
    user: string | null; // String
  }
  Currency: { // field return type
    currencyName: string | null; // String
    currencySymbol: string | null; // String
    id: string | null; // String
  }
  ExpenseStatus: { // field return type
    balance: number | null; // Float
    bills: number | null; // Float
    currency: string | null; // String
    expenses: number | null; // Float
    id: string | null; // String
    income: number | null; // Float
    savings: number | null; // Float
  }
  Goal: { // field return type
    collectedAmount: number | null; // Float
    desc: string | null; // String
    id: string | null; // String
    name: string | null; // String
    totalAmount: number | null; // Float
    user: NexusGenRootTypes['User'] | null; // User
  }
  Log: { // field return type
    action: string | null; // String
    id: string | null; // String
    name: string | null; // String
    user: NexusGenRootTypes['User'] | null; // User
  }
  Mutation: { // field return type
    addAccount: NexusGenRootTypes['Account'] | null; // Account
    addBalance: NexusGenRootTypes['Account'] | null; // Account
    removeAccount: NexusGenRootTypes['Account'] | null; // Account
    transferBalance: Array<NexusGenRootTypes['Account'] | null> | null; // [Account]
    updateUserProfile: NexusGenRootTypes['User'] | null; // User
    withdrawBalance: NexusGenRootTypes['Account'] | null; // Account
  }
  News: { // field return type
    author: string | null; // String
    content: string | null; // String
    description: string | null; // String
    id: string | null; // String
    imageUrl: string | null; // String
    publishedAt: string | null; // String
    sourceName: string | null; // String
    title: string | null; // String
    url: string | null; // String
  }
  Profile: { // field return type
    User: NexusGenRootTypes['User'] | null; // User
    currency: string | null; // String
    id: string | null; // String
    income: number | null; // Int
  }
  Query: { // field return type
    getAllAccounts: Array<NexusGenRootTypes['Account'] | null> | null; // [Account]
    getAllBills: Array<NexusGenRootTypes['Bill'] | null> | null; // [Bill]
    getAllGoals: Array<NexusGenRootTypes['Goal'] | null> | null; // [Goal]
    getAllLogs: Array<NexusGenRootTypes['Log'] | null> | null; // [Log]
    getAllNews: Array<NexusGenRootTypes['News'] | null> | null; // [News]
    getAllTxns: Array<NexusGenRootTypes['Transaction'] | null> | null; // [Transaction]
    getChatResponse: NexusGenRootTypes['Chat'] | null; // Chat
    getCurrency: NexusGenRootTypes['Currency'] | null; // Currency
    getCurrentExpenseStatus: NexusGenRootTypes['ExpenseStatus'] | null; // ExpenseStatus
    getNewsById: NexusGenRootTypes['News'] | null; // News
    testing: NexusGenRootTypes['Test'] | null; // Test
  }
  Test: { // field return type
    message: string | null; // String
  }
  Transaction: { // field return type
    amount: number | null; // Float
    desc: string | null; // String
    icon: string | null; // String
    id: string | null; // String
    name: string | null; // String
    timestamp: string | null; // String
    user: NexusGenRootTypes['User'] | null; // User
  }
  User: { // field return type
    Account: Array<NexusGenRootTypes['Account'] | null> | null; // [Account]
    Bill: Array<NexusGenRootTypes['Bill'] | null> | null; // [Bill]
    Goal: Array<NexusGenRootTypes['Goal'] | null> | null; // [Goal]
    Log: Array<NexusGenRootTypes['Log'] | null> | null; // [Log]
    Profile: NexusGenRootTypes['Profile'] | null; // Profile
    Transaction: Array<NexusGenRootTypes['Transaction'] | null> | null; // [Transaction]
    email: string | null; // String
    id: string | null; // String
    name: string | null; // String
  }
}

export interface NexusGenFieldTypeNames {
  Account: { // field return type name
    balance: 'Float'
    desc: 'String'
    id: 'String'
    name: 'String'
    user: 'User'
  }
  Bill: { // field return type name
    amount: 'Float'
    desc: 'String'
    icon: 'String'
    id: 'String'
    name: 'String'
    user: 'User'
  }
  Chat: { // field return type name
    message: 'String'
    sender: 'String'
    timestamp: 'String'
    user: 'String'
  }
  Currency: { // field return type name
    currencyName: 'String'
    currencySymbol: 'String'
    id: 'String'
  }
  ExpenseStatus: { // field return type name
    balance: 'Float'
    bills: 'Float'
    currency: 'String'
    expenses: 'Float'
    id: 'String'
    income: 'Float'
    savings: 'Float'
  }
  Goal: { // field return type name
    collectedAmount: 'Float'
    desc: 'String'
    id: 'String'
    name: 'String'
    totalAmount: 'Float'
    user: 'User'
  }
  Log: { // field return type name
    action: 'String'
    id: 'String'
    name: 'String'
    user: 'User'
  }
  Mutation: { // field return type name
    addAccount: 'Account'
    addBalance: 'Account'
    removeAccount: 'Account'
    transferBalance: 'Account'
    updateUserProfile: 'User'
    withdrawBalance: 'Account'
  }
  News: { // field return type name
    author: 'String'
    content: 'String'
    description: 'String'
    id: 'String'
    imageUrl: 'String'
    publishedAt: 'String'
    sourceName: 'String'
    title: 'String'
    url: 'String'
  }
  Profile: { // field return type name
    User: 'User'
    currency: 'String'
    id: 'String'
    income: 'Int'
  }
  Query: { // field return type name
    getAllAccounts: 'Account'
    getAllBills: 'Bill'
    getAllGoals: 'Goal'
    getAllLogs: 'Log'
    getAllNews: 'News'
    getAllTxns: 'Transaction'
    getChatResponse: 'Chat'
    getCurrency: 'Currency'
    getCurrentExpenseStatus: 'ExpenseStatus'
    getNewsById: 'News'
    testing: 'Test'
  }
  Test: { // field return type name
    message: 'String'
  }
  Transaction: { // field return type name
    amount: 'Float'
    desc: 'String'
    icon: 'String'
    id: 'String'
    name: 'String'
    timestamp: 'String'
    user: 'User'
  }
  User: { // field return type name
    Account: 'Account'
    Bill: 'Bill'
    Goal: 'Goal'
    Log: 'Log'
    Profile: 'Profile'
    Transaction: 'Transaction'
    email: 'String'
    id: 'String'
    name: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    addAccount: { // args
      balance: number; // Float!
      desc: string; // String!
      name: string; // String!
    }
    addBalance: { // args
      accountId: string; // String!
      amount: number; // Float!
    }
    removeAccount: { // args
      accountId: string; // String!
    }
    transferBalance: { // args
      amount: number; // Float!
      fromAccountId: string; // String!
      toAccountId: string; // String!
    }
    updateUserProfile: { // args
      currency: string; // String!
      income: number; // Int!
      name: string; // String!
    }
    withdrawBalance: { // args
      accountId: string; // String!
      amount: number; // Float!
    }
  }
  Query: {
    getAllAccounts: { // args
      itemsPerPage?: number | null; // Int
      page?: number | null; // Int
    }
    getAllBills: { // args
      itemsPerPage?: number | null; // Int
      page?: number | null; // Int
    }
    getAllGoals: { // args
      itemsPerPage?: number | null; // Int
      page?: number | null; // Int
    }
    getAllLogs: { // args
      itemsPerPage?: number | null; // Int
      page?: number | null; // Int
    }
    getAllNews: { // args
      itemsPerPage?: number | null; // Int
      page?: number | null; // Int
    }
    getAllTxns: { // args
      itemsPerPage?: number | null; // Int
      page?: number | null; // Int
    }
    getChatResponse: { // args
      message: string; // String!
      sender: string; // String!
    }
    getNewsById: { // args
      id: string; // ID!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}