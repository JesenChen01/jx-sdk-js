import {
	// ✅数组Array
	GroupArrKey,
	RecordArrPosition,
	StatArrCount,
	StatArrKeyword,
	// ✅布尔Boolean
	EnvType,
	IsArguments,
	IsArray,
	IsAsyncFunction,
	IsBoolean,
	IsClass,
	IsDate,
	IsElement,
	IsEmpty,
	IsEmptyArray,
	IsEmptyObject,
	IsError,
	IsFunction,
	IsMap,
	IsNode,
	IsNull,
	IsNumber,
	IsObject,
	IsRegExp,
	IsSet,
	IsString,
	IsSymbol,
	IsSyncFunction,
	IsUndefined,
	IsWeakMap,
	IsWeakSet,
	IsWeb,
	TypeOf,
	// ✅日期Date
	FormatCountdown,
	FormatTimeDiff,
	// ✅日期Function
	AsyncTo,
	Debounce,
	Throttle,
	WaitFor,
	// ✅数值Number
	FillNum,
	FormatByte,
	RandomNum,
	RandomNumPlus,
	RoundNum,
	ThousandNum,
	// ✅对象Object
	FilterObj,
	// ✅正则Regexp
	CheckText,
	CheckTextPlus,
	MatchBracketText,
	// ✅字符String
	DesePhone,
	FormatPhone,
	RandomColor,
	RandomId,
	RemoveTag,
	ReverseText,
	StartScore
} from "./common/index";
import {
	// ✅Cookie缓存
	GetCookie,
	RemoveCookie,
	SetCookie,
	// ✅Dom节点
	AutoResponse,
	CopyPaste,
	DownloadFile,
	FilterXss,
	Img2Base64,
	Jsonp,
	LoadScript,
	// ✅Function函数
	Ajax,
	// ✅Storage存储
	ClearLStorage,
	ClearSStorage,
	GetLStorage,
	GetSStorage,
	RemoveLStorage,
	RemoveSStorage,
	SetLStorage,
	SetSStorage,
	// ✅Type类型
	WebType,
	// ✅Url链接
	ParseUrlSearch,
	RemoveUrlSearch,
	SetUrlSearch,
	StringifyUrlSearch
} from "./web/index";

export {
	Ajax,
	AsyncTo,
	AutoResponse,
	CheckText,
	CheckTextPlus,
	ClearLStorage,
	ClearSStorage,
	CopyPaste,
	Debounce,
	DesePhone,
	DownloadFile,
	EnvType,
	FillNum,
	FilterObj,
	FilterXss,
	FormatByte,
	FormatCountdown,
	FormatPhone,
	FormatTimeDiff,
	GetCookie,
	GetLStorage,
	GetSStorage,
	GroupArrKey,
	Img2Base64,
	IsArguments,
	IsArray,
	IsAsyncFunction,
	IsBoolean,
	IsClass,
	IsDate,
	IsElement,
	IsEmpty,
	IsEmptyArray,
	IsEmptyObject,
	IsError,
	IsFunction,
	IsMap,
	IsNode,
	IsNull,
	IsNumber,
	IsObject,
	IsRegExp,
	IsSet,
	IsString,
	IsSymbol,
	IsSyncFunction,
	IsUndefined,
	IsWeakMap,
	IsWeakSet,
	IsWeb,
	Jsonp,
	LoadScript,
	MatchBracketText,
	ParseUrlSearch,
	RandomColor,
	RandomId,
	RandomNum,
	RandomNumPlus,
	RecordArrPosition,
	RemoveCookie,
	RemoveLStorage,
	RemoveSStorage,
	RemoveTag,
	RemoveUrlSearch,
	ReverseText,
	RoundNum,
	SetCookie,
	SetLStorage,
	SetSStorage,
	SetUrlSearch,
	StartScore,
	StatArrCount,
	StatArrKeyword,
	StringifyUrlSearch,
	ThousandNum,
	Throttle,
	TypeOf,
	WaitFor,
	WebType
};