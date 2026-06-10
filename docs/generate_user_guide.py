from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (
    Image,
    KeepTogether,
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "docs" / "TRADERS_HUB_User_Guide.pdf"
LOGO = ROOT / "app" / "assets" / "logo.png"
LOGIN = ROOT / "docs" / "images" / "login-screen.png"

PAGE = colors.HexColor("#101210")
PANEL = colors.HexColor("#1b1e1b")
FIELD = colors.HexColor("#242824")
LINE = colors.HexColor("#394039")
INK = colors.HexColor("#f6f8f4")
MUTED = colors.HexColor("#b3bbb1")
LIME = colors.HexColor("#b9ff57")
RED = colors.HexColor("#ff7a7a")

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name="CoverTitle", parent=styles["Title"], fontName="Helvetica-Bold", fontSize=31, leading=34, textColor=INK, alignment=TA_CENTER, spaceAfter=7))
styles.add(ParagraphStyle(name="CoverSub", parent=styles["BodyText"], fontName="Helvetica", fontSize=12, leading=18, textColor=MUTED, alignment=TA_CENTER))
styles.add(ParagraphStyle(name="H1X", parent=styles["Heading1"], fontName="Helvetica-Bold", fontSize=23, leading=27, textColor=INK, spaceBefore=3, spaceAfter=11))
styles.add(ParagraphStyle(name="H2X", parent=styles["Heading2"], fontName="Helvetica-Bold", fontSize=14, leading=18, textColor=LIME, spaceBefore=10, spaceAfter=6))
styles.add(ParagraphStyle(name="BodyX", parent=styles["BodyText"], fontName="Helvetica", fontSize=9.5, leading=14.5, textColor=MUTED, spaceAfter=7))
styles.add(ParagraphStyle(name="BodyWhite", parent=styles["BodyX"], textColor=INK))
styles.add(ParagraphStyle(name="SmallX", parent=styles["BodyX"], fontSize=8, leading=11, textColor=MUTED))
styles.add(ParagraphStyle(name="CardTitle", parent=styles["BodyX"], fontName="Helvetica-Bold", fontSize=10.5, leading=13, textColor=INK, spaceAfter=3))
styles.add(ParagraphStyle(name="StepNum", parent=styles["BodyX"], fontName="Helvetica-Bold", fontSize=14, leading=16, textColor=colors.HexColor("#101210"), alignment=TA_CENTER))
styles.add(ParagraphStyle(name="FooterX", parent=styles["SmallX"], alignment=TA_CENTER, textColor=colors.HexColor("#7f887d")))


def p(text, style="BodyX"):
    return Paragraph(text, styles[style])


def card(title, body):
    content = [p(title, "CardTitle"), p(body, "BodyX")]
    table = Table([[content]], colWidths=[168 * mm])
    table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), PANEL),
        ("BOX", (0, 0), (-1, -1), 0.7, LINE),
        ("LEFTPADDING", (0, 0), (-1, -1), 10),
        ("RIGHTPADDING", (0, 0), (-1, -1), 10),
        ("TOPPADDING", (0, 0), (-1, -1), 9),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
    ]))
    return KeepTogether(table)


def step(number, title, body):
    bubble = Table([[p(str(number), "StepNum")]], colWidths=[10 * mm], rowHeights=[10 * mm])
    bubble.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), LIME),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("BOX", (0, 0), (-1, -1), 0, LIME),
    ]))
    content = [p(title, "CardTitle"), p(body, "BodyX")]
    row = Table([[bubble, content]], colWidths=[14 * mm, 154 * mm])
    row.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 5),
        ("TOPPADDING", (0, 0), (-1, -1), 5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
    ]))
    return KeepTogether(row)


def feature_grid(items):
    rows = []
    for index in range(0, len(items), 2):
        pair = items[index:index + 2]
        cells = []
        for title, body in pair:
            cells.append([p(title, "CardTitle"), p(body, "SmallX")])
        if len(cells) == 1:
            cells.append("")
        rows.append(cells)
    table = Table(rows, colWidths=[82 * mm, 82 * mm], hAlign="LEFT")
    table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), PANEL),
        ("BOX", (0, 0), (-1, -1), 0.7, LINE),
        ("INNERGRID", (0, 0), (-1, -1), 0.5, LINE),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 9),
        ("RIGHTPADDING", (0, 0), (-1, -1), 9),
        ("TOPPADDING", (0, 0), (-1, -1), 8),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
    ]))
    return table


def footer(canvas, doc):
    canvas.saveState()
    canvas.setFillColor(PAGE)
    canvas.rect(0, 0, A4[0], A4[1], fill=1, stroke=0)
    canvas.setStrokeColor(LINE)
    canvas.line(20 * mm, 13 * mm, 190 * mm, 13 * mm)
    canvas.setFillColor(colors.HexColor("#7f887d"))
    canvas.setFont("Helvetica", 7.5)
    canvas.drawString(20 * mm, 8 * mm, "TRADERS HUB · User Guide")
    canvas.drawRightString(190 * mm, 8 * mm, str(doc.page))
    canvas.restoreState()


