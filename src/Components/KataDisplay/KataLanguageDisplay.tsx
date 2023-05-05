function KataLanguage (language: string) 
{
    let result: string = '';
    switch(language)
    {
        case 'c': {
            result = 'c';
            break;
        }
        case 'csharp': {
            result = 'c#';
            break;
        }
        case 'cpp': {
            result = 'c++';
            break;
        }
        case 'clojure': {
            result = 'clo';
            break;
        }
        case 'coffeescript': {
            result = 'cof';
            break;
        }
        case 'coq': {
            result = 'coq';
            break;
        }
        case 'crystal': {
            result = 'cr';
            break;
        }
        case 'dart': {
            result = 'dart';
            break;
        }
        case 'elixir': {
            result = 'ex';
            break;
        }
        case 'fsharp': {
            result = 'fs';
            break;
        }
        case 'go': {
            result = 'go';
            break;
        }
        case 'groovy': {
            result = 'gro';
            break;
        }
        case 'haskell': {
            result = 'ghc';
            break;
        }
        case 'java': {
            result = 'java';
            break;
        }
        case 'javascript': {
            result = 'js';
            break;
        }
        case 'kotlin': {
            result = 'kot';
            break;
        }
        case 'lean': {
            result = 'lean';
            break;
        }
        case 'lua': {
            result = 'lua';
            break;
        }
        case 'nasm': {
            result = 'nasm';
            break;
        }
        case 'php': {
            result = 'php';
            break;
        }
        case 'python': {
            result = 'py';
            break;
        }
        case 'racket': {
            result = 'rkt';
            break;
        }
        case 'ruby': {
            result = 'rb';
            break;
        }
        case 'rust': {
            result = 'rs';
            break;
        }
        case 'scala': {
            result = 'sc';
            break;
        }
        case 'shell': {
            result = 'shell';
            break;
        }
        case 'sql': {
            result = 'sql';
            break;
        }
        case 'swift': {
            result = 'swf';
            break;
        }
        case 'typescript': {
            result = 'ts';
            break;
        }
    }
    return result;
    
}

export { KataLanguage }