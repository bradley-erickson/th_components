# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class TagInput(Component):
    """A TagInput component.
A component for displaying and editing a list of tags.

@component
@param {Array} value - An array of tags to be displayed
@param {Array} options - An array of suggested tags for autocomplete
@param {Function} onChange - A function to be called when a new tag is added
@param {Function} onRemove - A function to be called when a tag is removed
@param {String} color - The background color of each tag

Keyword arguments:

- color (string; default 'blue'):
    The background color of each tag.

- options (list of strings; optional):
    An array of suggested tags for autocomplete.

- value (list of strings; optional):
    An array of tags to be displayed."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'th_components'
    _type = 'TagInput'
    @_explicitize_args
    def __init__(self, value=Component.UNDEFINED, options=Component.UNDEFINED, onChange=Component.REQUIRED, onRemove=Component.REQUIRED, color=Component.UNDEFINED, **kwargs):
        self._prop_names = ['color', 'options', 'value']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['color', 'options', 'value']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(TagInput, self).__init__(**args)
