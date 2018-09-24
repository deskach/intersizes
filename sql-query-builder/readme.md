Your task in this kata is to create a SQL query builder.

A query builder is a component that is used as an abstraction layer of the underlying SQL flavor such as MySQL, PostgreSQL or Transact-SQL, allowing the user to switch seamlessly between them. Another advantage of using the query builder, is that it will handle any escaping or sanitization needed to build the query.

In this kata you'll build a simplified version of a query builder that can only handle select statements and that will output the resulting MySQL query.

Methods
Here's a list of the methods that must be implemented:

select(columns)
Takes an array in which every item can be a string or an object representing the columns to be selected.

Objects can be used to specify an alias and must follow this format:

{ column: "column_name", alias: "alias_name" }
If a column appears in the input more than once, only the last one will be used in the final query.

NOTE: Your builder should default to selecting all columns if the select/addSelect method is never called.

addSelect(columns)
Acts exactly as the select method, the only difference being that columns are added to the existing select made with the select method or previous addSelect calls.

where(name, value, op = "=")
Adds a where condition to the query, chained by an "AND" to the preceding ones. If value is a string it should be escaped in single quotes.

NOTE: To chain multiple conditions, start your where with a "1 = 1" condition, so that you'll not need to worry about stripping the initial "AND/OR" from the first condition.

orWhere(name, value, op)
Same as the where method, but the condition is chained by an "OR" to the previous one.

take(count, skip = false)
Specify that only the first count records should be taken and that, if so specified, skip should be skipped.

first()
Specify that only the first matching record should be selected.

toString()
Your toString method should output the final MySQL query.

Final notes
Queries are tested using regular expressions so you don't need to worry about whitespaces or casing, as long as your queries are valid they should pass. The only exception to this rule is that you must use single quotes over double quotes for strings.

Have fun!