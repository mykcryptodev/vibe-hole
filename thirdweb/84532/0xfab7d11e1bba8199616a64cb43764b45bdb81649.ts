import {
  prepareEvent,
  prepareContractCall,
  readContract,
  type BaseTransactionOptions,
  type AbiParameterToPrimitiveType,
} from "thirdweb";

/**
* Contract events
*/

/**
 * Represents the filters for the "Approval" event.
 */
export type ApprovalEventFilters = Partial<{
  owner: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"owner","type":"address"}>
spender: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"spender","type":"address"}>
}>;

/**
 * Creates an event object for the Approval event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { approvalEvent } from "TODO";
 *
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  approvalEvent({
 *  owner: ...,
 *  spender: ...,
 * })
 * ],
 * });
 * ```
 */
export function approvalEvent(filters: ApprovalEventFilters = {}) {
  return prepareEvent({
    signature: "event Approval(address indexed owner, address indexed spender, uint256 value)",
    filters,
  });
};
  

/**
 * Represents the filters for the "Claimed" event.
 */
export type ClaimedEventFilters = Partial<{
  user: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"user","type":"address"}>
}>;

/**
 * Creates an event object for the Claimed event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { claimedEvent } from "TODO";
 *
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  claimedEvent({
 *  user: ...,
 * })
 * ],
 * });
 * ```
 */
export function claimedEvent(filters: ClaimedEventFilters = {}) {
  return prepareEvent({
    signature: "event Claimed(address indexed user, uint256 fid, uint256 day)",
    filters,
  });
};
  

/**
 * Represents the filters for the "FollowVerified" event.
 */
export type FollowVerifiedEventFilters = Partial<{
  matchId: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"bytes32","name":"matchId","type":"bytes32"}>
user: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"user","type":"address"}>
}>;

/**
 * Creates an event object for the FollowVerified event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { followVerifiedEvent } from "TODO";
 *
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  followVerifiedEvent({
 *  matchId: ...,
 *  user: ...,
 * })
 * ],
 * });
 * ```
 */
export function followVerifiedEvent(filters: FollowVerifiedEventFilters = {}) {
  return prepareEvent({
    signature: "event FollowVerified(bytes32 indexed matchId, address indexed user)",
    filters,
  });
};
  

/**
 * Represents the filters for the "JackpotContributed" event.
 */
export type JackpotContributedEventFilters = Partial<{
  user: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"user","type":"address"}>
}>;

/**
 * Creates an event object for the JackpotContributed event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { jackpotContributedEvent } from "TODO";
 *
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  jackpotContributedEvent({
 *  user: ...,
 * })
 * ],
 * });
 * ```
 */
export function jackpotContributedEvent(filters: JackpotContributedEventFilters = {}) {
  return prepareEvent({
    signature: "event JackpotContributed(address indexed user, uint256 amount)",
    filters,
  });
};
  

/**
 * Represents the filters for the "JackpotWon" event.
 */
export type JackpotWonEventFilters = Partial<{
  winner: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"winner","type":"address"}>
}>;

/**
 * Creates an event object for the JackpotWon event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { jackpotWonEvent } from "TODO";
 *
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  jackpotWonEvent({
 *  winner: ...,
 * })
 * ],
 * });
 * ```
 */
export function jackpotWonEvent(filters: JackpotWonEventFilters = {}) {
  return prepareEvent({
    signature: "event JackpotWon(address indexed winner, uint256 amount)",
    filters,
  });
};
  

/**
 * Represents the filters for the "MatchInitiated" event.
 */
export type MatchInitiatedEventFilters = Partial<{
  matchId: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"bytes32","name":"matchId","type":"bytes32"}>
initiator: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"initiator","type":"address"}>
}>;

/**
 * Creates an event object for the MatchInitiated event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { matchInitiatedEvent } from "TODO";
 *
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  matchInitiatedEvent({
 *  matchId: ...,
 *  initiator: ...,
 * })
 * ],
 * });
 * ```
 */
export function matchInitiatedEvent(filters: MatchInitiatedEventFilters = {}) {
  return prepareEvent({
    signature: "event MatchInitiated(bytes32 indexed matchId, address indexed initiator, address matchedUser)",
    filters,
  });
};
  

