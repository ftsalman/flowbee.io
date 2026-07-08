import { PageToolBar } from "./PageToolbar";
import PropTypes from "prop-types";

export const PageToolbarGroup = ({ actions = [], headerConfig = {}, className = "" }) => {
  return (
    <PageToolBar className={className}>
      <PageToolBar.Body>
        <PageToolBar.Header {...headerConfig} />
        <PageToolBar.Actions actions={actions} />
      </PageToolBar.Body>
    </PageToolBar>
  );
};

PageToolbarGroup.propTypes = {
  actions: PropTypes.array,
  headerConfig: PropTypes.object,
  className: PropTypes.string,
};
