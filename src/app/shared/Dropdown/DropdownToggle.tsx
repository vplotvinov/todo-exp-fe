import classNames from 'classnames'
import * as React from 'react'
import { useContext } from 'react'

const DropdownToggle: DropdownToggleComponent = React.forwardRef(
  (
    {
      bsPrefix,
      split,
      className,
      childBsPrefix,
      // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
      as: Component = Button,
      ...props
    }: DropdownToggleProps,
    ref
  ) => {
    const prefix = useBootstrapPrefix(bsPrefix, 'dropdown-toggle')
    const dropdownContext = useContext(DropdownContext)
    const isInputGroup = useContext(InputGroupContext)

    if (childBsPrefix !== undefined) {
      ;(props as any).bsPrefix = childBsPrefix
    }

    const [toggleProps] = useDropdownToggle()

    toggleProps.ref = useMergedRefs(
      toggleProps.ref,
      useWrappedRefWithWarning(ref, 'DropdownToggle')
    )

    // This intentionally forwards size and variant (if set) to the
    // underlying component, to allow it to render size and style variants.
    return (
      <Component
        className={classNames(
          className,
          prefix,
          split && `${prefix}-split`,
          !!isInputGroup && dropdownContext?.show && 'show'
        )}
        {...toggleProps}
        {...props}
      />
    )
  }
)