/**
 * Represents the filters for the "RoleAdminChanged" event.
 */
export type RoleAdminChangedEventFilters = Partial<{
  role: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"}>
previousAdminRole: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"}>
newAdminRole: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}>
}>;

/**
 * Creates an event object for the RoleAdminChanged event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { roleAdminChangedEvent } from "TODO";
 *
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  roleAdminChangedEvent({
 *  role: ...,
 *  previousAdminRole: ...,
 *  newAdminRole: ...,
 * })
 * ],
 * });
 * ```
 */
export function roleAdminChangedEvent(filters: RoleAdminChangedEventFilters = {}) {
  return prepareEvent({
    signature: "event RoleAdminChanged(bytes32 indexed role, bytes32 indexed previousAdminRole, bytes32 indexed newAdminRole)",
    filters,
  });
};
  

/**
 * Represents the filters for the "RoleGranted" event.
 */
export type RoleGrantedEventFilters = Partial<{
  role: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"}>
account: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"account","type":"address"}>
sender: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"sender","type":"address"}>
}>;

/**
 * Creates an event object for the RoleGranted event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { roleGrantedEvent } from "TODO";
 *
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  roleGrantedEvent({
 *  role: ...,
 *  account: ...,
 *  sender: ...,
 * })
 * ],
 * });
 * ```
 */
export function roleGrantedEvent(filters: RoleGrantedEventFilters = {}) {
  return prepareEvent({
    signature: "event RoleGranted(bytes32 indexed role, address indexed account, address indexed sender)",
    filters,
  });
};
  

/**
 * Represents the filters for the "RoleRevoked" event.
 */
export type RoleRevokedEventFilters = Partial<{
  role: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"}>
account: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"account","type":"address"}>
sender: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"sender","type":"address"}>
}>;

/**
 * Creates an event object for the RoleRevoked event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { roleRevokedEvent } from "TODO";
 *
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  roleRevokedEvent({
 *  role: ...,
 *  account: ...,
 *  sender: ...,
 * })
 * ],
 * });
 * ```
 */
export function roleRevokedEvent(filters: RoleRevokedEventFilters = {}) {
  return prepareEvent({
    signature: "event RoleRevoked(bytes32 indexed role, address indexed account, address indexed sender)",
    filters,
  });
};
  

/**
 * Represents the filters for the "Transfer" event.
 */
export type TransferEventFilters = Partial<{
  from: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"from","type":"address"}>
to: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"to","type":"address"}>
}>;

/**
 * Creates an event object for the Transfer event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { transferEvent } from "TODO";
 *
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  transferEvent({
 *  from: ...,
 *  to: ...,
 * })
 * ],
 * });
 * ```
 */
export function transferEvent(filters: TransferEventFilters = {}) {
  return prepareEvent({
    signature: "event Transfer(address indexed from, address indexed to, uint256 value)",
    filters,
  });
};
  

/**
 * Represents the filters for the "VibeCreated" event.
 */
export type VibeCreatedEventFilters = Partial<{
  vibeId: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"bytes32","name":"vibeId","type":"bytes32"}>
}>;

/**
 * Creates an event object for the VibeCreated event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { vibeCreatedEvent } from "TODO";
 *
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  vibeCreatedEvent({
 *  vibeId: ...,
 * })
 * ],
 * });
 * ```
 */
export function vibeCreatedEvent(filters: VibeCreatedEventFilters = {}) {
  return prepareEvent({
    signature: "event VibeCreated(bytes32 indexed vibeId, uint256 inputFid, address initiator)",
    filters,
  });
};
  

/**
 * Represents the filters for the "VibeMatched" event.
 */
export type VibeMatchedEventFilters = Partial<{
  vibeId: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"bytes32","name":"vibeId","type":"bytes32"}>
}>;

/**
 * Creates an event object for the VibeMatched event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { vibeMatchedEvent } from "TODO";
 *
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  vibeMatchedEvent({
 *  vibeId: ...,
 * })
 * ],
 * });
 * ```
 */
