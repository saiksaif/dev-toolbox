import Pomodoro from "./tools/pomodoro/pomodoro";
import LevenshteinCalculator from "./tools/levenshtein-distance/levenshtein-distance";
import UriEncoderDecoder from "./tools/encoder-decoder/uri-encoder-decoder";
import HtmlEncoderDecoder from "./tools/encoder-decoder/html-encoder-decoder";
import Base64EncoderDecoder from "./tools/encoder-decoder/base64-encoder-decoder";
import MD5Hasher from "./tools/hasher/md5-hasher";
import SHA1Hasher from "./tools/hasher/sha1-hasher";
import SHA256Hasher from "./tools/hasher/sha256-hasher";
import SHA512Hasher from "./tools/hasher/sha512-hasher";
import RIPEMD160Hasher from "./tools/hasher/ripemd-160-hasher";
import TimestampToTime from "./tools/time/timestamp-to-time";
import NumberHelper from "./tools/number/number-helper";
import AsciiReferenceTable from "./tools/ascii/ascii-reference-table";
import HelpMeStuckInVim from "./tools/vim/help-me-stuck-in-vim";
import Ipv4Helper from "./tools/network/ipv4-helper";
import React from "react";
import LinkedinTimestampParser from "./tools/linkedin-timestamp-parser/linkedin-timestamp-parser";

export const toolList = [
    {
        path: "pomodoro",
        name: "Pomodoro",
        element: <Pomodoro/>,
        category: "Data"
    },
    {
        path: "levenshtein-distance",
        name: "Levenshtein Distance Calculator",
        element: <LevenshteinCalculator/>,
        category: "Cryptographie"
    },
    {
        path: "uri-encoder-decoder",
        name: "Uri Encoder / Decoder",
        element: <UriEncoderDecoder/>,
        category: "Cryptographie"
    },
    {
        path: "html-encoder-decoder",
        name: "HTML Encoder / Decoder",
        element: <HtmlEncoderDecoder/>,
        category: "Cryptographie"
    },
    {
        path: "base64-encoder-decoder",
        name: "Base64 Encoder / Decoder",
        element: <Base64EncoderDecoder/>,
        category: "Cryptographie"
    },
    {
        path: "md5-hasher",
        name: "MD5 Hasher",
        element: <MD5Hasher/>,
        category: "Cryptographie"
    },
    {
        path: "sha1-hasher",
        name: "SHA1 Hasher",
        element: <SHA1Hasher/>,
        category: "Cryptographie"
    },
    {
        path: "sha256-hasher",
        name: "SHA256 Hasher",
        element: <SHA256Hasher/>,
        category: "Cryptographie"
    },
    {
        path: "sha512-hasher",
        name: "SHA512 Hasher",
        element: <SHA512Hasher/>,
        category: "Cryptographie"

    },
    {
        path: "ripemd-160-hasher",
        name: "RIPEMD-160 Hasher",
        element: <RIPEMD160Hasher/>,
        category: "Cryptographie"
    },
    {
        path: "timestamp-to-time",
        name: "Timestamp to time",
        element: <TimestampToTime/>,
        category: "Time"
    },
    {
        path: "linkedin-post-date-parser",
        name: "LinkedIn Post Date Parser",
        element: <LinkedinTimestampParser/>,
        category: "Time"
    },
    {
        path: "number-helper",
        name: "Number Helper",
        element: <NumberHelper/>,
        category: "Number"
    },
    {
        path: "ascii-reference-table",
        name: "ASCII Reference Table",
        element: <AsciiReferenceTable/>,
        category: "Data"
    },
    {
        path: "help-me-stuck-in-vim",
        name: "Help me I'm stuck in Vim!",
        element: <HelpMeStuckInVim/>,
        category: "Data"
    },
    {
        path: "network-ipv4-helper",
        name: "IPv4 Helper",
        element: <Ipv4Helper/>,
        category: "Number"
    }
]