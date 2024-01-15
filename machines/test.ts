import { createMachine } from "xstate";

const machine = createMachine({
    /** @xstate-layout N4IgpgJg5mDOIC5QBU4BcB0BJCAbMAxAMa4CWRA1gNoAMAuoqAA4D2spapLAdoyAB6IAjAGYA7BgBMNACwA2GpLFyxykQFY5AGhABPRAA5JGAJw0j6kzPVCaQsQaEBfJztSxMAETAAjFgFduIlJuKAJ+DwBDNDAMSIAzGIAnAAp1GhoASgJ3L18AoJCoWgYkEFZ2Th4+QQQhGQkTdQMDGRMRSVFWyRkdfTq5dQwxepkDBSETBUk5Fzd0DG8-QODQ4jJKEr4Kji5eMtqNIebJA3V5I2VHPsQAWnGMORkaE1PzsXT1L5dXEG4WCBwPi5bZsXbVA6IGg3BC3ISDDD1OwmeE2GYNERzEC5bB4MCgyp7GqIMYwhwYdRYnFLAqrKAE8H7UCHIRDKwmAxWMSSERyJSssnDOwNEYXNpiExiH5OIA */
    id: "Test",

    states: {
        Idle: {
            on: {
                click: "Debouncing"
            }
        },

        Debouncing: {
            after: {
                "500": "Idle"
            },

            on: {
                click: "Debouncing"
            },

            description: `Hey! Description.`
        }
    },

    initial: "Idle"
});