export function vibeMatchedEvent(filters: VibeMatchedEventFilters = {}) {
  return prepareEvent({
    signature: "event VibeMatched(bytes32 indexed vibeId, uint256 counterpartyFid, uint256 sourceFid)",
    filters,
  });
};
  

/**
* Contract read functions
*/



/**
 * Calls the "ADMIN_ROLE" function on the contract.
 * @param options - The options for the ADMIN_ROLE function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { ADMIN_ROLE } from "TODO";
 *
 * const result = await ADMIN_ROLE();
 *
 * ```
 */
export async function ADMIN_ROLE(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x75b238fc",
  [],
  [
    {
      "internalType": "bytes32",
      "name": "",
      "type": "bytes32"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "DAILY_AMOUNT" function on the contract.
 * @param options - The options for the DAILY_AMOUNT function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { DAILY_AMOUNT } from "TODO";
 *
 * const result = await DAILY_AMOUNT();
 *
 * ```
 */
export async function DAILY_AMOUNT(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x162277ce",
  [],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "DEFAULT_ADMIN_ROLE" function on the contract.
 * @param options - The options for the DEFAULT_ADMIN_ROLE function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { DEFAULT_ADMIN_ROLE } from "TODO";
 *
 * const result = await DEFAULT_ADMIN_ROLE();
 *
 * ```
 */
export async function DEFAULT_ADMIN_ROLE(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xa217fddf",
  [],
  [
    {
      "internalType": "bytes32",
      "name": "",
      "type": "bytes32"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "JACKPOT_AMOUNT" function on the contract.
 * @param options - The options for the JACKPOT_AMOUNT function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { JACKPOT_AMOUNT } from "TODO";
 *
 * const result = await JACKPOT_AMOUNT();
 *
 * ```
 */
export async function JACKPOT_AMOUNT(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xb6ab790e",
  [],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "MATCH_AMOUNT" function on the contract.
 * @param options - The options for the MATCH_AMOUNT function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { MATCH_AMOUNT } from "TODO";
 *
 * const result = await MATCH_AMOUNT();
 *
 * ```
 */
export async function MATCH_AMOUNT(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xb775c1bf",
  [],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "SIGNER_ROLE" function on the contract.
 * @param options - The options for the SIGNER_ROLE function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { SIGNER_ROLE } from "TODO";
 *
 * const result = await SIGNER_ROLE();
 *
 * ```
 */
export async function SIGNER_ROLE(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xa1ebf35d",
  [],
  [
    {
      "internalType": "bytes32",
      "name": "",
      "type": "bytes32"
    }
  ]
],
    params: []
  });
};


/**
 * Represents the parameters for the "allowance" function.
 */
export type AllowanceParams = {
  owner: AbiParameterToPrimitiveType<{"internalType":"address","name":"owner","type":"address"}>
spender: AbiParameterToPrimitiveType<{"internalType":"address","name":"spender","type":"address"}>
};

/**
 * Calls the "allowance" function on the contract.
 * @param options - The options for the allowance function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { allowance } from "TODO";
 *
 * const result = await allowance({
 *  owner: ...,
 *  spender: ...,
 * });
 *
 * ```
 */
export async function allowance(
  options: BaseTransactionOptions<AllowanceParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xdd62ed3e",
  [
    {
      "internalType": "address",
      "name": "owner",
      "type": "address"
    },
    {
      "internalType": "address",
      "name": "spender",
      "type": "address"
    }
  ],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: [options.owner, options.spender]
  });
};


/**
 * Represents the parameters for the "balanceOf" function.
 */
export type BalanceOfParams = {
  account: AbiParameterToPrimitiveType<{"internalType":"address","name":"account","type":"address"}>
};

/**
 * Calls the "balanceOf" function on the contract.
 * @param options - The options for the balanceOf function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { balanceOf } from "TODO";
 *
 * const result = await balanceOf({
 *  account: ...,
 * });
 *
 * ```
 */
export async function balanceOf(
  options: BaseTransactionOptions<BalanceOfParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x70a08231",
  [
    {
      "internalType": "address",
      "name": "account",
      "type": "address"
    }
  ],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: [options.account]
  });
};


/**
 * Represents the parameters for the "canClaim" function.
 */
export type CanClaimParams = {
  fid: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"fid","type":"uint256"}>
};

/**
 * Calls the "canClaim" function on the contract.
 * @param options - The options for the canClaim function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { canClaim } from "TODO";
 *
 * const result = await canClaim({
 *  fid: ...,
 * });
 *
 * ```
 */
export async function canClaim(
  options: BaseTransactionOptions<CanClaimParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xc95c0d89",
  [
    {
      "internalType": "uint256",
      "name": "fid",
      "type": "uint256"
    }
  ],
  [
    {
      "internalType": "bool",
      "name": "",
      "type": "bool"
    }
  ]
],
    params: [options.fid]
  });
};




