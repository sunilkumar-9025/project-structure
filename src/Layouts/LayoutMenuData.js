import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Navdata = () => {
  const history = useNavigate();
  //state data
  const [isDashboard, setIsDashboard] = useState(false);
  const [isProjects, setIsProjects] = useState(false);
  const [isReports, setIsReports] = useState(false);
  const [isConsulting, setIsConsulting] = useState(false);
  const [isFormulation, setIsFormulation] = useState(false);
  const [isTickets, setIsTickets] = useState(false);

  const [iscurrentState, setIscurrentState] = useState("Dashboard");

  function updateIconSidebar(e) {
    if (e && e.target && e.target.getAttribute("subitems")) {
      const ul = document.getElementById("two-column-menu");
      const iconItems = ul.querySelectorAll(".nav-icon.active");
      let activeIconItems = [...iconItems];
      activeIconItems.forEach((item) => {
        item.classList.remove("active");
        var id = item.getAttribute("subitems");
        if (document.getElementById(id))
          document.getElementById(id).classList.remove("show");
      });
    }
  }

  useEffect(() => {
    document.body.classList.remove("twocolumn-panel");
    if (iscurrentState !== "Dashboard") {
      setIsDashboard(false);
    }
    if (iscurrentState !== "Projects") {
      setIsProjects(false);
    }
    if (iscurrentState !== "Reports") {
      setIsReports(false);
    }
    if (iscurrentState !== "Consulting") {
      setIsConsulting(false);
    }
    if (iscurrentState !== "Formulation") {
      setIsFormulation(false);
    }
    if (iscurrentState !== "Tickets") {
      setIsTickets(false);
    }
  }, [
    history,
    iscurrentState,
    isDashboard,
    isProjects,
    isReports,
    isConsulting,
    isFormulation,
    isTickets,
  ]);

  const menuItems = [
    {
      label: "Menu",
      isHeader: true,
    },
    {
      id: "dashboard",
      label: "Dashboards",
      icon: "bx bxs-dashboard",
      link: "/dashboard",
      stateVariables: isDashboard,
      click: function (e) {
        e.preventDefault();
        setIsDashboard(!isDashboard);
        setIscurrentState("Dashboard");
        updateIconSidebar(e);
      },
    },
    {
      id: "projects",
      label: "Projects",
      icon: "bx bx-layer",
      link: "/#",
      click: function (e) {
        e.preventDefault();
        setIsProjects(!isProjects);
        setIscurrentState("Projects");
        updateIconSidebar(e);
      },
      stateVariables: isProjects,
      subItems: [
        {
          id: "newProject",
          label: "New Project",
          link: "/newProject",
          parentId: "projects",
        },
        {
          id: "existingProjects",
          label: "Existing Projects",
          link: "/existingProjects",
          parentId: "projects",
        },
        {
          id: "drafts",
          label: "Drafts",
          link: "/drafts",
          parentId: "projects",
        },
      ],
    },
    {
      id: "reports",
      label: "Reports",
      icon: "bx bx-file",
      link: "/reports",
      click: function (e) {
        e.preventDefault();
        setIsReports(!isReports);
        setIscurrentState("Reports");
        updateIconSidebar(e);
      },
      stateVariables: isReports,
    },
    {
      id: "consulting",
      label: "Consulting",
      icon: "ri-rocket-line",
      link: "/consulting",
      stateVariables: isConsulting,
      click: function (e) {
        e.preventDefault();
        setIsConsulting(!isConsulting);
        setIscurrentState("Consulting");
        updateIconSidebar(e);
      },
    },
    {
      id: "formulationLibrary",
      label: "Formulation Library",
      icon: "bx bx-user-circle",
      link: "/formulationlibrary",
      click: function (e) {
        e.preventDefault();
        setIsFormulation(!isFormulation);
        setIscurrentState("Formulation");
        updateIconSidebar(e);
      },
      stateVariables: isFormulation,
    },
    {
      id: "tickets",
      label: "Tickets",
      icon: "ri-rocket-line",
      link: "/tickets",
      stateVariables: isTickets,
      click: function (e) {
        e.preventDefault();
        setIsTickets(!isTickets);
        setIscurrentState("Tickets");
        updateIconSidebar(e);
      },
    },
  ];
  return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;
