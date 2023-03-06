# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class EditableTable(Component):
    """An EditableTable component.


Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- class_name (string; optional):
    Classes for the outer most card.

- data (list of dicts; optional):
    An array of objects representing the rows of the table.

    `data` is a list of dicts with keys:

    - first (string; optional):
        The name of the player that went first.

    - p1Tags (list of strings; optional):
        An array of tags associated with player 1.

    - p2Tags (list of strings; optional):
        An array of tags associated with player 2.

    - winner (string; optional):
        The name of the winner."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'th_components'
    _type = 'EditableTable'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, class_name=Component.UNDEFINED, data=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'class_name', 'data']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'class_name', 'data']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(EditableTable, self).__init__(**args)
