import { ISidebarRoute } from "components/shared/sidebar/sidebar.types";

export function hasChildren(item: ISidebarRoute) {
     const { items: children } = item;

     if (children === undefined) {
          return false;
     }

     if (children.constructor !== Array) {
          return false;
     }

     if (children.length === 0) {
          return false;
     }

     return true;
}
