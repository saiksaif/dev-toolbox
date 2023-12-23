export const ASCII_REF = [
    {"decimal": "000", "octal": "000", "hex": "00", "binary": "0000 0000", "value": "NUL", "description": "\"null\" character"},
    {"decimal": "001", "octal": "001", "hex": "01", "binary": "0000 0001", "value": "SOH", "description": "start of header"},
    {"decimal": "002", "octal": "002", "hex": "02", "binary": "0000 0010", "value": "STX", "description": "start of text"},
    {"decimal": "003", "octal": "003", "hex": "03", "binary": "0000 0011", "value": "ETX", "description": "end of text"},
    {"decimal": "004", "octal": "004", "hex": "04", "binary": "0000 0100", "value": "EOT", "description": "end of transmission"},
    {"decimal": "005", "octal": "005", "hex": "05", "binary": "0000 0101", "value": "ENQ", "description": "enquiry"},
    {"decimal": "006", "octal": "006", "hex": "06", "binary": "0000 0110", "value": "ACK", "description": "acknowledgment"},
    {"decimal": "007", "octal": "007", "hex": "07", "binary": "0000 0111", "value": "BEL", "description": "bell"},
    {"decimal": "008", "octal": "010", "hex": "08", "binary": "0000 1000", "value": "BS", "description": "backspace"},
    {"decimal": "009", "octal": "011", "hex": "09", "binary": "0000 1001", "value": "HT", "description": "horizontal tab"},
    {"decimal": "010", "octal": "012", "hex": "0A", "binary": "0000 1010", "value": "LF", "description": "line feed"},
    {"decimal": "011", "octal": "013", "hex": "0B", "binary": "0000 1011", "value": "VT", "description": "vertical tab"},
    {"decimal": "012", "octal": "014", "hex": "0C", "binary": "0000 1100", "value": "FF", "description": "form feed"},
    {"decimal": "013", "octal": "015", "hex": "0D", "binary": "0000 1101", "value": "CR", "description": "carriage return"},
    {"decimal": "014", "octal": "016", "hex": "0E", "binary": "0000 1110", "value": "SO", "description": "shift out"},
    {"decimal": "015", "octal": "017", "hex": "0F", "binary": "0000 1111", "value": "SI", "description": "shift in"},
    {"decimal": "016", "octal": "020", "hex": "10", "binary": "0001 0000", "value": "DLE", "description": "data link escape"},
    {"decimal": "017", "octal": "021", "hex": "11", "binary": "0001 0001", "value": "DC1", "description": "device control 1 (XON)"},
    {"decimal": "018", "octal": "022", "hex": "12", "binary": "0001 0010", "value": "DC2", "description": "device control 2"},
    {"decimal": "019", "octal": "023", "hex": "13", "binary": "0001 0011", "value": "DC3", "description": "device control 3 (XOFF)"},
    {"decimal": "020", "octal": "024", "hex": "14", "binary": "0001 0100", "value": "DC4", "description": "device control 4"},
    {"decimal": "021", "octal": "025", "hex": "15", "binary": "0001 0101", "value": "NAK", "description": "negative acknowledgement"},
    {"decimal": "022", "octal": "026", "hex": "16", "binary": "0001 0110", "value": "SYN", "description": "synchronous idle"},
    {"decimal": "023", "octal": "027", "hex": "17", "binary": "0001 0111", "value": "ETB", "description": "end of transmission block"},
    {"decimal": "024", "octal": "030", "hex": "18", "binary": "0001 1000", "value": "CAN", "description": "cancel"},
    {"decimal": "025", "octal": "031", "hex": "19", "binary": "0001 1001", "value": "EM", "description": "end of medium"},
    {"decimal": "026", "octal": "032", "hex": "1A", "binary": "0001 1010", "value": "SUB", "description": "substitute"},
    {"decimal": "027", "octal": "033", "hex": "1B", "binary": "0001 1011", "value": "ESC", "description": "escape"},
    {"decimal": "028", "octal": "034", "hex": "1C", "binary": "0001 1100", "value": "FS", "description": "file separator"},
    {"decimal": "029", "octal": "035", "hex": "1D", "binary": "0001 1101", "value": "GS", "description": "group separator"},
    {"decimal": "030", "octal": "036", "hex": "1E", "binary": "0001 1110", "value": "RS", "description": "request to send/record separator"},
    {"decimal": "031", "octal": "037", "hex": "1F", "binary": "0001 1111", "value": "US", "description": "unit separator"},
    {"decimal": "032", "octal": "040", "hex": "20", "binary": "0010 0000", "value": "SP", "description": "space"},
    {"decimal": "033", "octal": "041", "hex": "21", "binary": "0010 0001", "value": "!", "description": "exclamation mark"},
    {"decimal": "034", "octal": "042", "hex": "22", "binary": "0010 0010", "value": "\"", "description": "double quote"},
    {"decimal": "035", "octal": "043", "hex": "23", "binary": "0010 0011", "value": "#", "description": "number sign"},
    {"decimal": "036", "octal": "044", "hex": "24", "binary": "0010 0100", "value": "$", "description": "dollar sign"},
    {"decimal": "037", "octal": "045", "hex": "25", "binary": "0010 0101", "value": "%", "description": "percent"},
    {"decimal": "038", "octal": "046", "hex": "26", "binary": "0010 0110", "value": "&amp;", "description": "ampersand"},
    {"decimal": "039", "octal": "047", "hex": "27", "binary": "0010 0111", "value": "'", "description": "single quote"},
    {"decimal": "040", "octal": "050", "hex": "28", "binary": "0010 1000", "value": "(", "description": "left/opening parenthesis"},
    {"decimal": "041", "octal": "051", "hex": "29", "binary": "0010 1001", "value": ")", "description": "right/closing parenthesis"},
    {"decimal": "042", "octal": "052", "hex": "2A", "binary": "0010 1010", "value": "*", "description": "asterisk"},
    {"decimal": "043", "octal": "053", "hex": "2B", "binary": "0010 1011", "value": "+", "description": "plus"},
    {"decimal": "044", "octal": "054", "hex": "2C", "binary": "0010 1100", "value": ",", "description": "comma"},
    {"decimal": "045", "octal": "055", "hex": "2D", "binary": "0010 1101", "value": "-", "description": "minus or dash"},
    {"decimal": "046", "octal": "056", "hex": "2E", "binary": "0010 1110", "value": ".", "description": "dot"},
    {"decimal": "047", "octal": "057", "hex": "2F", "binary": "0010 1111", "value": "/", "description": "forward slash"},
    {"decimal": "048", "octal": "060", "hex": "30", "binary": "0011 0000", "value": "0", "description": "Zero"},
    {"decimal": "049", "octal": "061", "hex": "31", "binary": "0011 0001", "value": "1", "description": "One"},
    {"decimal": "050", "octal": "062", "hex": "32", "binary": "0011 0010", "value": "2", "description": "Two"},
    {"decimal": "051", "octal": "063", "hex": "33", "binary": "0011 0011", "value": "3", "description": "Three"},
    {"decimal": "052", "octal": "064", "hex": "34", "binary": "0011 0100", "value": "4", "description": "Four"},
    {"decimal": "053", "octal": "065", "hex": "35", "binary": "0011 0101", "value": "5", "description": "Five"},
    {"decimal": "054", "octal": "066", "hex": "36", "binary": "0011 0110", "value": "6", "description": "Six"},
    {"decimal": "055", "octal": "067", "hex": "37", "binary": "0011 0111", "value": "7", "description": "Seven"},
    {"decimal": "056", "octal": "070", "hex": "38", "binary": "0011 1000", "value": "8", "description": "Eight"},
    {"decimal": "057", "octal": "071", "hex": "39", "binary": "0011 1001", "value": "9", "description": "Nine"},
    {"decimal": "058", "octal": "072", "hex": "3A", "binary": "0011 1010", "value": ":", "description": "colon"},
    {"decimal": "059", "octal": "073", "hex": "3B", "binary": "0011 1011", "value": ";", "description": "semi-colon"},
    {"decimal": "060", "octal": "074", "hex": "3C", "binary": "0011 1100", "value": "&lt; ", "description": "less than"},
    {"decimal": "061", "octal": "075", "hex": "3D", "binary": "0011 1101", "value": "=", "description": "equal sign"},
    {"decimal": "062", "octal": "076", "hex": "3E", "binary": "0011 1110", "value": "&gt;", "description": "greater than"},
    {"decimal": "063", "octal": "077", "hex": "3F", "binary": "0011 1111", "value": "?", "description": "question mark"},
    {"decimal": "064", "octal": "100", "hex": "40", "binary": "0100 0000", "value": "@", "description": "\"at\" symbol"},
    {"decimal": "065", "octal": "101", "hex": "41", "binary": "0100 0001", "value": "A", "description": "uppercase letter A"},
    {"decimal": "066", "octal": "102", "hex": "42", "binary": "0100 0010", "value": "B", "description": "uppercase letter B"},
    {"decimal": "067", "octal": "103", "hex": "43", "binary": "0100 0011", "value": "C", "description": "uppercase letter C"},
    {"decimal": "068", "octal": "104", "hex": "44", "binary": "0100 0100", "value": "D", "description": "uppercase letter D"},
    {"decimal": "069", "octal": "105", "hex": "45", "binary": "0100 0101", "value": "E", "description": "uppercase letter E"},
    {"decimal": "070", "octal": "106", "hex": "46", "binary": "0100 0110", "value": "F", "description": "uppercase letter F"},
    {"decimal": "071", "octal": "107", "hex": "47", "binary": "0100 0111", "value": "G", "description": "uppercase letter G"},
    {"decimal": "072", "octal": "110", "hex": "48", "binary": "0100 1000", "value": "H", "description": "uppercase letter H"},
    {"decimal": "073", "octal": "111", "hex": "49", "binary": "0100 1001", "value": "I", "description": "uppercase letter I"},
    {"decimal": "074", "octal": "112", "hex": "4A", "binary": "0100 1010", "value": "J", "description": "uppercase letter J"},
    {"decimal": "075", "octal": "113", "hex": "4B", "binary": "0100 1011", "value": "K", "description": "uppercase letter K"},
    {"decimal": "076", "octal": "114", "hex": "4C", "binary": "0100 1100", "value": "L", "description": "uppercase letter L"},
    {"decimal": "077", "octal": "115", "hex": "4D", "binary": "0100 1101", "value": "M", "description": "uppercase letter M"},
    {"decimal": "078", "octal": "116", "hex": "4E", "binary": "0100 1110", "value": "N", "description": "uppercase letter N"},
    {"decimal": "079", "octal": "117", "hex": "4F", "binary": "0100 1111", "value": "O", "description": "uppercase letter O"},
    {"decimal": "080", "octal": "120", "hex": "50", "binary": "0101 0000", "value": "P", "description": "uppercase letter P"},
    {"decimal": "081", "octal": "121", "hex": "51", "binary": "0101 0001", "value": "Q", "description": "uppercase letter Q"},
    {"decimal": "082", "octal": "122", "hex": "52", "binary": "0101 0010", "value": "R", "description": "uppercase letter R"},
    {"decimal": "083", "octal": "123", "hex": "53", "binary": "0101 0011", "value": "S", "description": "uppercase letter S"},
    {"decimal": "084", "octal": "124", "hex": "54", "binary": "0101 0100", "value": "T", "description": "uppercase letter T"},
    {"decimal": "085", "octal": "125", "hex": "55", "binary": "0101 0101", "value": "U", "description": "uppercase letter U"},
    {"decimal": "086", "octal": "126", "hex": "56", "binary": "0101 0110", "value": "V", "description": "uppercase letter V"},
    {"decimal": "087", "octal": "127", "hex": "57", "binary": "0101 0111", "value": "W", "description": "uppercase letter W"},
    {"decimal": "088", "octal": "130", "hex": "58", "binary": "0101 1000", "value": "X", "description": "uppercase letter X"},
    {"decimal": "089", "octal": "131", "hex": "59", "binary": "0101 1001", "value": "Y", "description": "uppercase letter Y"},
    {"decimal": "090", "octal": "132", "hex": "5A", "binary": "0101 1010", "value": "Z", "description": "uppercase letter Z"},
    {"decimal": "091", "octal": "133", "hex": "5B", "binary": "0101 1011", "value": "[", "description": "left/opening bracket"},
    {"decimal": "092", "octal": "134", "hex": "5C", "binary": "0101 1100", "value": "\\", "description": "back slash"},
    {"decimal": "093", "octal": "135", "hex": "5D", "binary": "0101 1101", "value": "]", "description": "right/closing bracket"},
    {"decimal": "094", "octal": "136", "hex": "5E", "binary": "0101 1110", "value": "^", "description": "caret/circumflex"},
    {"decimal": "095", "octal": "137", "hex": "5F", "binary": "0101 1111", "value": "_", "description": "underscore"},
    {"decimal": "096", "octal": "140", "hex": "60", "binary": "0110 0000", "value": "`", "description": "grave accent"},
    {"decimal": "097", "octal": "141", "hex": "61", "binary": "0110 0001", "value": "a", "description": "lowercase letter a"},
    {"decimal": "098", "octal": "142", "hex": "62", "binary": "0110 0010", "value": "b", "description": "lowercase letter b"},
    {"decimal": "099", "octal": "143", "hex": "63", "binary": "0110 0011", "value": "c", "description": "lowercase letter c"},
    {"decimal": "100", "octal": "144", "hex": "64", "binary": "0110 0100", "value": "d", "description": "lowercase letter d"},
    {"decimal": "101", "octal": "145", "hex": "65", "binary": "0110 0101", "value": "e", "description": "lowercase letter e"},
    {"decimal": "102", "octal": "146", "hex": "66", "binary": "0110 0110", "value": "f", "description": "lowercase letter f"},
    {"decimal": "103", "octal": "147", "hex": "67", "binary": "0110 0111", "value": "g", "description": "lowercase letter g"},
    {"decimal": "104", "octal": "150", "hex": "68", "binary": "0110 1000", "value": "h", "description": "lowercase letter h"},
    {"decimal": "105", "octal": "151", "hex": "69", "binary": "0110 1001", "value": "i", "description": "lowercase letter i"},
    {"decimal": "106", "octal": "152", "hex": "6A", "binary": "0110 1010", "value": "j", "description": "lowercase letter j"},
    {"decimal": "107", "octal": "153", "hex": "6B", "binary": "0110 1011", "value": "k", "description": "lowercase letter k"},
    {"decimal": "108", "octal": "154", "hex": "6C", "binary": "0110 1100", "value": "l", "description": "lowercase letter l"},
    {"decimal": "109", "octal": "155", "hex": "6D", "binary": "0110 1101", "value": "m", "description": "lowercase letter m"},
    {"decimal": "110", "octal": "156", "hex": "6E", "binary": "0110 1110", "value": "n", "description": "lowercase letter n"},
    {"decimal": "111", "octal": "157", "hex": "6F", "binary": "0110 1111", "value": "o", "description": "lowercase letter o"},
    {"decimal": "112", "octal": "160", "hex": "70", "binary": "0111 0000", "value": "p", "description": "lowercase letter p"},
    {"decimal": "113", "octal": "161", "hex": "71", "binary": "0111 0001", "value": "q", "description": "lowercase letter q"},
    {"decimal": "114", "octal": "162", "hex": "72", "binary": "0111 0010", "value": "r", "description": "lowercase letter r"},
    {"decimal": "115", "octal": "163", "hex": "73", "binary": "0111 0011", "value": "s", "description": "lowercase letter s"},
    {"decimal": "116", "octal": "164", "hex": "74", "binary": "0111 0100", "value": "t", "description": "lowercase letter t"},
    {"decimal": "117", "octal": "165", "hex": "75", "binary": "0111 0101", "value": "u", "description": "lowercase letter u"},
    {"decimal": "118", "octal": "166", "hex": "76", "binary": "0111 0110", "value": "v", "description": "lowercase letter v"},
    {"decimal": "119", "octal": "167", "hex": "77", "binary": "0111 0111", "value": "w", "description": "lowercase letter w"},
    {"decimal": "120", "octal": "170", "hex": "78", "binary": "0111 1000", "value": "x", "description": "lowercase letter x"},
    {"decimal": "121", "octal": "171", "hex": "79", "binary": "0111 1001", "value": "y", "description": "lowercase letter y"},
    {"decimal": "122", "octal": "172", "hex": "7A", "binary": "0111 1010", "value": "z", "description": "lowercase letter z"},
    {"decimal": "123", "octal": "173", "hex": "7B", "binary": "0111 1011", "value": "{", "description": "left/opening brace"},
    {"decimal": "124", "octal": "174", "hex": "7C", "binary": "0111 1100", "value": "|", "description": "vertical bar"},
    {"decimal": "125", "octal": "175", "hex": "7D", "binary": "0111 1101", "value": "{", "description": "right/closing brace"},
    {"decimal": "126", "octal": "176", "hex": "7E", "binary": "0111 1110", "value": "~", "description": "tilde"},
    {"decimal": "127", "octal": "177", "hex": "7F", "binary": "0111 1111", "value": "DEL", "description": "delete"},
    {"decimal": "128", "octal": "200", "hex": "80", "binary": "1000 0000", "value": "Ç", "description": "capital letter c with cedilla"},
    {"decimal": "129", "octal": "201", "hex": "81", "binary": "1000 0001", "value": "ü", "description": "letter u with diaeresis"},
    {"decimal": "130", "octal": "202", "hex": "82", "binary": "1000 0010", "value": "é", "description": "letter e with acute"},
    {"decimal": "131", "octal": "203", "hex": "83", "binary": "1000 0011", "value": "â", "description": "letter a with circumflex"},
    {"decimal": "132", "octal": "204", "hex": "84", "binary": "1000 0100", "value": "ä", "description": "letter a with diaeresis"},
    {"decimal": "133", "octal": "205", "hex": "85", "binary": "1000 0101", "value": "à", "description": "letter a with grave"},
    {"decimal": "134", "octal": "206", "hex": "86", "binary": "1000 0110", "value": "å", "description": "letter a with ring above"},
    {"decimal": "135", "octal": "207", "hex": "87", "binary": "1000 0111", "value": "ç", "description": "letter c with cedilla"},
    {"decimal": "136", "octal": "210", "hex": "88", "binary": "1000 1000", "value": "ê", "description": "letter e with circumflex"},
    {"decimal": "137", "octal": "211", "hex": "89", "binary": "1000 1001", "value": "ë", "description": "letter e with diaeresis"},
    {"decimal": "138", "octal": "212", "hex": "8A", "binary": "1000 1010", "value": "è", "description": "letter e with grave"},
    {"decimal": "139", "octal": "213", "hex": "8B", "binary": "1000 1011", "value": "ï", "description": "letter i with diaeresis"},
    {"decimal": "140", "octal": "214", "hex": "8C", "binary": "1000 1100", "value": "î", "description": "letter i with circumflex"},
    {"decimal": "141", "octal": "215", "hex": "8D", "binary": "1000 1101", "value": "ì", "description": "letter i with grave"},
    {"decimal": "142", "octal": "216", "hex": "8E", "binary": "1000 1110", "value": "Ä", "description": "capital letter a with diaeresis"},
    {"decimal": "143", "octal": "217", "hex": "8F", "binary": "1000 1111", "value": "Å", "description": "capital letter a with ring above"},
    {"decimal": "144", "octal": "220", "hex": "90", "binary": "1001 0000", "value": "É", "description": "capital letter e with acute"},
    {"decimal": "145", "octal": "221", "hex": "91", "binary": "1001 0001", "value": "æ", "description": "letter ae"},
    {"decimal": "146", "octal": "222", "hex": "92", "binary": "1001 0010", "value": "Æ", "description": "capital letter ae"},
    {"decimal": "147", "octal": "223", "hex": "93", "binary": "1001 0011", "value": "ô", "description": "letter o with circumflex"},
    {"decimal": "148", "octal": "224", "hex": "94", "binary": "1001 0100", "value": "ö", "description": "letter o with diaeresis"},
    {"decimal": "149", "octal": "225", "hex": "95", "binary": "1001 0101", "value": "ò", "description": "letter o with grave"},
    {"decimal": "150", "octal": "226", "hex": "96", "binary": "1001 0110", "value": "û", "description": "letter u with circumflex"},
    {"decimal": "151", "octal": "227", "hex": "97", "binary": "1001 0111", "value": "ù", "description": "letter u with grave"},
    {"decimal": "152", "octal": "230", "hex": "98", "binary": "1001 1000", "value": "ÿ", "description": "letter y with diaeresis"},
    {"decimal": "153", "octal": "231", "hex": "99", "binary": "1001 1001", "value": "Ö", "description": "capital letter o with diaeresis"},
    {"decimal": "154", "octal": "232", "hex": "9A", "binary": "1001 1010", "value": "Ü", "description": "capital letter u with diaeresis"},
    {"decimal": "155", "octal": "233", "hex": "9B", "binary": "1001 1011", "value": "¢", "description": "letter o with stroke"},
    {"decimal": "156", "octal": "234", "hex": "9C", "binary": "1001 1100", "value": "£", "description": "pound sign"},
    {"decimal": "157", "octal": "235", "hex": "9D", "binary": "1001 1101", "value": "¥", "description": "yen sign"},
    {"decimal": "158", "octal": "236", "hex": "9E", "binary": "1001 1110", "value": "₧", "description": "peseta sign"},
    {"decimal": "159", "octal": "237", "hex": "9F", "binary": "1001 1111", "value": "ƒ", "description": "letter f with hook"},
    {"decimal": "160", "octal": "240", "hex": "A0", "binary": "1010 0000", "value": "á", "description": "letter a with acute"},
    {"decimal": "161", "octal": "241", "hex": "A1", "binary": "1010 0001", "value": "í", "description": "letter i with acute"},
    {"decimal": "162", "octal": "242", "hex": "A2", "binary": "1010 0010", "value": "ó", "description": "letter o with acute"},
    {"decimal": "163", "octal": "243", "hex": "A3", "binary": "1010 0011", "value": "ú", "description": "letter u with acute"},
    {"decimal": "164", "octal": "244", "hex": "A4", "binary": "1010 0100", "value": "ñ", "description": "letter n with tilde"},
    {"decimal": "165", "octal": "245", "hex": "A5", "binary": "1010 0101", "value": "Ñ", "description": "capital letter n with tilde"},
    {"decimal": "166", "octal": "246", "hex": "A6", "binary": "1010 0110", "value": "ª", "description": "feminine ordinal indicator"},
    {"decimal": "167", "octal": "247", "hex": "A7", "binary": "1010 0111", "value": "º", "description": "masculine ordinal indicator"},
    {"decimal": "168", "octal": "250", "hex": "A8", "binary": "1010 1000", "value": "¿", "description": "inverted question mark"},
    {"decimal": "169", "octal": "251", "hex": "A9", "binary": "1010 1001", "value": "⌐", "description": "reversed not sign"},
    {"decimal": "170", "octal": "252", "hex": "AA", "binary": "1010 1010", "value": "¬", "description": "not sign"},
    {"decimal": "171", "octal": "253", "hex": "AB", "binary": "1010 1011", "value": "½", "description": "one half"},
    {"decimal": "172", "octal": "254", "hex": "AC", "binary": "1010 1100", "value": "¼", "description": "one quarter"},
    {"decimal": "173", "octal": "255", "hex": "AD", "binary": "1010 1101", "value": "¡", "description": "inverted exclamation mark"},
    {"decimal": "174", "octal": "256", "hex": "AE", "binary": "1010 1110", "value": "«", "description": "left double angle quotation mark"},
    {"decimal": "175", "octal": "257", "hex": "AF", "binary": "1010 1111", "value": "»", "description": "right double angle quotation mark"},
    {"decimal": "176", "octal": "260", "hex": "B0", "binary": "1011 0000", "value": "░", "description": "light shade"},
    {"decimal": "177", "octal": "261", "hex": "B1", "binary": "1011 0001", "value": "▒", "description": "medium shade"},
    {"decimal": "178", "octal": "262", "hex": "B2", "binary": "1011 0010", "value": "▓", "description": "dark shade"},
    {"decimal": "179", "octal": "263", "hex": "B3", "binary": "1011 0011", "value": "│", "description": "single vertical"},
    {"decimal": "180", "octal": "264", "hex": "B4", "binary": "1011 0100", "value": "┤", "description": "single vertical and left"},
    {"decimal": "181", "octal": "265", "hex": "B5", "binary": "1011 0101", "value": "╡", "description": "single vertical and double left"},
    {"decimal": "182", "octal": "266", "hex": "B6", "binary": "1011 0110", "value": "╢", "description": "double vertical and single left"},
    {"decimal": "183", "octal": "267", "hex": "B7", "binary": "1011 0111", "value": "╖", "description": "double down and single left"},
    {"decimal": "184", "octal": "270", "hex": "B8", "binary": "1011 1000", "value": "╕", "description": "single down and double left"},
    {"decimal": "185", "octal": "271", "hex": "B9", "binary": "1011 1001", "value": "╣", "description": "double vertical and left"},
    {"decimal": "186", "octal": "272", "hex": "BA", "binary": "1011 1010", "value": "║", "description": "double vertical"},
    {"decimal": "187", "octal": "273", "hex": "BB", "binary": "1011 1011", "value": "╗", "description": "double down and left"},
    {"decimal": "188", "octal": "274", "hex": "BC", "binary": "1011 1100", "value": "╝", "description": "double up and left"},
    {"decimal": "189", "octal": "275", "hex": "BD", "binary": "1011 1101", "value": "╜", "description": "double up and single left"},
    {"decimal": "190", "octal": "276", "hex": "BE", "binary": "1011 1110", "value": "╛", "description": "single up and double left"},
    {"decimal": "191", "octal": "277", "hex": "BF", "binary": "1011 1111", "value": "┐", "description": "single down and left"},
    {"decimal": "192", "octal": "300", "hex": "C0", "binary": "1100 0000", "value": "└", "description": "single up and right"},
    {"decimal": "193", "octal": "301", "hex": "C1", "binary": "1100 0001", "value": "┴", "description": "single up and horizontal"},
    {"decimal": "194", "octal": "302", "hex": "C2", "binary": "1100 0010", "value": "┬", "description": "single down and horizontal"},
    {"decimal": "195", "octal": "303", "hex": "C3", "binary": "1100 0011", "value": "├", "description": "single vertical and right"},
    {"decimal": "196", "octal": "304", "hex": "C4", "binary": "1100 0100", "value": "─", "description": "single horizontal"},
    {"decimal": "197", "octal": "305", "hex": "C5", "binary": "1100 0101", "value": "┼", "description": "single vertical and horizontal"},
    {"decimal": "198", "octal": "306", "hex": "C6", "binary": "1100 0110", "value": "╞", "description": "single vertical and double right"},
    {"decimal": "199", "octal": "307", "hex": "C7", "binary": "1100 0111", "value": "╟", "description": "double vertical and single right"},
    {"decimal": "200", "octal": "310", "hex": "C8", "binary": "1100 1000", "value": "╚", "description": "double up and right"},
    {"decimal": "201", "octal": "311", "hex": "C9", "binary": "1100 1001", "value": "╔", "description": "double down and right"},
    {"decimal": "202", "octal": "312", "hex": "CA", "binary": "1100 1010", "value": "╩", "description": "double up and horizontal"},
    {"decimal": "203", "octal": "313", "hex": "CB", "binary": "1100 1011", "value": "╦", "description": "double down and horizontal"},
    {"decimal": "204", "octal": "314", "hex": "CC", "binary": "1100 1100", "value": "╠", "description": "double vertical and right"},
    {"decimal": "205", "octal": "315", "hex": "CD", "binary": "1100 1101", "value": "═", "description": "double horizontal"},
    {"decimal": "206", "octal": "316", "hex": "CE", "binary": "1100 1110", "value": "╬", "description": "double vertical and horizontal"},
    {"decimal": "207", "octal": "317", "hex": "CF", "binary": "1100 1111", "value": "╧", "description": "single up and double horizontal"},
    {"decimal": "208", "octal": "320", "hex": "D0", "binary": "1101 0000", "value": "╨", "description": "double up and single horizontal"},
    {"decimal": "209", "octal": "321", "hex": "D1", "binary": "1101 0001", "value": "╤", "description": "single down and double horizontal"},
    {"decimal": "210", "octal": "322", "hex": "D2", "binary": "1101 0010", "value": "╥", "description": "double down and single horizontal"},
    {"decimal": "211", "octal": "323", "hex": "D3", "binary": "1101 0011", "value": "╙", "description": "double up and single right"},
    {"decimal": "212", "octal": "324", "hex": "D4", "binary": "1101 0100", "value": "╘", "description": "single up and double right"},
    {"decimal": "213", "octal": "325", "hex": "D5", "binary": "1101 0101", "value": "╒", "description": "single down and double right"},
    {"decimal": "214", "octal": "326", "hex": "D6", "binary": "1101 0110", "value": "╓", "description": "double down and single right"},
    {"decimal": "215", "octal": "327", "hex": "D7", "binary": "1101 0111", "value": "╫", "description": "double vertical and single horizontal"},
    {"decimal": "216", "octal": "330", "hex": "D8", "binary": "1101 1000", "value": "╪", "description": "single vertical and double horizontal"},
    {"decimal": "217", "octal": "331", "hex": "D9", "binary": "1101 1001", "value": "┘", "description": "single up and left"},
    {"decimal": "218", "octal": "332", "hex": "DA", "binary": "1101 1010", "value": "┌", "description": "single down and right"},
    {"decimal": "219", "octal": "333", "hex": "DB", "binary": "1101 1011", "value": "█", "description": "full block"},
    {"decimal": "220", "octal": "334", "hex": "DC", "binary": "1101 1100", "value": "▄", "description": "bottom half block"},
    {"decimal": "221", "octal": "335", "hex": "DD", "binary": "1101 1101", "value": "▌", "description": "left half block"},
    {"decimal": "222", "octal": "336", "hex": "DE", "binary": "1101 1110", "value": "▐", "description": "right half block"},
    {"decimal": "223", "octal": "337", "hex": "DF", "binary": "1101 1111", "value": "▀", "description": "top half block"},
    {"decimal": "224", "octal": "340", "hex": "E0", "binary": "1110 0000", "value": "α", "description": "greek letter alpha"},
    {"decimal": "225", "octal": "341", "hex": "E1", "binary": "1110 0001", "value": "ß", "description": "letter sharp s"},
    {"decimal": "226", "octal": "342", "hex": "E2", "binary": "1110 0010", "value": "Γ", "description": "greek capital letter gamma"},
    {"decimal": "227", "octal": "343", "hex": "E3", "binary": "1110 0011", "value": "π", "description": "greek letter pi"},
    {"decimal": "228", "octal": "344", "hex": "E4", "binary": "1110 0100", "value": "Σ", "description": "greek capital letter sigma"},
    {"decimal": "229", "octal": "345", "hex": "E5", "binary": "1110 0101", "value": "σ", "description": "greek letter sigma"},
    {"decimal": "230", "octal": "346", "hex": "E6", "binary": "1110 0110", "value": "µ", "description": "micro sign"},
    {"decimal": "231", "octal": "347", "hex": "E7", "binary": "1110 0111", "value": "τ", "description": "greek letter tau"},
    {"decimal": "232", "octal": "350", "hex": "E8", "binary": "1110 1000", "value": "Φ", "description": "greek capital letter phi"},
    {"decimal": "233", "octal": "351", "hex": "E9", "binary": "1110 1001", "value": "Θ", "description": "greek capital letter theta"},
    {"decimal": "234", "octal": "352", "hex": "EA", "binary": "1110 1010", "value": "Ω", "description": "greek capital letter omega"},
    {"decimal": "235", "octal": "353", "hex": "EB", "binary": "1110 1011", "value": "δ", "description": "greek letter delta"},
    {"decimal": "236", "octal": "354", "hex": "EC", "binary": "1110 1100", "value": "∞", "description": "infinity"},
    {"decimal": "237", "octal": "355", "hex": "ED", "binary": "1110 1101", "value": "φ", "description": "greek letter phi"},
    {"decimal": "238", "octal": "356", "hex": "EE", "binary": "1110 1110", "value": "ε", "description": "greek letter epsilon"},
    {"decimal": "239", "octal": "357", "hex": "EF", "binary": "1110 1111", "value": "∩", "description": "intersection"},
    {"decimal": "240", "octal": "360", "hex": "F0", "binary": "1111 0000", "value": "≡", "description": "identical to"},
    {"decimal": "241", "octal": "361", "hex": "F1", "binary": "1111 0001", "value": "±", "description": "plus-minus sign"},
    {"decimal": "242", "octal": "362", "hex": "F2", "binary": "1111 0010", "value": "≥", "description": "greater than or equal to"},
    {"decimal": "243", "octal": "363", "hex": "F3", "binary": "1111 0011", "value": "≤", "description": "less than or equal to"},
    {"decimal": "244", "octal": "364", "hex": "F4", "binary": "1111 0100", "value": "⌠", "description": "top half integral"},
    {"decimal": "245", "octal": "365", "hex": "F5", "binary": "1111 0101", "value": "⌡", "description": "bottom half integral"},
    {"decimal": "246", "octal": "366", "hex": "F6", "binary": "1111 0110", "value": "÷", "description": "division sign"},
    {"decimal": "247", "octal": "367", "hex": "F7", "binary": "1111 0111", "value": "≈", "description": "almost equal to"},
    {"decimal": "248", "octal": "370", "hex": "F8", "binary": "1111 1000", "value": "°", "description": "degree sign"},
    {"decimal": "249", "octal": "371", "hex": "F9", "binary": "1111 1001", "value": "∙", "description": "bullet operator"},
    {"decimal": "250", "octal": "372", "hex": "FA", "binary": "1111 1010", "value": "·", "description": "middle dot"},
    {"decimal": "251", "octal": "373", "hex": "FB", "binary": "1111 1011", "value": "√", "description": "square root"},
    {"decimal": "252", "octal": "374", "hex": "FC", "binary": "1111 1100", "value": "ⁿ", "description": "superscript n"},
    {"decimal": "253", "octal": "375", "hex": "FD", "binary": "1111 1101", "value": "²", "description": "superscript 2"},
    {"decimal": "254", "octal": "376", "hex": "FE", "binary": "1111 1110", "value": "■", "description": "black square"},
    {"decimal": "255", "octal": "377", "hex": "FF", "binary": "1111 1111", "value": "", "description": "no-break space"}
]