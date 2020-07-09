const function1 = () => {
    let x = "hello";
    {
        let x = "world";
        console.log("function1: inner block, x = " + x);
    }
    console.log("function1: outer block, x = " + x);
};

const function2 = () => {
    let x = "hello";
    {
        const x = 4.0;
        console.log("function2: inner block, x = " + x);
        try {
            x = 3.5
        } catch(err) {
            console.error("function2: inner block: " + err);
        }
    }
    x = "world";
    console.log("function2: outer block, x = " + x);
};

function1();
function2();
