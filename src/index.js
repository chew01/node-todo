import "./style.css";
import { findProject } from "./modules/project";
import { initializeSidebar } from "./modules/sidebar";
import { initializeHeader, viewBranch } from "./modules/workspace";
import { requestAddProject } from "./modules/logic";

if (!findProject("Default")) {
  requestAddProject("Default");
}

initializeSidebar();
initializeHeader();
viewBranch();
