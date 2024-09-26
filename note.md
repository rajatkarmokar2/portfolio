:root {
    --darkblue: #242A41;
    --white   : white;
}

body {
    scrollbar-width: thin;
    scrollbar-color: var(--darkblue) var(--white);
}

::-webkit-scrollbar {
    width: 12px;
}

::-webkit-scrollbar-track {
    background: var(--white);
}

::-webkit-scrollbar-thumb {
    background-color: var(--darkblue);
    border-radius   : 10px;
    border          : 2px solid var(--white);
}

@supports (-ms-overflow-style: none) {
    ::-ms-scrollbar {
        width           : 8px;
        background-color: var(--white);
    }

    ::-ms-scrollbar-thumb {
        background-color: var(--darkblue);
        border-radius   : 10px;
        border          : 2px solid var(--white);
    }
}

/* dark */
.dark body {
    scrollbar-width: thin !important;
    scrollbar-color: var(--white) var(--darkblue) !important;
}

.dark::-webkit-scrollbar {
    width: 12px !important;
}

.dark::-webkit-scrollbar-track {
    background: var(--darkblue) !important;
}

.dark::-webkit-scrollbar-thumb {
    background-color: var(--white) !important;
    border-radius   : 10px !important;
    border          : 2px solid var(--darkblue) !important;
}

@supports (-ms-overflow-style: none) {
    .dark::-ms-scrollbar {
        width           : 8px !important;
        background-color: var(--darkblue) !important;
    }

    .dark::-ms-scrollbar-thumb {
        background-color: var(--white) !important;
        border-radius   : 10px !important;
        border          : 2px solid var(--darkblue) !important;
    }
}