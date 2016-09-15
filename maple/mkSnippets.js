console.log(process.argv);
var snippets = {
    "if": {
        "prefix": "if",
        "body": [
            "if ${1} then",
            "\t${2}",
            "end if;"
        ],
        "description": "if  then  end if"
    },
    "elif": {
        "prefix": "elif",
        "body": [
            "elif ${1} then",
            "\t${2}"
        ],
        "description": "elif  then"
    },
    "else": {
        "prefix": "else",
        "body": [
            "else",
            "\t${1}"
        ],
        "description": "else"
    },
    "proc": {
        "prefix": "proc",
        "body": [
            "proc($1)",
            "\t$2",
            "end proc:"
        ],
        "description": "proc end proc"
    },
    "module": {
        "prefix": "module",
        "body": [
            "module()",
            "\toption $1;",
            "\t$2",
            "end module:"
        ],
        "description": "module option end module"
    },
    "for": {
        "prefix": "for",
        "body": [
            "for $1 do",
            "\t$2",
            "end do;"
        ],
        "description": "for do end do"
    },
    "while": {
        "prefix": "while",
        "body": [
            "while $1 do",
            "\t$2",
            "end do;"
        ],
        "description": "while do end do"
    },
    "do": {
        "prefix": "do",
        "body": [
            "do",
            "\t$1",
            "end do;"
        ],
        "description": "do end do"
    },
    "use": {
        "prefix": "use",
        "body": [
            "use $1 in",
            "\t$2",
            "end use;"
        ],
        "description": "use in end use"
    },
    "try": {
        "prefix": "try",
        "body": [
            "try",
            "\t$1",
            "catch $2:",
            "\t$3",
            "finally",
            "\t$4",
            "end try;"
        ],
        "description": "try catch finally end try"
    },
    "define": {
        "prefix": "$ifndef",
        "body": [
            "\\\\$ifndef $1",
            "\\\\$define $1",
            "$2",
            "\\\\$endif"
        ],
        "description": "ifndef - define - endif"
    }
};

var tmp = "define(\"ace/snippets/maple\", [\"require\", \"exports\", \"module\"], function(require, exports, module) {\n\
    \"use strict\";\n\
    exports.snippetText = \"@snippets\";\n\
    exports.scope = \"maple\";\n\
});";
var s = "";
var append = function(str) {
    s = s + str + "\n";
};
append("## Maple Snippets\\n\\");
for (x in snippets) {
    append("# " + snippets[x].description + "\\n\\");
    append("snippet " + snippets[x].prefix + "\\n\\");
    for (y in snippets[x].body) {
        append("\t" + snippets[x].body[y] + "\\n\\");
    }
}
console.log(tmp.replace("@snippets", s));