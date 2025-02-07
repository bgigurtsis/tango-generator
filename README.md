# Movement Generator Documentation

This web app generates movement combinations based on different categories like Tanztheater, Tango, Theatre Objectives, etc.

## How to Make Changes

### Editing the Configuration File

1. Go to your GitHub repository
2. Find and click on `config.json`
3. Click the pencil icon (Edit this file) in the top-right corner
4. Make your changes (see below for specific changes)
5. At the bottom, write a brief description of your changes (e.g., "Updated dance moves")
6. Click "Commit changes"

The site will automatically update within a few minutes.

### What You Can Change

#### Adding/Removing Movement Items
In `config.json`, find the category you want to edit. Under `"items"`, add or remove entries between the square brackets. The last item in the list should not have a comma after it or it won't work. Each item should be in quotes and separated by commas:

```json
"items": [
    "Full Contraction",
    "High Release",
    "Your New Move"   // Add new moves like this
]
```

#### Changing Category Names
Find the category and change its `"name"` value:
```json
"name": "Your New Category Name"
```

#### Changing Colors
Each category has a `"color"` property. You can use these colors:
- `bg-blue-500`: Blue
- `bg-green-500`: Green
- `bg-red-500`: Red
- `bg-purple-500`: Purple
- `bg-orange-500`: Orange
- `bg-teal-500`: Teal
- `bg-pink-500`: Pink
- `bg-indigo-500`: Indigo
- `bg-cyan-500`: Cyan 
- `bg-amber-500`: Amber 

#### Changing Category Order
To reorder categories, cut and paste entire category blocks within the `categories` array. Categories appear in the order they're listed in the file.

### Important Tips

1. Always keep the JSON format intact:
   - Keep all quotes `""`
   - Keep all commas between items
   - Keep all brackets `[]` and braces `{}`
   - Don't add extra commas after the last item in a list

2. If the site breaks after your changes:
   - Go back to the config.json edit page
   - Click "History" in the top right
   - Click the "..." next to your last working version
   - Select "Restore this version"

## Need Help?
If you run into issues, you can always undo your changes using the History feature in GitHub, or reach out to me for assistance.