/**
 * Calls the "decimals" function on the contract.
 * @param options - The options for the decimals function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { decimals } from "TODO";
 *
 * const result = await decimals();
 *
 * ```
 */
export async function decimals(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x313ce567",
  [],
  [
    {
      "internalType": "uint8",
      "name": "",
      "type": "uint8"
    }
  ]
],
    params: []
  });
};


/**
 * Represents the parameters for the "getRoleAdmin" function.
 */
export type GetRoleAdminParams = {
  role: AbiParameterToPrimitiveType<{"internalType":"bytes32","name":"role","type":"bytes32"}>
};

/**
 * Calls the "getRoleAdmin" function on the contract.
 * @param options - The options for the getRoleAdmin function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getRoleAdmin } from "TODO";
 *
 * const result = await getRoleAdmin({
 *  role: ...,
 * });
 *
 * ```
 */
export async function getRoleAdmin(
  options: BaseTransactionOptions<GetRoleAdminParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x248a9ca3",
  [
    {
      "internalType": "bytes32",
      "name": "role",
      "type": "bytes32"
    }
  ],
  [
    {
      "internalType": "bytes32",
      "name": "",
      "type": "bytes32"
    }
  ]
],
    params: [options.role]
  });
};


/**
 * Represents the parameters for the "getVibe" function.
 */
export type GetVibeParams = {
  vibeId: AbiParameterToPrimitiveType<{"internalType":"bytes32","name":"vibeId","type":"bytes32"}>
};

/**
 * Calls the "getVibe" function on the contract.
 * @param options - The options for the getVibe function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getVibe } from "TODO";
 *
 * const result = await getVibe({
 *  vibeId: ...,
 * });
 *
 * ```
 */
export async function getVibe(
  options: BaseTransactionOptions<GetVibeParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xa1e51d49",
  [
    {
      "internalType": "bytes32",
      "name": "vibeId",
      "type": "bytes32"
    }
  ],
  [
    {
      "components": [
        {
          "internalType": "address",
          "name": "creator",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "claimed",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "sourceFid",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "counterpartyFid",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "isMatched",
          "type": "bool"
        }
      ],
      "internalType": "struct Vibe",
      "name": "",
      "type": "tuple"
    }
  ]
],
    params: [options.vibeId]
  });
};


/**
 * Represents the parameters for the "hasRole" function.
 */
export type HasRoleParams = {
  role: AbiParameterToPrimitiveType<{"internalType":"bytes32","name":"role","type":"bytes32"}>
account: AbiParameterToPrimitiveType<{"internalType":"address","name":"account","type":"address"}>
};

/**
 * Calls the "hasRole" function on the contract.
 * @param options - The options for the hasRole function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { hasRole } from "TODO";
 *
 * const result = await hasRole({
 *  role: ...,
 *  account: ...,
 * });
 *
 * ```
 */
export async function hasRole(
  options: BaseTransactionOptions<HasRoleParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x91d14854",
  [
    {
      "internalType": "bytes32",
      "name": "role",
      "type": "bytes32"
    },
    {
      "internalType": "address",
      "name": "account",
      "type": "address"
    }
  ],
  [
    {
      "internalType": "bool",
      "name": "",
      "type": "bool"
    }
  ]
],
    params: [options.role, options.account]
  });
};




/**
 * Calls the "jackpotPool" function on the contract.
 * @param options - The options for the jackpotPool function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { jackpotPool } from "TODO";
 *
 * const result = await jackpotPool();
 *
 * ```
 */
