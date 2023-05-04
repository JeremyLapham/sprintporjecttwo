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
            result = 'cs';
            break;
        }
        case 'cpp': {
            result = 'cpp';
            break;
        }
        case 'clojure': {
            result = 'clojure';
            break;
        }
        case 'coffeeScript': {
            result = 'coffeescript';
            break;
        }
        case 'coq': {
            result = 'coq';
            break;
        }
        case 'crystal': {
            result = 'crystal';
            break;
        }
        case 'dart': {
            result = 'dart';
            break;
        }
        case 'elixir': {
            result = 'elixir';
            break;
        }
        case 'fsharp': {
            result = 'fsharp';
            break;
        }
        case 'go': {
            result = 'go';
            break;
        }
        case 'groovy': {
            result = 'groovy';
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
        case 'javaScript': {
            result = 'js';
            break;
        }
        case 'kotlin': {
            result = 'clojure';
            break;
        }
        case 'lean': {
            result = 'clojure';
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
            result = 'swift';
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