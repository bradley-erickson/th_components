# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class SimpleGameRow(Component):
    """A SimpleGameRow component.


Keyword arguments:

- index (number; optional)

- isEditMode (boolean; optional)

- p1Color (string; default '#d9534f')

- p2Color (string; default '#f0ad4e')

- rowData (dict; optional)

    `rowData` is a dict with keys:

    - first (string; optional)

    - p1Tags (list of strings; optional)

    - p2Tags (list of strings; optional)

    - winner (string; optional)

- tagOptions (list of strings; optional)"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'th_components'
    _type = 'SimpleGameRow'
    @_explicitize_args
    def __init__(self, index=Component.UNDEFINED, rowData=Component.UNDEFINED, tagOptions=Component.UNDEFINED, isEditMode=Component.UNDEFINED, onEdit=Component.UNDEFINED, onDelete=Component.UNDEFINED, onSave=Component.UNDEFINED, onCancel=Component.UNDEFINED, p1Color=Component.UNDEFINED, p2Color=Component.UNDEFINED, **kwargs):
        self._prop_names = ['index', 'isEditMode', 'p1Color', 'p2Color', 'rowData', 'tagOptions']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['index', 'isEditMode', 'p1Color', 'p2Color', 'rowData', 'tagOptions']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(SimpleGameRow, self).__init__(**args)