export async function jackpotPool(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xb05b32ae",
  [],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: []
  });
};


/**
 * Represents the parameters for the "lastClaimedDay" function.
 */
export type LastClaimedDayParams = {
  arg_0: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"","type":"uint256"}>
};

/**
 * Calls the "lastClaimedDay" function on the contract.
 * @param options - The options for the lastClaimedDay function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { lastClaimedDay } from "TODO";
 *
 * const result = await lastClaimedDay({
 *  arg_0: ...,
 * });
 *
 * ```
 */
export async function lastClaimedDay(
  options: BaseTransactionOptions<LastClaimedDayParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x322ff857",
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: [options.arg_0]
  });
};




/**
 * Calls the "name" function on the contract.
 * @param options - The options for the name function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { name } from "TODO";
 *
 * const result = await name();
 *
 * ```
 */
export async function name(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x06fdde03",
  [],
  [
    {
      "internalType": "string",
      "name": "",
      "type": "string"
    }
  ]
],
    params: []
  });
};


/**
 * Represents the parameters for the "supportsInterface" function.
 */
export type SupportsInterfaceParams = {
  interfaceId: AbiParameterToPrimitiveType<{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}>
};

/**
 * Calls the "supportsInterface" function on the contract.
 * @param options - The options for the supportsInterface function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { supportsInterface } from "TODO";
 *
 * const result = await supportsInterface({
 *  interfaceId: ...,
 * });
 *
 * ```
 */
export async function supportsInterface(
  options: BaseTransactionOptions<SupportsInterfaceParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x01ffc9a7",
  [
    {
      "internalType": "bytes4",
      "name": "interfaceId",
      "type": "bytes4"
    }
  ],
  [
    {
      "internalType": "bool",
      "name": "",
      "type": "bool"
    }
  ]
],
    params: [options.interfaceId]
  });
};




/**
 * Calls the "symbol" function on the contract.
 * @param options - The options for the symbol function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { symbol } from "TODO";
 *
 * const result = await symbol();
 *
 * ```
 */
export async function symbol(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x95d89b41",
  [],
  [
    {
      "internalType": "string",
      "name": "",
      "type": "string"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "totalSupply" function on the contract.
 * @param options - The options for the totalSupply function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { totalSupply } from "TODO";
 *
 * const result = await totalSupply();
 *
 * ```
 */
export async function totalSupply(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x18160ddd",
  [],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: []
  });
};


/**
 * Represents the parameters for the "unmatchedVibeIds" function.
 */
export type UnmatchedVibeIdsParams = {
  arg_0: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"","type":"uint256"}>
};

/**
 * Calls the "unmatchedVibeIds" function on the contract.
 * @param options - The options for the unmatchedVibeIds function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { unmatchedVibeIds } from "TODO";
 *
 * const result = await unmatchedVibeIds({
 *  arg_0: ...,
 * });
 *
 * ```
 */
export async function unmatchedVibeIds(
  options: BaseTransactionOptions<UnmatchedVibeIdsParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x65e90ca0",
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ],
  [
    {
      "internalType": "bytes32",
      "name": "",
      "type": "bytes32"
    }
  ]
],
    params: [options.arg_0]
  });
};


/**
 * Represents the parameters for the "vibes" function.
 */
export type VibesParams = {
  arg_0: AbiParameterToPrimitiveType<{"internalType":"bytes32","name":"","type":"bytes32"}>
};

/**
 * Calls the "vibes" function on the contract.
 * @param options - The options for the vibes function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { vibes } from "TODO";
 *
 * const result = await vibes({
 *  arg_0: ...,
 * });
 *
 * ```
 */
export async function vibes(
  options: BaseTransactionOptions<VibesParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x6730a4ee",
  [
    {
      "internalType": "bytes32",
      "name": "",
      "type": "bytes32"
    }
  ],
  [
    {
      "internalType": "address",
      "name": "creator",
      "type": "address"
    },
    {
      "internalType": "bool",
      "name": "claimed",
      "type": "bool"
    },
    {
      "internalType": "uint256",
      "name": "sourceFid",
      "type": "uint256"
    },
    {
      "internalType": "uint256",
      "name": "counterpartyFid",
      "type": "uint256"
    },
    {
      "internalType": "uint256",
      "name": "amount",
      "type": "uint256"
    },
    {
      "internalType": "bool",
      "name": "isMatched",
      "type": "bool"
    }
  ]
],
    params: [options.arg_0]
  });
};


