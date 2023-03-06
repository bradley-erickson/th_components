% Auto-generated: do not edit by hand
\name{editableTable}

\alias{editableTable}

\title{EditableTable component}

\description{

}

\usage{
editableTable(id=NULL, class_name=NULL, data=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{class_name}{Character. Classes for the outer most card.}

\item{data}{List of lists containing elements 'winner', 'first', 'p1tags', 'p2tags'.
those elements have the following types:
  - winner (character; optional): the name of the winner
  - first (character; optional): the name of the player that went first
  - p1tags (list of characters; optional): an array of tags associated with player 1
  - p2tags (list of characters; optional): an array of tags associated with player 2s. An array of objects representing the rows of the table}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

