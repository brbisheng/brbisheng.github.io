---
title: Pass-by-value vs. pass-by-reference
categories: ["rcpp", "cpp"]
---

``` c
void trial(int a, int& r, const int& cr)
{
++a; // change the local a
++r; // change the object referred to by r
int x = cr; // read the object referred to by cr
}
int main()
{
int x = 0;
int y = 0;
int z = 0;
g(x,y,z); // x==0; y==1; z==0
g(1,2,3); // error: reference argument r needs a variable to refer to
g(1,y,3); // OK: since cr is const we can pass a literal
}
```

So, if you want to change the value of an object passed by reference, you have to pass an object. Technically, the integer literal
2 is just a value (an rvalue), rather than an object holding a value. What you need for g()’s argument r is an lvalue, that is,
something that could appear on the left-hand side of an assignment.
Note that a const reference doesn’t need an lvalue. It can perform conversions exactly as initialization or pass-by-value.
Basically, what happens in that last call, g(1,y,3), is that the compiler sets aside an int for g()’s argument cr to refer to:
Click here to view code image
g(1,y,3); // means: int__compiler_generated = 3; g(1,y,__compiler_generated)
