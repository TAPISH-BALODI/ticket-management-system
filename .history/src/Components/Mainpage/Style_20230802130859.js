import { styled } from '@mui/material/styles';


export const Mainpagestyle = styled('div')(({ theme }) => ({

    '& .payment': {
        color: "#000000",
        fontFamily: "Outfit-Medium",
        fontSize: "20px",
        position: 'relative',
        '& svg': {
            position: "absolute",
            left: "-8px",
            top: "3px",
        }

    },
    '& .payment-crd': {
        cursor:'pointer',
        background: "#FFF8F4",
        border: " 1px solid #F9D8D6",
        boxShadow: "0px 3px 3px rgba(211, 32, 40, 0.1)",
        borderRadius: "12px",
        marginTop: '30px',
        padding: "20px",
    },
    '& .Beneficiary': {
        color: "#000000",
        fontFamily: "Outfit-Medium",
        fontSize: "16px",
        '& svg': {
            position: "relative",
            left: "-6px",
            top: "4px",
        }

    },
    '& .Program': {
        color: "#737373",
        fontFamily: "Outfit-Medium",
        fontSize: "16px",
      
        '& .cap-setting': {
            position: "relative",
            left: "-6px",
            top: "5px",
        }

    },


    '& .Tuviksh': {
        color: "#D32028",
        fontFamily: "Outfit-Medium",
        fontSize: "18px",
        marginTop: "6px",
    },

    '& .Class': {
        color: "#000000",
        fontFamily: "Outfit-Medium",
        fontSize: "18px",
        marginTop: "6px",
    },
    '& .paynowbtn': {
        marginTop: "13px",
        width: "100%",
        '& svg': {
            position: "relative",
            left: "-8px",
            top: "1px",
        }
    },

    '& .fee-crd': {
        background: "#FFF8F4",
        border: " 1px solid #F9D8D6",
        boxShadow: "0px 3px 3px rgba(211, 32, 40, 0.1)",
        borderRadius: "12px",
        marginTop: '30px',
        width: "342px",
        marignLeft: "auto",
        marginRight: "auto",
        // padding:"20px",

    },
    '& .TRYZ00121': {
        color: "#D32028",
        fontFamily: "Outfit-Medium",
        fontSize: "16px",
    },
    '& .Tuviksh-inner': {
        background: "#FFF7F2",
        borderBottom: "1px solid #F9D8D6",
        borderRadius: "20px",
        '& .MuiList-root': {
            display: "inline-flex",
            width: "73%",
        },
        '& .MuiListItem-root': {
            paddingRight: "unset",
        },
    },
    '& .Aditya-crd': {
        color: "#737373",
        fontFamily: "Outfit-Medium",
        fontSize: "12px",
        '& svg': {
            position: "relative",
            left: "-6px",
            top: "2px",
        },
        '& .line-svg': {
            position: "relative",
            left: "-20px",
            top: "2px",
        },
    },
    '& .innerpdng': {
        padding: "10px 20px",
    },
    '& .date-crd': {
        color: "#000000",
        fontFamily: "Outfit-Medium",
        fontSize: "14px",
        marginTop: "5px",
    },
    '& .Aditya-crd-2': {
        color: "#D32028",
        fontFamily: "Outfit-Medium",
        fontSize: "12px",
        '& svg': {
            position: "relative",
            left: "-6px",
            top: "2px",
        },

    },


    // lg down
    [theme.breakpoints.down('lg')]: {

        '& .fee-crd': {
            width: "300px",
            marginLeft: "auto",
            marginRight: "auto",
            // padding:"20px",
            '@media (max-width: 766px)': {
                width: "73%",
            }

        },
    },






    //  sm down 
    [theme.breakpoints.down('sm')]: {
        '& .payment': {
            fontSize: "16px",
            '& svg': {
                top: "1px",
            }

        },
        '& .Tuviksh-inner': {
            '& .MuiList-root': {
                display: "inline-flex",
                width: "100%",
            },
        },

        '& .fee-crd': {
            width: "90%",

        },
        '& .sliderlft': {
            marginLeft: "unset",
            display:"flex",
            flexDirection : "row"
        },
    }

}));