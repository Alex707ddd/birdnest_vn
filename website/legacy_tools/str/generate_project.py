import os

def create_directory(path):
    if not os.path.exists(path):
        os.makedirs(path)
        print(f"Created directory: {path}")
    else:
        print(f"Directory already exists: {path}")

def create_file(path, content=""):
    with open(path, "w", encoding="utf-8") as f:
        f.write(content if content else "")
    print(f"Created file: {path}")

def main():
    base_dir = r"f:\ZeRo總項目清單 15-10-2024\(生意) - 越南\(生意) - 燕窩\result"
    
    # Define directory structure
    dirs = [
        "Data/media/home/hero",
        "Data/media/home/trust",
        "Data/media/product/detail",
        "Data/media/process",
        "Data/media/lifestyle",
        "Data/media/thumbs",
        "locales/tc",
        "locales/sc",
        "locales/en",
        "locales/vn",
        "src/app",
        "src/components",
        "src/styles",
        "public/images"
    ]

    # Create directories inside result folder
    for d in dirs:
        full_path = os.path.join(base_dir, d)
        create_directory(full_path)

    # Create placeholder files
    files = {
        "locales/tc/common.json": "{\n  \"brandName\": \"燕窩品牌\",\n  \"slogan\": \"傳統精美，專業可信\"\n}",
        "locales/sc/common.json": "{\n  \"brandName\": \"燕窝品牌\",\n  \"slogan\": \"传统精美，专业可信\"\n}",
        "locales/en/common.json": "{\n  \"brandName\": \"Bird's Nest Brand\",\n  \"slogan\": \"Traditional Exquisite, Professional Trust\"\n}",
        "locales/vn/common.json": "{\n  \"brandName\": \"Thương hiệu Tổ Yến\",\n  \"slogan\": \"Truyền thống Tinh tế, Chuyên nghiệp Tin cậy\"\n}",
        "src/app/page.js": "// Home Page\nimport Layout from '../components/Layout';\n\nexport default function Home() {\n  return (\n    <Layout>\n      <h1>Welcome to Bird's Nest</h1>\n    </Layout>\n  );\n}",
        "src/components/Layout.js": "export default function Layout({ children }) {\n  return (\n    <div className=\"container\">\n      <header>Header with Language Switcher</header>\n      <main>{children}</main>\n      <footer>Footer content</footer>\n    </div>\n  );\n}",
        "src/styles/globals.css": "/* Global Styles */\nbody {\n  background-color: #F5F5F0;\n  color: #4A3B32;\n  font-family: 'Noto Sans TC', sans-serif;\n}\n\nh1, h2, h3 {\n  font-family: 'Noto Serif TC', serif;\n  color: #C5A065;\n}"
    }

    for path, content in files.items():
        create_file(os.path.join(base_dir, path), content)

if __name__ == "__main__":
    main()
