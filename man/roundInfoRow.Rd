% Auto-generated: do not edit by hand
\name{roundInfoRow}

\alias{roundInfoRow}

\title{RoundInfoRow component}

\description{
ExampleComponent is an example component. It takes a property, `label`, and displays it. It renders an input with the property `value` which is editable by the user.
}

\usage{
roundInfoRow(id=NULL, class_name=NULL, data=NULL, is_open=NULL,
loading_state=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{class_name}{Character. Classes for the outer most card.}

\item{data}{Named list. The data displayed on the card.}

\item{is_open}{Logical. Whether collapse is currently open.}

\item{loading_state}{Lists containing elements 'is_loading', 'prop_name', 'component_name'.
those elements have the following types:
  - is_loading (logical; optional): determines if the component is loading or not
  - prop_name (character; optional): holds which property is loading
  - component_name (character; optional): holds the name of the component that is loading. Object that holds the loading state object coming from dash-renderer}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

