import classnames from 'classnames/bind';
import styles from './Button.scss';
import { Link } from 'react-router-dom';

const cx = classnames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    small = false,
    large = false,
    children,
    ...passProps
}) {
    let Btn = 'button'

    const classes = cx('btn', {
        primary,
        outline,
        small,
        large,
    });
    const props = {
        ...passProps,
    };

    if (to) {
        Btn = Link;
        props.to = to;
    }
    if (href) {
        Btn = 'a';
        props.href = href;
    }

    return (
        <Btn className={classes} {...props}>
            <span>{children}</span>
        </Btn>
    )
}

export default Button