story = []
story += [Spacer(1, 20 * mm), Image(str(LOGO), width=54 * mm, height=54 * mm), Spacer(1, 10 * mm)]
story += [p("TRADERS HUB", "CoverTitle"), p("User Guide", "CoverTitle")]
story += [Spacer(1, 5 * mm), p("Plan, record, review, and improve your trading from one connected workspace.", "CoverSub")]
story += [Spacer(1, 18 * mm)]
story += [card("What you can do", "Track trades, monitor account performance, follow trading rules, review each week, calculate position size, check economic events, and build knowledge through interactive training.")]
story += [Spacer(1, 8 * mm), p("Updated June 2026", "FooterX"), PageBreak()]

story += [p("Getting Started", "H1X")]
story += [p("Access to TRADERS HUB is provided using a personal passcode. Your passcode identifies your account, loads your saved configuration and trades, and keeps your information separate from other users.", "BodyWhite")]
if LOGIN.exists():
    story += [Spacer(1, 4 * mm), Image(str(LOGIN), width=160 * mm, height=90 * mm), Spacer(1, 5 * mm)]
story += [
    step(1, "Sign in", "Open TRADERS HUB, enter the passcode provided to you, and select <b>Enter</b>. Trial users will see a banner showing when their access expires."),
    step(2, "Complete your setup", "If this is your first visit, the setup wizard opens automatically. It guides you through market types, symbols, sessions, accounts, strategies, and optional rules."),
    step(3, "Start from the dashboard", "After setup, the dashboard gives you a quick view of recent performance, today's events, training progress, and weekly-review status."),
]
story += [p("Your setup is saved to your account. Use <b>Configure</b> in the Journal whenever you need to change it.", "BodyX"), PageBreak()]

story += [p("Setting Up Your Workspace", "H1X")]
story += [p("The setup wizard keeps the first configuration manageable by presenting one decision at a time. Rules are optional and can be skipped.", "BodyWhite")]
story += [feature_grid([
    ("Market type(s)", "Choose CFD, Futures, or both. This controls whether trades use lots, contracts, or either."),
    ("Symbol(s)", "Add the instruments you trade. CFD and futures symbols are kept separate when both market types are enabled."),
    ("Session(s)", "Choose whether sessions are relevant to you. Selected sessions appear in the trade form, with N/A available for trades outside a specific session."),
    ("Account(s)", "Add regular or prop accounts and their starting balances. Prop accounts can include drawdown limits and a completion timeframe."),
    ("Strategies", "Add the setup or strategy names you want available when recording trades."),
    ("Rules", "Optionally add checklist items, automated limits, and days you do not trade. The app warns you before a rule is breached."),
])]
story += [p("Prop accounts", "H2X"), p("For a prop account, select daily and maximum drawdown percentages. TRADERS HUB calculates the monetary limits from the starting balance and shows usage and remaining allowance on the account card.", "BodyX")]
story += [p("Rule warnings", "H2X"), p("When a configured stop rule or prop drawdown limit has already been reached, a warning appears before the Add Trade form opens. You can review the warning before deciding whether to continue.", "BodyX"), PageBreak()]

story += [p("Dashboard", "H1X")]
story += [p("The Dashboard is the first view after login. It is designed for a quick check before moving into a detailed workflow.", "BodyWhite")]
story += [feature_grid([
    ("Trading overview", "See this week's trades, wins, losses, and overall profit or loss."),
    ("News and events", "View today's scheduled economic events and open the news drawer for the full week."),
    ("Training progress", "See your current progress and continue the next available lesson."),
    ("Weekly review", "See whether this week's review is complete and open it from the Journal."),
    ("Setup reminder", "If your Journal has not been configured, the Dashboard clearly prompts you to finish setup."),
    ("Navigation", "Move between Dashboard, Journal, Calculator, and Training from the fixed header navigation."),
])]
story += [p("Economic event times are stored centrally but displayed in your local timezone.", "BodyX"), PageBreak()]

story += [p("Recording And Managing Trades", "H1X")]
story += [
    step(1, "Open the Journal", "Select <b>Journal</b> from the header, then choose <b>Add Trade</b>. The button remains unavailable until setup is complete."),
    step(2, "Add the essentials", "Choose the date, symbol, session, account, strategy, market type, size, result, and amount. Size is displayed as lots or contracts based on the market type."),
    step(3, "Add price details", "Open Price Details to record direction, entry, and exit. When all values are available, the app calculates points gained or lost."),
    step(4, "Reflect on execution", "Use Discipline to record positive execution and mistakes. Personal checklist rules can also be marked for each trade."),
    step(5, "Save and review", "Save the trade. It appears in the table and updates all relevant dashboard analytics."),
]
story += [p("The trade table supports filters for account, symbol, session, strategy, and market type. Click a trade row to see its complete details, including full notes, discipline selections, checklist results, and warnings.", "BodyX")]
story += [p("Existing trades can be edited or removed. CSV export remains available when you need a portable copy of journal data.", "BodyX"), PageBreak()]

