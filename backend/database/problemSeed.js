

import mongoose from "mongoose";
import Problem from "../models/problem.js";

export const problems = [
  {
    _id: "64b0a57d75537b0ab942edfd",
    title: "Contains Duplicate",
    topic: "64b0a79871ac5ad2b373f4a5",
    description:
      "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",
    modelDescription: "This solution defines a function that takes an array of integers as input and returns a boolean value indicating whether the array contains any duplicate elements or not. Initially, the function checks if the input array is either null or empty; in either of these cases, it immediately returns false, as there can be no duplicates. To track unique elements in the array, the function utilizes a set, a data structure that stores unique elements and does not allow duplicates. The function then iterates through each element in the input array and attempts to add it to the set. If an element is already present in the set, the set\'s add operation will return false. When this happens, the function immediately returns true, signaling that a duplicate element has been found in the array. If the function completes its loop through the array without finding any duplicates, it will return false, indicating that no duplicate elements are present in the array.",
    exampleCase: "Input: nums = [1, 2, 3, 1]. Output: true.",
    solution: "import java.util.HashSet;\n\npublic class Solution {\n    public boolean containsDuplicate(int[] nums) {\n        // If the input array is null or empty, return false since there can be no duplicates\n        if (nums == null || nums.length == 0)\n            return false;\n        \n        // Create a new HashSet. HashSet stores unique elements, and its add method returns false if the element was already in the set.\n        HashSet<Integer> set = new HashSet<Integer>();\n        \n        // Loop through the array\n        for (int i: nums) {\n            // Attempt to add each element in the array to the set\n            if (!set.add(i)) {\n                // If the add method returns false, it means the element was already in the set and hence, is a duplicate.\n                return true;\n            }\n        }\n        \n        // If we've gone through the whole array and found no duplicates, return false.\n        return false;\n    }\n}",
    hint: "Try using a hash map.",
    boilerplateCode: [
      {
        language: "java",
        boilerplate: "import java.util.*;\n\npublic class Output {\n    public boolean containsDuplicate(int[] nums) {\n        // Write your code here\n        \n    }\n\n    public static void main(String[] args) {\n        Output solution = new Output();\n        Scanner scanner = new Scanner(System.in);\n\n        // Read the elements of the array\n        String[] numbers = scanner.nextLine().split(\" \");\n        int[] nums = new int[numbers.length];\n\n        // Convert the input strings to integers\n        for (int i = 0; i < numbers.length; i++) {\n            nums[i] = Integer.parseInt(numbers[i]);\n        }\n\n        // Check if the array contains duplicates\n        boolean result = solution.containsDuplicate(nums);\n        System.out.println(result);\n        \n        scanner.close();\n    }\n}",
      },
      {
        language: "python3",
        boilerplate: "def contains_duplicate(nums):\n    # Write your code here\n    pass\n\nif __name__ == '__main__':\n    nums = list(map(int, input().split()))\n    result = contains_duplicate(nums)\n    print(str(result).lower())"
      },
      {
        language: "cpp",
        boilerplate: "\n#include <iostream>\n#include <sstream>\n#include <set>\n#include <vector>\n\nbool contains_duplicate(std::vector<int>& nums) {\n\t// Complete this code\n}\n\nint main() {\n\tstd::string line;\n\tgetline(std::cin, line);\n\tstd::istringstream stream(line);\n\tstd::vector<int> nums;\n\tint num;\n\twhile(stream >> num) {\n\t\tnums.push_back(num);\n\t}\n\tbool result = contains_duplicate(nums);\n\tstd::cout << std::boolalpha << result << std::endl;\n\treturn 0;\n}\n"
      }
    ],
    testCases: [
      {
        input: "1 2 3 1",
        output: "true",
      },
      {
        input: "1 2 3 4",
        output: "false",
      },
      {
        input: "1 1 1 3 3 4 3 2 4 2",
        output: "true",
      },
    ],
    difficulty: "easy",
  },
  {
    _id: "64b1d32abe0653857df5bfc4",
    title: "Two Sum",
    topic: "64b0a79871ac5ad2b373f4a5",
    description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.\
    You may assume that each input would have exactly one solution, and you may not use the same element twice.",
    modelDescription: "This function takes an array of integers, \'nums\', and an integer, \'target\', and tries to find two elements in \'nums\' that add up to \'target\'. It uses a map to store each number in \'nums\' along with its index. As it iterates through \'nums\', for each element \'x\', it calculates the \'complement\' (target - x) and checks if this complement is in the map. If it is, the function has found two elements that add up to the target and returns their indices. If the loop completes without finding such a pair, the function returns an empty array, indicating no solution was found.",
    exampleCase: "Input: nums = [2,7,11,15], target = 9\
    Output: [0,1]",
    solution: "\npublic int[] twoSum(int[] nums, int target) {\n\tMap<Integer, Integer> numMap = new HashMap<>();\n\tint n = nums.length;\n\n\tfor (int i = 0; i < n; i++) {\n\t\tint complement = target - nums[i];\n\t\tif (numMap.containsKey(complement)) {\n\t\t\treturn new int[] {numMap.get(complement), i};\n\t\t}\n\t\tnumMap.put(nums[i], i);\n\t}\n\n\treturn new int[] {}; // No solution found\n}\n",
    hint: "Try using a hash map.",
    boilerplateCode: [
      {
        language: "java",
        boilerplate: "\nimport java.util.*;\n\npublic class Output {\n\tpublic int[] twoSum(int[] nums, int target) {\n\t\t// Complete the code\n\t}\n\n\tpublic static void main(String[] args) {\n\t\tScanner scanner = new Scanner(System.in);\n\n\t\tString input = scanner.nextLine();\n\t\t\n\t\tString[] splitInput = input.split(\", target = \");\n\t\tint target = Integer.parseInt(splitInput[1]);\n\n\t\tString numStr = splitInput[0].substring(7, splitInput[0].length() - 1).replace(\"[\", \"\").replace(\"]\", \"\");\n\t\tString[] numStrArr = numStr.split(\",\");\n\t\tint[] nums = new int[numStrArr.length];\n\n\t\tfor(int i = 0; i < numStrArr.length; i++){\n\t\t\tnums[i] = Integer.parseInt(numStrArr[i].trim());\n\t\t}\n\t\t\n\t\tOutput output = new Output();\n\t\tint[] result = output.twoSum(nums, target);\n\t\t\n\t\tSystem.out.println(Arrays.toString(result));\n\t}\n}\n",
      },
      {
        language: "python3",
        boilerplate: "\ndef two_sum(nums, target):\n    # Complete the code\n    pass\n\nif __name__ == '__main__':\n    input_str = input()\n\n    split_input = input_str.split(', target = ')\n    target = int(split_input[1])\n\n    num_str = split_input[0][7:-1].replace('[', '').replace(']', '')\n    num_str_arr = num_str.split(',')\n    nums = [int(num.strip()) for num in num_str_arr]\n\n    result = two_sum(nums, target)\n\n    print(result)\n"
      },
      {
        language: "cpp",
        boilerplate: "#include <iostream>\n#include <sstream>\n#include <vector>\n#include <map>\n\nstd::vector<int> two_sum(std::vector<int>& nums, int target) {\n    // Complete the code\n    return {};\n}\n\nint main() {\n    std::string input_str;\n    getline(std::cin, input_str);\n\n    size_t split_pos = input_str.find(\", target = \");\n    int target = std::stoi(input_str.substr(split_pos + 11));\n\n    std::string num_str = input_str.substr(7, split_pos - 8);\n    std::istringstream num_stream(num_str);\n    std::vector<int> nums;\n    int num;\n\n    while(num_stream >> num) {\n        char comma;\n        num_stream >> comma;\n        nums.push_back(num);\n    }\n\n    std::vector<int> result = two_sum(nums, target);\n\n    if (!result.empty()) {\n        std::cout << \"[\" << result[0] << \", \" << result[1] << \"]\";\n    }\n\n    return 0;\n}\n"
      }
    ],
    testCases: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0, 1]",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1, 2]",
      },
      {
        input: "nums = [3,3], target = 6",
        output: "[0, 1]",
      },
    ],
    difficulty: "medium",
  },
  {
    _id: "64b1f070e2dabccf25d42671",
    title: "Group Anagrams",
    topic: "64b0a79871ac5ad2b373f4a5",
    description: "Given an array of strings strs, group the anagrams together. You can return the answer in any order.\
    An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.",
    modelDescription: "This function takes an array of strings, \'strs\', and groups the anagrams together. It uses a map where the key is a sorted version of a word, and the value is a list of words that, when sorted, match this key. For each word in \'strs\', it converts the word to a character array, sorts it, and then converts it back to a string. This sorted string is used as the key in the map. If this sorted key isn\'t already in the map, it is added with an empty list as its value. The original word (anagram) is then added to the list of its corresponding sorted key in the map. After processing all words, the function returns the values of the map as a list, which are the grouped anagrams.",
	  exampleCase: "Input: strs = [\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]\
    Output: [[\"bat\"],[\"nat\",\"tan\"],[\"ate\",\"eat\",\"tea\"]]",
    solution: "import java.util.*;\n\npublic class GroupAnagrams {\n\n    public List<List<String>> groupAnagrams(String[] strs) {\n        // Create a HashMap to store sorted word as key and its anagrams as values\n        Map<String, List<String>> map = new HashMap<>();\n\n        // Iterate over each word in the given string array\n        for (String word : strs) {\n            // Convert the word to char array\n            char[] chars = word.toCharArray();\n\n            // Sort the chars in the array\n            // Anagrams, when sorted, will always end up as the same string\n            Arrays.sort(chars);\n\n            // Convert sorted chars back to string\n            String sortedWord = new String(chars);\n\n            // If the sorted word is not already in the map, add it with an empty ArrayList as value\n            if (!map.containsKey(sortedWord)) {\n                map.put(sortedWord, new ArrayList<>());\n            }\n\n            // Add the original word (anagram) to the list of the sortedWord in the map\n            map.get(sortedWord).add(word);\n        }\n\n        // Convert the values of the map to a list, as they represent the grouped anagrams\n        return new ArrayList<>(map.values());\n    }\n}",
    hint: "Use a HashMap",
    boilerplateCode: [
      {
        language: "java",
        boilerplate: "import java.util.*;\n\npublic class Output {\n  public List < List < String >> groupAnagrams(String[] strs) {\n    // Complete the code\n    return null;\n  }\n\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    String input = scanner.nextLine().replaceAll(\"\\\\[\", \"\").replaceAll(\"\\\\]\", \"\");\n\n    String[] strs = input.split(\",\\\\s*\");\n\n    Output output = new Output();\n    List < List < String >> result = output.groupAnagrams(strs);\n\n    // Sort each group in alphabetical order\n    for (List < String > group: result) {\n      Collections.sort(group);\n    }\n\n    // Sort all the groups from smallest size to largest\n    result.sort(Comparator.comparing(List::size));\n\n    for (List < String > group: result) {\n      System.out.print(group);\n    }\n  }\n}",
      },
      {
        language: "python3",
        boilerplate: "import re\nfrom typing import List\nfrom collections import defaultdict\n\nclass Output:\n    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:\n        # Complete the code here\n        pass\n\nif __name__ == \"__main__\":\n    input_str = input().replace(\"[\", \"\").replace(\"]\", \"\")\n    strs = re.split(\",\\s*\", input_str)\n    # Removing extra quotes around words if any\n    strs = [word.replace('\"', '') for word in strs]\n\n    output = Output()\n    result = output.groupAnagrams(strs)\n\n    # Sort each group in alphabetical order\n    for group in result:\n        group.sort()\n\n    # Sort all the groups from smallest size to largest\n    result.sort(key=len)\n\n    for group in result:\n        formatted_group = '[\"' + '\", \"'.join(word for word in group) + '\"]'\n        print(formatted_group, end='')"
      },
      {
        language: "cpp",
        boilerplate: "\n#include <iostream>\n#include <vector>\n#include <string>\n#include <map>\n#include <algorithm>\n#include <sstream>\n\nclass Output {\npublic:\n    std::vector<std::vector<std::string>> groupAnagrams(std::vector<std::string>& strs) {\n        std::map<std::string, std::vector<std::string>> map;\n\n        for (const auto& word : strs) {\n            std::string sortedWord = word;\n            std::sort(sortedWord.begin(), sortedWord.end());\n\n            if (map.find(sortedWord) == map.end()) {\n                map[sortedWord] = std::vector<std::string>();\n            }\n\n            map[sortedWord].push_back(word);\n        }\n\n        std::vector<std::vector<std::string>> result;\n        for (auto& keyVal : map) {\n            result.push_back(keyVal.second);\n        }\n\n        return result;\n    }\n};\n\nint main() {\n    std::string input;\n    getline(std::cin, input);\n    input.erase(remove(input.begin(), input.end(), '['), input.end());\n    input.erase(remove(input.begin(), input.end(), ']'), input.end());\n\n    std::istringstream ss(input);\n    std::string word;\n    std::vector<std::string> strs;\n\n    while (getline(ss, word, ','))\n    {\n        word.erase(remove(word.begin(), word.end(), ' '), word.end());\n        strs.push_back(word);\n    }\n\n    Output output;\n    auto result = output.groupAnagrams(strs);\n\n    for (auto& group : result) {\n        std::sort(group.begin(), group.end());\n    }\n\n    std::sort(result.begin(), result.end(), [](const std::vector<std::string>& a, const std::vector<std::string>& b){\n        return a.size() < b.size();\n    });\n\n    for (auto& group : result) {\n        std::cout << \"[\";\n        for (size_t i = 0; i < group.size(); ++i) {\n            std::cout << group[i];\n            if (i != group.size() - 1) {\n                std::cout << \", \";\n            }\n        }\n        std::cout << \"]\";\n    }\n\n    return 0;\n}\n"
      }
    ],
    testCases: [
      {
        input: "[\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]",
        output: "[\"bat\"][\"nat\", \"tan\"][\"ate\", \"eat\", \"tea\"]",
      },
      {
        input: "[\"\"]",
        output: "[\"\"]",
      },
      {
        input: "[\"a\"]",
        output: "[\"a\"]",
      },
    ],
    difficulty: "hard",
  },
    {
    _id: "64b39ed613688bcd23cede06",
    title: "Valid Parentheses",
    topic: "64b0a79c4808f5b754ca2b19",
    description: "Given a string s containing just the characters \'(\', \')\', \'{\', \'}\', \'[\' and \']\', determine if the input string is valid.\
    An input string is valid if:\
    Open brackets must be closed by the same type of brackets.\
    Open brackets must be closed in the correct order.\
    Every close bracket has a corresponding open bracket of the same type.",
    modelDescription: "This function checks if a given string, \'s\', containing only parentheses is valid. It uses a stack to store opening parentheses as they are encountered. The function iterates over each character in the string. When an opening parenthesis (\'(\', \'{\', or \'[\') is encountered, it is pushed onto the stack. When a closing parenthesis (\')\', \'}\', or \']\') is encountered, the function checks if the stack is empty. If it is, the function returns false, as there is no matching opening parenthesis. If the stack is not empty, the function checks if the closing parenthesis matches the opening parenthesis at the top of the stack. If they match, the opening parenthesis is popped from the stack; otherwise, the function returns false, indicating a mismatch. After iterating through all characters, if the stack is empty, the function returns true, indicating all opening parentheses had matching closing ones; otherwise, it returns false.",
    exampleCase: "Input: s = \"()\"\
    Output: true",
	  solution: "\n// method to check if the string of parentheses is valid\npublic boolean isValid(String s) {\n    // create a stack to store opening parentheses\n    Stack<Character> stack = new Stack<>();\n    \n    // iterate over each character in the string\n    for (char c : s.toCharArray()) {\n        // if the character is an opening parenthesis, push it onto the stack\n        if (c == '(' || c == '{' || c == '[') {\n            stack.push(c);\n        } else {\n            // if the stack is empty, then there's no opening parenthesis for the closing one; return false\n            if (stack.empty()) {\n                return false;\n            }\n            // if the character is a closing parenthesis and it matches the top of the stack (opening one), pop it from the stack\n            if (c == ')' && stack.peek() == '(') {\n                stack.pop();\n            } else if (c == '}' && stack.peek() == '{') {\n                stack.pop();\n            } else if (c == ']' && stack.peek() == '[') {\n                stack.pop();\n            } else {\n                // if the character is a closing parenthesis but it doesn't match the top of the stack, return false\n                return false;\n            }\n        }\n    }\n    // if the stack is empty after the loop, all opening parentheses had their matching closing ones; return true\n    return stack.empty();\n}",
    hint: "Parentheses must be mathced in the correct order - each closing parentheses must match the most recently opened opening parantheses.",
    boilerplateCode: [
      {
        language: "java",
        boilerplate: "\nimport java.util.*;\n\npublic class Output {\n    public boolean isValid(String s) {\n        // Complete the code here\n        return true; // placeholder return statement\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        String input = scanner.nextLine();\n\n        Output checker = new Output();\n        boolean isValid = checker.isValid(input);\n\n        System.out.println(isValid);\n    }\n}",
      },
      {
        language: "python3",
        boilerplate: "\nclass Output:\n    def isValid(self, s: str) -> bool:\n        # Complete this code\n        return True\n\nif __name__ == '__main__':\n    input_string = input()\n\n    checker = Output()\n    is_valid = checker.isValid(input_string)\n\n    print(str(is_valid).lower())"
      },
      {
        language: "cpp",
        boilerplate: "\n#include <iostream>\n#include <string>\n#include <stack>\n\nusing namespace std;\n\nclass Output {\npublic:\n    bool isValid(string s) {\n        // Complete this code\n        return true;\n    }\n};\n\nint main() {\n    string input_string;\n    getline(cin, input_string);\n\n    Output checker;\n    bool is_valid = checker.isValid(input_string);\n\n    cout << boolalpha << is_valid << endl;\n\n    return 0;\n}"
      }
    ],
    testCases: [
      {
        input: "()",
        output: "true",
      },
      {
        input: "()[]{}",
        output: "true",
      },
      {
        input: "(]",
        output: "false",
      },
    ],
    difficulty: "easy",
  },
  {
    _id: "64b4bcf4d7055950382648ea",
    title: "Generate Parentheses",
    topic: "64b0a79c4808f5b754ca2b19",
    description: "Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.",
    modelDescription: "This solution generates all combinations of well-formed parentheses. It uses a recursive function (generateParentheses) to explore all possible combinations of open and close parentheses. The function takes five parameters: a list (result) to store valid combinations, a current combination (current), the counts of open and closed parentheses used so far (open and close), and the desired number of pairs of parentheses (n). Initially, result is empty, and current is an empty string. The base case of the recursion is when the length of current is equal to 2 * n, at which point a valid combination is found and added to result. Otherwise, the function makes recursive calls: one that adds an open parenthesis if open count is less than n, and one that adds a close parenthesis if close count is less than open count, thereby ensuring the parentheses are well-formed. The generateParenthesis function initiates this process and returns the result list containing all valid combinations.",
    exampleCase: "Input: n = 1\
    Output: [\"()\"]",
    solution: "import java.util.List;\nimport java.util.ArrayList;\n\npublic class GenerateParentheses {\n\n    public List<String> generateParenthesis(int n) {\n        List<String> result = new ArrayList<>();\n        generateParentheses(result, \"\", 0, 0, n);\n        return result;\n    }\n\n    private void generateParentheses(List<String> result, String current, int open, int close, int n) {\n        if (current.length() == 2 * n) {\n            result.add(current);\n            return;\n        }\n        if (open < n) {\n            generateParentheses(result, current + '(', open + 1, close, n);\n        }\n        if (close < open) {\n            generateParentheses(result, current + ')', open, close + 1, n);\n        }\n    }\n}\n",
    hint: "Consider the problem in terms of recursion, where you make progress by solving smaller versions of the original problem.",
    boilerplateCode: [
      {
        language: "java",
        boilerplate: "import java.util.*;\n\npublic class Output {\n\n    public List<String> generateParenthesis(int n) {\n      // complete this code\n    }\n\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int input = scanner.nextInt();\n        \n        Output generator = new Output();\n        List<String> result = generator.generateParenthesis(input);\n\n        System.out.println(result);\n    }\n}\n",
      },
      {
        language: "python3",
        boilerplate: "\nimport ast\nfrom typing import List\n\nclass Output:\n    def generateParenthesis(self, n):\n        # Complete this code\n        pass\n\nif __name__ == \"__main__\":\n    n = int(input())\n    output = Output()\n    result = output.generateParenthesis(n)\n    result = [ast.literal_eval(\"'{}'\".format(i)) for i in result]\n    print(str(result).replace(\"'\", \"\"))\n"
      },
      {
        language: "cpp",
        boilerplate: "#include <iostream>\n#include <vector>\n#include <string>\n\nclass Output {\npublic:\n    std::vector<std::string> generateParenthesis(int n) {\n        // complete the code\n    }\n};\n\nint main() {\n    int n;\n    std::cin >> n;\n    Output output;\n    std::vector<std::string> result = output.generateParenthesis(n);\n\n    std::cout << \"[\";\n    for (size_t i = 0; i < result.size(); ++i) {\n        std::cout << result[i];\n        if (i < result.size() - 1) {\n            std::cout << \", \";\n        }\n    }\n    std::cout << \"]\" << std::endl;\n\n    return 0;\n}"
      }
    ],
    testCases: [
      {
        input: "3",
        output: "[((())), (()()), (())(), ()(()), ()()()]",
      },
      {
        input: "1",
        output: "[()]",
      },
    ],
    difficulty: "medium",
  },
  {
    _id: "64b71662c5b9fafab1d170fe",
    title: "Daily Temperatures",
    topic: "64b0a79c4808f5b754ca2b19",
    description: "Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.",
    solution: "public int[] dailyTemperatures(int[] temperatures) {\n    // Initialize a stack to keep track of indices of temperatures\n    Stack<Integer> stack = new Stack<>();\n    // Initialize an array to store the result (number of days until a warmer temperature)\n    int[] ret = new int[temperatures.length];\n\n    // Iterate through the given temperatures\n    for(int i = 0; i < temperatures.length; i++) {\n        // While the stack is not empty and the current temperature is greater than the\n        // temperature at the index present at the top of the stack\n        while(!stack.isEmpty() && temperatures[i] > temperatures[stack.peek()]) {\n            // Pop the index from the stack as we've found a day with higher temperature\n            int idx = stack.pop();\n            // The number of days to wait for a warmer temperature is the difference \n            // between the current day and the day from the stack\n            ret[idx] = i - idx;\n        }\n        // Push the current day's index onto the stack\n        stack.push(i);\n    }\n    // The remaining indices in the stack represent days for which there is no warmer temperature in the future,\n    // so they are not popped out of the stack. Their corresponding positions in the result array will remain 0.\n\n    return ret;  // Return the result array\n}",
    exampleCase: "Input: temperatures = [30,60,90]\
    Output: [1,1,0]",
    modelDescription: "This solution calculates the number of days one must wait for a warmer temperature, using a stack to store indices of days with unmet conditions. An array ret is initialized to store the results, with a size equal to the input temperatures array. As we iterate through temperatures, for each day i, if the current temperature is greater than the temperature at the day\'s index at the top of the stack, we pop that index from the stack and calculate the number of days until a warmer day by subtracting this index from i, then storing it in ret at that position. After processing each day\'s temperature, the current day\'s index is pushed onto the stack. Any remaining indices in the stack correspond to days with no warmer future day; their corresponding positions in ret remain 0 as initialized. The function returns the ret array.",
    hint: "Use a stack to keep track of the indices of the days.",
    boilerplateCode: [
      {
        language: "java",
        boilerplate: "import java.util.*;\n\npublic class Output {\n\tpublic int[] dailyTemperatures(int[] temperatures) {\n\t\t// to do: complete code\n\t}\n\n\tpublic static void main(String[] args) {\n\t\tScanner scanner = new Scanner(System.in);\n\n\t\tString input = scanner.nextLine();\n\t\tString[] numbers = input.substring(1, input.length()-1).split(\",\");\n\t\tint[] temperatures = new int[numbers.length];\n\n\t\tfor (int i = 0; i < numbers.length; i++) {\n\t\t\ttemperatures[i] = Integer.parseInt(numbers[i].trim());\n\t\t}\n\n\t\tOutput solution = new Output();\n\t\tint[] output = solution.dailyTemperatures(temperatures);\n\n\t\t// Print the output\n\t\tfor (int i = 0; i < output.length; i++) {\n\t\t\tSystem.out.print(output[i] + \" \");\n\t\t}\n\t}\n}",
      },
      {
        language: "python3",
        boilerplate: "class Output:\n    def dailyTemperatures(self, temperatures):\n        # Complete this code \n        pass\n\nif __name__ == \"__main__\":\n    input_string = input().strip()[1:-1]  # remove the square brackets\n    temperatures = list(map(int, input_string.split(',')))\n\n    solution = Output()\n    output = solution.dailyTemperatures(temperatures)\n\n    # Print the output\n    print(' '.join(map(str, output)))\n"
      },
      {
        language: "cpp",
        boilerplate: "#include <iostream>\n#include <vector>\n#include <stack>\n#include <sstream>\n\nclass Output {\npublic:\n    std::vector<int> dailyTemperatures(std::vector<int>& temperatures) {\n        // to do: complete this function\n    }\n};\n\nint main() {\n    std::string input;\n    std::getline(std::cin, input);\n    input = input.substr(1, input.size()-2);  // remove the square brackets\n\n    std::vector<int> temperatures;\n    std::stringstream ss(input);\n    for (int i; ss >> i;) {\n        temperatures.push_back(i);    \n        if (ss.peek() == ',')\n            ss.ignore();\n    }\n\n    Output solution;\n    std::vector<int> output = solution.dailyTemperatures(temperatures);\n\n    // Print the output\n    for(size_t i = 0; i < output.size(); i++) {\n        std::cout << output[i] << \" \";\n    }\n    \n    return 0;\n}\n"
      }
    ],
    testCases: [
      {
        input: "[73,74,75,71,69,72,76,73]",
        output: "1 1 4 2 1 1 0 0",
      },
      {
        input: "[30,40,50,60]",
        output: "1 1 1 0",
      },
      {
        input: "[30,60,90]",
        output: "1 1 0",
      },
    ],
    difficulty: "hard",
  },
  {
    _id: "64b7424aa9e904c794e46798",
    title: "Basic Binary Search",
    topic: "64b0a7a1664e6698b9720575",
    description: "Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.\
    You must write an algorithm with O(log n) runtime complexity.",
    modelDescription: "This solution implements a binary search algorithm to find the target value in a sorted array nums. Two pointers, left and right, are initialized at the start and end of the array, respectively. The search continues in a loop until the left pointer is less than or equal to the right pointer. In each iteration, a middle index mid is computed. If the element at this middle index is equal to the target, the function returns mid, indicating the position of the target in the array. If the middle element is less than the target, the left pointer is moved to the right of the middle index. If the middle element is greater than the target, the right pointer is moved to the left of the middle index. This process effectively halves the search range in each iteration. If the loop ends without finding the target, the function returns -1, indicating that the target is not present in the array.",
    exampleCase: "Input: nums = [-1,0,3,5,9,12], target = 9\
    Output: 4\
    Explanation: 9 exists in nums and its index is 4",
    solution: "public class Solution {\n\n    public int search(int[] nums, int target) {\n        int left = 0; // initialize left pointer to 0\n        int right = nums.length - 1; // initialize right pointer to the last index of the array\n\n        while (left <= right) { // continue the loop till left pointer is less than or equal to right pointer\n            int mid = left + (right - left) / 2; // calculate the middle index of the array\n\n            if (nums[mid] == target) { // check if the middle element is equal to target\n                return mid; // return the middle index\n            } else if (nums[mid] < target) { // check if the middle element is less than target\n                left = mid + 1; // move the left pointer to the right of middle element\n            } else { // if the middle element is greater than target\n                right = mid - 1; // move the right pointer to the left of middle element\n            }\n        }\n\n        return -1; // target not found in the array\n    }\n\n}\n",
    hint: "Remember that there are no tricks here. Just a basic binary search implementaion.",
    boilerplateCode: [
      {
        language: "java",
        boilerplate: "import java.util.*;\n\npublic class Output {\n    public int search(int[] nums, int target) {\n        // To do: complete this function\n        return 1; // place holder return statement\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String input = scanner.nextLine();\n\n        String[] parts = input.split(\", target = \");\n        String numsPart = parts[0].replace(\"nums = [\", \"\").replace(\"]\", \"\");\n        int[] nums = Arrays.stream(numsPart.split(\",\"))\n                           .map(String::trim)\n                           .mapToInt(Integer::parseInt)\n                           .toArray();\n\n        int target = Integer.parseInt(parts[1]);\n\n        Output output = new Output();\n        int result = output.search(nums, target);\n        \n        System.out.println(result);\n    }\n}",
      },
      {
        language: "python3",
        boilerplate: "class Output:\n    def search(self, nums, target):\n        # To do: complete this code\n        pass\n\nif __name__ == \"__main__\":\n    input_string = input()\n\n    parts = input_string.split(\", target = \")\n    nums_part = parts[0].replace(\"nums = [\", \"\").replace(\"]\", \"\")\n    nums = list(map(int, nums_part.split(\",\")))\n\n    target = int(parts[1])\n\n    output = Output()\n    result = output.search(nums, target)\n    \n    print(result)"
      },
      {
        language: "cpp",
        boilerplate: "#include <iostream>\n#include <vector>\n#include <sstream>\n#include <algorithm>\n\nclass Output {\npublic:\n    int search(std::vector<int>& nums, int target) {\n      // to do: complete this function \n      \n      return 1; // temp placeholder return statement\n    }\n};\n\nint main() {\n    std::string input;\n    std::getline(std::cin, input);\n    \n    std::size_t pos = input.find(\", target = \");\n    std::string numsPart = input.substr(0, pos); // \"nums = [-1,0,3,5,9,12]\"\n    std::string targetPart = input.substr(pos + 11); // \"9\"\n    \n    numsPart = numsPart.substr(8, numsPart.size() - 8); // remove \"nums = [\"\n    numsPart.pop_back(); // remove \"]\"\n    \n    std::vector<int> nums;\n    std::stringstream ss(numsPart);\n    for (int i; ss >> i;) {\n        nums.push_back(i);    \n        if (ss.peek() == ',')\n            ss.ignore();\n    }\n    \n    int target = std::stoi(targetPart); // directly convert targetPart to integer\n    \n    Output output;\n    int result = output.search(nums, target);\n    \n    std::cout << result << std::endl;\n    \n    return 0;\n}\n"
      }
    ],
    testCases: [
      {
        input: "nums = [-1,0,3,5,9,12], target = 9",
        output: "4",
      },
      {
        input: "nums = [-1,0,3,5,9,12], target = 2",
        output: "-1",
      },
    ],
    difficulty: "easy",
  },
  {
    _id: "64b7513e56a4d24f7eea88b8",
    title: "Koko Eating Bananas",
    topic: "64b0a7a1664e6698b9720575",
    description: "Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.\
    Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.\
    Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.\
    Return the minimum integer k such that she can eat all the bananas within h hours.",
    modelDescription: "This solution determines the minimum eating speed required to finish all piles of bananas within H hours. It uses binary search with a left boundary l initialized to 1, and a right boundary r initialized to 1,000,000,000. In each iteration, the middle point m represents a candidate eating speed. For each m, the function calculates the total hours needed to eat all bananas in the \'piles\' array at this speed, using the formula (p + m - 1) / m for each pile p. If the total hours exceed H, a larger eating speed is needed, so l is moved to m + 1. If the total hours are less than or equal to H, the function tries to find a smaller valid eating speed, moving r to m. The search continues until l is no longer less than r, at which point l is the minimum eating speed required to eat all bananas within H hours, and this value is returned.",
    exampleCase: "Input: piles = [3,6,7,11], h = 8\
    Output: 4",
    solution: "public class MinEatingSpeed {\n\n    public int minEatingSpeed(int[] piles, int H) {\n        // Initialize left boundary (l) and right boundary (r)\n        int l = 1, r = 1000000000;\n\n        // Perform binary search\n        while (l < r) {\n            // Compute the middle point to divide the search space\n            int m = (l + r) / 2, total = 0;\n\n            // Count the total hours to eat all bananas with speed m\n            for (int p : piles) {\n                total += (p + m - 1) / m; // This is equivalent to Math.ceil((double) p / m);\n            }\n\n            // If total hours is greater than H, we need a larger eating speed,\n            // hence we move the left boundary of the search space\n            if (total > H)\n                l = m + 1;\n            // If total hours is less or equal to H, we try to find a smaller valid eating speed\n            // hence we move the right boundary of the search space\n            else\n                r = m;\n        }\n\n        // After the binary search, l is the minimum eating speed required to eat all bananas within H hours\n        return l;\n    }\n}\n",
    hint: "Use binary search for this problem.",
    boilerplateCode: [
      {
        language: "java",
        boilerplate: "\nimport java.util.Arrays;\nimport java.util.Scanner;\n\npublic class Output {\n    public int minEatingSpeed(int[] piles, int H) {\n        // to do: complete this code\n    }\n\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        String input = scanner.nextLine();\n        String[] parts = input.split(\", h = \");\n\n        String pilesPart = parts[0].replace(\"piles = [\", \"\").replace(\"]\", \"\");\n        int[] piles = Arrays.stream(pilesPart.split(\",\"))\n                .map(String::trim)\n                .mapToInt(Integer::parseInt)\n                .toArray();\n\n        int H = Integer.parseInt(parts[1]);\n\n        Output output = new Output();\n        int result = output.minEatingSpeed(piles, H);\n\n        System.out.println(result);\n    }\n}\n",
      },
      {
        language: "python3",
        boilerplate: "\nclass Output:\n    def minEatingSpeed(self, piles, H):\n        # to do: complete this code\n        pass\n\n\ndef main():\n    input_data = input()\n\n    parts = input_data.split(\", h = \")\n\n    piles_part = parts[0].replace(\"piles = [\", \"\").replace(\"]\", \"\")\n    piles = list(map(int, piles_part.split(\",\")))\n\n    H = int(parts[1])\n\n    output = Output()\n    result = output.minEatingSpeed(piles, H)\n\n    print(result)\n\n\nif __name__ == \"__main__\":\n    main()\n"
      },
      {
        language: "cpp",
        boilerplate: "\n#include <iostream>\n#include <sstream>\n#include <vector>\n#include <algorithm>\n\nint minEatingSpeed(std::vector<int>& piles, int H) {\n    // to do: complete this code\n    \n    // placeholder return statement\n    return 1;\n}\n\nint main() {\n    std::string input;\n    std::getline(std::cin, input);\n\n    size_t start = input.find('[') + 1;\n    size_t end = input.find(']');\n    std::string pilesPart = input.substr(start, end - start);\n\n    size_t found = input.find(\", h = \");\n    std::string HPart = input.substr(found + 6);\n\n    std::stringstream ss(pilesPart);\n    std::vector<int> piles;\n    for (int i; ss >> i;) {\n        piles.push_back(i);    \n        if (ss.peek() == ',')\n            ss.ignore();\n    }\n\n    int H = std::stoi(HPart);\n\n    int result = minEatingSpeed(piles, H);\n\n    std::cout << result << std::endl;\n\n    return 0;\n}\n"
      }
    ],
    testCases: [
      {
        input: "piles = [3,6,7,11], h = 8",
        output: "4",
      },
      {
        input: "piles = [30,11,23,4,20], h = 5",
        output: "30",
      },
      {
        input: "piles = [30,11,23,4,20], h = 6",
        output: "23",
      },
    ],
    difficulty: "medium",
  },
  {
    _id: "64bcf69e2f1ff54481e545ee",
    title: "Median of Two Sorted Arrays",
    topic: "64b0a7a1664e6698b9720575",
    description: "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.",
    modelDescription: "This solution finds the median of two sorted arrays A and B. It calculates two positions, l and r, to handle both even and odd total lengths of the combined arrays. The function findMedianSortedArrays calls a helper function getkth to find these middle elements and then returns their average. The getkth function takes two arrays, two start indices in these arrays, and an integer k, and recursively finds the k-th smallest element. If the start index of one array exceeds its length, the k-th element is in the other array. If k is 1, it directly returns the smaller of the two current elements. Otherwise, it compares the middle elements of the current sections of both arrays. Depending on this comparison, the function narrows down the half where the k-th element can\'t exist and adjusts the k value and start indices accordingly for the next recursive call.",
    exampleCase: "Input: nums1 = [1,3], nums2 = [2]\
    Output: 2.00000\
    Explanation: merged array = [1,2,3] and median is 2.",
    solution: "public double findMedianSortedArrays(int[] A, int[] B) {\n    int m = A.length, n = B.length;\n    int l = (m + n + 1) / 2;\n    int r = (m + n + 2) / 2;\n    return (getkth(A, 0, B, 0, l) + getkth(A, 0, B, 0, r)) / 2.0;\n}\n\npublic double getkth(int[] A, int aStart, int[] B, int bStart, int k) {\n    if (aStart > A.length - 1) return B[bStart + k - 1];\n    if (bStart > B.length - 1) return A[aStart + k - 1];\n    if (k == 1) return Math.min(A[aStart], B[bStart]);\n    int aMid = Integer.MAX_VALUE, bMid = Integer.MAX_VALUE;\n    if (aStart + k/2 - 1 < A.length) aMid = A[aStart + k/2 - 1];\n    if (bStart + k/2 - 1 < B.length) bMid = B[bStart + k/2 - 1];\n    if (aMid < bMid) return getkth(A, aStart + k/2, B, bStart, k - k/2);\n    else return getkth(A, aStart, B, bStart + k/2, k - k/2);\n}",
    hint: "Ignore half part of A and B each step recursively by comparing the median of remaining A and B",
    boilerplateCode: [
      {
        language: "java",
        boilerplate: "import java.util.Scanner;\nimport java.util.Arrays;\n\npublic class Output {\n\n    public double findMedianSortedArrays(int[] A, int[] B) {\n        // complete this function\n\n        // placeholder return\n        return 1.0;\n    }\n\n\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String input = scanner.nextLine();\n\n        String[] parts = input.split(\", \");\n\n        String[] nums1Parts = parts[0].split(\" = \");\n        String[] nums2Parts = parts[1].split(\" = \");\n\n        int[] nums1 = stringToArray(nums1Parts[1]);\n        int[] nums2 = stringToArray(nums2Parts[1]);\n\n        Output output = new Output();\n        double median = output.findMedianSortedArrays(nums1, nums2);\n        System.out.println(median);\n    }\n\n    private static int[] stringToArray(String str) {\n        str = str.replaceAll(\"\\\\[\", \"\").replaceAll(\"\\\\]\", \"\").replaceAll(\"\\\\s\", \"\");\n        String[] numsAsStr = str.split(\",\");\n        int[] nums = new int[numsAsStr.length];\n        for(int i = 0; i < numsAsStr.length; i++) {\n            nums[i] = Integer.parseInt(numsAsStr[i]);\n        }\n        return nums;\n    }\n}",
      },
      {
        language: "python3",
        boilerplate: "class Output:\n    def findMedianSortedArrays(self, A, B):\n        # complete this function \n        pass\n\n\ndef string_to_array(str):\n    str = str.replace('[', '').replace(']', '').replace(' ', '')\n    nums_as_str = str.split(',')\n    nums = [int(num) for num in nums_as_str]\n    return nums\n\n\nif __name__ == '__main__':\n    input_str = input()\n    parts = input_str.split(\", \")\n\n    nums1Parts = parts[0].split(\" = \")\n    nums2Parts = parts[1].split(\" = \")\n\n    nums1 = string_to_array(nums1Parts[1])\n    nums2 = string_to_array(nums2Parts[1])\n\n    output = Output()\n    median = output.findMedianSortedArrays(nums1, nums2)\n    print(median)\n"
      },
      {
        language: "cpp",
        boilerplate: "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n#include <iterator>\n#include <climits>\n\nclass Output {\npublic:\n    double findMedianSortedArrays(std::vector<int>& A, std::vector<int>& B) {\n        // complete this code \n    }\n\n};\n\nstd::vector<int> string_to_array(std::string str) {\n    str.erase(std::remove(str.begin(), str.end(), '['), str.end());\n    str.erase(std::remove(str.begin(), str.end(), ']'), str.end());\n    str.erase(std::remove(str.begin(), str.end(), ' '), str.end());\n    \n    std::istringstream iss(str);\n    std::vector<int> nums;\n    int num;\n    while(iss >> num) {\n        nums.push_back(num);\n        if(iss.peek() == ',')\n            iss.ignore();\n    }\n    return nums;\n}\n\nint main() {\n    std::string input_str;\n    getline(std::cin, input_str);\n\n    std::size_t pos1 = input_str.find('=');\n    std::size_t pos2 = input_str.find('=', pos1 + 1);\n    std::string str1 = input_str.substr(pos1+2, pos2-pos1-3);\n    std::string str2 = input_str.substr(pos2+2);\n\n    std::vector<int> nums1 = string_to_array(str1);\n    std::vector<int> nums2 = string_to_array(str2);\n    \n    Output output;\n    double median = output.findMedianSortedArrays(nums1, nums2);\n    std::cout << median << std::endl;\n    \n    return 0;\n}\n"
      }
    ],
    testCases: [
      {
        input: "nums1 = [1,3], nums2 = [2]",
        output: "2.0",
      },
      {
        input: "nums1 = [1,2], nums2 = [3,4]",
        output: "2.5",
      },
    ],
    difficulty: "hard",
  },
  {
    _id: "64be0052b47d0358a9311402",
    title: "Reverse Linked List",
    topic: "64b0a7a4b5130ea9e3664ef0",
    description: "This solution defines a method to reverse a singly linked list. In the class definition, a nested ListNode class is used to represent the elements of the list, where each ListNode has an integer value and a reference to the next node in the list. The reverseList method takes the head of a list as its parameter and returns the head of the reversed list. The method initializes a new head, newHead, as null and iterates through the original list using a while loop. In each iteration, it temporarily stores the next node of the current node to continue traversal. Then, it changes the \'next\' pointer of the current node to point to newHead, effectively moving the node from the original list to the reversed list. Finally, it updates newHead to be the current node and continues with the next node in the original list until the entire list is reversed. The function then returns the head of the reversed list.",
    modelDescription: "This solution reverses a linked list by iteratively detaching nodes from the original list and attaching them at the head of the new list, thus reversing the original order.",
    exampleCase: "Input: head = [1,2,3,4,5]\
    Output: [5,4,3,2,1]",
    solution: "public class ReverseList {\n\n    class ListNode {\n        int val;\n        ListNode next;\n        ListNode() {}\n        ListNode(int val) { this.val = val; }\n        ListNode(int val, ListNode next) { this.val = val; this.next = next; }\n    }\n\n    public ListNode reverseList(ListNode head) {\n        /* iterative solution */\n\n        // newHead is the head of the new reversed linked list, initialized as null\n        ListNode newHead = null;\n        \n        // Loop until we've covered all nodes in the original list\n        while (head != null) {\n\n            // Store the next node in the original list before we change the 'next' pointer of current node\n            ListNode next = head.next;\n\n            // Change the 'next' pointer of the current node to the previous node in the new list\n            head.next = newHead;\n\n            // Move the head of the new list to the current node\n            newHead = head;\n\n            // Proceed to the next node in the original list\n            head = next;\n        }\n\n        // Return the head of the reversed list\n        return newHead;\n    }\n}",
    hint: "A linked list can be reversed iteratively or recursively.",
    boilerplateCode: [
      {
        language: "java",
        boilerplate: "\nimport java.util.*;\n\npublic class Output {\n\n    public static class ListNode {\n        int val;\n        ListNode next;\n        ListNode() {}\n        ListNode(int val) { this.val = val; }\n        ListNode(int val, ListNode next) { this.val = val; this.next = next; }\n    }\n\n    public ListNode reverseList(ListNode head) {\n        // to do: complete this\n    }\n\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String input = scanner.nextLine();\n\n        input = input.substring(1, input.length() - 1);\n\n        String[] nodeValues = input.split(\",\");\n        Output outer = new Output();\n\n        ListNode dummy = new ListNode(-1);\n        ListNode ptr = dummy;\n        for(String val : nodeValues) {\n            ptr.next = new ListNode(Integer.parseInt(val));\n            ptr = ptr.next;\n        }\n\n        ListNode head = dummy.next;\n        ListNode reversedList = outer.reverseList(head);\n\n        ptr = reversedList;\n        while(ptr != null) {\n            System.out.print(ptr.val + \" \");\n            ptr = ptr.next;\n        }\n\n        scanner.close();\n    }\n}\n",
      },
      {
        language: "python3",
        boilerplate: "\nclass ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n\nclass Output:\n    def reverseList(self, head):\n        # to do: complete this \n        pass\n\ndef main():\n    input_str = input()\n\n    input_str = input_str[1:-1]\n\n    nodeValues = input_str.split(\",\")\n    outer = Output()\n\n    dummy = ListNode(-1)\n    ptr = dummy\n    for val in nodeValues:\n        ptr.next = ListNode(int(val))\n        ptr = ptr.next\n\n    head = dummy.next\n    reversedList = outer.reverseList(head)\n\n    ptr = reversedList\n    while ptr is not None:\n        print(ptr.val, end=' ')\n        ptr = ptr.next\n\nif __name__ == \"__main__\":\n    main()\n"
      },
      {
        language: "cpp",
        boilerplate: "#include <iostream>\n#include <sstream>\n#include <string>\n#include <vector>\n\nusing namespace std;\n\nclass ListNode {\npublic:\n    int val;\n    ListNode *next;\n    ListNode() : val(0), next(nullptr) {}\n    ListNode(int val) : val(val), next(nullptr) {}\n    ListNode(int val, ListNode *next) : val(val), next(next) {}\n};\n\nclass Output {\npublic:\n    ListNode* reverseList(ListNode* head) {\n        // to do: complete this code\n    }\n};\n\nint main() {\n    string input;\n    getline(cin, input);\n\n    input = input.substr(1, input.length() - 2);\n\n    stringstream ss(input);\n    string item;\n\n    Output outer;\n    ListNode dummy(-1);\n    ListNode* ptr = &dummy;\n    while (getline(ss, item, ',')) {\n        ptr->next = new ListNode(stoi(item));\n        ptr = ptr->next;\n    }\n\n    ListNode* head = dummy.next;\n    ListNode* reversedList = outer.reverseList(head);\n\n    ptr = reversedList;\n    while(ptr != nullptr) {\n        cout << ptr->val << \" \";\n        ptr = ptr->next;\n    }\n\n    return 0;\n}"
      }
    ],
    testCases: [
      {
        input: "[1,2,3,4,5]",
        output: "5 4 3 2 1",
      },
      {
        input: "[1,2]",
        output: "2 1",
      },
    ],
    difficulty: "easy",
  },
  {
    _id: "64bee93bfb7de1c114f9f9a7",
    title: "Reorder List",
    topic: "64b0a7a4b5130ea9e3664ef0",
    description: "You are given the head of a singly linked-list. The list can be represented as:\
    L0 → L1 → … → Ln - 1 → Ln\
    Reorder the list to be on the following form:\
    L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …\
    You may not modify the values in the list\'s nodes. Only nodes themselves may be changed.",
    modelDescription: "This solution reorders a given singly linked list in-place. If the input list is empty or has only one element, the function immediately returns as no reordering is needed. The first part of the solution finds the middle of the list using two pointers, p1 and p2, where p1 moves one step and p2 moves two steps until p2 reaches the end of the list; then p1 points to the middle. The second part reverses the second half of the list: if the input is 1->2->3->4->5->6, it changes it to 1->2->3->6->5->4. The third part is where the reordering happens: it takes one node from the first part and merges it with one node from the second (reversed) part, iteratively, until the reordering is complete. For example, it changes 1->2->3->6->5->4 to 1->6->2->5->3->4. preMiddle and preCurrent are used to keep track of the nodes involved in these operations to enable the reordering of nodes.",
    exampleCase: "Input: head = [1,2,3,4]\
    Output: [1,4,2,3]",
    solution: "public void reorderList(ListNode head) {\n    if(head==null||head.next==null) return;\n\n    //Find the middle of the list\n    ListNode p1=head;\n    ListNode p2=head;\n    while(p2.next!=null&&p2.next.next!=null){ \n        p1=p1.next;\n        p2=p2.next.next;\n    }\n\n    //Reverse the half after middle  1->2->3->4->5->6 to 1->2->3->6->5->4\n    ListNode preMiddle=p1;\n    ListNode preCurrent=p1.next;\n    while(preCurrent.next!=null){\n        ListNode current=preCurrent.next;\n        preCurrent.next=current.next;\n        current.next=preMiddle.next;\n        preMiddle.next=current;\n    }\n\n    //Start reorder one by one  1->2->3->6->5->4 to 1->6->2->5->3->4\n    p1=head;\n    p2=preMiddle.next;\n    while(p1!=preMiddle){\n        preMiddle.next=p2.next;\n        p2.next=p1.next;\n        p1.next=p2;\n        p1=p2.next;\n        p2=preMiddle.next;\n    }\n}",
    hint: "Start by finding the middle of the list.",
    boilerplateCode: [
      {
        language: "java",
        boilerplate: "import java.util.*;\n\npublic class Output {\n\n  public static class ListNode {\n    int val;\n    ListNode next;\n    ListNode() {}\n    ListNode(int val) {\n      this.val = val;\n    }\n    ListNode(int val, ListNode next) {\n      this.val = val;\n      this.next = next;\n    }\n  }\n\n  public void reorderList(ListNode head) {\n    // to do: complete this code:\n    \n  }\n\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    String input = scanner.nextLine();\n    input = input.substring(1, input.length() - 1); // remove brackets\n    String[] numbers = input.split(\",\");\n    ListNode dummy = new ListNode();\n    ListNode current = dummy;\n    for (String number: numbers) {\n      current.next = new ListNode(Integer.parseInt(number.trim()));\n      current = current.next;\n    }\n    Output output = new Output();\n    output.reorderList(dummy.next);\n\n    current = dummy.next;\n    while (current != null) {\n      System.out.print(current.val + \" \");\n      current = current.next;\n    }\n    scanner.close();\n  }\n}",
      },
      {
        language: "python3",
        boilerplate: "class ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n\nclass Output:\n    @staticmethod\n    def reorderList(head):\n        # to do: complete this code \n        pass\n\nif __name__ == \"__main__\":\n    input_data = input()[1:-1]  # remove brackets\n    numbers = list(map(int, input_data.split(',')))\n    dummy = ListNode()\n    current = dummy\n    for number in numbers:\n        current.next = ListNode(number)\n        current = current.next\n    output = Output()\n    output.reorderList(dummy.next)\n\n    current = dummy.next\n    while current:\n        print(current.val, end=\" \")\n        current = current.next"
      },
      {
        language: "cpp",
        boilerplate: "#include <iostream>\n#include <vector>\n#include <sstream>\n#include <iterator>\n#include <stack>\n\nstruct ListNode {\n    int val;\n    ListNode* next;\n    ListNode(int x) : val(x), next(nullptr) {}\n};\n\nclass Output {\npublic:\n    static void reorderList(ListNode* head) {\n        // to do: complete code\n    }\n};\n\nint main() {\n    std::string line;\n    getline(std::cin, line);\n    line = line.substr(1, line.size() - 2); // remove brackets\n\n    std::istringstream iss(line);\n    std::vector<int> numbers((std::istream_iterator<int>(iss)), std::istream_iterator<int>());\n\n    ListNode* dummy = new ListNode(0);\n    ListNode* current = dummy;\n    for (int number : numbers) {\n        current->next = new ListNode(number);\n        current = current->next;\n    }\n\n    Output::reorderList(dummy->next);\n\n    current = dummy->next;\n    while (current) {\n        std::cout << current->val << \" \";\n        current = current->next;\n    }\n\n    return 0;\n}\n"
      }
    ],
    testCases: [
      {
        input: "[1,2,3,4]",
        output: "1 4 2 3",
      },
      {
        input: "[1,2,3,4,5]",
        output: "1 5 2 4 3",
      },
    ],
    difficulty: "medium",
  },
  {
    _id: "64beecf1bbd0e386babc1347",
    title: "Find the Duplicate Number",
    topic: "64b0a7a4b5130ea9e3664ef0",
    description: "Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.\
    There is only one repeated number in nums, return this repeated number.\
    You must solve the problem without modifying the array nums and using only constant extra space.",
    modelDescription: "This solution aims to find the duplicate element in an array where there is only one duplicate, but it can appear multiple times. The array is of size n+1 and contains elements ranging from 1 to n, so there is at least one duplicate. The algorithm uses two pointers, slow and fast, which traverse the array at different speeds, akin to the Floyd\'s Tortoise and Hare (Cycle Detection) algorithm. Initially, slow is set to the first element of the array, and fast is set to the element at the index equal to the first element of the array. In the first phase, slow moves one step at a time, and fast moves two steps at a time until they meet, which is guaranteed due to the presence of a duplicate. This meeting point is inside the cycle. In the second phase, fast is reinitialized to the beginning of the array, and both fast and slow move one step at a time until they meet again. The meeting point in the second phase is the duplicate element, which this method returns. If the size of the input array is not more than 1, the function returns -1 to indicate an error or invalid input.",
    exampleCase: "Input: nums = [1,3,4,2,2]\
    Output: 2",
    solution: "public class FindDuplicate {\n\n    public int findDuplicate(int[] nums) {\n        // If the size of the input array is more than 1, then only proceed\n        if (nums.length > 1)\n        {\n            // Initializing slow and fast pointers to the start of the array\n            int slow = nums[0];\n            int fast = nums[nums[0]];\n            \n            // Loop to find the intersection point in the cycle\n            while (slow != fast)\n            {\n                // Move the slow pointer by one step\n                slow = nums[slow];\n                // Move the fast pointer by two steps\n                fast = nums[nums[fast]];\n            }\n\n            // After the first phase, start the fast pointer from the beginning\n            fast = 0;\n            \n            // Second phase to find the starting point of the cycle\n            while (fast != slow)\n            {\n                // Both the pointers move one step at a time\n                fast = nums[fast];\n                slow = nums[slow];\n            }\n            // The point where both pointers meet is the duplicate element\n            return slow;\n        }\n        // If the size of the input array is not more than 1, return -1\n        return -1;\n    }\n}\n",
    hint: "Use two pointers the fast and the slow. The fast one goes forward two steps each time, while the slow one goes only step each time.",
    boilerplateCode: [
      {
        language: "java",
        boilerplate: "\nimport java.util.Scanner;\n\npublic class Output {\n    public int findDuplicate(int[] nums) {\n        // to do: complete this code \n    }\n\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String input = scanner.nextLine();\n        input = input.substring(1, input.length() - 1);\n        String[] strNums = input.split(\",\");\n        int[] nums = new int[strNums.length];\n\n        for (int i = 0; i < strNums.length; i++) {\n            nums[i] = Integer.parseInt(strNums[i].trim());\n        }\n\n        Output output = new Output();\n        int duplicate = output.findDuplicate(nums);\n        System.out.println(duplicate);\n    }\n}",
      },
      {
        language: "python3",
        boilerplate: "class Output:\n    def find_duplicate(self, nums):\n        pass\n\nif __name__ == '__main__':\n    input_string = input()\n    input_string = input_string[1:-1]\n    nums = list(map(int, input_string.split(',')))\n    output = Output()\n    duplicate = output.find_duplicate(nums)\n    print(duplicate)"
      },
      {
        language: "cpp",
        boilerplate: "\n#include <iostream>\n#include <vector>\n#include <sstream>\n\nclass Output {\npublic:\n    int findDuplicate(std::vector<int>& nums) {\n        // to do: complete this code\n    }\n};\n\nint main() {\n    std::string input;\n    getline(std::cin, input);\n    input = input.substr(1, input.size() - 2); // remove brackets\n\n    std::istringstream iss(input);\n    std::vector<int> nums;\n    for(std::string s; iss >> s; ) {\n        nums.push_back(stoi(s));\n    }\n\n    Output output;\n    int duplicate = output.findDuplicate(nums);\n    std::cout << duplicate << std::endl;\n\n    return 0;\n}"
      }
    ],
    testCases: [
      {
        input: "[1,3,4,2,2]",
        output: "2",
      },
      {
        input: "[3,1,3,4,2]",
        output: "3",
      },
    ],
    difficulty: "hard",
  },
  {
    _id: "64bef00eb9e9d60dca9e3559",
    title: "Invert Binary Tree",
    topic: "64b0a7a84e2fbc9509c28d64",
    description: "Given the root of a binary tree, invert the tree, and return its root.",
    modelDescription: "This solution is a function to invert a binary tree, which means swapping all left and right child nodes at every level. The function takes the root of a binary tree as an input and returns the root of the inverted tree. It follows a recursive approach. If the given root is null, the function returns null, indicating that the tree is empty or the recursion has reached a leaf node. Otherwise, the function first recursively inverts the left subtree of the current node (invertTree(root.left)), then recursively inverts the right subtree of the current node (invertTree(root.right)). After both subtrees are inverted, the function swaps the left and right child nodes of the current node. To do this, it temporarily stores the left child of the current node in a variable curr, then sets the left child of the current node to its right child, and finally sets the right child of the current node to curr. This process is repeated recursively for every node in the tree, effectively inverting the entire binary tree. The function ultimately returns the root of the inverted tree.",
    exampleCase: "Input: root = [4,2,7,1,3,6,9]\
    Output: [4,7,2,9,6,3,1]",
    solution: "public TreeNode invertTree(TreeNode root) {\n    if(root == null){\n        return root;\n    }\n    invertTree(root.left);\n    invertTree(root.right);\n    TreeNode curr = root.left;\n    root.left = root.right;\n    root.right = curr;\n    return root;\n}",
    hint: "You can use a recursive or iterative approach.",
    boilerplateCode: [
      {
        language: "java",
        boilerplate: "import java.util.*;\n\npublic class Output {\n\n    public static class TreeNode {\n        int val;\n        TreeNode left;\n        TreeNode right;\n\n        TreeNode() {}\n\n        TreeNode(int val) {\n            this.val = val;\n        }\n\n        TreeNode(int val, TreeNode left, TreeNode right) {\n            this.val = val;\n            this.left = left;\n            this.right = right;\n        }\n    }\n\n    public TreeNode invertTree(TreeNode root) {\n        // to do: complete this code \n    }\n\n    public void printTree(TreeNode root) {\n        Queue<TreeNode> queue = new LinkedList<>();\n        queue.add(root);\n        while (!queue.isEmpty()) {\n            TreeNode node = queue.poll();\n            System.out.print(node.val + \" \");\n            if (node.left != null) {\n                queue.add(node.left);\n            }\n            if (node.right != null) {\n                queue.add(node.right);\n            }\n        }\n    }\n\n    public static TreeNode constructTree(Integer[] nums) {\n        if (nums.length == 0) return null;\n        TreeNode root = new TreeNode(nums[0]);\n        Queue<TreeNode> nodeQueue = new LinkedList<>();\n        nodeQueue.add(root);\n\n        int i = 1;\n        while (!nodeQueue.isEmpty() && i < nums.length) {\n            TreeNode currentNode = nodeQueue.poll();\n\n            if (nums[i] != null) {\n                TreeNode leftChild = new TreeNode(nums[i]);\n                currentNode.left = leftChild;\n                nodeQueue.add(leftChild);\n            }\n            i++;\n\n            if (i < nums.length && nums[i] != null) {\n                TreeNode rightChild = new TreeNode(nums[i]);\n                currentNode.right = rightChild;\n                nodeQueue.add(rightChild);\n            }\n            i++;\n        }\n        return root;\n    }\n\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String input = scanner.nextLine();\n        input = input.substring(1, input.length() - 1);\n        Integer[] nums = Arrays.stream(input.split(\",\")).map(Integer::parseInt).toArray(Integer[]::new);\n\n        Output output = new Output();\n        TreeNode root = constructTree(nums);\n        TreeNode invertedRoot = output.invertTree(root);\n        output.printTree(invertedRoot);\n    }\n}\n",
      },
      {
        language: "python3",
        boilerplate: "import sys\nfrom queue import Queue\n\nclass TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\ndef invert_tree(root):\n    # to do: complete this code \n    pass\n\ndef print_tree(root):\n    queue = Queue()\n    queue.put(root)\n    while not queue.empty():\n        node = queue.get()\n        print(node.val, end=\" \")\n        if node.left is not None:\n            queue.put(node.left)\n        if node.right is not None:\n            queue.put(node.right)\n\ndef construct_tree(nums):\n    if len(nums) == 0:\n        return None\n    root = TreeNode(nums[0])\n    node_queue = Queue()\n    node_queue.put(root)\n    i = 1\n    while not node_queue.empty() and i < len(nums):\n        current_node = node_queue.get()\n        if nums[i] is not None:\n            left_child = TreeNode(nums[i])\n            current_node.left = left_child\n            node_queue.put(left_child)\n        i += 1\n        if i < len(nums) and nums[i] is not None:\n            right_child = TreeNode(nums[i])\n            current_node.right = right_child\n            node_queue.put(right_child)\n        i += 1\n    return root\n\ndef main():\n    input_string = sys.stdin.readline().strip()[1:-1]\n    nums = list(map(int, input_string.split(',')))\n    root = construct_tree(nums)\n    inverted_root = invert_tree(root)\n    print_tree(inverted_root)\n\nif __name__ == \"__main__\":\n    main()\n"
      },
      {
        language: "cpp",
        boilerplate: "#include <iostream>\n#include <queue>\n#include <sstream>\n#include <string>\n#include <vector>\n\nstruct TreeNode {\n    int val;\n    TreeNode* left;\n    TreeNode* right;\n\n    TreeNode() : val(0), left(nullptr), right(nullptr) {}\n\n    TreeNode(int val) : val(val), left(nullptr), right(nullptr) {}\n\n    TreeNode(int val, TreeNode* left, TreeNode* right) : val(val), left(left), right(right) {}\n};\n\nTreeNode* invertTree(TreeNode* root) {\n    // to do: complete this code \n}\n\nvoid printTree(TreeNode* root) {\n    std::queue<TreeNode*> node_queue;\n    node_queue.push(root);\n    while (!node_queue.empty()) {\n        TreeNode* node = node_queue.front();\n        node_queue.pop();\n        std::cout << node->val << \" \";\n        if (node->left != nullptr) {\n            node_queue.push(node->left);\n        }\n        if (node->right != nullptr) {\n            node_queue.push(node->right);\n        }\n    }\n}\n\nTreeNode* constructTree(const std::vector<int>& nums) {\n    if (nums.empty()) return nullptr;\n    TreeNode* root = new TreeNode(nums[0]);\n    std::queue<TreeNode*> node_queue;\n    node_queue.push(root);\n\n    std::size_t i = 1;\n    while (!node_queue.empty() && i < nums.size()) {\n        TreeNode* current_node = node_queue.front();\n        node_queue.pop();\n\n        if (nums[i] != -1) {\n            TreeNode* left_child = new TreeNode(nums[i]);\n            current_node->left = left_child;\n            node_queue.push(left_child);\n        }\n        i++;\n\n        if (i < nums.size() && nums[i] != -1) {\n            TreeNode* right_child = new TreeNode(nums[i]);\n            current_node->right = right_child;\n            node_queue.push(right_child);\n        }\n        i++;\n    }\n    return root;\n}\n\nint main() {\n    std::string input;\n    getline(std::cin, input);\n    input = input.substr(1, input.size() - 2);\n    std::istringstream iss(input);\n    std::vector<int> nums;\n    for(std::string s; iss >> s; ) {\n        if (s[s.size()-1] == ',') s = s.substr(0, s.size()-1);\n        nums.push_back(std::stoi(s));\n    }\n    \n    TreeNode* root = constructTree(nums);\n    TreeNode* inverted_root = invertTree(root);\n    printTree(inverted_root);\n    return 0;\n}\n"
      }
    ],
    testCases: [
      {
        input: "[4,2,7,1,3,6,9]",
        output: "4 7 2 9 6 3 1",
      },
      {
        input: "[2,1,3]",
        output: "2 3 1",
      },
    ],
    difficulty: "easy",
  },
  {
    _id: "64bef448be0f5e5dfcfa2dbb",
    title: "Same Tree",
    topic: "64b0a7a84e2fbc9509c28d64",
    description: "Given the roots of two binary trees p and q, write a function to check if they are the same or not.\
    Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.",
    modelDescription: "This solution is a function to check if two binary trees are identical, meaning they have the same structure and the same node values. The function takes as inputs the roots of two binary trees, p and q. The function follows a recursive approach. If both input trees are empty (both p and q are null), the function returns true, indicating that the trees are the same. If one tree is empty and the other is not (either p is null and q is not, or p is not null and q is null), the function returns false, indicating that the trees are not the same. If the current nodes of both trees have the same value (p.val == q.val), the function continues the comparison recursively for the left subtrees (p.left and q.left) and for the right subtrees (p.right and q.right). If the values of the current nodes are different, the function returns false, indicating that the trees are not the same. The recursion eventually concludes whether the two trees are identical or not.",
    exampleCase: "Input: p = [1,2,3], q = [1,2,3]\
    Output: true",
    solution: "public boolean isSameTree(TreeNode p, TreeNode q) {\n    // If both trees are empty, they are the same.\n    if(p == null && q == null) return true;\n\n    // If one tree is empty and the other is not, they are not the same.\n    if(p == null || q == null) return false;\n\n    // If the values of the current nodes are the same, \n    // continue to check the left and right subtrees.\n    if(p.val == q.val)\n        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);\n\n    // If the values of the current nodes are not the same, the trees are not the same.\n    return false;\n}",
    hint: "To solve this problem, think about how you can use recursion to traverse and compare the nodes in the binary trees. In the base case, you should consider what it means for two trees to be the same, especially when a tree is empty. In the recursive step, think about how to check the current node and how to proceed to its children.",
    boilerplateCode: [
      {
        language: "java",
        boilerplate: "import java.util.*;\n\npublic class Output {\n    public static class TreeNode {\n        int val;\n        TreeNode left;\n        TreeNode right;\n        TreeNode() {}\n        TreeNode(int val) { this.val = val; }\n        TreeNode(int val, TreeNode left, TreeNode right) {\n            this.val = val;\n            this.left = left;\n            this.right = right;\n        }\n    }\n\n    public boolean isSameTree(TreeNode p, TreeNode q) {\n        // to do: complete this code \n    }\n\n    public static TreeNode constructTree(Integer[] nums) {\n        if (nums.length == 0) return null;\n        TreeNode root = new TreeNode(nums[0]);\n        Queue<TreeNode> nodeQueue = new LinkedList<>();\n        nodeQueue.add(root);\n\n        int i = 1;\n        while (!nodeQueue.isEmpty() && i < nums.length) {\n            TreeNode currentNode = nodeQueue.poll();\n\n            if (nums[i] != null) {\n                TreeNode leftChild = new TreeNode(nums[i]);\n                currentNode.left = leftChild;\n                nodeQueue.add(leftChild);\n            }\n            i++;\n\n            if (i < nums.length && nums[i] != null) {\n                TreeNode rightChild = new TreeNode(nums[i]);\n                currentNode.right = rightChild;\n                nodeQueue.add(rightChild);\n            }\n            i++;\n        }\n        return root;\n    }\n\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String input = scanner.nextLine();\n        String[] parts = input.split(\", q = \");\n        \n        String pStr = parts[0].replace(\"p = [\", \"\").replace(\"]\", \"\");\n        String qStr = parts[1].replace(\"[\", \"\").replace(\"]\", \"\");\n\n        Integer[] pNums = Arrays.stream(pStr.split(\",\")).map(String::trim).map(s -> s.equals(\"null\") ? null : Integer.parseInt(s)).toArray(Integer[]::new);\n        Integer[] qNums = Arrays.stream(qStr.split(\",\")).map(String::trim).map(s -> s.equals(\"null\") ? null : Integer.parseInt(s)).toArray(Integer[]::new);\n\n        TreeNode p = constructTree(pNums);\n        TreeNode q = constructTree(qNums);\n\n        Output output = new Output();\n        System.out.println(output.isSameTree(p, q));\n    }\n}",
      },
      {
        language: "python3",
        boilerplate: "from collections import deque\nimport re\n\nclass TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\nclass Output:\n    def is_same_tree(self, p, q):\n        # complete this code \n        pass\n\ndef construct_tree(nums):\n    if len(nums) == 0:\n        return None\n    root = TreeNode(nums[0])\n    node_queue = deque()\n    node_queue.append(root)\n    i = 1\n    while node_queue and i < len(nums):\n        current_node = node_queue.popleft()\n        if nums[i] is not None:\n            left_child = TreeNode(nums[i])\n            current_node.left = left_child\n            node_queue.append(left_child)\n        i += 1\n        if i < len(nums) and nums[i] is not None:\n            right_child = TreeNode(nums[i])\n            current_node.right = right_child\n            node_queue.append(right_child)\n        i += 1\n    return root\n\ndef main():\n    input_string = input()\n    parts = re.split(', q = ', input_string)\n    p_str = parts[0].replace('p = [', '').replace(']', '')\n    q_str = parts[1].replace('[', '').replace(']', '')\n    p_nums = [None if num.strip() == 'null' else int(num.strip()) for num in p_str.split(',')]\n    q_nums = [None if num.strip() == 'null' else int(num.strip()) for num in q_str.split(',')]\n    p = construct_tree(p_nums)\n    q = construct_tree(q_nums)\n    output = Output()\n    print(str(output.is_same_tree(p, q)).lower())\n\nif __name__ == '__main__':\n    main()\n"
      },
      {
        language: "cpp",
        boilerplate: "#include <iostream>\n#include <string>\n#include <sstream>\n#include <queue>\n#include <vector>\n#include <algorithm>\n\nstruct TreeNode {\n    int val;\n    TreeNode* left;\n    TreeNode* right;\n    TreeNode() : val(0), left(nullptr), right(nullptr) {}\n    TreeNode(int val) : val(val), left(nullptr), right(nullptr) {}\n    TreeNode(int val, TreeNode* left, TreeNode* right) : val(val), left(left), right(right) {}\n};\n\nclass Output {\npublic:\n    bool isSameTree(TreeNode* p, TreeNode* q) {\n        // complete this code \n    }\n\n    static TreeNode* constructTree(std::vector<int> nums) {\n        if (nums.empty()) return nullptr;\n        TreeNode* root = new TreeNode(nums[0]);\n        std::queue<TreeNode*> node_queue;\n        node_queue.push(root);\n\n        size_t i = 1;\n        while (!node_queue.empty() && i < nums.size()) {\n            TreeNode* current_node = node_queue.front();\n            node_queue.pop();\n\n            if (nums[i] != -1) {\n                TreeNode* left_child = new TreeNode(nums[i]);\n                current_node->left = left_child;\n                node_queue.push(left_child);\n            }\n            i++;\n\n            if (i < nums.size() && nums[i] != -1) {\n                TreeNode* right_child = new TreeNode(nums[i]);\n                current_node->right = right_child;\n                node_queue.push(right_child);\n            }\n            i++;\n        }\n        return root;\n    }\n};\n\nint main() {\n    std::string input;\n    getline(std::cin, input);\n    std::replace(input.begin(), input.end(), ',', ' ');\n    std::stringstream ss(input);\n    std::string buf;\n    std::vector<int> pNums, qNums;\n    while(ss >> buf) {\n        if (buf == \"q\") break;\n        if (isdigit(buf[0]) || buf[0] == '-') {\n            pNums.push_back(stoi(buf));\n        }\n    }\n    while(ss >> buf) {\n        if (isdigit(buf[0]) || buf[0] == '-') {\n            qNums.push_back(stoi(buf));\n        }\n    }\n\n    TreeNode* p = Output::constructTree(pNums);\n    TreeNode* q = Output::constructTree(qNums);\n\n    Output output;\n    std::cout << (output.isSameTree(p, q) ? \"true\" : \"false\") << std::endl;\n\n    return 0;\n}"
      }
    ],
    testCases: [
      {
        input: "p = [1,2,3], q = [1,2,3]",
        output: "true",
      },
      {
        input: "p = [1,2], q = [1,null,2]",
        output: "false",
      },
      {
        input: "p = [1,2,1], q = [1,1,2]",
        output: "false",
      },
    ],
    difficulty: "medium",
  },
  {
    _id: "64bf7dbcf8bb4fe94d307a89",
    title: "Subtree of Another Tree",
    topic: "64b0a7a84e2fbc9509c28d64",
    description: "Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.\
    A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node\'s descendants. The tree tree could also be considered as a subtree of itself.",
    modelDescription: "This solution checks if one binary tree, represented by root node t, is a subtree of another binary tree, represented by root node s. The function isSubtree is called with the roots of two trees s and t. If s is null, t cannot be its subtree, so it returns false. If s and t are identical trees, as checked by the helper function isSame, then t is considered a subtree of s, and the function returns true. If the trees rooted at s and t are not identical, the function recursively checks whether t is a subtree of either the left or right child of s. The helper function isSame is similar to the one discussed earlier; it checks if two trees are identical by comparing the structure and values of their nodes recursively. In summary, this solution checks for every node in tree s whether the subtree rooted at that node is identical to tree t, thereby verifying if t is a subtree of s.",
    exampleCase: "Input: root = [3,4,5,1,2], subRoot = [4,1,2]\
    Output: true",
    solution: "public boolean isSubtree(TreeNode s, TreeNode t) {\n    if (s == null) return false; // If the tree s is null, t cannot be a subtree of s.\n    if (isSame(s, t)) return true; // If the trees s and t are identical, t is a subtree of s.\n    // If t is not a subtree starting at the root of s, we check if t is a subtree starting at the children of s.\n    return isSubtree(s.left, t) || isSubtree(s.right, t);\n}\n\nprivate boolean isSame(TreeNode s, TreeNode t) {\n    if (s == null && t == null) return true; // Both trees are null, they are identical.\n    if (s == null || t == null) return false; // One tree is null while the other is not, they are not identical.\n    \n    if (s.val != t.val) return false; // If the values of the current nodes are different, the trees are not identical.\n    \n    // Recursively check the left and right children of the current nodes in s and t.\n    return isSame(s.left, t.left) && isSame(s.right, t.right);\n}",
    hint: "Think about how you can use recursion to break down the problem of checking if a tree is a subtree of another. At each node, you will need to decide if the subtree starting at that node is the same as the second tree.",
    boilerplateCode: [
      {
        language: "java",
        boilerplate: "import java.util.*;\n\npublic class Output {\n    public static class TreeNode {\n        int val;\n        TreeNode left;\n        TreeNode right;\n        TreeNode() {}\n        TreeNode(int val) { this.val = val; }\n        TreeNode(int val, TreeNode left, TreeNode right) {\n            this.val = val;\n            this.left = left;\n            this.right = right;\n        }\n    }\n\n    public boolean isSubtree(TreeNode s, TreeNode t) {\n        // complete this code\n    }\n\n    public static TreeNode constructTree(List<Integer> list) {\n        if (list.size() == 0 || list.get(0) == null) return null;\n        TreeNode root = new TreeNode(list.get(0));\n        Queue<TreeNode> queue = new LinkedList<>();\n        queue.offer(root);\n        int i = 1;\n        while (!queue.isEmpty() && i < list.size()) {\n            TreeNode node = queue.poll();\n            if (list.get(i) != null) {\n                node.left = new TreeNode(list.get(i));\n                queue.offer(node.left);\n            }\n            if (++i >= list.size()) break;\n            if (list.get(i) != null) {\n                node.right = new TreeNode(list.get(i));\n                queue.offer(node.right);\n            }\n            i++;\n        }\n        return root;\n    }\n\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String input = scanner.nextLine();\n\n        String rootStr = input.split(\", subRoot = \")[0].replace(\"root = [\", \"\").replace(\"]\", \"\");\n        String subRootStr = input.split(\", subRoot = \")[1].replace(\"[\", \"\").replace(\"]\", \"\");\n\n        List<Integer> rootList = new ArrayList<>();\n        for (String s : rootStr.split(\",\")) {\n            rootList.add(s.equals(\"null\") ? null : Integer.parseInt(s.trim()));\n        }\n\n        List<Integer> subRootList = new ArrayList<>();\n        for (String s : subRootStr.split(\",\")) {\n            subRootList.add(s.equals(\"null\") ? null : Integer.parseInt(s.trim()));\n        }\n\n        TreeNode root = constructTree(rootList);\n        TreeNode subRoot = constructTree(subRootList);\n\n        Output output = new Output();\n        System.out.println(output.isSubtree(root, subRoot));\n    }\n}",
      },
      {
        language: "python3",
        boilerplate: "import queue\nimport sys\n\nclass TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\nclass Solution:\n    def isSubtree(self, s, t):\n        pass \n\ndef constructTree(lst):\n    if not lst or lst[0] is None:\n        return None\n    root = TreeNode(lst[0])\n    q = queue.Queue()\n    q.put(root)\n    i = 1\n    while not q.empty() and i < len(lst):\n        node = q.get()\n        if lst[i] is not None:\n            node.left = TreeNode(lst[i])\n            q.put(node.left)\n        i += 1\n        if i >= len(lst):\n            break\n        if lst[i] is not None:\n            node.right = TreeNode(lst[i])\n            q.put(node.right)\n        i += 1\n    return root\n\ndef main():\n    input_string = sys.stdin.readline().strip()\n\n    root_str = input_string.split(', subRoot = ')[0].replace('root = [', '').replace(']', '')\n    subroot_str = input_string.split(', subRoot = ')[1].replace('[', '').replace(']', '')\n\n    root_list = [None if s == 'null' else int(s) for s in root_str.split(',')]\n    subroot_list = [None if s == 'null' else int(s) for s in subroot_str.split(',')]\n\n    root = constructTree(root_list)\n    subroot = constructTree(subroot_list)\n\n    sol = Solution()\n    result = sol.isSubtree(root, subroot)\n    print(str(result).lower())\n\nif __name__ == '__main__':\n    main()\n"
      },
      {
        language: "cpp",
        boilerplate: "#include <iostream>\n#include <sstream>\n#include <vector>\n#include <queue>\n\nusing namespace std;\n\nstruct TreeNode {\n    int val;\n    TreeNode* left;\n    TreeNode* right;\n    TreeNode(int x) : val(x), left(NULL), right(NULL) {}\n};\n\nclass Output {\npublic:\n    bool isSubtree(TreeNode* s, TreeNode* t) {\n        // to do: complete this code\n    }\n\n  static TreeNode* constructTree(vector<int> list) {\n      if (list.empty() || list[0] == -1) return NULL;\n      TreeNode* root = new TreeNode(list[0]);\n      queue<TreeNode*> nodeQueue;\n      nodeQueue.push(root);\n      size_t i = 1;\n      while (!nodeQueue.empty() && i < list.size()) {\n          TreeNode* node = nodeQueue.front();\n          nodeQueue.pop();\n          if (list[i] != -1) {\n              node->left = new TreeNode(list[i]);\n              nodeQueue.push(node->left);\n          }\n          i++;\n          if (i >= list.size()) break;\n          if (list[i] != -1) {\n              node->right = new TreeNode(list[i]);\n              nodeQueue.push(node.right);\n          }\n          i++;\n      }\n      return root;\n  }\n\n};\n\nint main() {\n    string input;\n    getline(cin, input);\n\n    stringstream ss(input);\n    string buf;\n    vector<int> sVec, tVec;\n    bool isSubRoot = false;\n    while (ss >> buf) {\n        if (buf == \"subRoot\") {\n            isSubRoot = true;\n            continue;\n        }\n        if (isdigit(buf[0]) || buf[0] == '-') {\n            if (isSubRoot) {\n                tVec.push_back(stoi(buf));\n            } else {\n                sVec.push_back(stoi(buf));\n            }\n        }\n    }\n\n    TreeNode* s = Output::constructTree(sVec);\n    TreeNode* t = Output::constructTree(tVec);\n\n    Output output;\n    cout << (output.isSubtree(s, t) ? \"true\" : \"false\") << endl;\n\n    return 0;\n}"
      }
    ],
    testCases: [
      {
        input: "root = [3,4,5,1,2], subRoot = [4,1,2]",
        output: "true",
      },
      {
        input: "root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]",
        output: "false",
      },
    ],
    difficulty: "hard",
  },
  {
    _id: "64c0572caf3a4882de1a2a38",
    title: "Last Stone Weight",
    topic: "64b0a7aea5c3fe2ade14f9c4",
    description: "You are given an array of integers stones where stones[i] is the weight of the ith stone.\
    We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together. Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:\
    If x == y, both stones are destroyed, and\
    If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.\
    At the end of the game, there is at most one stone left.\
    Return the weight of the last remaining stone. If there are no stones left, return 0.",
    modelDescription: "The LastStoneWeight class contains a method lastStoneWeight, which simulates the process of repeatedly smashing the two heaviest stones from an array A. It uses a priority queue, implemented as a max heap, to keep the stones sorted by weight. In each iteration, the two heaviest stones are removed from the queue, and if they are not equal, their weight difference is added back into the queue. This process continues until one or no stones are left. The method then returns the remaining stone\'s weight or 0 if there are no stones left.",
    exampleCase: "Input: stones = [2,7,4,1,8,1]\
    Output: 1",
    solution: "\nimport java.util.PriorityQueue;\n\npublic class LastStoneWeight {\n\n    public int lastStoneWeight(int[] A) {\n        // Create a priority queue where the largest number has the highest priority.\n        PriorityQueue<Integer> pq = new PriorityQueue<>((a, b)-> b - a);\n\n        // Offer all the elements of the array to the priority queue.\n        for (int a : A)\n            pq.offer(a);\n\n        // Keep smashing the two largest stones until there is one or no stone left.\n        while (pq.size() > 1)\n            pq.offer(pq.poll() - pq.poll());\n\n        // Return the weight of the last stone, or zero if there are no stones left.\n        return pq.poll();\n    }\n\n}",
    hint: "Consider what data structure allows you to efficiently find (and remove) the maximum element.",
    boilerplateCode: [
      {
        language: "java",
        boilerplate: "\nimport java.util.*;\n\npublic class Output {\n\n    public int lastStoneWeight(int[] A) {\n        // to do: complete this code \n    }\n\n\tpublic static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String input = scanner.nextLine();\n        \n        input = input.replace(\"[\", \"\").replace(\"]\", \"\");\n        String[] stringArray = input.split(\",\");\n        \n        int[] A = new int[stringArray.length];\n        for(int i = 0; i < stringArray.length; i++) {\n            A[i] = Integer.parseInt(stringArray[i].trim());\n        }\n        \n        Output output = new Output();\n        System.out.println(output.lastStoneWeight(A));\n\t}\n}\n",
      },
      {
        language: "python3",
        boilerplate: "\nimport heapq\n\nclass Output:\n    def lastStoneWeight(self, A):\n        # complete this code \n        pass\n\nif __name__ == \"__main__\":\n    input_string = input().strip() \n    input_string = input_string[1:-1]\n    A = [int(num_str) for num_str in input_string.split(',')]\n    output = Output()\n    print(output.lastStoneWeight(A))\n"
      },
      {
        language: "cpp",
        boilerplate: "\n#include <iostream>\n#include <vector>\n#include <queue>\n#include <sstream>\n\nusing namespace std;\n\nclass Output {\npublic:\n    int lastStoneWeight(vector<int>& A) {\n        // to do : complete this code \n    }\n};\n\nint main() {\n    string input;\n    getline(cin, input);\n\n    input = input.substr(1, input.size() - 2);\n    stringstream ss(input);\n    string token;\n    vector<int> A;\n\n    while (getline(ss, token, ',')) {\n        A.push_back(stoi(token));\n    }\n\n    Output output;\n    cout << output.lastStoneWeight(A) << endl;\n\n    return 0;\n}\n"
      }
    ],
    testCases: [
      {
        input: "[2,7,4,1,8,1]",
        output: "1",
      },
      {
        input: "[1]",
        output: "1",
      },
    ],
    difficulty: "easy",
  },
  {
    _id: "64c05a31b83cb33cb4baa733",
    title: "Kth Largest Element in an Array",
    topic: "64b0a7aea5c3fe2ade14f9c4",
    description: "Given an integer array nums and an integer k, return the kth largest element in the array.\
    Note that it is the kth largest element in the sorted order, not the kth distinct element.",
    modelDescription: "The findKthLargest method takes an array of integers nums and an integer k, and finds the kth largest element in the array. It uses a min-heap, implemented using a priority queue pq. For each value in the input array, the value is added to the priority queue. If the size of the priority queue exceeds k, the smallest element (the head of the queue) is removed. After processing all elements from the array, the kth largest element corresponds to the smallest element in the heap, which is now at the head of the priority queue, and is returned by calling pq.peek(). This ensures that the priority queue retains only k largest elements of the array, and the smallest among them is the desired kth largest element.",
    exampleCase: "Input: nums = [3,2,1,5,6,4], k = 2\
    Output: 5",
    solution: "import java.util.PriorityQueue;\n\npublic int findKthLargest(int[] nums, int k) {\n\n    // Initialize a priority queue (min-heap).\n    final PriorityQueue<Integer> pq = new PriorityQueue<>();\n\n    // For each value in the input array...\n    for(int val : nums) {\n        // ...offer (add) the value to the priority queue.\n        pq.offer(val);\n\n        // If the size of the priority queue exceeds k...\n        if(pq.size() > k) {\n            // ...remove the smallest (head) element.\n            pq.poll();\n        }\n    }\n    // The head of the priority queue is now the kth largest element.\n    return pq.peek();\n}",
    hint: "You can use a priority queue (min-heap) to keep track of the largest k elements seen so far as you iterate through the array. The head of the priority queue will always be the kth largest element.",
    boilerplateCode: [
      {
        language: "java",
        boilerplate: "import java.util.*;\n\npublic class Output {\n\n    public int findKthLargest(int[] nums, int k) {\n        // to do: complete this code \n    }\n\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String input = scanner.nextLine();\n\n        String[] parts = input.split(\", k = \");\n\n        int k = Integer.parseInt(parts[1]);\n\n        String numsString = parts[0].replace(\"nums = [\", \"\").replace(\"]\", \"\");\n        String[] numsStringArray = numsString.split(\",\");\n        int[] nums = new int[numsStringArray.length];\n\n        for(int i = 0; i < numsStringArray.length; i++) {\n            nums[i] = Integer.parseInt(numsStringArray[i].trim());\n        }\n\n        Output output = new Output();\n        System.out.println(output.findKthLargest(nums, k));\n    }\n}",
      },
      {
        language: "python3",
        boilerplate: "import heapq\n\nclass Output:\n    def findKthLargest(self, nums, k):\n        # to do: complete this code \n        pass\n\nif __name__ == \"__main__\":\n    input_string = input().strip()\n    nums_string, k_string = input_string.split(\", k = \")\n\n    nums = list(map(int, nums_string.strip()[nums_string.index('[')+1:-1].split(',')))\n    k = int(k_string)\n\n    output = Output()\n    print(output.findKthLargest(nums, k))"
      },
      {
        language: "cpp",
        boilerplate: "#include <iostream>\n#include <queue>\n#include <vector>\n#include <sstream>\n\nusing namespace std;\n\nclass Output {\npublic:\n    int findKthLargest(vector<int>& nums, int k) {\n        // to do: complete this code \n    }\n};\n\nint main() {\n    string input;\n    getline(cin, input);\n\n    string numsString = input.substr(input.find('[') + 1, input.find(']') - input.find('[') - 1);\n    int k = stoi(input.substr(input.rfind('=') + 2)); // using rfind instead\n    \n    stringstream ss(numsString);\n    vector<int> nums;\n    string temp;\n    while(getline(ss, temp, ',')) {\n        nums.push_back(stoi(temp));\n    }\n    \n    Output output;\n    cout << output.findKthLargest(nums, k) << endl;\n}"
      }
    ],
    testCases: [
      {
        input: "nums = [3,2,1,5,6,4], k = 2",
        output: "5",
      },
      {
        input: "nums = [3,2,3,1,2,4,5,5,6], k = 4",
        output: "4",
      },
    ],
    difficulty: "medium",
  },
  {
    _id: "64c05c88e4b6ce76a9a5d87a",
    title: "Task Scheduler",
    topic: "64b0a7aea5c3fe2ade14f9c4",
    description: "Given a characters array tasks, representing the tasks a CPU needs to do, where each letter represents a different task. Tasks could be done in any order. Each task is done in one unit of time. For each unit of time, the CPU could complete either one task or just be idle.\
    However, there is a non-negative integer n that represents the cooldown period between two same tasks (the same letter in the array), that is that there must be at least n units of time between any two same tasks.\
    Return the least number of units of times that the CPU will take to finish all the given tasks.",
    modelDescription: "The leastInterval method schedules tasks from an input array, ensuring that the same tasks are separated by at least n intervals. It first counts the frequency of each task using a HashMap. A priority queue, q, is used to sort tasks based on their frequencies in descending order. The algorithm attempts to schedule up to n+1 different tasks from the queue in each iteration to minimize idle intervals. If it\'s not possible to schedule n+1 tasks in an iteration (because of remaining cooldowns for tasks), idle intervals are added to the count. The process continues until all tasks are scheduled, and the method returns count, representing the minimum intervals needed to finish all tasks considering the cooling time.",
    exampleCase: "Input: tasks = [\"A\",\"A\",\"A\",\"B\",\"B\",\"B\"], n = 2\
    Output: 8",
    solution: "import java.util.*;\n\npublic class Output {\n\n    public int leastInterval(char[] tasks, int n) {\n        Map<Character, Integer> map = new HashMap<>();\n        for (int i = 0; i < tasks.length; i++) {\n            map.put(tasks[i], map.getOrDefault(tasks[i], 0) + 1);\n        }\n        PriorityQueue<Map.Entry<Character, Integer>> q = new PriorityQueue<>(\n                (a,b) -> a.getValue() != b.getValue() ? b.getValue() - a.getValue() : a.getKey() - b.getKey());\n\n        q.addAll(map.entrySet());\n\n        int count = 0;\n        while (!q.isEmpty()) {\n            int k = n + 1;\n            List<Map.Entry> tempList = new ArrayList<>();\n            while (k > 0 && !q.isEmpty()) {\n                Map.Entry<Character, Integer> top = q.poll();\n                top.setValue(top.getValue() - 1);\n                tempList.add(top);\n                k--;\n                count++;\n            }\n\n            for (Map.Entry<Character, Integer> e : tempList) {\n                if (e.getValue() > 0) q.add(e);\n            }\n\n            if (q.isEmpty()) break;\n            count = count + k;\n        }\n        return count;\n    }\n}",
    hint: "Arrange the characters in string such that each same character is K distance apart, where distance in this problems is time b/w two similar task execution.\
    Add them to a priority Q and sort based on the highest frequency.",
    boilerplateCode: [
      {
        language: "java",
        boilerplate: "import java.util.*;\n\npublic class Output {\n\n    public int leastInterval(char[] tasks, int n) {\n        // to do: complete this code \n    }\n\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String input = scanner.nextLine();\n\n        String[] parts = input.split(\", n = \");\n        int n = Integer.parseInt(parts[1]);\n\n        String tasksString = parts[0].replace(\"tasks = [\\\"\", \"\").replace(\"\\\"]\", \"\");\n        String[] tasksStringArray = tasksString.split(\"\\\",\\\"\");\n\n        char[] tasks = new char[tasksStringArray.length];\n        for (int i = 0; i < tasksStringArray.length; i++) {\n            tasks[i] = tasksStringArray[i].charAt(0);\n        }\n\n        Output output = new Output();\n        System.out.println(output.leastInterval(tasks, n));\n    }\n}",
      },
      {
        language: "python3",
        boilerplate: "import heapq\n\nclass Output:\n    def leastInterval(self, tasks, n):\n        # to do: complete code \n        pass\n\nif __name__ == \"__main__\":\n    input_string = input().strip()\n    tasks_string, n_string = input_string.split(\", n = \")\n    tasks = [x for x in tasks_string.replace(\"tasks = [\\\"\", \"\").replace(\"\\\"]\", \"\").split(\"\\\",\\\"\")]\n    n = int(n_string)\n    output = Output()\n    print(output.leastInterval(tasks, n))"
      },
      {
        language: "cpp",
        boilerplate: "#include <iostream>\n#include <queue>\n#include <unordered_map>\n#include <vector>\n#include <string>\n#include <sstream>\n\nclass Output {\npublic:\n    int leastInterval(std::vector<char>& tasks, int n) {\n        // to do: complete this code \n    }\n};\n\nint main() {\n    std::string input;\n    getline(std::cin, input);\n\n    std::string tasksString = input.substr(input.find('[') + 2, input.find(']') - input.find('[') - 3);\n    std::stringstream ss(tasksString);\n    std::vector<char> tasks;\n    std::string temp;\n    while (getline(ss, temp, ',')) {\n        tasks.push_back(temp[2]);\n    }\n\n    int n = std::stoi(input.substr(input.rfind('=') + 2));\n\n    Output output;\n    std::cout << output.leastInterval(tasks, n) << std::endl;\n\n    return 0;\n}"
      }
    ],
    testCases: [
      {
        input: "tasks = [\"A\",\"A\",\"A\",\"B\",\"B\",\"B\"], n = 2",
        output: "8",
      },
      {
        input: "tasks = [\"A\",\"A\",\"A\",\"B\",\"B\",\"B\"], n = 0",
        output: "6",
      },
      {
        input: "tasks = [\"A\",\"A\",\"A\",\"A\",\"A\",\"A\",\"B\",\"C\",\"D\",\"E\",\"F\",\"G\"], n = 2",
        output: "16",
      },
    ],
    difficulty: "hard",
  },
  {
    _id: "64c06d1f9e46bec553c953e9",
    title: "Number of Islands",
    topic: "64b0a7b20fe2987f17160099",
    description: "Given an m x n 2D binary grid grid which represents a map of \'1\'s (land) and \'0\'s (water), return the number of islands.\
    An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.",
    modelDescription: "The numIslands method finds the number of distinct islands in a given 2D grid. Each cell in the grid is either \'1\', representing land, or \'0\', representing water. The algorithm iterates over each cell in the grid; when it encounters a \'1\', it increments a count variable, indicating a new island has been found. To avoid counting the same island more than once, it then calls the clearRestOfLand method, which marks all the connected land cells as visited by turning them into \'0\'. This is done recursively, checking north, south, east, and west directions. The base case for the recursion ensures we don\'t go out of bounds or revisit water cells. The method ultimately returns the count, which represents the total number of distinct islands in the grid.",
    exampleCase: "Input: grid = [\
      [\"1\",\"1\",\"1\",\"1\",\"0\"],\
      [\"1\",\"1\",\"0\",\"1\",\"0\"],\
      [\"1\",\"1\",\"0\",\"0\",\"0\"],\
      [\"0\",\"0\",\"0\",\"0\",\"0\"]\
    ]\
    Output: 1",
    solution: "public int numIslands(char[][] grid) {\n    // The variable 'count' will store the number of islands\n    int count = 0;\n\n    // Iterate over each cell in the grid\n    for (int i = 0; i < grid.length; i++) {\n        for (int j = 0; j < grid[i].length; j++) {\n            // If a cell with '1' is found, it represents the start of an island\n            if (grid[i][j] == '1') {\n                // Increment the count of islands\n                count++;\n                // Clear the rest of the current island to avoid counting it more than once\n                clearRestOfLand(grid, i, j);\n            }\n        }\n    }\n    return count;\n}\n\nprivate void clearRestOfLand(char[][] grid, int i, int j) {\n    // The base case of the recursion: if the current cell is out of the grid's bounds or it's water ('0'), stop the recursion\n    if (i < 0 || j < 0 || i >= grid.length || j >= grid[i].length || grid[i][j] == '0') return;\n\n    // Set the current cell to '0' (water), marking it as visited\n    grid[i][j] = '0';\n\n    // Recursively visit the North, South, East, and West cells\n    clearRestOfLand(grid, i+1, j); // North\n    clearRestOfLand(grid, i-1, j); // South\n    clearRestOfLand(grid, i, j+1); // East\n    clearRestOfLand(grid, i, j-1); // West\n\n    return;\n}",
    hint: "Consider the grid as a graph, where each cell is a node that can be connected to up to four other cells (up, down, left, and right). You can use Depth-First Search (DFS) to explore all connected cells.",
    boilerplateCode: [
      {
        language: "java",
        boilerplate: "import java.util.*;\n\npublic class Output {\n\n    public int numIslands(char[][] grid) {\n        // to do: complete this code \n    }\n\n\n\tpublic static void main(String[] args) {\n\t    Scanner scanner = new Scanner(System.in);\n\n\t    String input = scanner.nextLine();\n\t    input = input.replace(\"grid = \", \"\").replace(\"\\\\\", \"\").replace(\"[[\", \"\").replace(\"]]\", \"\").replace(\"\\n\", \"\").replace(\" \", \"\");\n\t    String[] rowStrings = input.split(\"\\\\],\\\\[\");\n\n\t    char[][] grid = new char[rowStrings.length][];\n\n\t    for (int i = 0; i < rowStrings.length; i++) {\n\t        String[] colStrings = rowStrings[i].split(\",\");\n\t        grid[i] = new char[colStrings.length];\n\n\t        for (int j = 0; j < colStrings.length; j++) {\n\t            grid[i][j] = colStrings[j].replace(\"\\\"\", \"\").charAt(0);\n\t        }\n\t    }\n\n\t    Output output = new Output();\n\t    System.out.println(output.numIslands(grid));\n\t}\n}",
      },
      {
        language: "python3",
        boilerplate: "class Output:\n\n    def numIslands(self, grid):\n        # to do: complete this function \n        pass\n\nif __name__ == \"__main__\":\n    input_str = input().replace(\"grid = \", \"\").replace(\"\\\\\", \"\").replace(\"[[\", \"\").replace(\"]]\", \"\").replace(\"\\n\", \"\").replace(\" \", \"\")\n    row_strings = input_str.split(\"]],[\")\n    grid = []\n    for row_str in row_strings:\n        col_strings = row_str.split(\",\")\n        row = []\n        for col_str in col_strings:\n            row.append(col_str.replace(\"\\\"\", \"\"))\n        grid.append(row)\n    output = Output()\n    print(output.numIslands(grid))"
      },
      {
        language: "cpp",
        boilerplate: "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n\nusing namespace std;\n\nclass Output {\npublic:\n    int numIslands(vector<vector<char>>& grid) {\n        // to do: complete this function \n    }\n};\n\nint main() {\n    string input;\n    getline(cin, input);\n\n    input = input.substr(input.find(\"[[\") + 2, input.find(\"]]\") - 2);\n    istringstream iss(input);\n    string line;\n\n    vector<vector<char>> grid;\n\n    while (getline(iss, line, ']')) {\n        line = line.substr(1, line.size() - 2);\n        istringstream iss2(line);\n        string cell;\n        vector<char> row;\n\n        while (getline(iss2, cell, ',')) {\n            cell = cell.substr(2, 1);\n            row.push_back(cell[0]);\n        }\n\n        grid.push_back(row);\n    }\n\n    Output output;\n    cout << output.numIslands(grid) << endl;\n\n    return 0;\n}\n"
      }
    ],
    testCases: [
      {
        input: "grid = [\
          [\"1\",\"1\",\"1\",\"1\",\"0\"],\
          [\"1\",\"1\",\"0\",\"1\",\"0\"],\
          [\"1\",\"1\",\"0\",\"0\",\"0\"],\
          [\"0\",\"0\",\"0\",\"0\",\"0\"]\
        ]",
        output: "1",
      },
      {
        input: "grid = [\
          [\"1\",\"1\",\"0\",\"0\",\"0\"],\
          [\"1\",\"1\",\"0\",\"0\",\"0\"],\
          [\"0\",\"0\",\"1\",\"0\",\"0\"],\
          [\"0\",\"0\",\"0\",\"1\",\"1\"]\
        ]",
        output: "3",
      },
    ],
    difficulty: "easy",
  },
  {
    _id: "64c08fa0f64ef52dd745e5fb",
    title: "Max Area of Island",
    topic: "64b0a7b20fe2987f17160099",
    description: "You are given an m x n binary matrix grid. An island is a group of 1\'s (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.\
    The area of an island is the number of cells with a value 1 in the island.\
    Return the maximum area of an island in grid. If there is no island, return 0.",
    modelDescription: "The maxAreaOfIsland method calculates the maximum area of an island in a given 2D grid, where each cell is either \'1\', representing land, or \'0\', representing water. The algorithm iterates through each cell in the grid; when it encounters a \'1\', it calls the AreaOfIsland method to calculate the area of the island starting from that cell. The AreaOfIsland method uses recursion to explore the contiguous land cells in all four directions (north, south, east, and west) and accumulates the area count. When a land cell is visited, it is marked as \'0\' to avoid revisiting it. For each new starting cell that is land, the algorithm keeps track of the maximum area encountered thus far. Ultimately, the maxAreaOfIsland method returns the largest area of an island found in the grid.",
    exampleCase: "Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]\
    Output: 6\
    Explanation: The answer is not 11, because the island must be connected 4-directionally.",
    solution: "public int maxAreaOfIsland(int[][] grid) {\n    int max_area = 0; // Initialize the maximum area to be 0\n    // Iterate through each cell in the grid\n    for(int i = 0; i < grid.length; i++) {\n        for(int j = 0; j < grid[0].length; j++) {\n            // If the cell value is 1 (representing land), calculate the area of island starting from this cell\n            if(grid[i][j] == 1) {\n                // Compare and update the maximum area of island found so far\n                max_area = Math.max(max_area, AreaOfIsland(grid, i, j));\n            }\n        }\n    }\n    // Return the maximum area of island found in the entire grid\n    return max_area;\n}\n\npublic int AreaOfIsland(int[][] grid, int i, int j) {\n    // Check if the current cell is within the grid and is a land (value is 1)\n    if( i >= 0 && i < grid.length && j >= 0 && j < grid[0].length && grid[i][j] == 1) {\n        // Set the cell value to 0, marking it as visited\n        grid[i][j] = 0;\n        // Recursively calculate the area of island by visiting top, down, left, and right cells\n        return 1 + AreaOfIsland(grid, i+1, j) + AreaOfIsland(grid, i-1, j) + AreaOfIsland(grid, i, j-1) + AreaOfIsland(grid, i, j+1);\n    }\n    // If the cell is out of grid boundaries or it's a water (value is 0), it does not contribute to the island area\n    return 0;\n}\n",
    hint: "Think of the grid as a graph, where each cell with 1 is a node. Now consider how you would explore this graph if you were to find the largest connected component (island). You might find depth-first search (DFS) or breadth-first search (BFS) approaches useful here.",
    boilerplateCode: [
      {
        language: "java",
        boilerplate: "import java.util.*;\n\npublic class Output {\n\n    public int maxAreaOfIsland(int[][] grid) {\n        // to do: complete code \n    }\n\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String input = scanner.nextLine();\n\n        input = input.replace(\"[[\", \"\").replace(\"]]\", \"\");\n        String[] rowStrings = input.split(\"\\\\],\\\\[\");\n\n        int[][] grid = new int[rowStrings.length][];\n\n        for (int i = 0; i < rowStrings.length; i++) {\n            String[] colStrings = rowStrings[i].split(\",\");\n            grid[i] = new int[colStrings.length];\n\n            for (int j = 0; j < colStrings.length; j++) {\n                grid[i][j] = Integer.parseInt(colStrings[j]);\n            }\n        }\n\n        Output output = new Output();\n        System.out.println(output.maxAreaOfIsland(grid));\n    }\n}\n",
      },
      {
        language: "python3",
        boilerplate: "class Output:\n    def maxAreaOfIsland(self, grid):\n        # complete code \n        pass\n\n\ndef main():\n    input_str = input()\n    input_str = input_str.replace(\"[[\", \"\").replace(\"]]\", \"\")\n    row_strings = input_str.split(\",[\")\n    \n    grid = []\n    for row_str in row_strings:\n        grid_row = list(map(int, row_str.split(',')))\n        grid.append(grid_row)\n\n    output = Output()\n    print(output.maxAreaOfIsland(grid))\n\nif __name__ == \"__main__\":\n    main()\n"
      },
      {
        language: "cpp",
        boilerplate: "#include <iostream>\n#include <vector>\n#include <sstream>\n#include <string>\n\nclass Output {\npublic:\n    int maxAreaOfIsland(std::vector<std::vector<int>>& grid) {\n        // to do: complete code\n    }\n};\n\nint main() {\n    std::string input;\n    getline(std::cin, input);\n    input = input.substr(2, input.size() - 4);\n    \n    std::stringstream ss(input);\n    std::string row;\n    std::vector<std::vector<int>> grid;\n    \n    while (getline(ss, row, ']')) {\n        row = row.substr(2, row.size() - 1);\n        std::stringstream ssRow(row);\n        std::string cell;\n        std::vector<int> gridRow;\n        while (getline(ssRow, cell, ',')) {\n            gridRow.push_back(std::stoi(cell));\n        }\n        grid.push_back(gridRow);\n    }\n    \n    Output output;\n    std::cout << output.maxAreaOfIsland(grid);\n}\n"
      }
    ],
    testCases: [
      {
        input: "[[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]",
        output: "6",
      },
      {
        input: "[[0,0,0,0,0,0,0,0]]",
        output: "0",
      },
    ],
    difficulty: "medium",
  },
  {
    _id: "64c092c118bf1ff73b6f589c",
    title: "Course Schedule",
    topic: "64b0a7b20fe2987f17160099",
    description: "There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.\
    For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.\
    Return true if you can finish all courses. Otherwise, return false.",
    modelDescription: "The canFinish method determines if it is possible for a student to finish all courses given a specific number of courses to take (numCourses) and a list of prerequisite pairs (prerequisites). It effectively checks if a cycle exists in the directed graph representing course prerequisites. The algorithm uses an adjacency matrix matrix to represent the directed graph where an edge i->j means j is a prerequisite for i. It also maintains an indegree array to keep track of the number of prerequisites (incoming edges) for each course. Initially, courses with no prerequisites (in-degree of 0) are added to a queue. The algorithm then performs a Breadth-First Search (BFS), dequeuing a course, marking it as taken (by incrementing count), and reducing the in-degree of its dependent courses. If the in-degree of a dependent course becomes 0, it is enqueued. In the end, if count equals numCourses, all courses can be taken (i.e., the graph has no cycles), and the method returns true. Otherwise, it returns false, indicating that there are some courses that the student cannot finish due to cyclic prerequisites.",
    exampleCase: "Input: numCourses = 2, prerequisites = [[1,0]]\
    Output: true\
    Explanation: There are a total of 2 courses to take. \
    To take course 1 you should have finished course 0. So it is possible.",
    solution: "\npublic boolean canFinish(int numCourses, int[][] prerequisites) {\n    // Create adjacency matrix to represent directed graph where an edge i->j means j is prerequisite for i\n    int[][] matrix = new int[numCourses][numCourses];\n\n    // This array will hold the in-degree (number of incoming edges) for each course\n    int[] indegree = new int[numCourses];\n\n    // Loop through prerequisites, update the adjacency matrix and in-degree array\n    for (int i=0; i<prerequisites.length; i++) {\n        int ready = prerequisites[i][0]; // course that needs a prerequisite\n        int pre = prerequisites[i][1]; // prerequisite course\n        if (matrix[pre][ready] == 0)\n            indegree[ready]++; // increase in-degree if it's not a duplicate case\n        matrix[pre][ready] = 1; // set matrix value to 1 indicating an edge from pre to ready\n    }\n\n    // Count of courses that we can take\n    int count = 0;\n\n    // Queue to perform BFS\n    Queue<Integer> queue = new LinkedList<Integer>();\n\n    // Add courses with in-degree 0 (no prerequisites) to the queue\n    for (int i=0; i<indegree.length; i++) {\n        if (indegree[i] == 0) queue.offer(i);\n    }\n\n    // BFS: remove courses from queue and decrease in-degree of its dependent courses\n    while (!queue.isEmpty()) {\n        int course = queue.poll(); // take the course\n        count++; // increase count since we have now taken this course\n        for (int i=0; i<numCourses; i++) {\n            // if course is a prerequisite for i\n            if (matrix[course][i] != 0) {\n                if (--indegree[i] == 0) // if no more prerequisites for i\n                    queue.offer(i); // add it to the queue\n            }\n        }\n    }\n    \n    // If count is same as numCourses, it means we can take all courses\n    return count == numCourses;\n}\n",
    hint: "Think about how you can represent the problem as a directed graph, where an edge represents a course that is prerequisite of another.",
    boilerplateCode: [
      {
        language: "java",
        boilerplate: "import java.util.Arrays;\nimport java.util.LinkedList;\nimport java.util.Queue;\nimport java.util.Scanner;\n\npublic class Output {\n\n    public boolean canFinish(int numCourses, int[][] prerequisites) {\n        // to do: complete this code\n    }\n\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n\n        String input = scanner.nextLine();\n\n        String[] parts = input.split(\", \");\n        int numCourses = Integer.parseInt(parts[0].split(\" = \")[1]);\n\n        String prerequisitesPart = parts[1].split(\" = \")[1];\n        prerequisitesPart = prerequisitesPart.replace(\"[[\", \"\").replace(\"]]\", \"\");\n        String[] pairs = prerequisitesPart.split(\"\\\\],\\\\[\");\n\n        int[][] prerequisites = new int[pairs.length][2];\n        for (int i = 0; i < pairs.length; i++) {\n            String[] pair = pairs[i].split(\",\");\n            prerequisites[i][0] = Integer.parseInt(pair[0]);\n            prerequisites[i][1] = Integer.parseInt(pair[1]);\n        }\n\n        Output output = new Output();\n        boolean canFinish = output.canFinish(numCourses, prerequisites);\n        System.out.println(canFinish);\n    }\n}",
      },
      {
        language: "python3",
        boilerplate: "from collections import deque\n\ndef can_finish(numCourses, prerequisites):\n    # to do: complete this code\n    pass\n\n\nif __name__ == \"__main__\":\n    # Read the input string\n    input_string = input()\n\n    # Extract numCourses and prerequisites from the input string\n    parts = input_string.split(\", \")\n    numCourses = int(parts[0].split(\" = \")[1])\n\n    prerequisitesPart = parts[1].split(\" = \")[1]\n    prerequisitesPart = prerequisitesPart.replace(\"[[\", \"\").replace(\"]]\", \"\")\n    pairs = prerequisitesPart.split(\"],[\")\n\n    prerequisites = [(int(pair.split(\",\")[0]), int(pair.split(\",\")[1])) for pair in pairs]\n\n    # Call the canFinish function and print the result\n    result = can_finish(numCourses, prerequisites)\n    print(str(result).lower())\n"
      },
      {
        language: "cpp",
        boilerplate: "#include <vector>\n#include <deque>\n#include <sstream>\n#include <iostream>\n\nbool canFinish(int numCourses, std::vector<std::pair<int, int>>& prerequisites) {\n    // to do: complete this function\n}\n\nint main() {\n    std::string input_string;\n    std::getline(std::cin, input_string);\n\n    std::stringstream ss(input_string);\n    std::string temp;\n    std::getline(ss, temp, '=');\n    int numCourses;\n    ss >> numCourses;\n\n    std::getline(ss, temp, '[');\n    std::vector<std::pair<int, int>> prerequisites;\n    while (std::getline(ss, temp, ']')) {\n        std::stringstream pairStream(temp.substr(temp.find('[') + 1));\n        int first, second;\n        char comma;\n        pairStream >> first >> comma >> second;\n        prerequisites.push_back({first, second});\n        if (ss.peek() == ',') ss.ignore();\n    }\n\n    std::cout << (canFinish(numCourses, prerequisites) ? \"true\" : \"false\") << std::endl;\n\n    return 0;\n}\n"
      }
    ],
    testCases: [
      {
        input: "numCourses = 2, prerequisites = [[1,0]]",
        output: "true",
      },
      {
        input: "numCourses = 2, prerequisites = [[1,0],[0,1]]",
        output: "false",
      },
    ],
    difficulty: "hard",
  },
  {
    _id: "64c0bb5a1fc75b176268a7bb",
    title: "Climbing Stairs",
    topic: "64b0a7b6a28359d1e6367bff",
    description: "You are climbing a staircase. It takes n steps to reach the top.\
    Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
    modelDescription: "The climbStairs method calculates the number of distinct ways to climb a staircase with n steps, where at each step one can either take 1 step or 2 steps. This problem essentially asks for the n-th Fibonacci number since the number of ways to reach step n is the sum of ways to reach step n-1 and step n-2. The method uses two integer variables a and b, which are initialized to 1. These variables represent the number of distinct ways to reach the current step and the previous step, respectively. The loop iterates n times. In each iteration, the b variable is updated to be the sum of the old values of a and b, representing the number of ways to reach the next step. Then, a is updated to the old value of b, which is done through the expression (b += a) - a. At the end of the loop, a contains the number of distinct ways to climb n stairs, which is returned by the method. This solution avoids the need for an array and achieves the result in constant space and linear time.",
    exampleCase: "Input: n = 3\
    Output: 3\
    Explanation: There are three ways to climb to the top.",
    solution: "public int climbStairs(int n) {\n    // Initialize two variables `a` and `b` both to 1. These represent the number of distinct ways\n    // to reach the current and the previous step respectively.\n    int a = 1, b = 1;\n\n    // Loop until `n` becomes 0. During each iteration, decrement `n` by 1.\n    while (n-- > 0)\n        // Update the number of ways to reach the current step (`a`). This is done by\n        // first adding the number of ways to reach the current step (`a`) and the previous\n        // step (`b`) to `b`, and then subtracting the old value of `a` from the new `b`.\n        a = (b += a) - a;\n    // At the end of the loop, `a` contains the number of distinct ways to climb `n` stairs.\n    return a;\n}",
    hint: "Think about how the number of ways to reach the nth stair can be formed from the sum of the ways to reach the (n-1)th and (n-2)th stair, similar to the Fibonacci sequence.",
    boilerplateCode: [
      {
        language: "java",
        boilerplate: "import java.util.Scanner;\n\npublic class Output {\n\n    public int climbStairs(int n) {\n        // to do: complete this code \n    }\n\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String input = scanner.next();\n        int stairs = Integer.parseInt(input);\n        Output obj = new Output();\n        int result = obj.climbStairs(stairs);\n        System.out.println(result);\n        scanner.close();\n    }\n}",
      },
      {
        language: "python3",
        boilerplate: "class Output:\n    def climbStairs(self, n):\n        # complete this code \n        pass\n\nif __name__ == \"__main__\":\n    stairs = int(input())\n    obj = Output()\n    result = obj.climbStairs(stairs)\n    print(result)"
      },
      {
        language: "cpp",
        boilerplate: "#include <iostream>\n#include <string>\n\nclass Output {\npublic:\n    int climbStairs(int n) {\n        // to do: complete this code \n    }\n};\n\nint main() {\n    std::string input;\n    std::cin >> input;\n\n    int stairs = std::stoi(input);\n\n    Output obj;\n\n    int result = obj.climbStairs(stairs);\n\n    std::cout << result << std::endl;\n\n    return 0;\n}"
      }
    ],
    testCases: [
      {
        input: "2",
        output: "2",
      },
      {
        input: "3",
        output: "3",
      },
    ],
    difficulty: "easy",
  },
  {
    _id: "64be40b82be5025c53df612a",
    title: "Coin Change",
    topic: "64b0a7b6a28359d1e6367bff",
    description: "You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.",
    modelDescription: "The coinChange method calculates the minimum number of coins needed to make up a given amount using the coin denominations specified in the array coins. The method uses dynamic programming to build up a solution. The dp array is initialized with a value max, which is set to amount + 1, a value just larger than the maximum possible amount. dp[i] will eventually represent the minimum number of coins needed to make up the amount i. Initially, dp[0] is set to 0, as no coins are needed to make up an amount of 0. The method uses two nested loops: the outer loop iterates through amounts from 1 to the target amount, and the inner loop iterates through all the given coin denominations. For each coin denomination that is less than or equal to the current amount i, the method updates dp[i] by checking if using this coin denomination yields a smaller number of coins than the current value of dp[i]. It does this by adding 1 to dp[i - coins[j]] and comparing this sum to the current value of dp[i], updating dp[i] with the smaller of the two values. At the end of the process, if dp[amount] is still greater than amount, it means that it is not possible to make up amount with the given coin denominations, and the method returns -1. Otherwise, dp[amount] gives the minimum number of coins needed, and this value is returned.",
    exampleCase: "Input: coins = [1, 2, 5], amount = 11\nOutput: 3\nExplanation: 11 = 5 + 5 + 1",
    solution: "// Java Solution\npublic int coinChange(int[] coins, int amount) {\n    int max = amount + 1;\n    int[] dp = new int[amount + 1];\n    Arrays.fill(dp, max);\n    dp[0] = 0;\n    for (int i = 1; i <= amount; i++) {\n        for (int j = 0; j < coins.length; j++) {\n            if (coins[j] <= i) {\n                dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);\n            }\n        }\n    }\n    return dp[amount] > amount ? -1 : dp[amount];\n}",
    hint: "Solve smaller sub-problems first and use the solutions to construct solution to larger sub-problems. This property is known as optimal substructure.",
    boilerplateCode: [
      {
        "language": "java",
        "boilerplate": "import java.util.*;\n\npublic class Output {\n    public int coinChange(int[] coins, int amount) {\n        // Complete the code here\n        return -1; // placeholder return statement\n    }\n    \n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int amount = scanner.nextInt();\n        int n = scanner.nextInt();\n        int[] coins = new int[n];\n        for(int i=0; i<n; i++) {\n            coins[i] = scanner.nextInt();\n        }\n        Output output = new Output();\n        int minCoins = output.coinChange(coins, amount);\n        System.out.println(minCoins);\n    }\n}"
      },
      {
        "language": "python3",
        "boilerplate": "\nfrom typing import List\n\nclass Output:\n    def coinChange(self, coins: List[int], amount: int) -> int:\n        pass\n\nif __name__ == '__main__':\n    amount = int(input())\n    n = int(input()) # size of the coin array\n    coins = list(map(int, input().split()))\n    output = Output()\n    min_coins = output.coinChange(coins, amount)\n    print(min_coins)\n"
      },
      {
        "language": "cpp",
        "boilerplate": "\n#include <iostream>\n#include <vector>\n#include <algorithm>\n#include <climits>\n\nusing namespace std;\n\nclass Output {\npublic:\n    int coinChange(vector<int>& coins, int amount) {\n        // Complete this code\n        return -1;\n    }\n};\n\nint main() {\n    int amount, n;\n    cin >> amount >> n;\n    vector<int> coins(n);\n    for(int i=0; i<n; i++) {\n        cin >> coins[i];\n    }\n    Output output;\n    int minCoins = output.coinChange(coins, amount);\n    cout << minCoins << endl;\n    return 0;\n}"
      }
    ],
    testCases: [
      {
        "input": "11\n4\n3 1 2 5\n",
        "output": "3",
      },
      {
        "input": "23\n3\n1 5 10\n",
        "output": "5",
      },
    ],
    difficulty: "medium",
  },
  {
    _id: "64c0bdbc9bb6840492e317cc",
    title: "Edit Distance",
    topic: "64b0a7b6a28359d1e6367bff",
    description: "Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.\
    You have the following three operations permitted on a word:\
    Insert a character\
    Delete a character\
    Replace a character",
    modelDescription: "The minDistance method calculates the minimum number of operations required to convert one string word1 into another string word2. The allowed operations are insertions, deletions, and substitutions, each counting as one operation. The method employs dynamic programming, utilizing a 2D array cost, where cost[i][j] represents the minimum number of operations required to convert the first i characters of word1 into the first j characters of word2. The first row of the cost matrix is initialized to represent transformations of word1 into an empty string, requiring i deletions, and the first column to represent transformations of an empty string into word2, requiring j insertions. For each pair of characters in word1 and word2, the matrix is populated based on comparing the characters at the current positions in both words: if they are equal, the cost is the same as that for the previous positions (the diagonal), otherwise, it is one plus the minimum of the costs for replacing, inserting, or deleting a character. In the end, cost[m][n], where m and n are the lengths of word1 and word2 respectively, contains the minimum number of operations required to transform word1 into word2.",
    exampleCase: "Input: word1 = \"horse\", word2 = \"ros\"\
    Output: 3\
    Explanation: \
    horse -> rorse (replace \'h\' with \'r\')\
    rorse -> rose (remove \'r\')\
    rose -> ros (remove \'e\')",
    solution: "public int minDistance(String word1, String word2) {\n    // Get lengths of both words\n    int m = word1.length();\n    int n = word2.length();\n\n    // Create a cost matrix of size m+1 x n+1, with m and n being the lengths of word1 and word2 respectively\n    int[][] cost = new int[m + 1][n + 1];\n\n    // Initialize first row and column of the cost matrix to represent transformations to empty string\n    for(int i = 0; i <= m; i++)\n        cost[i][0] = i;\n    for(int i = 1; i <= n; i++)\n        cost[0][i] = i;\n\n    // Fill the rest of the cost matrix\n    for(int i = 0; i < m; i++) {\n        for(int j = 0; j < n; j++) {\n            // If characters at current position of both words are same, cost is same as diagonal cell value\n            if(word1.charAt(i) == word2.charAt(j))\n                cost[i + 1][j + 1] = cost[i][j];\n            else {\n                // Else, cost is 1 plus minimum of costs of insertion, removal and replacement operations\n                int a = cost[i][j]; // replacement\n                int b = cost[i][j + 1]; // insertion\n                int c = cost[i + 1][j]; // removal\n                cost[i + 1][j + 1] = a < b ? (a < c ? a : c) : (b < c ? b : c);\n                cost[i + 1][j + 1]++;\n            }\n        }\n    }\n\n    // The last cell of the matrix holds the answer - minimum number of operations required to transform word1 to word2\n    return cost[m][n];\n}",
    hint: "Think about a dynamic programming solution where the subproblem is the minimum number of operations to convert prefixes of the two words.",
    boilerplateCode: [
      {
        language: "java",
        boilerplate: "import java.util.Scanner;\n\npublic class Output {\n\n    public int minDistance(String word1, String word2) {\n        // to do: complete this code \n    }\n\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        String input = scanner.nextLine();\n        String[] words = input.split(\", \");\n        Output obj = new Output();\n        int result = obj.minDistance(words[0], words[1]);\n        System.out.println(result);\n        scanner.close();\n    }\n}\n",
      },
      {
        language: "python3",
        boilerplate: "class Output:\n    def minDistance(self, word1, word2):\n        # complete this code \n        pass\n\n\nif __name__ == \"__main__\":\n    input_str = input()\n    words = input_str.split(\", \")\n    obj = Output()\n    result = obj.minDistance(words[0], words[1])\n    print(result)\n"
      },
      {
        language: "cpp",
        boilerplate: "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n\nclass Output {\npublic:\n    int minDistance(std::string word1, std::string word2) {\n        // complete this code \n    }\n};\n\nint main() {\n    std::string input;\n    std::getline(std::cin, input);\n\n    std::string word1, word2;\n    std::stringstream ss(input);\n    std::getline(ss, word1, ',');\n    std::getline(ss, word2);\n\n    Output obj;\n    int result = obj.minDistance(word1, word2);\n    std::cout << result << std::endl;\n\n    return 0;\n}\n"
      }
    ],
    testCases: [
      {
        input: "horse, ros",
        output: "3",
      },
      {
        input: "intention, execution",
        output: "5",
      },
    ],
    difficulty: "hard",
  }
];

export async function seedProblems() {
  await Problem.deleteMany({});
  console.log("Old problems cleared");
  await Problem.insertMany(problems);
  console.log("Problem data seeding completed");
}