/**
* Contract write functions
*/

/**
 * Represents the parameters for the "addSigner" function.
 */
export type AddSignerParams = {
  signer: AbiParameterToPrimitiveType<{"internalType":"address","name":"signer","type":"address"}>
};

/**
 * Calls the "addSigner" function on the contract.
 * @param options - The options for the "addSigner" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { addSigner } from "TODO";
 *
 * const transaction = addSigner({
 *  signer: ...,
 * });
 *
 * // Send the transaction
 * ...
 *
 * ```
 */
export function addSigner(
  options: BaseTransactionOptions<AddSignerParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xeb12d61e",
  [
    {
      "internalType": "address",
      "name": "signer",
      "type": "address"
    }
  ],
  []
],
    params: [options.signer]
  });
};


/**
 * Represents the parameters for the "approve" function.
 */
export type ApproveParams = {
  spender: AbiParameterToPrimitiveType<{"internalType":"address","name":"spender","type":"address"}>
value: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"value","type":"uint256"}>
};

/**
 * Calls the "approve" function on the contract.
 * @param options - The options for the "approve" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { approve } from "TODO";
 *
 * const transaction = approve({
 *  spender: ...,
 *  value: ...,
 * });
 *
 * // Send the transaction
 * ...
 *
 * ```
 */
export function approve(
  options: BaseTransactionOptions<ApproveParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x095ea7b3",
  [
    {
      "internalType": "address",
      "name": "spender",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "value",
      "type": "uint256"
    }
  ],
  [
    {
      "internalType": "bool",
      "name": "",
      "type": "bool"
    }
  ]
],
    params: [options.spender, options.value]
  });
};


/**
 * Represents the parameters for the "claimVibe" function.
 */
export type ClaimVibeParams = {
  to: AbiParameterToPrimitiveType<{"internalType":"address","name":"to","type":"address"}>
fid: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"fid","type":"uint256"}>
};

/**
 * Calls the "claimVibe" function on the contract.
 * @param options - The options for the "claimVibe" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { claimVibe } from "TODO";
 *
 * const transaction = claimVibe({
 *  to: ...,
 *  fid: ...,
 * });
 *
 * // Send the transaction
 * ...
 *
 * ```
 */
export function claimVibe(
  options: BaseTransactionOptions<ClaimVibeParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x8ef728bf",
  [
    {
      "internalType": "address",
      "name": "to",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "fid",
      "type": "uint256"
    }
  ],
  []
],
    params: [options.to, options.fid]
  });
};


/**
 * Represents the parameters for the "createVibe" function.
 */
export type CreateVibeParams = {
  inputFid: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"inputFid","type":"uint256"}>
};

/**
 * Calls the "createVibe" function on the contract.
 * @param options - The options for the "createVibe" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { createVibe } from "TODO";
 *
 * const transaction = createVibe({
 *  inputFid: ...,
 * });
 *
 * // Send the transaction
 * ...
 *
 * ```
 */
export function createVibe(
  options: BaseTransactionOptions<CreateVibeParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x38429b04",
  [
    {
      "internalType": "uint256",
      "name": "inputFid",
      "type": "uint256"
    }
  ],
  [
    {
      "internalType": "bytes32",
      "name": "",
      "type": "bytes32"
    }
  ]
],
    params: [options.inputFid]
  });
};


/**
 * Represents the parameters for the "grantRole" function.
 */
export type GrantRoleParams = {
  role: AbiParameterToPrimitiveType<{"internalType":"bytes32","name":"role","type":"bytes32"}>
account: AbiParameterToPrimitiveType<{"internalType":"address","name":"account","type":"address"}>
};

/**
 * Calls the "grantRole" function on the contract.
 * @param options - The options for the "grantRole" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { grantRole } from "TODO";
 *
 * const transaction = grantRole({
 *  role: ...,
 *  account: ...,
 * });
 *
 * // Send the transaction
 * ...
 *
 * ```
 */
