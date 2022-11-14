/** @jsx jsx */
import { jsx, Link as ThemeUILink } from "theme-ui";
import { Link as GatsbyLink } from "gatsby";

function Link({ to, ...props }) {
  const sx = {
    color: "secondary"
  };

  if (to && to.startsWith("http")) {
    const aProps = {
      ...props,
      rel: props.target === "_blank" && "noopener noreferrer",
    };
    return <a href={to} {...aProps} sx={sx} />;
  }

  if (to) {
    return (
      <GatsbyLink to={to} {...props} activeClassName="is-active" sx={sx} />
    );
  }

  return <ThemeUILink {...props} sx={sx} />;
}

export default Link;
