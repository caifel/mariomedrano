# Definition

## Attributes

- content
- author
- history
  - Set a limit
- created
- last updated
- blocked content (for collaborative edition)

`Keep chess support for the version 2, but the current class should be easyly extend in its behaviour, or maybe better a new ChessL class will extend this base one`

- In case of a chess game
  - All pgn header notations
    - Such as white, black, result, elo w, wlo b

## Assumtions

- Target word(s) exists here.
- requestChange interface suppports more than one target
  - But all the other parameters are shared by all targets

## Interfaces

- requestChange (public)
  - input
    - Array `indexes`
    - Consider `Tool` instance as paramenter // TBD
    - tag: string // TBD
    - visuals: string // TBD
  - output --> string (new content)
- updateContent (private)
  - input --> string
  - output --> void
- getDeserializedContent (public)
  - input --> none
  - ouput --> api - array of something that react understands
  - This means that content string is not publicly accessible
- Get Header content (public)
  - input --> string (represents the attritube)
  - output --> string
  - This means that the only way is through out this method.

\*\*\* Research: What design pattern do we need in order to pass a class instance as an interface input`?`

### requestChange

The default scenario in case tag and visuals are `null`

- tag = span
- visuals = empty string

### Deserialzer

The same object `MUST` provide instructions for `react` about how to render the result.

Basically a proxy is needed to communicate both, editor content and react.

## Steps

### 1 - Wrap word(s) in new requested element

### 2 - Provide the visuals to the tag

### 3 - Set new content on class instance

Some consolidation process might be needed...

## What tag can we support?

- span, p, section, h1, h2, h3, b, i, small

  - A full list can be found in "ReactHTML"

- (a) = link is an special case

### External but related class `Tool`

Each tool instance is the combination of a tag and a visual(s).

`(30 mins for first definition)`