export function grantRole(
  options: BaseTransactionOptions<GrantRoleParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x2f2ff15d",
  [
    {
      "internalType": "bytes32",
      "name": "role",
      "type": "bytes32"
    },
    {
      "internalType": "address",
      "name": "account",
      "type": "address"
    }
  ],
  []
],
    params: [options.role, options.account]
  });
};


/**
 * Represents the parameters for the "removeSigner" function.
 */
export type RemoveSignerParams = {
  signer: AbiParameterToPrimitiveType<{"internalType":"address","name":"signer","type":"address"}>
};

/**
 * Calls the "removeSigner" function on the contract.
 * @param options - The options for the "removeSigner" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { removeSigner } from "TODO";
 *
 * const transaction = removeSigner({
 *  signer: ...,
 * });
 *
 * // Send the transaction
 * ...
 *
 * ```
 */
export function removeSigner(
  options: BaseTransactionOptions<RemoveSignerParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x0e316ab7",
  [
    {
      "internalType": "address",
      "name": "signer",
      "type": "address"
    }
  ],
  []
],
    params: [options.signer]
  });
};


/**
 * Represents the parameters for the "renounceRole" function.
 */
export type RenounceRoleParams = {
  role: AbiParameterToPrimitiveType<{"internalType":"bytes32","name":"role","type":"bytes32"}>
callerConfirmation: AbiParameterToPrimitiveType<{"internalType":"address","name":"callerConfirmation","type":"address"}>
};

/**
 * Calls the "renounceRole" function on the contract.
 * @param options - The options for the "renounceRole" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { renounceRole } from "TODO";
 *
 * const transaction = renounceRole({
 *  role: ...,
 *  callerConfirmation: ...,
 * });
 *
 * // Send the transaction
 * ...
 *
 * ```
 */
export function renounceRole(
  options: BaseTransactionOptions<RenounceRoleParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x36568abe",
  [
    {
      "internalType": "bytes32",
      "name": "role",
      "type": "bytes32"
    },
    {
      "internalType": "address",
      "name": "callerConfirmation",
      "type": "address"
    }
  ],
  []
],
    params: [options.role, options.callerConfirmation]
  });
};


/**
 * Represents the parameters for the "revokeRole" function.
 */
export type RevokeRoleParams = {
  role: AbiParameterToPrimitiveType<{"internalType":"bytes32","name":"role","type":"bytes32"}>
account: AbiParameterToPrimitiveType<{"internalType":"address","name":"account","type":"address"}>
};

/**
 * Calls the "revokeRole" function on the contract.
 * @param options - The options for the "revokeRole" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { revokeRole } from "TODO";
 *
 * const transaction = revokeRole({
 *  role: ...,
 *  account: ...,
 * });
 *
 * // Send the transaction
 * ...
 *
 * ```
 */
export function revokeRole(
  options: BaseTransactionOptions<RevokeRoleParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xd547741f",
  [
    {
      "internalType": "bytes32",
      "name": "role",
      "type": "bytes32"
    },
    {
      "internalType": "address",
      "name": "account",
      "type": "address"
    }
  ],
  []
],
    params: [options.role, options.account]
  });
};


/**
 * Represents the parameters for the "setDailyAmount" function.
 */
export type SetDailyAmountParams = {
  amount: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"amount","type":"uint256"}>
};

/**
 * Calls the "setDailyAmount" function on the contract.
 * @param options - The options for the "setDailyAmount" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { setDailyAmount } from "TODO";
 *
 * const transaction = setDailyAmount({
 *  amount: ...,
 * });
 *
 * // Send the transaction
 * ...
 *
 * ```
 */
export function setDailyAmount(
  options: BaseTransactionOptions<SetDailyAmountParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x58eca9c7",
  [
    {
      "internalType": "uint256",
      "name": "amount",
      "type": "uint256"
    }
  ],
  []
],
    params: [options.amount]
  });
};


/**
 * Represents the parameters for the "setMatchAmount" function.
 */
export type SetMatchAmountParams = {
  amount: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"amount","type":"uint256"}>
};

