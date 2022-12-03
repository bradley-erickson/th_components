# AUTO GENERATED FILE - DO NOT EDIT

export ''_roundinforow

"""
    ''_roundinforow(;kwargs...)

A RoundInfoRow component.
ExampleComponent is an example component.
It takes a property, `label`, and
displays it.
It renders an input with the property `value`
which is editable by the user.
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `class_name` (String; optional): Classes for the outer most card.
- `data` (Dict; optional): The data displayed on the card.
- `is_open` (Bool; optional): Whether collapse is currently open.
- `loading_state` (optional): Object that holds the loading state object coming from dash-renderer. loading_state has the following type: lists containing elements 'is_loading', 'prop_name', 'component_name'.
Those elements have the following types:
  - `is_loading` (Bool; optional): Determines if the component is loading or not
  - `prop_name` (String; optional): Holds which property is loading
  - `component_name` (String; optional): Holds the name of the component that is loading
"""
function ''_roundinforow(; kwargs...)
        available_props = Symbol[:id, :class_name, :data, :is_open, :loading_state]
        wild_props = Symbol[]
        return Component("''_roundinforow", "RoundInfoRow", "th_components", available_props, wild_props; kwargs...)
end

