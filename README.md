This is a front end react js project that allows you to build a sentence by selecting words
based on their word types.

The types are Noun, Verb, Adjective, Adverb, Pronoun, Preposition, Conjunction, Determiner,
Exclamation.

the user(frontend/client) has access to these enpoints

api/words/wordlist?type={wordType} - this retrives a list of words of the same type as the query string

api/words/sentences - this retrives or creates and stores a sentence of 5 min and 350 max characters of the same type as the query string.

api/words/collections - for retrieving the names of ll the word types store in the database called words, for example, nouns, verbs etc.

To run this react api, first make sure you have
the backend (available at https://github.com/bobaram/runninghill_node_api ) and then:

1. npm install
2. npm start

After this, the app should be running on localhost
server, port 3000.