/**
 * Calls the "setMatchAmount" function on the contract.
 * @param options - The options for the "setMatchAmount" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { setMatchAmount } from "TODO";
 *
 * const transaction = setMatchAmount({
 *  amount: ...,
 * });
 *
 * // Send the transaction
 * ...
 *
 * ```
 */
export function setMatchAmount(
  options: BaseTransactionOptions<SetMatchAmountParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x5efa3bef",
  [
    {
      "internalType": "uint256",
      "name": "amount",
      "type": "uint256"
    }
  ],
  []
],
    params: [options.amount]
  });
};


/**
 * Represents the parameters for the "transfer" function.
 */
export type TransferParams = {
  to: AbiParameterToPrimitiveType<{"internalType":"address","name":"to","type":"address"}>
value: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"value","type":"uint256"}>
};

/**
 * Calls the "transfer" function on the contract.
 * @param options - The options for the "transfer" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { transfer } from "TODO";
 *
 * const transaction = transfer({
 *  to: ...,
 *  value: ...,
 * });
 *
 * // Send the transaction
 * ...
 *
 * ```
 */
export function transfer(
  options: BaseTransactionOptions<TransferParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xa9059cbb",
  [
    {
      "internalType": "address",
      "name": "to",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "value",
      "type": "uint256"
    }
  ],
  [
    {
      "internalType": "bool",
      "name": "",
      "type": "bool"
    }
  ]
],
    params: [options.to, options.value]
  });
};


/**
 * Represents the parameters for the "transferFrom" function.
 */
export type TransferFromParams = {
  from: AbiParameterToPrimitiveType<{"internalType":"address","name":"from","type":"address"}>
to: AbiParameterToPrimitiveType<{"internalType":"address","name":"to","type":"address"}>
value: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"value","type":"uint256"}>
};

/**
 * Calls the "transferFrom" function on the contract.
 * @param options - The options for the "transferFrom" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { transferFrom } from "TODO";
 *
 * const transaction = transferFrom({
 *  from: ...,
 *  to: ...,
 *  value: ...,
 * });
 *
 * // Send the transaction
 * ...
 *
 * ```
 */
export function transferFrom(
  options: BaseTransactionOptions<TransferFromParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x23b872dd",
  [
    {
      "internalType": "address",
      "name": "from",
      "type": "address"
    },
    {
      "internalType": "address",
      "name": "to",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "value",
      "type": "uint256"
    }
  ],
  [
    {
      "internalType": "bool",
      "name": "",
      "type": "bool"
    }
  ]
],
    params: [options.from, options.to, options.value]
  });
};


/**
 * Represents the parameters for the "vibe" function.
 */
export type VibeParams = {
  counterpartyFid: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"counterpartyFid","type":"uint256"}>
};

/**
 * Calls the "vibe" function on the contract.
 * @param options - The options for the "vibe" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { vibe } from "TODO";
 *
 * const transaction = vibe({
 *  counterpartyFid: ...,
 * });
 *
 * // Send the transaction
 * ...
 *
 * ```
 */
export function vibe(
  options: BaseTransactionOptions<VibeParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x9b077900",
  [
    {
      "internalType": "uint256",
      "name": "counterpartyFid",
      "type": "uint256"
    }
  ],
  [
    {
      "internalType": "bytes32",
      "name": "",
      "type": "bytes32"
    }
  ]
],
    params: [options.counterpartyFid]
  });
};


/**
 * Represents the parameters for the "withdraw" function.
 */
export type WithdrawParams = {
  amount: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"amount","type":"uint256"}>
};

/**
 * Calls the "withdraw" function on the contract.
 * @param options - The options for the "withdraw" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { withdraw } from "TODO";
 *
 * const transaction = withdraw({
 *  amount: ...,
 * });
 *
 * // Send the transaction
 * ...
 *
 * ```
 */
export function withdraw(
  options: BaseTransactionOptions<WithdrawParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x2e1a7d4d",
  [
    {
      "internalType": "uint256",
      "name": "amount",
      "type": "uint256"
    }
  ],
  []
],
    params: [options.amount]
  });
};


