# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class SwtichToggle(Component):
    """A SwtichToggle component.
A SwitchToggle component that can be toggled on or off.

@component
@param {string} value - The current value of the component.
@param {string} name - The name of the component.
@param {function} onChange - A function that is called when the component is changed.
@param {string} [onText="On"] - The text to display when the component is in the on position.
@param {string} [offText="Off"] - The text to display when the component is in the off position.
@param {string} [onColor="green"] - The color to display when the component is in the on position.
@param {string} [offColor="red"] - The color to display when the component is in the off position.

Keyword arguments:

- name (string; required):
    The name attribute of the radio buttons.

- offColor (string; default 'red'):
    The color of the switch when it is off.

- offText (string; default 'Off'):
    The text to display when the switch is off.

- onColor (string; default 'green'):
    The color of the switch when it is on.

- onText (string; default 'On'):
    The text to display when the switch is on.

- value (string; required):
    The current value of the switch."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'th_components'
    _type = 'SwtichToggle'
    @_explicitize_args
    def __init__(self, value=Component.REQUIRED, name=Component.REQUIRED, onChange=Component.REQUIRED, onText=Component.UNDEFINED, offText=Component.UNDEFINED, onColor=Component.UNDEFINED, offColor=Component.UNDEFINED, **kwargs):
        self._prop_names = ['name', 'offColor', 'offText', 'onColor', 'onText', 'value']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['name', 'offColor', 'offText', 'onColor', 'onText', 'value']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        for k in ['name', 'value']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')

        super(SwtichToggle, self).__init__(**args)