story += [p("Journal Analytics", "H1X")]
story += [feature_grid([
    ("Overview", "Total trades, wins, losses, size, and profit/loss. When both market types are used, lot and contract totals remain separate."),
    ("Account balances", "Starting balance, current balance, profit/loss, trades, and win rate for each account."),
    ("Equity curve", "A visual view of cumulative performance over time."),
    ("Analytics", "Performance metrics and discipline insights, including clean-trade rate and behavioural patterns."),
    ("Weekly / monthly", "Review daily and weekly totals or switch to a month view with weekly totals."),
    ("Strategy breakdown", "Compare results across the strategies you configured."),
])]
story += [p("Use the account selector to filter the complete analytics area to one account. This is useful when comparing regular and prop accounts or reviewing separate trading approaches.", "BodyX")]
story += [p("Weekly Review", "H2X"), p("The Weekly Review drawer brings together the week's key statistics and gives you full-width areas to record what went well, what needs improvement, and your focus for next week. Reviews are saved to your account.", "BodyX"), PageBreak()]

story += [p("News And Economic Events", "H1X")]
story += [p("The News & Alerts button opens a slide-out drawer containing scheduled economic events. Events are grouped by day so busy calendar days remain easy to scan.", "BodyWhite")]
story += [feature_grid([
    ("Today", "Focus on events scheduled for the current local day."),
    ("This Week", "Review the full week's upcoming events."),
    ("Local times", "Every event time is converted automatically to the timezone of the device you are using."),
    ("Impact and currency", "Each event identifies its related currency and expected impact."),
])]
story += [card("Trading reminder", "Economic events can increase volatility and uncertainty. Use the calendar as planning context rather than as a prediction of market direction.")]
story += [PageBreak()]

story += [p("Position Size Calculator", "H1X")]
story += [p("The calculator helps translate a planned monetary risk into a CFD lot size or futures contract quantity.", "BodyWhite")]
story += [
    step(1, "Choose the position type", "Select CFD lots or futures contracts."),
    step(2, "Enter account size", "The calculator requires an account size before producing a result."),
    step(3, "Choose risk method", "Use a percentage of the account or a fixed monetary amount."),
    step(4, "Enter trade values", "Add stop loss in points and the value per point for one lot or one contract."),
    step(5, "Review the result", "The calculator shows the rounded position size, actual risk after rounding, value per point, and risk percentage."),
]
story += [card("Important", "The value per point depends on the instrument and broker specification. Confirm it with your broker or trading platform before relying on the calculation.")]
story += [PageBreak()]

story += [p("Training Academy", "H1X")]
story += [p("Training is organised into independent learning paths. Progress is saved to your account, and each module combines concise lessons, clear diagrams, questions, and explanations.", "BodyWhite")]
story += [feature_grid([
    ("Candlestick foundations", "Start with candle anatomy, open/high/low/close, reading candles, common patterns, context, and responsible application."),
    ("Fair Value Gaps", "Learn how bullish and bearish FVGs form, mitigation, context, confirmation, and risk planning."),
    ("Inverse FVGs", "Understand invalidation, role reversal, bullish and bearish IFVGs, and how to distinguish inversion from mitigation."),
    ("Knowledge checks", "Questions reinforce each concept and explain why the correct answer is appropriate."),
])]
story += [p("You can complete the learning paths independently. Completing a chapter returns you to the training overview so you can select the next module or review earlier material.", "BodyX"), PageBreak()]

story += [p("Account And Access", "H1X")]
story += [feature_grid([
    ("User menu", "View your name and email, reset your passcode, or log out."),
    ("Reset passcode", "Enter your current passcode and the app generates a replacement that is shown once."),
    ("Trial access", "Trial users see the expiry date and remaining time. Access becomes inactive when the trial expires."),
    ("Synced data", "Trades, settings, rules, reviews, and training progress are loaded from your account on any supported device."),
])]
story += [p("Good habits", "H2X"), p("Log out on shared devices. Keep your passcode private. Review your position sizing and broker specifications independently before placing a trade.", "BodyX")]
story += [Spacer(1, 12 * mm), card("You are ready", "Configure the workspace around how you trade, record consistently, and use the reviews and analytics to turn journal data into better decisions.")]

doc = SimpleDocTemplate(
    str(OUTPUT),
    pagesize=A4,
    rightMargin=20 * mm,
    leftMargin=20 * mm,
    topMargin=18 * mm,
    bottomMargin=18 * mm,
    title="TRADERS HUB User Guide",
    author="TRADERS HUB",
)
doc.build(story, onFirstPage=footer, onLaterPages=footer)
print(OUTPUT)
