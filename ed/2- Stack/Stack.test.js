import Stack from "./Stack"
test("Testar método push",()=>{
    //asserções
    const stack =new Stack();
    stack.push(1);
    expect(stack.size()).toBe(1)
    expect(stack.peek()).toBe(1)
})