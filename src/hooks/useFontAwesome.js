import React, { useEffect } from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
  faCaretRight,
  faCaretLeft,
  faChevronRight,
  faChevronLeft,
  faCheck,
} from '@fortawesome/free-solid-svg-icons'

export default function useFontAwesome() {
  library.add(
    fab,
    faCaretRight,
    faCaretLeft,
    faChevronRight,
    faChevronLeft,
  faCheck,
  )
}
