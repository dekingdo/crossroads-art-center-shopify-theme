/**
 * Loading fontawesome using SVG Core
 */

import { library, dom } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTumblr,
  faTwitter,
  faVimeo,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight,
  faCaretDown,
  faChevronLeft,
  faChevronRight,
  faCircle,
  faExclamationTriangle,
  faPlay,
  faRss,
  faSearch,
  faShoppingCart,
  faSortAlphaDown,
  faSortAlphaUp,
  faTrashAlt,
  faUser
} from "@fortawesome/pro-light-svg-icons";
import { faCheckCircle } from "@fortawesome/pro-solid-svg-icons";

export default () => {
  library.add(
    faFacebook,
    faInstagram,
    faPinterest,
    faTumblr,
    faTwitter,
    faVimeo,
    faYoutube,
    faArrowRight,
    faCaretDown,
    faCheckCircle,
    faChevronLeft,
    faChevronRight,
    faCircle,
    faExclamationTriangle,
    faPlay,
    faRss,
    faSearch,
    faShoppingCart,
    faSortAlphaDown,
    faSortAlphaUp,
    faTrashAlt,
    faUser
  );
  dom.watch();
}